// Slim facts strip for the top of the chat column. Rotates every 10 seconds
// with a fade and slight slide, pauses on hover/focus, and clears timers.
import { useEffect, useRef, useState } from 'react';
import { gstFacts } from '../data/gstFacts.js';

const ROTATE_MS = 10000;
const FADE_MS = 400;

export default function FactsTicker() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const intervalRef = useRef(null);
  const fadeRef = useRef(null);

  const fact = gstFacts[index % gstFacts.length];

  const advance = () => {
    setLeaving(true);
    fadeRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % gstFacts.length);
      setLeaving(false);
    }, FADE_MS);
  };

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (fadeRef.current) clearTimeout(fadeRef.current);
    intervalRef.current = null;
    fadeRef.current = null;
  };

  useEffect(() => {
    intervalRef.current = setInterval(advance, ROTATE_MS);
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pause = () => clearTimers();
  const resume = () => {
    clearTimers();
    setLeaving(false);
    intervalRef.current = setInterval(advance, ROTATE_MS);
  };

  return (
    <section
      className="fact-ticker"
      aria-label="GST fact"
      tabIndex={0}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <p className="fact-ticker-label">GST fact</p>
      <div className={`fact-motion${leaving ? ' is-leaving' : ''}`} aria-live="polite">
        <p className="fact-text">{fact.text}</p>
        <p className="fact-source">Source: {fact.source}</p>
      </div>
    </section>
  );
}
