// Left column: tall portrait image of a shopkeeper plus grouped "Learn GST"
// cards (Laws, Concepts, News). Internal cards route to /learn/:slug.
import LearnCard from './LearnCard.jsx';
import { learnCards } from '../data/learnCards.js';

const GROUPS = [
  { key: 'law', label: 'Laws' },
  { key: 'concept', label: 'Concepts' },
  { key: 'news', label: 'News' },
];

export default function LearnPanel() {
  let stagger = 0;

  return (
    <div className="learn-panel">
      <figure className="learn-hero">
        <img
          className="learn-hero-img"
          src="/images/welcome.webp"
          alt="A shop owner using GST Sutra on a tablet in his store"
        />
        <figcaption className="learn-hero-caption">
          Dukaan ka GST, aasan bhasha mein.
        </figcaption>
      </figure>

      <section className="learn-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading" className="learn-heading">
          Learn GST
        </h2>

        {GROUPS.map((group) => {
          const cards = learnCards.filter((card) => card.type === group.key);
          if (cards.length === 0) return null;

          return (
            <div className="learn-group" key={group.key}>
              <div className="group-label">
                <span className="group-strip" aria-hidden="true">
                  <span className="saffron" />
                  <span className="white" />
                  <span className="green" />
                </span>
                <span className="group-label-text">{group.label}</span>
              </div>
              <div className="learn-cards">
                {cards.map((card) => {
                  const index = stagger;
                  stagger += 1;
                  return (
                    <LearnCard key={card.id} card={card} index={index} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
