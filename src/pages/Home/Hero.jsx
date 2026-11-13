export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-wipe" aria-hidden="true" />
      <div className="site-nav">
        <a className="wordmark" href="#top" aria-label="Dwi Bagaskara, home">
          <img src="/favicon.svg" alt="" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a
            className="nav-resume"
            href="/cv_dwi-bagaskara.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <span>↗</span>
          </a>
        </nav>
      </div>

      <div className="hero-grid">
        <div className="hero-copy hero-enter">
          <p className="eyebrow">
            <span className="status-dot" /> Full-stack developer{" "}
            <span className="eyebrow-location">— Medan, Indonesia</span>
          </p>
          <h1>
            I build software
            <br />
            for <em>real work.</em>
          </h1>
          <div className="hero-bottom">
            <p className="hero-intro">
              I turn product needs into working features, from the interface to
              the database and the integrations in between.
            </p>
            {/* <a className="text-link" href="#work">
              Explore selected work <span>↓</span>
            </a> */}
          </div>
        </div>

        <div className="hero-art hero-enter hero-enter-late" aria-hidden="true">
          <span className="hero-art-index">BK / 01</span>
          <span className="hero-art-ring" />
          <span className="hero-art-cross">+</span>
          <span className="hero-art-caption">
            Ideas into
            <br />
            working software
          </span>
        </div>
      </div>
      <div className="hero-index hero-enter hero-enter-later">
        <span>Portfolio / 2026</span>
        <span>
          <a className="explore-link" href="#work">
            Explore selected work <span className="relative -top-1">↓</span>
          </a>
        </span>
      </div>
    </header>
  );
}
