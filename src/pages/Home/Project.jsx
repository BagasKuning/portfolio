import Reveal from "../../components/Reveal";

const independentProjects = [
  {
    number: "01",
    title: "CCORNER",
    description:
      "A cafe website designed to present its atmosphere, food, and drinks.",
    visual: "cafe",
    link: "https://ccorner.netlify.app",
    label: "Hospitality website",
  },
  {
    number: "02",
    title: "DashView",
    description:
      "An interactive dashboard with charts, data tables, search, and responsive themes.",
    visual: "dashboard",
    link: "https://dashhvieww.netlify.app",
    label: "Dashboard concept",
  },
  {
    number: "03",
    title: "DriveDeal",
    description:
      "A car rental search experience with vehicle listings and detailed information.",
    visual: "drive",
    link: "https://drivedeal.netlify.app",
    label: "Rental search site",
  },
  {
    number: "04",
    title: "Rlestate",
    description:
      "A real estate website for browsing property listings and details.",
    visual: "estate",
    link: "https://rlestate.netlify.app",
    label: "Property listings",
  },
];

export default function Project() {
  return (
    <main className="work-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">
          Selected work <span> / 2024—NOW</span>
        </p>
        <h2>
          Software shaped
          <br />
          around <em>people.</em>
        </h2>
        <p className="section-summary">
          Product features and independent builds, approached with the same
          question: what does this need to do for the person using it?
        </p>
      </div>

      <article className="featured-work">
        <div className="featured-topline">
          <span>01 — CURRENT PRODUCT</span>
          <span>SAAS / SELLER TOOLS</span>
        </div>
        <div className="feature-content">
          <div className="feature-title">
            <p className="eyebrow">SupportSeller · Software Engineer</p>
            <h3>Tiksender</h3>
            <p className="feature-description">
              A SaaS product for TikTok Shop and Shopee seller workflows,
              helping sellers discover, connect with, and manage creator
              partnerships.
            </p>
            <span className="feature-confidential">
              Company product · Details kept high level
            </span>
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
        <div className="feature-tags">
          <span>FRONTEND</span>
          <span>BACKEND</span>
          <span>INTEGRATIONS</span>
          <span>PRODUCT ENGINEERING</span>
        </div>
      </article>

      <div className="engineering-note">
        <span className="note-number">02</span>
        <div>
          <p className="eyebrow">Technical curiosity</p>
          <h3>
            Always exploring
            <br />
            how things work.
          </h3>
        </div>
        <p>
          From understanding unfamiliar systems to navigating technical
          constraints, I enjoy exploring different areas of engineering and
          turning what I learn into practical implementations.
        </p>
      </div>

      <div className="independent-heading">
        <div>
          <p className="eyebrow">
            Independent projects <span> / EARLY BUILDS</span>
          </p>
          <h3>
            Built to learn
            <br />
            by <em>making.</em>
          </h3>
        </div>
        <p>
          Before professional product work, I built these projects independently
          to practice turning ideas into functional applications.
        </p>
      </div>
      <div className="project-grid">
        {independentProjects.map((project) => (
          <Reveal
            className="project-card"
            delay={(Number(project.number) - 1) * 90}
            key={project.title}
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="project-image">
                <ProjectVisual type={project.visual} title={project.title} />
                <span className="project-open" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="project-meta">
                <span>
                  {project.number} / {project.label}
                </span>
                <span>↗</span>
              </div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </main>
  );
}

function ProjectVisual({ type, title }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-topline">
        <span>{title}</span>
        <span>INDEPENDENT / 2024</span>
      </div>
      {type === "cafe" && (
        <div className="cafe-layout">
          <span className="cafe-mark">C.</span>
          <div>
            <small>GOOD FOOD, GOOD COMPANY</small>
            <b>
              A slower
              <br />
              kind of day.
            </b>
            <i>MENU &nbsp; ↗</i>
          </div>
          <span className="cafe-disc" />
        </div>
      )}
      {type === "dashboard" && (
        <div className="dash-layout">
          <aside>
            <i>▦</i>
            <i>◷</i>
            <i>◌</i>
          </aside>
          <div className="dash-main">
            <small>OVERVIEW / THIS MONTH</small>
            <b>Activity</b>
            <div className="dash-chart">
              {[36, 58, 44, 78, 54, 91, 67, 82, 48, 70, 96, 62].map(
                (height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ),
              )}
            </div>
            <div className="dash-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      )}
      {type === "drive" && (
        <div className="drive-layout">
          <small>FIND YOUR WAY</small>
          <b>
            Take the
            <br />
            <em>long way.</em>
          </b>
          <div className="drive-car">
            <span />
            <i />
            <i />
          </div>
          <div className="drive-spec">
            <span>01 / CITY</span>
            <span>02 / WEEKEND</span>
            <span>03 / ESCAPE</span>
          </div>
        </div>
      )}
      {type === "estate" && (
        <div className="estate-layout">
          <div className="estate-copy">
            <small>SPACES TO LIVE</small>
            <b>
              Room to
              <br />
              be <em>here.</em>
            </b>
            <span>VIEW COLLECTION ↗</span>
          </div>
          <div className="estate-building">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
    </div>
  );
}
