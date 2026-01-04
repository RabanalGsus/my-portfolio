import Tag from "./Tag";

export default function ProjectCard({
  title,
  description,
  tech,
  href,
}: {
  title: string;
  description: string;
  tech: string[];
  href?: string;
}) {
  const Card = (
    <article className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6 transition hover:border-[rgb(var(--accent))]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold leading-snug text-[rgb(var(--text))]">
          {title}
        </h3>
        <span className="text-xs text-[rgb(var(--muted))] transition group-hover:text-[rgb(var(--accent))]">
          ↗
        </span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.slice(0, 6).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </article>
  );

  if (!href) return Card;

  return (
    <a
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] rounded-2xl"
    >
      {Card}
    </a>
  );
}
