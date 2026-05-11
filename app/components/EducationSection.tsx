import Image from "next/image";

export default function EducationSection() {
  return (
    <section className="section newspaper-container" id="education">
      <h2 className="section-heading">Education</h2>
      <div className="grid-50-50">
        <div>
          <Image
            src="/fast-logo.png"
            alt="FAST-NUCES Logo"
            width={300}
            height={300}
            className="education-image"
          />
        </div>
        <div>
          <h3 className="item-heading">
            Bachelor of Science in Software Engineering — FAST-NUCES, Islamabad
          </h3>
          <p className="date-label">2022 – 2026</p>
          <p className="body-text">
            Pursuing a rigorous four-year degree at the National University of
            Computer and Emerging Sciences (FAST-NUCES), Islamabad — one of
            Pakistan&apos;s premier institutions for computing and engineering education.
          </p>
          <p className="body-text">
            <strong>Relevant Coursework: </strong> Applied AI, Generative AI,
            Data Structures, Database Systems, Web Engineering, Software Quality
            Assurance, Software Design &amp; Analysis, Software Construction,
            Cloud Computing, DevOps.
          </p>
        </div>
      </div>
    </section>
  );
}
