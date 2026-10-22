import { skills } from "@/data/content";
import { Reveal } from "@/components/Reveal";

const groups = [
  { title: "Languages", items: skills.languages },
  { title: "Backend", items: skills.backend },
  { title: "Full-stack", items: skills.fullstack },
  { title: "AI & tooling", items: skills.ai },
] as const;

export function Skills() {
  return (
    <section id="skills" className="border-b border-edge">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="section-mark mb-3 text-sm tracking-[0.16em] text-[#c8f135] uppercase">
            Stack
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#e8efe9] sm:text-5xl">
            Tools I use to ship
          </h2>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => (
            <Reveal key={group.title} delayMs={index * 60}>
              <h3 className="mb-4 text-sm font-medium tracking-[0.06em] text-[#e8efe9]">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-[#9aab9f]">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
