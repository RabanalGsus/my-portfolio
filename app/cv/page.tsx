import Section from "@/components/Section";
import Container from "@/components/Container";
export default function CVPage() {
  return (
    <main>

      <Container>
        <header>
          <h1 className="text-3xl font-bold tracking-tight">CV</h1>
          <p className="mt-3 text-zinc-400">
            Summary view + downloadable PDF.
          </p>
        </header>

        <Section title="Download">
          <p className="text-zinc-400">
            <a className="underline text-zinc-200" href="/cv.pdf">
              Download CV (PDF)
            </a>
          </p>
        </Section>

        <Section title="Overview">
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>NLP / linguistics + technology focus</li>
            <li>Experience with Transformers (BERT, T5) and evaluation</li>
            <li>Python, PyTorch, Linux, Git</li>
          </ul>
        </Section>
      </Container>
    </main>
  );
}
