"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

interface PricingTier {
  name: string;
  price: string;
  popular: boolean;
  features: string[];
}

interface AnimatedPricingProps {
  pricingTiers: PricingTier[];
}

export function AnimatedPricing({ pricingTiers }: AnimatedPricingProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".pricing-card");

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate pricing cards with stagger from center
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 100,
        rotateX: -15,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="pricing" className="w-full bg-background py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={headingRef}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Simple, Transparent Pricing
        </h2>
        <div ref={sectionRef} className="grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`pricing-card flex flex-col ${
                tier.popular ? "border-primary shadow-lg" : ""
              }`}
            >
              <CardContent className="flex flex-col gap-6 p-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.price !== "Free" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                  {tier.popular && (
                    <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Most Popular
                    </span>
                  )}
                </div>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "default" : "outline"}
                  className="mt-auto w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

