// One chat message: user (navy bubble, right), bot (white card with saffron
// left border, markdown answer) or a friendly error. Sources and disclaimer
// sit under bot answers.
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SourceChips from './SourceChips.jsx';

export default function ChatMessage({ message }) {
  if (message.type === 'user') {
    return (
      <div className="message-row user">
        <div className="bubble">{message.text}</div>
      </div>
    );
  }

  if (message.type === 'error') {
    return (
      <div className="message-row bot error">
        <div className="bubble">
          <p className="error-text">{message.text}</p>
          {message.detail ? <p className="error-detail">{message.detail}</p> : null}
        </div>
      </div>
    );
  }

  return (
    <div className="message-row bot">
      <div className="bubble">
        <div className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer" />
              ),
            }}
          >
            {message.text || ''}
          </ReactMarkdown>
        </div>
      </div>
      <div className="message-extras">
        <SourceChips sources={message.sources} />
        {message.disclaimer ? (
          <p className="disclaimer">{message.disclaimer}</p>
        ) : null}
      </div>
    </div>
  );
}
