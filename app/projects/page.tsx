import Container from "@/components/Container";
import ProjectBrowser from "@/components/ProjectBrowser";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <Container>
        <header>
          <p className="text-xs font-semibold tracking-widest text-[rgb(var(--muted))]">
            PROJECTS
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--text))] sm:text-4xl">
            Research, NLP, and language technology work
          </h1>

          <p className="mt-4 max-w-2xl leading-relaxed text-[rgb(var(--muted))]">
            A selection of research-oriented and applied projects involving
            natural language processing, linguistics, cognitive science, and
            software development.
          </p>
        </header>

        <div className="mt-10">
          <ProjectBrowser projects={projects} />
        </div>
      </Container>
    </main>
  );
}