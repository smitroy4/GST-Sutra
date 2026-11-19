// The /learn/:slug page. Shows the title, a short explanation and a
// "Back to chat" button. Unknown slugs show a friendly not-found message.
import { Link, useParams } from 'react-router-dom';
import { learnContent } from '../data/learnContent.js';

const TYPE_LABEL = { law: 'Law', concept: 'Concept', news: 'News' };

export default function LearnPage() {
  const { slug } = useParams();
  const page = learnContent[slug];

  return (
    <main className="learn-page-wrap">
      <article className="learn-page">
        <Link to="/" className="back-link">
          <span aria-hidden="true">←</span> Back to chat
        </Link>

        {page ? (
          <>
            <span className="learn-page-type">
              {TYPE_LABEL[page.type] || page.type}
            </span>
            <h1 className="learn-page-title">{page.title}</h1>
            <p className="learn-page-summary">{page.summary}</p>
            {page.paragraphs.map((paragraph, index) => (
              <p className="learn-page-body" key={index}>
                {paragraph}
              </p>
            ))}
            {page.sourceUrl ? (
              <p className="learn-page-source">
                Official source:{' '}
                <a
                  href={page.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {page.sourceUrl}
                </a>
              </p>
            ) : null}
            <Link to="/" className="back-button">
              Back to chat
            </Link>
          </>
        ) : (
          <>
            <h1 className="learn-page-title">Topic not found</h1>
            <p className="learn-page-body">
              We could not find that topic. Return to the chat to continue.
            </p>
            <Link to="/" className="back-button">
              Back to chat
            </Link>
          </>
        )}
      </article>
    </main>
  );
}
