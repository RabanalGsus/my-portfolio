import Section from "@/components/Section";
import Tag from "@/components/Tag";
import Container from "@/components/Container";

export default function AboutPage() {
  const groups: { title: string; items: string[] }[] = [
    {
      title: "Language & NLP",
      items: ["Linguistics (syntax, morphology, semantics)", "NLP", "Sequence modeling"],
    },
    {
      title: "Machine Learning",
      items: ["Transformers (BERT, T5)", "Fine-tuning & evaluation", "PyTorch"],
    },
    {
      title: "Programming & Tools",
      items: ["Python", "Git / Linux", "Data analysis & experimentation"],
    },
  ];

  return (
    <main>
      <Container>
        <header>
          <h1 className="text-3xl font-bold tracking-tight">About</h1>
          <p className="mt-3 text-zinc-400">
            Background, interests, and the kind of work I enjoy.
          </p>
        </header>

        <Section title="Overview">
          <p className="text-zinc-400 leading-relaxed">
            I have a background in English linguistics with a strong focus on
            formal and computational approaches to language. Over time, this led
            me toward NLP, statistics, and programming, where I now focus on
            building and evaluating language models.
          </p>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            I’m particularly interested in how neural models handle structure,
            compositionality, and low-resource settings.
          </p>
        </Section>

        <Section title="Skills">
          <div className="mt-2 space-y-6">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="font-medium text-zinc-200">{g.title}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Direction">
          <p className="text-zinc-400 leading-relaxed">
            I’m interested in roles or projects that combine language, data, and
            systems—especially in research-oriented or technically deep
            environments.
          </p>
        </Section>
      </Container>
    </main>
  );
}
