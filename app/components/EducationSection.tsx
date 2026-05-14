import Image from "next/image";

export default function EducationSection() {
  return (
    <section className="section newspaper-container" id="education">
      <h2 className="section-heading">Education</h2>

      <div className="grid-50-50" style={{ alignItems: 'center' }}>
        {/* Crest */}
        <div className="stagger-item" style={{ display: 'flex', justifyContent: 'center', animationDelay: "0ms" }}>
          <Image
            src="/fast-logo.png"
            alt="FAST-NUCES Logo"
            width={200}
            height={200}
            className="education-image"
          />
        </div>

        {/* Details */}
        <div>
          <p className="label-text stagger-item" style={{ animationDelay: "0ms", marginBottom: "0.5rem" }}>
            2022 — 2026
          </p>
          <h3 className="item-heading stagger-item" style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem', animationDelay: "100ms" }}>
            Bachelor of Science in Software Engineering
          </h3>
          <p className="label-text stagger-item" style={{ marginBottom: '1rem', color: 'var(--ink)', animationDelay: "200ms" }}>FAST-NUCES, Islamabad</p>
          <p className="body-text stagger-item" style={{ animationDelay: "300ms" }}>
            Pursuing a rigorous four-year degree at the National University of
            Computer and Emerging Sciences (FAST-NUCES), Islamabad — one of
            Pakistan&apos;s premier institutions for computing and engineering education.
          </p>
          <p className="body-text stagger-item" style={{ marginTop: '1rem', animationDelay: "400ms" }}>
            <strong>Relevant Coursework:</strong> Applied AI, Generative AI,
            Data Structures, Database Systems, Web Engineering, Software Quality
            Assurance, Software Design &amp; Analysis, Software Construction,
            Cloud Computing, DevOps.
          </p>
        </div>
      </div>
    </section>
  );
}
