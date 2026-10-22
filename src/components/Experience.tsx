import { experience } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="border-b border-edge">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="section-mark mb-3 text-sm tracking-[0.16em] text-[#c8f135] uppercase">
            Experience
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#e8efe9] sm:text-5xl">
            4+ years building real systems
          </h2>
          <p className="mt-4 text-[#9aab9f]">
            Roles and product contexts — focused on what shipped.
          </p>
        </Reveal>

        <div className="space-y-14">
          {experience.map((job, index) => (
            <Reveal key={job.period} delayMs={index * 80}>
            <article
              className="grid gap-6 border-t border-edge pt-10 lg:grid-cols-[14rem_1fr]"
            >
              <div>
                <p className="text-sm tracking-[0.12em] text-[#9aab9f] uppercase">
                  {job.period}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-[#e8efe9]">
                  {job.title}
                </h3>
                <p className="mt-2 text-sm text-[#9aab9f]">{job.context}</p>
              </div>
              <ul className="space-y-3">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-[#9aab9f] before:absolute before:top-[0.65em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#c8f135]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
