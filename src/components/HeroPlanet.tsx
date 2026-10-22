export function HeroPlanet() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-[6%] right-[-18%] z-[1] h-[min(52vw,200px)] w-[min(52vw,200px)] opacity-70 sm:right-[-4%] sm:top-[8%] sm:h-[min(40vw,260px)] sm:w-[min(40vw,260px)] sm:opacity-90 lg:top-1/2 lg:right-[2%] lg:h-[min(34vw,320px)] lg:w-[min(34vw,320px)] lg:-translate-y-1/2 lg:opacity-100"
    >
      <div className="planet-wrap h-full w-full">
        <div className="planet-orbit hidden sm:block">
          <span className="planet-moon" />
        </div>
        <div className="planet">
          {/* ring only from sm+ so it doesn't slice the name on phones */}
          <span className="planet-ring hidden sm:block" />
          <span className="planet-glow" />
          <span className="planet-core" />
          <span className="planet-highlight" />
        </div>
      </div>
    </div>
  );
}
