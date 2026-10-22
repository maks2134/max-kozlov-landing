import { services } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section id="services" className="border-b border-edge bg-panel/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="section-mark mb-3 text-sm tracking-[0.16em] text-[#c8f135] uppercase">
            What I offer
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#e8efe9] sm:text-5xl">
            Fixed-scope delivery across AI, Telegram bots, full-stack, and
            mobile
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delayMs={index * 70}>
            <article
              className="h-full bg-ink px-6 py-8 transition-colors hover:bg-panel sm:px-8 sm:py-10"
            >
              <h3 className="font-display text-xl font-semibold text-[#e8efe9]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#9aab9f] sm:text-base">
                {service.description}
              </p>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
