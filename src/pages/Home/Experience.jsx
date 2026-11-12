const roles = [
  {
    dates: "NOV 2024 — NOW",
    role: "Software Engineer",
    company: "SupportSeller",
    description: "Developing and maintaining production SaaS features across frontend and backend, including browser automation, platform integrations, account management, and application data.",
    current: true,
  },
  {
    dates: "FEB 2024 — APR 2024",
    role: "Software Development Intern",
    company: "PT. Metaversal Teknologi Digital",
    description: "Professional internship experience in software development.",
  },
  {
    dates: "NOV 2023 — FEB 2024",
    role: "Software Development Intern",
    company: "Nino911",
    description: "Professional internship experience in software development.",
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-intro"><p className="eyebrow">Experience <span> / 04</span></p><h2>Learning through<br /><em>real products.</em></h2></div>
      <div className="experience-list">
        {roles.map((item, index) => (
          <article className="experience-row" key={item.company}>
            <span className="experience-number">0{index + 1}</span>
            <div className="experience-details">
              <p className="experience-date">{item.dates}{item.current && <span className="current-label">CURRENT</span>}</p>
              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
              <p className="experience-description">{item.description}</p>
            </div>
            <span className="experience-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
