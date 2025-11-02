"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { AnimatedLink } from "@/components/AnimatedLink";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current || !overlayRef.current || !itemsRef.current) return;

    if (isOpen) {
      // Animate menu opening
      gsap.set(menuRef.current, { x: "100%" });
      gsap.set(overlayRef.current, { opacity: 0 });

      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(menuRef.current, {
        x: "0%",
        duration: 0.4,
        ease: "power3.out",
      }, 0.1);

      // Animate menu items
      const items = itemsRef.current.children;
      gsap.fromTo(
        items,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    } else {
      // Animate menu closing
      const tl = gsap.timeline();
      tl.to(menuRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.in",
      })
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      }, 0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed right-0 top-0 z-50 h-full w-[280px] bg-background border-l border-border shadow-xl"
      >
        <div className="flex h-full flex-col">
          {/* Header with close button */}
          <div className="flex items-center justify-between border-b border-border p-4">
            <span className="text-lg font-bold text-foreground">Menu</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Button>
          </div>

          {/* Menu Items */}
          <div ref={itemsRef} className="flex flex-col gap-1 p-4">
            <a
              href="#home"
              onClick={onClose}
              className="rounded-md px-4 py-3 text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#testimonials"
              onClick={onClose}
              className="rounded-md px-4 py-3 text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#features"
              onClick={onClose}
              className="rounded-md px-4 py-3 text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={onClose}
              className="rounded-md px-4 py-3 text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="rounded-md px-4 py-3 text-base font-medium text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
            >
              Contact
            </a>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <Button variant="secondary" size="default" asChild>
                <AnimatedLink href="/login" onClick={onClose}>Login</AnimatedLink>
              </Button>
              <Button variant="default" size="default" asChild>
                <AnimatedLink href="/register" onClick={onClose}>Join up</AnimatedLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

