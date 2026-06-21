"use client";

import React from "react";
import AmbassadorAvatar from "@/components/AmbassadorAvatar";

export type DepartmentAmbassadorProps = {
  departmentName: string;
  introAudioSrc: string;
  imageSrc: string;
  description?: string;
};

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

export default function DepartmentAmbassador({
  departmentName,
  introAudioSrc,
  imageSrc,
  description,
}: DepartmentAmbassadorProps) {
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

    // Type assertion to bypass strict TS checking for the analyzer
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    analyser.getByteTimeDomainData(data as any);
    
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const v = (data[i] - 128) / 128;
      sum += v * v;
    }
    const rms = Math.sqrt(sum / data.length); // ~0..1

    // Map RMS to mouth openness with a small noise floor.
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
      // Autoplay/permission issues can cause play() to reject.
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
      // If paused via browser controls or elsewhere, ensure we stop anim.
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
    <section className="relative mb-16 rounded-[40px] bg-primary text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 lg:py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <p className="text-xs font-bold tracking-widest uppercase text-secondary">
            Virtual Department Ambassador
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold leading-snug">
            Hello! I&apos;m your Virtual Ambassador for the {departmentName} Department at Government
            College of Engineering, Erode. Click below to hear about this department.
          </h2>
          {description ? (
            <p className="text-sm text-white/85 leading-relaxed max-w-2xl">{description}</p>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={togglePlayPause}
              className="inline-flex items-center justify-center rounded-xl bg-secondary px-4 py-2 text-sm font-bold text-primary shadow-[0_12px_30px_rgba(244,196,48,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(244,196,48,0.35)]"
            >
              {isPlaying ? "Pause introduction" : "Play department introduction"}
            </button>
          </div>

          <audio ref={audioRef} src={introAudioSrc} preload="auto" crossOrigin="anonymous" />
        </div>

        <div className="lg:justify-self-end">
          <div className="w-full max-w-md mx-auto">
            <AmbassadorAvatar
              imageSrc={imageSrc}
              alt={`Virtual ambassador for ${departmentName}`}
              mouthOpen={mouthOpen}
              isSpeaking={isPlaying}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

