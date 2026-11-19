// Clickable suggested-question chips shown in the empty chat state.
export default function SuggestedQuestions({ questions, onSelect }) {
  return (
    <div className="suggested-list" role="group" aria-label="Suggested questions">
      {questions.map((question) => (
        <button
          key={question}
          type="button"
          className="suggestion-chip"
          onClick={() => onSelect(question)}
        >
          {question}
        </button>
      ))}
    </div>
  );
}
