// Chat panel: header + backend status, message list, typing indicator and the
// pinned input bar. Holds all chat state and talks to the backend API.
// A reset button clears the conversation; the parent is told whether an answer
// (or error) exists so it can hide the facts ticker until the chat is reset.
import { useCallback, useEffect, useRef, useState } from 'react';
import { askQuestion, checkBackend } from '../api/chatApi.js';
import ChatMessage from './ChatMessage.jsx';
import SuggestedQuestions from './SuggestedQuestions.jsx';
import QuestionInput from './QuestionInput.jsx';

const MAX_LENGTH = 500;

const SUGGESTIONS = [
  'What is the GST rate on packaged snacks?',
  'What is the composition scheme?',
];

export default function ChatPanel({ onActivityChange }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [backend, setBackend] = useState('checking');
  const listRef = useRef(null);
  const idRef = useRef(0);
  const requestRef = useRef(0);
  const mountedRef = useRef(true);

  const probeBackend = useCallback(() => {
    if (!mountedRef.current) return;
    setBackend('checking');
    checkBackend().then((ok) => {
      if (mountedRef.current) setBackend(ok ? 'online' : 'offline');
    });
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    probeBackend();

    const onOnline = () => probeBackend();
    const onOffline = () => {
      if (mountedRef.current) setBackend('offline');
    };
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      mountedRef.current = false;
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, [probeBackend]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  // Only a completed answer or an error hides the facts ticker; a pending
  // question keeps it visible while the documents are being checked.
  const hasAnswer = messages.some(
    (message) => message.type === 'bot' || message.type === 'error',
  );
  useEffect(() => {
    if (onActivityChange) onActivityChange(hasAnswer);
  }, [hasAnswer, onActivityChange]);

  const send = useCallback(
    async (question) => {
      const trimmed = question.trim();
      if (!trimmed || trimmed.length > MAX_LENGTH || loading) return;

      const requestId = requestRef.current + 1;
      requestRef.current = requestId;

      idRef.current += 1;
      setMessages((prev) => [
        ...prev,
        { id: idRef.current, type: 'user', text: trimmed },
      ]);
      setInput('');
      setLoading(true);

      try {
        const data = await askQuestion(trimmed);
        if (requestRef.current !== requestId) return;
        setBackend('online');
        idRef.current += 1;
        setMessages((prev) => [
          ...prev,
          {
            id: idRef.current,
            type: 'bot',
            text: data.answer,
            sources: data.sources,
            disclaimer: data.disclaimer,
          },
        ]);
      } catch (err) {
        if (requestRef.current !== requestId) return;
        idRef.current += 1;
        if (err.status) {
          setBackend('online');
          setMessages((prev) => [
            ...prev,
            {
              id: idRef.current,
              type: 'error',
              text: 'Something went wrong. Please try again.',
              detail: err.message,
            },
          ]);
        } else {
          setBackend('offline');
          setMessages((prev) => [
            ...prev,
            {
              id: idRef.current,
              type: 'error',
              text: 'Cannot reach GST Sutra. Check that the backend is running.',
            },
          ]);
        }
      } finally {
        if (requestRef.current === requestId) setLoading(false);
      }
    },
    [loading],
  );

  // Clears the conversation and re-probes the backend. Bumping the request id
  // makes any answer still in flight get discarded instead of appending.
  const resetChat = useCallback(() => {
    requestRef.current += 1;
    setMessages([]);
    setInput('');
    setLoading(false);
    probeBackend();
  }, [probeBackend]);

  const hasMessages = messages.length > 0;
  const lastBot = [...messages].reverse().find((m) => m.type === 'bot');
  const statusLabel =
    backend === 'online'
      ? 'Backend online'
      : backend === 'offline'
        ? 'Backend offline'
        : 'Checking backend';

  return (
    <div className="chat-panel">
      <div className="chat-header">
        <div>
          <h2 className="chat-title">Ask GST Sutra</h2>
          <p className="chat-subtitle">GST answers for your dukaan</p>
        </div>
        <div className="chat-header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={resetChat}
            aria-label="Reset chat"
            title="Reset chat"
          >
            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M3 12a9 9 0 1 0 3.2-6.9" />
              <polyline points="3 3 3 9 9 9" />
            </svg>
          </button>
          <div className={`status ${backend}`} role="status">
            <span className="status-dot" aria-hidden="true" />
            <span>{statusLabel}</span>
          </div>
        </div>
      </div>

      <div className="sr-only" aria-live="polite">
        {lastBot ? lastBot.text : ''}
      </div>

      <div className="chat-messages" ref={listRef}>
        {!hasMessages && (
          <div className="chat-welcome">
            <h3 className="welcome-title">Namaste! How can I help?</h3>
            <p className="welcome-text">
              Ask about GST rates, registration, returns or invoices. Every
              answer comes with its official sources.
            </p>
            <SuggestedQuestions questions={SUGGESTIONS} onSelect={send} />
          </div>
        )}

        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {loading && (
          <div className="typing" role="status">
            <span className="typing-dots" aria-hidden="true">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </span>
            Checking the GST documents...
          </div>
        )}
      </div>

      <QuestionInput
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onSend={() => send(input)}
        loading={loading}
      />
    </div>
  );
}
