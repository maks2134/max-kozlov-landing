import { profile } from "@/data/content";
import { HeroPlanet } from "@/components/HeroPlanet";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden border-b border-edge"
    >
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute -left-1/4 top-[-10%] h-[70vmin] w-[70vmin] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(200,241,53,0.06),transparent_45%),linear-gradient(180deg,#0b0f0e_0%,#0e1412_55%,#0b0f0e_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(232,239,233,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(232,239,233,0.5)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <HeroPlanet />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 py-28 sm:px-8">
        <p className="mb-5 text-sm font-medium tracking-[0.18em] text-[#c8f135] uppercase">
          {profile.role}
        </p>
        <h1 className="font-display max-w-4xl text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.92] font-extrabold tracking-tight text-[#e8efe9] [text-shadow:0_0_24px_rgba(11,15,14,0.9),0_0_2px_rgba(11,15,14,1)]">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#9aab9f] sm:text-xl">
          {profile.tagline}{" "}
          <span className="text-[#e8efe9]">
            {profile.years} years shipping Go backends, full-stack apps,
            Telegram bots, and AI integrations that land in production —
            accelerated with Claude, Codex, and Cursor.
          </span>
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#c8f135] px-6 py-3 text-sm font-bold text-[#0b0f0e] shadow-[0_0_24px_rgba(200,241,53,0.25)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex items-center rounded-full border border-edge px-6 py-3 text-sm font-semibold text-[#e8efe9] transition-colors hover:border-[#9aab9f]"
          >
            Selected work
          </a>
          <span className="w-full text-sm text-[#9aab9f] sm:ml-2 sm:w-auto">
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
