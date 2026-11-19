// Site header: navy banner with a faint rotating Ashoka Chakra, the logo,
// title/tagline and an unofficial-demo badge, plus a 4px tricolor strip.
export default function Header() {
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 15 * Math.PI) / 180;
    return {
      x1: 100 + 12 * Math.cos(angle),
      y1: 100 + 12 * Math.sin(angle),
      x2: 100 + 88 * Math.cos(angle),
      y2: 100 + 88 * Math.sin(angle),
    };
  });

  return (
    <header className="site-header" role="banner">
      <svg
        className="header-chakra"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="100" cy="100" r="88" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <circle cx="100" cy="100" r="14" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        {spokes.map((s, i) => (
          <line
            key={i}
            x1={s.x1}
            y1={s.y1}
            x2={s.x2}
            y2={s.y2}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="2"
          />
        ))}
      </svg>

      <div className="header-container">
        <div className="header-brand">
          <img
            className="header-logo"
            src="/images/logo.svg"
            alt="GST Sutra logo"
            width="52"
            height="52"
          />
          <div>
            <h1 className="header-title">GST Sutra</h1>
            <p className="header-tagline">Dukaan ka GST, aasan bhasha mein.</p>
          </div>
        </div>
        <span className="header-badge">
          Unofficial demo. Not affiliated with the Government of India.
        </span>
      </div>

      <div className="tricolor-strip" aria-hidden="true">
        <span className="saffron" />
        <span className="white" />
        <span className="green" />
      </div>
    </header>
  );
}
