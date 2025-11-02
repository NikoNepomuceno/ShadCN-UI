"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
}

export function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char");

    // Set initial state - characters start below their container
    gsap.set(chars, {
      y: 100,
      opacity: 1,
    });

    // Animate characters staggering one at a time
    gsap.to(chars, {
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.03, // 30ms delay between each character
    });
  }, []);

  // Split text into words and characters
  const words = text.split(" ");

  return (
    <h1 ref={containerRef} className={className}>
      {words.map((word, wordIndex) => (
        <div
          key={wordIndex}
          className="inline-block overflow-hidden"
          style={{ marginRight: wordIndex < words.length - 1 ? "0.25em" : "0" }}
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="char inline-block"
              style={{ display: "inline-block" }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
    </h1>
  );
}

