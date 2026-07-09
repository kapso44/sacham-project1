import { useEffect, useRef, useState } from "react";

export function AutoplayVideo({ videoId }: { videoId: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPlay(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=${play ? 1 : 0}&mute=1&playsinline=1&rel=0`;

  return (
    <section className="bg-white">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-16">
        <div ref={ref} className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.15)]">
          {play && (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={src}
              title="SACham Singapore video"
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
