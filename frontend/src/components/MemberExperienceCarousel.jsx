import React, { useEffect, useState } from "react";

export default function MemberExperienceCarousel({ slides }) {
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
      className="relative grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        key={slide.image}
        className="min-h-[420px] rounded-[28px] bg-cover"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.05), rgba(15,23,42,0.5)), url(${slide.image})`,
          backgroundPosition: "40% 55%",
          transition: "opacity 0.5s ease",
        }}
        aria-hidden
      />
      <div>
        <div className="eyebrow mb-5" style={{ color: "var(--gold)" }}>Member Experience</div>
        {slide.intro ? (
          <>
            <h2 className="mb-5 text-[clamp(2rem,4vw,4rem)] text-white">{slide.intro.heading}</h2>
            {slide.intro.paragraphs.map((p, i) => (
              <p key={i} className={`text-white/80 ${i === slide.intro.paragraphs.length - 1 ? "mb-7" : "mb-4"}`}>{p}</p>
            ))}
          </>
        ) : null}
        <blockquote className="border-l-4 pl-5 font-display italic leading-relaxed text-white whitespace-pre-line text-[0.98rem]" style={{ borderColor: "var(--gold)" }}>
          {slide.quote}
        </blockquote>
        {slide.attribution && (
          <p className="mt-4 text-[0.85rem] font-extrabold uppercase tracking-[0.18em]" style={{ color: "var(--gold)" }}>
            — {slide.attribution}
          </p>
        )}
        <div className="mt-8 flex gap-2" role="tablist" aria-label="Testimonials">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className="h-2 rounded-full"
              style={{
                width: i === index ? 32 : 8,
                background: i === index ? "var(--gold)" : "rgba(255,255,255,0.4)",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
