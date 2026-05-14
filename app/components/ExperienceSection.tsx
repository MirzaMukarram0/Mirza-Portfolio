export default function ExperienceSection() {
  return (
    <section className="section newspaper-container" id="experience">
      <h2 className="section-heading">Professional Experience</h2>

      {/* Internship 1: Machine Learning */}
      <article className="experience-entry stagger-item" style={{ animationDelay: "0ms" }}>
        <div className="experience-entry__header">
          <h3 className="item-heading">
            Machine Learning Intern — Elevvo Pathways
          </h3>
          <span className="date-label">Jul 2025 – Sep 2025</span>
        </div>
        <div className="multi-column">
          <p className="body-text drop-cap">
            Engineered predictive ML models using Scikit-learn and Python to automate AI-driven question generation and student scoring pipelines, achieving 92% accuracy. Reduced LLM output error rates by 15% through systematic prompt validation, input sanitization, and iterative testing cycles, reinforcing production stability across integrated AI services. Built a Flask and React.js Movie Recommendation System with a REST API backend serving personalized content.
          </p>
        </div>
      </article>

      {/* Internship 2: Full Stack */}
      <article className="experience-entry stagger-item" style={{ animationDelay: "60ms" }}>
        <div className="experience-entry__header">
          <h3 className="item-heading">
            Full Stack Development Intern — Developers Hub Corporation
          </h3>
          <span className="date-label">Jun 2025 – Aug 2025</span>
        </div>
        <div className="multi-column">
          <p className="body-text drop-cap">
            Delivered two production-ready MERN stack applications within a six-week sprint, achieving 100% requirement fulfillment and seamless cloud deployment. Served as the sole developer on Business Nexus, an entrepreneur-investor platform featuring real-time communication via Socket.io, JWT-secured auth flows, and MongoDB for scalable data persistence. Translated Figma wireframes into pixel-accurate, responsive React.js components while coordinating API contracts cross-functionally with backend engineers.
          </p>
        </div>
      </article>
    </section>
  );
}
