import { profile } from "@/data/content";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-[0.08em] text-[#e8efe9] uppercase"
        >
          {profile.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[#9aab9f] sm:flex">
          <a href="#work" className="transition-colors hover:text-[#e8efe9]">
            Work
          </a>
          <a href="#services" className="transition-colors hover:text-[#e8efe9]">
            Services
          </a>
          <a
            href="#experience"
            className="transition-colors hover:text-[#e8efe9]"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="rounded-full border border-edge px-4 py-1.5 text-[#e8efe9] transition-colors hover:border-[#c8f135] hover:text-[#c8f135]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
