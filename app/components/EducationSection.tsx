import Image from "next/image";

export default function EducationSection() {
  return (
    <section className="section newspaper-container" id="education">
      <h2 className="section-heading">Education</h2>

      <div className="grid-50-50" style={{ alignItems: 'center' }}>
        {/* Crest */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
          <p className="label-text">2022 — 2026</p>
          <h3 className="item-heading" style={{ fontSize: 'var(--text-xl)', marginBottom: '0.5rem' }}>
            Bachelor of Science in Software Engineering
          </h3>
          <p className="label-text" style={{ marginBottom: '1rem', color: 'var(--ink)' }}>FAST-NUCES, Islamabad</p>
          <p className="body-text">
            Pursuing a rigorous four-year degree at the National University of
            Computer and Emerging Sciences (FAST-NUCES), Islamabad — one of
            Pakistan&apos;s premier institutions for computing and engineering education.
          </p>
          <p className="body-text" style={{ marginTop: '1rem' }}>
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
