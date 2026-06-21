"use client";

import React from "react";
import Link from "next/link";
import RealisticAmbassador from "@/components/RealisticAmbassador";

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export default function AmbassadorHero() {
  const ambassadorIframeUrl = process.env.NEXT_PUBLIC_AMBASSADOR_IFRAME_URL;
  const ambassadorImageUrl =
    process.env.NEXT_PUBLIC_AMBASSADOR_IMAGE_URL ??
    "https://img.freepik.com/premium-photo/male-project-manager-animation-animated-cartoon-professional-business-man-isolated-colour-flat-line-2d-character-4k-video-footage_1029476-185572.jpg";

  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const ctxRef = React.useRef<AudioContext | null>(null);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  const dataRef = React.useRef<Uint8Array | null>(null);
  const sourceRef = React.useRef<MediaElementAudioSourceNode | null>(null);
  const rafRef = React.useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [mouthOpen, setMouthOpen] = React.useState(0);

  const cleanupRaf = React.useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const resetMouth = React.useCallback(() => {
    cleanupRaf();
    setMouthOpen(0);
  }, [cleanupRaf]);

  const tick = React.useCallback(() => {
    const analyser = analyserRef.current;
    const data = dataRef.current;
    if (!analyser || !data) return;

    analyser.getByteTimeDomainData(data as any);
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const v = (data[i] - 128) / 128;
      sum += v * v;
    }
    const rms = Math.sqrt(sum / data.length);

    const open = clamp01((rms - 0.02) / 0.25);
    setMouthOpen((prev) => prev * 0.65 + open * 0.35);

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const ensureAudioGraph = React.useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = ctxRef.current;

    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    if (!analyserRef.current) {
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.7;
      analyserRef.current = analyser;
      dataRef.current = new Uint8Array(analyser.frequencyBinCount);
    }

    if (!sourceRef.current) {
      sourceRef.current = ctx.createMediaElementSource(audio);
      sourceRef.current.connect(analyserRef.current!);
      analyserRef.current!.connect(ctx.destination);
    }
  }, []);

  const togglePlayPause = React.useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (!isPlaying) {
        await ensureAudioGraph();
        await audio.play();
        setIsPlaying(true);
        cleanupRaf();
        rafRef.current = requestAnimationFrame(tick);
      } else {
        audio.pause();
        setIsPlaying(false);
        resetMouth();
      }
    } catch {
      setIsPlaying(false);
      resetMouth();
    }
  }, [cleanupRaf, ensureAudioGraph, isPlaying, resetMouth, tick]);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => {
      setIsPlaying(false);
      resetMouth();
    };
    const onPause = () => {
      setIsPlaying(false);
      resetMouth();
    };

    audio.addEventListener("ended", onEnded);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("pause", onPause);
    };
  }, [resetMouth]);

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-primary via-primary to-[#062945]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(244,196,48,0.18),transparent_55%),radial-gradient(900px_circle_at_85%_30%,rgba(60,145,230,0.18),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wide text-white/90">
                அரசினர் பொறியியல் கல்லூரி, ஈரோடு
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Government College of Engineering,{" "}
              <span className="text-secondary">Erode</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Empowering innovation since 1984 – Shaping the engineers of tomorrow.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center flex-wrap">
              <button
                type="button"
                onClick={togglePlayPause}
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-primary shadow-[0_12px_30px_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(255,255,255,0.35)] focus-visible:outline-none"
              >
                {isPlaying ? "Pause introduction" : "Play introduction"}
              </button>

              <Link
                href="/departments"
                className="inline-flex items-center justify-center rounded-xl bg-secondary px-7 py-3.5 text-sm font-bold text-primary shadow-[0_12px_30px_rgba(244,196,48,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(244,196,48,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Explore Departments
              </Link>

              <Link
                href="/admissions"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Admissions
              </Link>
            </div>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <audio ref={audioRef} src="/audio/college-intro.wav" preload="auto" crossOrigin="anonymous" />
              <div>
                <dt className="text-xs font-semibold tracking-wider text-white/60">EST.</dt>
                <dd className="mt-1 text-2xl font-bold text-white">1984</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wider text-white/60">FOCUS</dt>
                <dd className="mt-1 text-2xl font-bold text-white">Innovation</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wider text-white/60">VALUES</dt>
                <dd className="mt-1 text-2xl font-bold text-white">Excellence</dd>
              </div>
            </dl>
          </div>

          {/* Right: ambassador */}
          <div className="lg:justify-self-end">
            <div className="mx-auto w-full max-w-md sm:max-w-lg">
              <RealisticAmbassador
                mode={ambassadorIframeUrl ? "iframe" : "image"}
                iframeSrc={ambassadorIframeUrl}
                imageSrc={ambassadorImageUrl}
                alt="Realistic human ambassador greeting visitors"
                title="Realistic human ambassador"
                isSpeaking={isPlaying}
                mouthOpen={mouthOpen}
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none mt-12 h-10 w-full bg-gradient-to-b from-white/0 to-white/0" />
      </div>
    </section>
  );
}

