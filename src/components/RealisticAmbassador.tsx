import React from "react";

export type RealisticAmbassadorProps = {
  /**
   * Use "image" for a photo-like avatar (PNG/JPG),
   * or "iframe" to embed an external avatar service.
   */
  mode?: "image" | "iframe";
  imageSrc?: string;
  iframeSrc?: string;
  alt?: string;
  className?: string;
  title?: string;
  /**
   * "card" shows a bordered, shadowed container.
   * "transparent" removes decorative container styling.
   */
  variant?: "card" | "transparent";
  isSpeaking?: boolean;
  mouthOpen?: number;
};

export default function RealisticAmbassador({
  mode = "image",
  imageSrc = "https://via.placeholder.com/400x500",
  iframeSrc,
  alt = "Realistic human ambassador greeting visitors",
  className = "",
  title = "Ambassador",
  variant = "card",
  isSpeaking = false,
  mouthOpen = 0,
}: RealisticAmbassadorProps) {
  const isIframe = mode === "iframe" && typeof iframeSrc === "string" && iframeSrc.length > 0;
  const isCard = variant === "card";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl bg-transparent transition-all duration-300",
        isCard
          ? isSpeaking ? "border border-white/10 shadow-[0_0_30px_rgba(244,196,48,0.5)] p-[3px]" : "border border-white/10 shadow-[0_20px_60px_rgba(10,61,98,0.35)]"
          : "border-0 shadow-none",
        "ambassador-float",
        className,
      ].join(" ")}
      aria-label={title}
    >
      {/* Animated glowing border background */}
      {isCard && isSpeaking && (
        <div className="absolute inset-[-50%] z-0 animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,var(--color-secondary)_100%)]" />
      )}

      {/* Inner Wrap */}
      <div className={isCard ? "relative z-10 w-full h-full rounded-[14px] overflow-hidden bg-primary/20 backdrop-blur-sm" : "relative z-10 w-full h-full"}>
        {isCard ? (
          <>
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          </>
        ) : null}

        {isIframe ? (
          <iframe
            src={iframeSrc}
            title={title}
            className="relative z-10 h-[420px] w-full sm:h-[500px]"
            allow="camera; microphone; autoplay; encrypted-media; fullscreen; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-presentation"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <img
            src={imageSrc}
            alt={alt}
            className="relative z-10 h-[420px] w-full object-cover sm:h-[500px]"
            loading="eager"
          />
        )}

        {/* Audio Waveform */}
        {mode === "image" && (
          <div className="absolute bottom-8 left-0 right-0 flex justify-center items-end gap-1.5 h-16 z-20 pointer-events-none drop-shadow-md">
            {[0.6, 0.9, 0.7, 1.2, 0.8, 1.0, 0.5].map((mult, i) => (
              <div
                key={i}
                className="w-2 bg-secondary rounded-full"
                style={{
                  height: isSpeaking ? `${Math.max(8, mouthOpen * 60 * mult)}px` : '8px',
                  transition: 'height 75ms ease-out, opacity 300ms ease',
                  opacity: isSpeaking ? 1 : 0.5,
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

