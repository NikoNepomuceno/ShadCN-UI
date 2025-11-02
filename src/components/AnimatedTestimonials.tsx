"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  name: string;
  quote: string;
  company: string;
  initials: string;
}

interface AnimatedTestimonialsProps {
  testimonialsTop: Testimonial[];
  testimonialsBottom: Testimonial[];
}

export function AnimatedTestimonials({
  testimonialsTop,
  testimonialsBottom,
}: AnimatedTestimonialsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const topRowCards = sectionRef.current.querySelectorAll(".top-row .testimonial-card");
    const bottomRowCards = sectionRef.current.querySelectorAll(".bottom-row .testimonial-card");

    // Set initial state for both rows
    gsap.set([topRowCards, bottomRowCards], {
      y: 100,
      opacity: 0,
    });

    // Create a timeline to animate both rows with minimal delay
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    // Animate top row
    timeline.to(topRowCards, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
    }, 0); // Start at time 0

    // Animate bottom row (starts almost immediately with top row)
    timeline.to(bottomRowCards, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
    }, 0); 

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Top Row - Scrolls Left */}
      <div className="top-row mb-8 w-full overflow-hidden">
        <div className="flex w-max animate-scroll-left gap-4 will-change-transform">
          {/* Duplicate cards for seamless loop */}
          {[...testimonialsTop, ...testimonialsTop].map((testimonial, index) => (
            <TestimonialCard key={`top-${index}`} {...testimonial} />
          ))}
        </div>
      </div>

      {/* Bottom Row - Scrolls Right */}
      <div className="bottom-row w-full overflow-hidden">
        <div className="flex w-max animate-scroll-right gap-4 will-change-transform">
          {/* Duplicate cards for seamless loop */}
          {[...testimonialsBottom, ...testimonialsBottom].map((testimonial, index) => (
            <TestimonialCard key={`bottom-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ name, quote, company, initials }: Testimonial) {
  return (
    <Card className="testimonial-card min-w-[280px] flex-shrink-0 sm:min-w-[320px] md:min-w-[320px]">
      <CardContent className="flex flex-col gap-4 p-6">
        {/* Quote */}
        <p className="text-sm leading-relaxed text-foreground/90">
          &ldquo;{quote}&rdquo;
        </p>
        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

