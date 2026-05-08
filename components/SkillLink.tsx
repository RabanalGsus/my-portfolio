import Link from "next/link";

export default function SkillLink({ skill }: { skill: string }) {
  return (
    <Link
      href={`/projects?category=${encodeURIComponent(skill)}`}
      className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 px-3 py-1 text-sm text-[rgb(var(--text))] shadow-sm transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent))]"
    >
      {skill}
    </Link>
  );
}