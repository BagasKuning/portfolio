import ccorner from "../../img/ccorner.png";
import dashview from "../../img/dashview.png";
import drivedeal from "../../img/drivedeal.png";
import rlestate from "../../img/rlestate.png";

const independentProjects = [
  {
    number: "01",
    title: "CCORNER",
    description: "A cafe website designed to present its atmosphere, food, and drinks.",
    image: ccorner,
    link: "https://ccorner.netlify.app",
    label: "Hospitality website",
  },
  {
    number: "02",
    title: "DashView",
    description: "An interactive dashboard with charts, data tables, search, and responsive themes.",
    image: dashview,
    link: "https://dashhvieww.netlify.app",
    label: "Dashboard concept",
  },
  {
    number: "03",
    title: "DriveDeal",
    description: "A car rental search experience with vehicle listings and detailed information.",
    image: drivedeal,
    link: "https://drivedeal.netlify.app",
    label: "Rental search site",
  },
  {
    number: "04",
    title: "Rlestate",
    description: "A real estate website for browsing property listings and details.",
    image: rlestate,
    link: "https://rlestate.netlify.app",
    label: "Property listings",
  },
];

export default function Project() {
  return (
    <main className="work-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected work <span> / 2024—NOW</span></p>
        <h2>Software shaped<br />around <em>people.</em></h2>
        <p className="section-summary">Product features and independent builds, approached with the same question: what does this need to do for the person using it?</p>
      </div>

      <article className="featured-work">
        <div className="featured-topline"><span>01 — CURRENT PRODUCT</span><span>SAAS / SELLER TOOLS</span></div>
        <div className="feature-content">
          <div className="feature-title">
            <p className="eyebrow">SupportSeller · Software Engineer</p>
            <h3>Tiksender</h3>
            <p className="feature-description">A SaaS product for TikTok Shop and Shopee seller workflows, helping sellers discover, connect with, and manage creator partnerships.</p>
            <span className="feature-confidential">Company product · Details kept high level</span>
          </div>
          <div className="feature-contributions">
            <p className="eyebrow">My contribution</p>
            <ul>
              <li>Full-stack product features</li>
              <li>Browser automation and Chrome extensions</li>
              <li>Backend integrations with platform APIs</li>
              <li>Subscription and account management</li>
              <li>Database structures and migrations</li>
            </ul>
          </div>
        </div>
        <div className="feature-tags"><span>FRONTEND</span><span>BACKEND</span><span>INTEGRATIONS</span><span>PRODUCT ENGINEERING</span></div>
      </article>

      <div className="engineering-note">
        <span className="note-number">02</span>
        <div><p className="eyebrow">Engineering contributions</p><h3>One product.<br />Many layers of work.</h3></div>
        <p>My work spans browser automation, TikTok Shop API integrations, subscription flows, and the backend and data work that supports them. These are connected parts of the same product, not separate projects.</p>
      </div>

      <div className="independent-heading">
        <div><p className="eyebrow">Independent projects <span> / EARLY BUILDS</span></p><h3>Built to learn<br />by <em>making.</em></h3></div>
        <p>Before professional product work, I built these projects independently to practice turning ideas into functional applications.</p>
      </div>
      <div className="project-grid">
        {independentProjects.map((project) => (
          <a className="project-card" href={project.link} target="_blank" rel="noreferrer" key={project.title}>
            <div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><span className="project-open" aria-hidden="true">↗</span></div>
            <div className="project-meta"><span>{project.number} / {project.label}</span><span>↗</span></div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
