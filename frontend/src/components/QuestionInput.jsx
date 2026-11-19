// Input bar pinned to the bottom of the chat. Live character count, Enter to
// send, and sending disabled when empty, over 500 characters, or loading.
const MAX_LENGTH = 500;

export default function QuestionInput({ value, onChange, onSend, loading }) {
  const overLimit = value.length > MAX_LENGTH;
  const disabled = loading || overLimit || value.trim().length === 0;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!disabled) onSend();
    }
  };

  return (
    <div className="chat-input-bar">
      <div className="chat-input-inner">
        <input
          className="chat-input-field"
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask a GST question..."
          aria-label="GST question input"
          autoComplete="off"
        />
        <span
          className={`char-count${overLimit ? ' over' : ''}`}
          aria-hidden="true"
        >
          {value.length} / {MAX_LENGTH}
        </span>
        <button
          type="button"
          className="send-btn"
          onClick={onSend}
          disabled={disabled}
          aria-label="Send question"
        >
          <span className="send-label">Send</span>
          <span className="arrow" aria-hidden="true">
            &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
