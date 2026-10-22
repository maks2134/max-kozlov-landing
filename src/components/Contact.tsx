import { profile } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-[50vmin] w-[50vmin] rounded-full bg-[radial-gradient(circle,rgba(200,241,53,0.12),transparent_65%)]"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="section-mark mb-3 text-sm tracking-[0.16em] text-[#c8f135] uppercase">
          Contact
        </p>
        <h2 className="font-display max-w-3xl text-3xl font-bold tracking-tight text-[#e8efe9] sm:text-5xl">
          Tell me what you want to ship
        </h2>
        <p className="mt-5 max-w-xl text-lg text-[#9aab9f]">
          Open to freelance and contract work — AI integrations, Telegram bots,
          full-stack apps, and mobile. Prefer clear scope and measurable
          outcomes.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-[#c8f135] px-6 py-3 text-sm font-bold text-[#0b0f0e] shadow-[0_0_24px_rgba(200,241,53,0.25)] transition-transform hover:scale-[1.02]"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
