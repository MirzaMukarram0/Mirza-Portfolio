import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section newspaper-container" id="about">
      <div className="grid-50-50">
        <div>
          <p className="hook-text">
            &ldquo;Software Engineer specializing in web-based AI solutions,
            building production-ready applications that bridge LLM pipelines,
            RAG architectures, and full-stack development.&rdquo;
          </p>
          <div className="multi-column">
            <p className="body-text drop-cap">
              <strong>ISLAMABAD — </strong>Software Engineer with a track record of building and shipping
              production-ready web applications that integrate LLM pipelines, RAG
              architectures, and AI agents. Proficient in Python, MERN, Next.js,
              Flask, and LangChain, with hands-on experience integrating REST
              APIs, vector databases, and cloud infrastructure into web
              applications.
            </p>
            <p className="body-text">
              Holds OCI 2025 Generative AI Professional certification covering
              enterprise RAG deployment, vector databases, and prompt engineering.
              Proven ability to architect secure, scalable systems — from real-time
              Socket.io platforms to cloud-deployed multi-service applications —
              with clean, maintainable code and strong API design. Passionate about
              digital innovation and applying AI-first thinking to real-world
              challenges.
            </p>
          </div>
        </div>
        <div>
          <figure>
            <div className="newspaper-photo-wrap">
              <Image
                src="/Smiling_Photo.png"
                alt="Mirza Mukarram — Software Engineer"
                width={450}
                height={560}
                className="hero-photo newspaper-photo"
                priority
              />
            </div>
            <figcaption>Fig. 1 — Mirza Mukarram, Software Engineer, Islamabad</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
