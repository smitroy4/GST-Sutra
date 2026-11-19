// Renders a bot answer's sources as small chips. Only the human-readable
// heading (falling back to the title) is shown — internal document file names
// such as "gst-rates.md" are deliberately hidden from the UI. Empty fields are
// skipped, and a source with a URL links to it in a new tab.
export default function SourceChips({ sources }) {
  if (!Array.isArray(sources)) return null;

  const visible = sources.filter(
    (source) => source && (source.heading || source.title),
  );
  if (visible.length === 0) return null;

  return (
    <div className="source-chips" aria-label="Sources">
      {visible.map((source, index) => {
        const label = source.heading || source.title;
        return source.url ? (
          <a
            className="source-chip"
            key={index}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ) : (
          <span className="source-chip" key={index}>
            {label}
          </span>
        );
      })}
    </div>
  );
}
