import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Container from "@/components/Container";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      <Container>
        <header>
          <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-10 shadow-sm">
            <h1 className="text-4xl font-bold tracking-tight text-[rgb(var(--text))]">
              Jesús Rabanal Álvarez
            </h1>

            <p className="mt-3 text-[rgb(var(--muted))]">
              NLP · Linguistics &amp; Attention · Researcher
            </p>

            <p className="mt-6 leading-relaxed text-[rgb(var(--muted))]">
              I work at the intersection of linguistics, natural language processing,
              and software development. My interests include neural language models,
              natural cognitive processes, and practical ML systems for language data.
            </p>
          
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                className="underline decoration-[rgb(var(--accent))] underline-offset-4 text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors"
                href="https://github.com/RabanalGsus"
              >
                GitHub
              </a>
              <a
                className="underline decoration-[rgb(var(--accent))] underline-offset-4 text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors"
                href="https://www.linkedin.com/in/jesus-rabanal-alvarez/"
              >
                LinkedIn
              </a>
              <a
                className="underline decoration-[rgb(var(--accent))] underline-offset-4 text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors"
                href="mailto:jesusrabanal@hotmail.com"
              >
                Email
              </a>
              <a
                className="underline decoration-[rgb(var(--accent))] underline-offset-4 text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors"
                href="/cv.pdf"
              >
                CV (PDF)
              </a>
            </div>
          </div>
        </header>

        <Section title="Currently">
          <ul className="list-disc pl-5 space-y-2 text-[rgb(var(--muted))]">
            <li>MSc-level coursework in NLP, ML and Cognitive Science</li>
            <li>
              Research-oriented projects involving Linguistics, Cognitive Science, and
              Computational Modeling.
            </li>
            <li>
              Building and evaluating language models for low-resource and structured
              tasks.
            </li>
          </ul>
        </Section>

        <Section title="Selected work">
          <div className="grid gap-4">
            {featured.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                tech={p.tech}
                href={p.links?.find((l) => l.label === "GitHub")?.href}
              />
            ))}
          </div>

          <div className="mt-5 text-sm">
            <a
              className="underline decoration-[rgb(var(--accent))] underline-offset-4 text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors"
              href="/projects"
            >
              View all projects →
            </a>
          </div>
        </Section>

        <footer className="mt-14 text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} Jesús Rabanal Álvarez
        </footer>
      </Container>
    </main>
  );
}
