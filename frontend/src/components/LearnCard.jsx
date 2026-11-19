// A single Learn card. Law and concept cards route internally; news cards
// open an official source in a new tab. Whole card is the "Read more" link.
import { Link } from 'react-router-dom';

const TYPE_LABEL = { law: 'Law', concept: 'Concept', news: 'News' };

export default function LearnCard({ card, index }) {
  const isExternal = card.type === 'news';
  const style = { '--delay': `${index * 80}ms` };

  const body = (
    <>
      <span className="learn-card-type">{TYPE_LABEL[card.type] || card.type}</span>
      <h3 className="learn-card-title">{card.title}</h3>
      <p className="learn-card-summary">{card.summary}</p>
      <div className="learn-card-footer">
        <span className="learn-card-meta">
          {card.source}
          {card.date ? ` · ${card.date}` : ''}
        </span>
        <span className="read-more">
          Read more <span className="arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        className="learn-card"
        style={style}
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return (
    <Link className="learn-card" style={style} to={card.href}>
      {body}
    </Link>
  );
}
