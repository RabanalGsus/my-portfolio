import Section from "@/components/Section";
import Container from "@/components/Container";

export default function CVPage() {
  return (
    <main>
      <Container>
        <header>
          <p className="text-xs font-semibold tracking-widest text-[rgb(var(--muted))]">
            CV
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--text))] sm:text-4xl">
            Curriculum vitae
          </h1>

          <p className="mt-4 max-w-2xl leading-relaxed text-[rgb(var(--muted))]">
            Summary view and downloadable PDF.
          </p>
        </header>

        <Section title="Download">
          <div className="mt-4">
            <a
              href="/cv.pdf"
              className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--accent))] bg-[rgb(var(--accent))]/30 px-5 py-2 text-sm font-semibold text-[rgb(var(--text))] shadow-sm transition hover:-translate-y-0.5 hover:bg-[rgb(var(--accent))]/45 hover:shadow-md"
            >
              Download CV (PDF)
              <span className="ml-2">↓</span>
            </a>
          </div>
        </Section>

        <Section title="Overview">
          <ul className="list-disc space-y-2 pl-5 text-[rgb(var(--muted))]">
            <li>NLP / linguistics + technology focus</li>
            <li>Experience with Transformers (BERT, T5) and evaluation</li>
            <li>Python, PyTorch, Linux, Git</li>
          </ul>
        </Section>
      </Container>
    </main>
  );
}