import Image from "next/image";

interface Project {
  title: string;
  tech: string;
  github: string;
  liveLink?: string;
  image: string;
  description: string[];
}

const PROJECTS: Project[] = [
  {
    title: "GATeR — Graph-Aware Test Repair",
    tech: "Python, Next.js, Flask, KuzuDB, LanceDB, LangChain, GraphRAG",
    github: "https://github.com/MirzaMukarram0",
    image: "/projects/gater2.png",
    description: [
      "Designed a research-driven automated test repair system leveraging knowledge graphs, semantic vector search, and LLM-based RAG pipelines, demonstrating agent framework design and real-world LLM pipeline architecture.",
      "Integrated AST parsing, KGCompass relevance scoring, KuzuDB, and LanceDB vector retrieval to generate context-aware fixes, improving test maintenance efficiency across large codebases.",
    ],
  },
  {
    title: "Intelligent Research Canvas",
    tech: "Next.js 15, TypeScript, Tailwind v4, React Flow, Gemini 2.5 Flash",
    github: "https://github.com/MirzaMukarram0",
    liveLink: "#",
    image: "/projects/research-canvas.png",
    description: [
      "Architected a multi-agent document intelligence platform deployed on Google Cloud Run; orchestrated 4 specialized LLM agents — Graph Extractor, Insight Analyzer, Context Chat (streaming RAG), and LaTeX Formatter — transforming raw PDFs into structured, queryable knowledge graphs end-to-end.",
      "Engineered a full-stack TypeScript/Next.js frontend with React Flow visualization and Zustand state management, integrating Gemini 2.5 Flash for real-time multi-document reasoning with typed nodes and confidence-scored insights.",
    ],
  },
  {
    title: "Resilience Coach Agent",
    tech: "Python, LangGraph, Gemini API, ChromaDB, Flask, React.js",
    github: "https://github.com/MirzaMukarram0",
    liveLink: "#",
    image: "/projects/resilience-coach.png",
    description: [
      "Built a full-stack stateful AI agent using LangGraph for multi-step reasoning and Gemini API for emotional sentiment analysis; served through a Flask REST API with full React.js web interface.",
      "Architected a RAG pipeline with ChromaDB for long-term conversational memory, demonstrating end-to-end conversational agent development aligned with production GenAI system design.",
    ],
  },
  {
    title: "AI Voice Agent",
    tech: "Python, React.js, Whisper-STT, Coqui-TTS, Gemini LLM",
    github: "https://github.com/MirzaMukarram0",
    image: "/projects/voice-agent.png",
    description: [
      "Engineered a full-stack voice-to-voice AI agent: Whisper STT → Gemini LLM reasoning → Coqui TTS output, demonstrating multi-modal LLM integration with a clean Python back-end and React.js frontend.",
    ],
  },
  {
    title: "Business Nexus — Entrepreneur-Investor Platform",
    tech: "MERN, Socket.io, JWT, MongoDB, REST API",
    github: "https://github.com/MirzaMukarram0",
    image: "/projects/business-nexus.png",
    description: [
      "Architected a full-stack MERN networking platform from database schema to deployed frontend; engineered real-time bi-directional messaging with Socket.io, role-based JWT authentication, and a RESTful Express.js API with modular route and middleware structure.",
      "Designed a scalable MongoDB schema supporting dynamic user profiles, connection requests, and activity feeds; integrated input validation, error-handling middleware, and environment-based config management for production readiness.",
    ],
  },
  {
    title: "CryptShare-E2E — Secure Messaging Platform",
    tech: "MERN, Socket.io, Web Crypto API, IndexedDB",
    github: "https://github.com/MirzaMukarram0",
    image: "/projects/cryptshare.png",
    description: [
      "Engineered a security-focused MERN web application implementing Zero-Knowledge Architecture — all cryptographic operations (AES-GCM encryption, ECDH key exchange) execute entirely in-browser via the Web Crypto API, ensuring the server never handles plaintext data.",
      "Integrated Socket.io for real-time encrypted message delivery with IndexedDB for client-side key persistence; implemented forward-secrecy key rotation and structured the codebase around separation of crypto, transport, and storage concerns.",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section className="section newspaper-container" id="projects">
      <h2 className="section-heading">Technical Projects</h2>

      {PROJECTS.map((project, i) => (
        <article
          className="project-card stagger-item"
          key={i}
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <div className="grid-50-50">
            <div>
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={450}
                height={280}
                className="project-card__image"
              />
              <p className="image-caption">Fig. {i + 1} — {project.title}</p>
            </div>
            <div>
              <h3 className="item-heading">
                {project.title}
              </h3>
              <p className="date-label" style={{ fontWeight: 400 }}>
                {project.tech}
              </p>
              <p style={{ marginBottom: "0.75rem" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  GitHub ↗
                </a>
                {project.liveLink && (
                  <>
                    {" · "}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                    >
                      Live Demo ↗
                    </a>
                  </>
                )}
              </p>
              <div className="multi-column">
                {project.description.map((desc, j) => (
                  <p className={j === 0 ? "body-text drop-cap" : "body-text"} key={j}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
