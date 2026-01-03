const projects = [
  {
    title: "Project One",
    description: "One-liner about what it does and what you used.",
    href: "#",
  },
  {
    title: "Project Two",
    description: "Another one-liner. Link to GitHub or a demo.",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Your Name</h1>
          <p className="mt-3 text-zinc-400">
            NLP / Linguistics + Tech • Copenhagen • Open to roles
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="underline text-zinc-200" href="https://github.com/YOURNAME">
              GitHub
            </a>
            <a className="underline text-zinc-200" href="https://www.linkedin.com/in/YOURNAME/">
              LinkedIn
            </a>
            <a className="underline text-zinc-200" href="mailto:you@example.com">
              Email
            </a>
            <a className="underline text-zinc-200" href="/cv.pdf">
              CV (PDF)
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-4 grid gap-4">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700"
              >
                <div className="font-medium">{p.title}</div>
                <div className="mt-1 text-sm text-zinc-400">{p.description}</div>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-3 text-zinc-400">
            Short bio: what you study/work on, your focus areas, and what you’re looking for.
          </p>
        </section>

        <footer className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Your Name
        </footer>
      </div>
    </main>
  );
}
