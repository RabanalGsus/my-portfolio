import Section from "@/components/Section";
import Container from "@/components/Container";
import SkillLink from "@/components/SkillLink";

export default function AboutPage() {
  const groups: { title: string; description: string; items: string[] }[] = [
    {
      title: "Language & NLP",
      description:
        "Formal language training connected to computational and applied NLP work.",
      items: ["Linguistics", "NLP", "Research", "Cognitive Science"],
    },
    {
      title: "Machine Learning",
      description:
        "Modeling, fine-tuning, and evaluation work with language models.",
      items: ["ML", "Transformers", "PyTorch", "Sequence Learning"],
    },
    {
      title: "Programming & Tools",
      description:
        "Practical development, experimentation, and tooling for language data.",
      items: ["Python", "Tools", "Data Analysis", "Audio"],
    },
  ];

  return (
    <main>
      <Container>
        <header>
          <p className="text-xs font-semibold tracking-widest text-[rgb(var(--muted))]">
            ABOUT
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[rgb(var(--text))] sm:text-4xl">
            Linguistics, NLP, and research-oriented development
          </h1>

          <p className="mt-4 max-w-2xl leading-relaxed text-[rgb(var(--muted))]">
            Background, interests, and the kind of work I enjoy.
          </p>
        </header>

        <Section title="Overview">
          <p className="leading-relaxed text-[rgb(var(--muted))]">
            I have a background in English linguistics with a strong focus on
            formal and computational approaches to language. Over time, this led
            me toward NLP, statistics, and programming, where I now focus on
            building and evaluating language models.
          </p>

          <p className="mt-4 leading-relaxed text-[rgb(var(--muted))]">
            I’m particularly interested in how neural models handle structure,
            compositionality, ambiguity, and low-resource settings.
          </p>
        </Section>

        <Section title="Skills & project areas">
          <div className="mt-2 space-y-6">
            {groups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 p-5 shadow-sm"
              >
                <h2 className="font-medium text-[rgb(var(--text))]">
                  {group.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
                  {group.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <SkillLink key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-[rgb(var(--muted))]">
            Click a skill to see related projects.
          </p>
        </Section>

        <Section title="Direction">
          <p className="leading-relaxed text-[rgb(var(--muted))]">
            I’m interested in roles or projects that combine language, data, and
            systems—especially in research-oriented or technically deep
            environments.
          </p>
        </Section>
      </Container>
    </main>
  );
}