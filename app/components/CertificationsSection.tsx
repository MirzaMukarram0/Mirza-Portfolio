export default function CertificationsSection() {
  return (
    <section className="section newspaper-container" id="certifications">
      <h2 className="section-heading">Certifications</h2>

      <div className="multi-column-3">
        <article className="certification-entry stagger-item" style={{ animationDelay: "0ms" }}>
        <h3 className="certification-entry__title">
          OCI 2025 Generative AI Professional
        </h3>
        <p className="certification-entry__issuer">
          Oracle Cloud Infrastructure
        </p>
        <p className="body-text">
          Validated expertise in designing and deploying enterprise-grade GenAI
          applications, covering LLM architecture, RAG pipeline design, vector
          database integration, and production prompt engineering strategies.
        </p>
      </article>

      <article className="certification-entry stagger-item" style={{ animationDelay: "60ms" }}>
        <h3 className="certification-entry__title">
          Google Machine Learning Crash Course
        </h3>
        <p className="certification-entry__issuer">
          Google Developer Program
        </p>
        <p className="body-text">
          Applied foundation in production ML systems, including neural network
          design, embedding models, model evaluation pipelines, and deploying
          scalable ML solutions.
        </p>
      </article>

      <article className="certification-entry stagger-item" style={{ animationDelay: "120ms" }}>
        <h3 className="certification-entry__title">
          AWS Cloud Quest: Cloud Practitioner
        </h3>
        <p className="certification-entry__issuer">Amazon Web Services</p>
        <p className="body-text">
          Hands-on cloud fundamentals covering core AWS services, cloud
          architecture best practices, security, and cost optimization in
          real-world scenario-based challenges.
        </p>
        </article>
      </div>
    </section>
  );
}

