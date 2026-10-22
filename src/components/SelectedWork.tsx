import { selectedWork } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-edge">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="section-mark mb-3 text-sm tracking-[0.16em] text-[#c8f135] uppercase">
            Selected work
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#e8efe9] sm:text-5xl">
            Production slices, not slideware
          </h2>
          <p className="mt-4 text-[#9aab9f]">
            Patterns I keep shipping — LLM integrations, Telegram bots,
            full-stack product slices, realtime systems, and AI-assisted
            delivery with Claude, Codex, and Cursor.
          </p>
        </Reveal>

        <ul className="border-y border-edge">
          {selectedWork.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 70}>
              <li className="work-row group grid gap-3 border-t border-edge py-8 pl-4 first:border-t-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[3rem_minmax(0,1.2fr)_minmax(0,1fr)]">
                <span className="pt-1 font-mono text-sm text-[#c8f135]/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="mb-2 text-sm tracking-[0.08em] text-[#9aab9f] uppercase">
                    {item.label}
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-[#e8efe9] transition-colors group-hover:text-[#c8f135] sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-[#9aab9f] lg:pt-7">
                  {item.blurb}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
