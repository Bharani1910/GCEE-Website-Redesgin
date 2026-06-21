"use client";

import React from "react";

export type AmbassadorAvatarProps = {
  imageSrc: string;
  alt: string;
  mouthOpen: number; // 0..1
  className?: string;
  isSpeaking?: boolean;
};

export default function AmbassadorAvatar({
  imageSrc,
  alt,
  mouthOpen,
  className = "",
  isSpeaking = false,
}: AmbassadorAvatarProps) {
  const open = Number.isFinite(mouthOpen) ? Math.min(1, Math.max(0, mouthOpen)) : 0;

  return (
    <div
      className={[
        "relative rounded-2xl p-[3px] transition-all duration-300 overflow-hidden",
        isSpeaking
          ? "shadow-[0_0_30px_rgba(244,196,48,0.5)]"
          : "shadow-[0_20px_60px_rgba(10,61,98,0.35)]",
        className,
      ].join(" ")}
      aria-label="Ambassador avatar"
    >
      {/* Animated glowing border background */}
      {isSpeaking && (
        <div className="absolute inset-[-50%] z-0 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,var(--color-secondary)_100%)]" />
      )}

      {/* Inner Avatar Content Container */}
      <div className="relative z-10 w-full h-full rounded-[14px] overflow-hidden bg-primary/20 backdrop-blur-sm border border-white/10">
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

        <img
          src={imageSrc}
          alt={alt}
          className="relative z-10 h-[420px] w-full object-cover sm:h-[500px]"
          loading="eager"
        />

        {/* Audio Waveform (replaces mouth) */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-end gap-1.5 h-16 z-20 pointer-events-none drop-shadow-md">
          {[0.6, 0.9, 0.7, 1.2, 0.8, 1.0, 0.5].map((mult, i) => (
            <div
              key={i}
              className="w-2 bg-secondary rounded-full"
              style={{
                height: isSpeaking ? `${Math.max(8, open * 60 * mult)}px` : '8px',
                transition: 'height 75ms ease-out, opacity 300ms ease',
                opacity: isSpeaking ? 1 : 0.5,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

