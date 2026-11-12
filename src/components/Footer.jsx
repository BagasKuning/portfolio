export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <p className="eyebrow">Have a product problem to solve?</p>
      <div className="footer-main">
        <h2>Let’s make<br /><em>it work.</em></h2>
        <a className="footer-email" href="mailto:dwibagaskara55@gmail.com">dwibagaskara55@gmail.com <span>↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Dwi Bagaskara · Medan, Indonesia</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/dwi-bagaskara-181148264/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/BagasKuning/" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="/Dwi_Bagaskara-CV.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
        </div>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
