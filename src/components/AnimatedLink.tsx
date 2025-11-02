"use client";

import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ReactNode } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AnimatedLink({ href, children, className, onClick }: AnimatedLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an anchor link (starts with #), don't prevent default
    if (href.startsWith("#")) {
      if (onClick) onClick();
      return;
    }

    e.preventDefault();
    
    // Call any additional onClick handler
    if (onClick) onClick();

    // Animate out
    gsap.to("body", {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        router.push(href);
        // Animate back in happens via PageTransition component
        gsap.set("body", { opacity: 1 });
      },
    });
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

