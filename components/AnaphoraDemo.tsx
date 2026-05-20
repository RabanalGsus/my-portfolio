"use client";

import { useMemo, useState } from "react";

type Antecedent = {
  label: string;
  role: "subject" | "object";
  interpretation: "high attachment" | "low attachment";
  explanation: string;
};

const demoSentence = {
  text: "Peter called John after he left the house.",
  pronoun: "he",
  antecedents: [
    {
      label: "Peter",
      role: "subject",
      interpretation: "high attachment",
      explanation:
        "Choosing Peter links the pronoun to the subject of the main clause. In attachment terms, this corresponds to a high-attachment interpretation.",
    },
    {
      label: "John",
      role: "object",
      interpretation: "low attachment",
      explanation:
        "Choosing John links the pronoun to the object of the main clause. In attachment terms, this corresponds to a low-attachment interpretation.",
    },
  ] satisfies Antecedent[],
};

function HighlightedSentence() {
  const match = demoSentence.text.match(/\bhe\b/);

  if (!match || match.index === undefined) {
    return (
      <p className="text-lg leading-relaxed text-[rgb(var(--text))]">
        {demoSentence.text}
      </p>
    );
  }

  const before = demoSentence.text.slice(0, match.index);
  const pronoun = demoSentence.text.slice(
    match.index,
    match.index + demoSentence.pronoun.length
  );
  const after = demoSentence.text.slice(
    match.index + demoSentence.pronoun.length
  );

  return (
    <p className="text-lg leading-relaxed text-[rgb(var(--text))]">
      {before}
      <span className="rounded-md bg-[rgb(var(--accent))]/20 px-1.5 py-0.5 font-semibold">
        {pronoun}
      </span>
      {after}
    </p>
  );
}

export default function AnaphoraDemo() {
  const [selected, setSelected] = useState<Antecedent | null>(null);

  const parserOutput = useMemo(() => {
    return {
      pronoun: demoSentence.pronoun,
      candidates: demoSentence.antecedents.map((candidate) => ({
        label: candidate.label,
        role: candidate.role,
      })),
      status: "ambiguous",
    };
  }, []);

  return (
    <section className="mt-12 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/80 p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold tracking-widest text-[rgb(var(--muted))]">
        MINI DEMO
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[rgb(var(--text))]">
        Anaphora resolution
      </h2>

      <p className="mt-3 max-w-2xl leading-relaxed text-[rgb(var(--muted))]">
        This small rule-based demo illustrates how a pronoun can be compatible
        with more than one possible antecedent in a sentence.
      </p>

      <div className="mt-6 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/60 p-5">
        <HighlightedSentence />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/50 p-5">
          <p className="text-xs font-semibold tracking-widest text-[rgb(var(--muted))]">
            PARSER OUTPUT
          </p>

          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-[rgb(var(--muted))]">Detected pronoun</dt>
              <dd className="mt-1 font-medium text-[rgb(var(--text))]">
                {parserOutput.pronoun}
              </dd>
            </div>

            <div>
              <dt className="text-[rgb(var(--muted))]">
                Candidate antecedents
              </dt>

              <dd className="mt-2 flex flex-wrap gap-2">
                {parserOutput.candidates.map((candidate) => (
                  <span
                    key={candidate.label}
                    className="rounded-full border border-[rgb(var(--accent))]/35 bg-[rgb(var(--accent))]/10 px-2.5 py-1 text-xs font-medium text-[rgb(var(--text))]"
                  >
                    {candidate.label} · {candidate.role}
                  </span>
                ))}
              </dd>
            </div>

            <div>
              <dt className="text-[rgb(var(--muted))]">Ambiguity status</dt>
              <dd className="mt-1 font-medium text-[rgb(var(--text))]">
                {parserOutput.status}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/50 p-5">
          <p className="text-xs font-semibold tracking-widest text-[rgb(var(--muted))]">
            INTERPRETATION
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">
            Choose which antecedent you think the pronoun refers to.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {demoSentence.antecedents.map((antecedent) => {
              const isActive = selected?.label === antecedent.label;

              return (
                <button
                  key={antecedent.label}
                  type="button"
                  onClick={() => setSelected(antecedent)}
                  className={`cursor-pointer rounded-full border px-3 py-1.5 text-sm shadow-sm transition hover:-translate-y-0.5 ${
                    isActive
                      ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent))]/15 text-[rgb(var(--text))]"
                      : "border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 text-[rgb(var(--muted))] hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--text))]"
                  }`}
                >
                  he = {antecedent.label}
                </button>
              );
            })}
          </div>

          {selected ? (
            <div className="mt-5 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/60 p-4">
              <p className="text-sm font-medium text-[rgb(var(--text))]">
                {selected.label} · {selected.role} ·{" "}
                {selected.interpretation}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
                {selected.explanation}
              </p>
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/60 p-4">
              <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">
                Select an antecedent to see how the interpretation changes.
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-[rgb(var(--muted))]">
        This is a simplified demonstration, not a full syntactic parser. It is
        designed to illustrate the kind of ambiguity involved in anaphora
        resolution.
      </p>
    </section>
  );
}