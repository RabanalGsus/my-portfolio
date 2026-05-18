import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Container from "@/components/Container";

function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--accent))] bg-[rgb(var(--accent))]/30 px-6 py-2.5 text-sm font-semibold text-[rgb(var(--text))] shadow-sm transition hover:-translate-y-0.5 hover:bg-[rgb(var(--accent))]/45 hover:shadow-md"
    >
      {children}
      <span className="ml-2">↓</span>
    </a>
  );
}

function SecondaryLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 px-3 py-1.5 text-sm text-[rgb(var(--text))] shadow-sm transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent))]"
    >
      {children}
      <span className="ml-1 text-[rgb(var(--muted))]">↗</span>
    </a>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      <Container>
        <header>
          <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-8 shadow-sm sm:p-10">
            <h1 className="text-4xl font-bold tracking-tight text-[rgb(var(--text))] sm:text-5xl">
              Jesús Rabanal Álvarez
            </h1>

            <p className="mt-3 text-[rgb(var(--muted))]">
              NLP · Linguistics &amp; Attention · Researcher
            </p>

            <p className="mt-6 max-w-2xl leading-relaxed text-[rgb(var(--muted))]">
              I work at the intersection of linguistics, natural language
              processing, and software development. My interests include neural
              language models, natural cognitive processes, and practical ML
              systems for language data.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:items-start">
              <PrimaryLink href="/cv.pdf">Download CV</PrimaryLink>

              <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                <SecondaryLink href="https://github.com/RabanalGsus">
                  GitHub
                </SecondaryLink>

                <SecondaryLink href="https://www.linkedin.com/in/jesus-rabanal-alvarez/">
                  LinkedIn
                </SecondaryLink>

                <SecondaryLink href="mailto:jesusrabanal@hotmail.com">
                  Email
                </SecondaryLink>
              </div>
            </div>
          </div>
        </header>

        <Section title="Currently">
          <ul className="list-disc space-y-2 pl-5 text-[rgb(var(--muted))]">
            <li>MSc-level coursework in NLP, ML and Cognitive Science</li>
            <li>
              Research-oriented projects involving Linguistics, Cognitive
              Science, and Computational Modeling.
            </li>
            <li>
              Building and evaluating language models for low-resource and
              structured tasks.
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
                year={p.year}
                problem={p.problem}
                approach={p.approach}
                outcome={p.outcome}
                links={p.links}
              />
            ))}
          </div>

          <div className="mt-5 text-sm">
            <a
              className="underline decoration-[rgb(var(--accent))] underline-offset-4 text-[rgb(var(--text))] transition-colors hover:text-[rgb(var(--accent))]"
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