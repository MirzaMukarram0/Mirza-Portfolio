interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML/CSS",
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
    ],
  },
  {
    title: "AI / GenAI & LLM Systems",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Prompt Engineering",
      "AI Agents",
      "LLM Integration",
      "Gemini API",
      "Scikit-learn",
      "PyTorch",
      "NLP",
    ],
  },
  {
    title: "Intelligent Document Processing",
    skills: [
      "PDF Parsing",
      "Multi-agent Orchestration",
      "Knowledge Graph Extraction",
      "Semantic Search",
      "AST Parsing",
    ],
  },
  {
    title: "Frontend & State",
    skills: [
      "React.js",
      "Next.js 15",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "React Flow",
      "Responsive Design",
    ],
  },
  {
    title: "Vector & Databases",
    skills: [
      "ChromaDB",
      "LanceDB",
      "KuzuDB",
      "MongoDB",
      "Supabase",
      "PostgreSQL",
      "IndexedDB",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD Pipelines",
      "AWS",
      "Google Cloud Run",
      "Git",
      "Socket.io",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="section newspaper-container" id="skills">
      <h2 className="section-heading">Technical Skills</h2>
      <div className="multi-column-3">
        {SKILL_CATEGORIES.map((cat, i) => (
          <p key={i} className="classifieds-text">
            <span className="classifieds-header">{cat.title}:</span>
            {cat.skills.join(" \u2022 ")}
          </p>
        ))}
      </div>
    </section>
  );
}
