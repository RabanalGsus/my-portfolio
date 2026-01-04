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
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 hover:border-zinc-700">
      <div className="font-medium text-zinc-100">{title}</div>
      <div className="mt-2 text-sm text-zinc-400">{description}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.slice(0, 6).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );

  if (!href) return Card;

  return (
    <a href={href} className="block">
      {Card}
    </a>
  );
}
