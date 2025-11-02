"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedFooter() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const columns = footerRef.current.querySelectorAll(".footer-column");
    const bottomSection = footerRef.current.querySelector(".footer-bottom");

    // Animate footer columns
    gsap.fromTo(
      columns,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate bottom section
    if (bottomSection) {
      gsap.fromTo(
        bottomSection,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bottomSection,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} className="w-full border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="footer-column flex flex-col gap-4">
            <h3 className="text-lg font-bold text-foreground">mAInagement</h3>
            <p className="text-sm text-muted-foreground">
              Intelligent task management powered by AI.
            </p>
          </div>
          <div className="footer-column flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} mAInagement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

