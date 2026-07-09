import { useEffect, useState } from "react";

type Slide = {
  image?: string;
  intro?: { heading: string; paragraphs: string[] };
  quote: string;
  attribution?: string;
};

export function MemberExperienceCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const slide = slides[index];

  return (
    <div
      className="relative grid items-center gap-16 md:grid-cols-[0.8fr_1.2fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        key={slide.image}
        className="min-h-[420px] rounded-[28px] bg-cover transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.05), rgba(15,23,42,0.5)), url(${slide.image})`,
          backgroundPosition: "40% 55%",
        }}
        aria-hidden
      />
      <div>
        <div className="eyebrow mb-5">Member Experience</div>
        {slide.intro ? (
          <>
            <h2 className="mb-5 text-[clamp(2rem,4vw,4rem)] text-white">{slide.intro.heading}</h2>
            {slide.intro.paragraphs.map((p, i) => (
              <p key={i} className={`text-white/80 ${i === slide.intro!.paragraphs.length - 1 ? "mb-7" : "mb-4"}`}>
                {p}
              </p>
            ))}
          </>
        ) : null}
        <blockquote className="border-l-4 border-[var(--gold)] pl-5 font-display text-[0.95rem] italic leading-relaxed text-white whitespace-pre-line">
          {slide.quote}
        </blockquote>
        {slide.attribution && (
          <p className="mt-4 text-[0.85rem] font-extrabold uppercase tracking-[0.18em] text-[var(--gold)]">
            — {slide.attribution}
          </p>
        )}
        <div className="mt-8 flex gap-2" role="tablist" aria-label="Testimonials">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-[var(--gold)]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
