const capabilities = [
  {
    number: "01",
    title: "Frontend",
    items: "React · Vue.js · Nuxt 3 · React Native · Tailwind CSS",
  },
  {
    number: "02",
    title: "Backend & data",
    items: "Node.js · Express.js · REST APIs · Prisma · PostgreSQL · Redis",
  },
  {
    number: "03",
    title: "Automation & integrations",
    items: "Chrome Extensions · Browser APIs · Puppeteer · Third-party APIs",
  },
  {
    number: "04",
    title: "Languages & tools",
    items: "JavaScript · TypeScript · SQL · Git · Docker · Linux · Vite",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-lead">
        <p className="eyebrow">
          A little about me <span> / 03</span>
        </p>
        <h2>
          Engineering with
          <br />
          the <em>whole product</em>
          <br />
          in mind.
        </h2>
      </div>
      <div className="about-copy">
        <p className="about-main">
          I’m Dwi Bagaskara, a full-stack developer based in Medan, Indonesia.
        </p>
        <p>
          I enjoy understanding how a product works, finding the practical
          problem to solve, and carrying a feature from its first requirement
          through implementation and production. My day-to-day work crosses
          frontend, backend, databases, and integrations.
        </p>
        <p>
          I value clear, maintainable solutions that fit the product need. I’m
          continuing to deepen my engineering fundamentals while building useful
          software with a team.
        </p>
        <a
          className="text-link"
          href="/cv_dwi-bagaskara.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Read my resume <span>↗</span>
        </a>
      </div>
      <div className="capability-list">
        <div className="capability-heading">
          <span>Working toolkit</span>
          <span>Practical experience across</span>
        </div>
        {capabilities.map((item) => (
          <div className="capability-row" key={item.number}>
            <span className="cap-number">{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.items}</p>
          </div>
        ))}
        <p className="capability-footnote">
          A snapshot of tools I’ve worked with; depth varies by technology and
          project.
        </p>
      </div>
    </section>
  );
}
