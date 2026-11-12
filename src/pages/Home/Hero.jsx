import portrait from "../../img/me2.jpg";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="site-nav">
        <a className="wordmark" href="#top" aria-label="Dwi Bagaskara, home">DB<span>®</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a className="nav-resume" href="/Dwi_Bagaskara-CV.pdf" target="_blank" rel="noreferrer">Resume <span>↗</span></a>
        </nav>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Product-minded full-stack developer <span className="eyebrow-location">— Medan, Indonesia</span></p>
          <h1>I build software<br />for <em>real work.</em></h1>
          <div className="hero-bottom">
            <p className="hero-intro">I turn product needs into working features, from the interface to the database and the integrations in between.</p>
            <a className="text-link" href="#work">Explore selected work <span>↓</span></a>
          </div>
        </div>

        <figure className="portrait-frame">
          <img src={portrait} alt="Portrait of Dwi Bagaskara" />
          <figcaption><span>01 / 04</span><span>Independent by nature<br />Product focused by practice</span></figcaption>
        </figure>
      </div>
      <div className="hero-index"><span>Portfolio / 2026</span><span>Scroll to explore <b>↓</b></span></div>
    </header>
  );
}
