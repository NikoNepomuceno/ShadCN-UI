import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { AnimatedTestimonials, type Testimonial } from "@/components/AnimatedTestimonials";
import { AnimatedFeatures } from "@/components/AnimatedFeatures";
import { AnimatedPricing } from "@/components/AnimatedPricing";
import { AnimatedContact } from "@/components/AnimatedContact";
import { AnimatedFooter } from "@/components/AnimatedFooter";
import { Navbar } from "@/components/Navbar";
import { AnimatedLink } from "@/components/AnimatedLink";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative flex h-screen w-full items-end overflow-hidden">
        {/* Unicorn.studio Interactive Background Element */}
        <div
          id="unicorn-studio-background"
          className="absolute inset-0 z-0"
          aria-label="Unicorn.studio interactive background"
        >
          {/* This div will eventually contain the unicorn.studio interactive background */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full pb-8 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedHeadline
              text="INTELLIGENT TASK MANAGER, FINALLY."
              className="mb-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            />
            <Button size="lg" className="text-base sm:text-lg px-7 py-4" asChild>
              <AnimatedLink href="/register">Try it out</AnimatedLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="relative w-full overflow-hidden bg-background py-16">
        <div className="container mx-auto mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What Our Users Say
          </h2>
        </div>
        <AnimatedTestimonials
          testimonialsTop={testimonialsTop}
          testimonialsBottom={testimonialsBottom}
        />
      </section>

      {/* Features Section */}
      <AnimatedFeatures features={features} />

      {/* Pricing Section */}
      <AnimatedPricing pricingTiers={pricingTiers} />

      {/* Contact Section */}
      <AnimatedContact />

      {/* Footer Section */}
      <AnimatedFooter />
    </div>
  );
}

// Features data
const features = [
  {
    title: "AI-Powered Task Prioritization",
    description: "Let our intelligent AI analyze and prioritize your tasks based on deadlines, importance, and your work patterns.",
    icon: (
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
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Smart Automation",
    description: "Automate repetitive workflows and let the AI handle routine tasks so you can focus on what matters most.",
    icon: (
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
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="m7 11 3-8 3 8" />
        <path d="M7 21h10" />
      </svg>
    ),
  },
  {
    title: "Predictive Insights",
    description: "Get ahead of potential bottlenecks with AI predictions that help you stay on track and meet deadlines.",
    icon: (
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
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team with intelligent task assignments and real-time updates.",
    icon: (
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Cross-Platform Sync",
    description: "Access your tasks from anywhere with seamless synchronization across all your devices and platforms.",
    icon: (
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
        <path d="M5 12H19" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    title: "Custom Workflows",
    description: "Create custom workflows tailored to your team's unique processes and let AI optimize them over time.",
    icon: (
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
];

// Pricing tiers data
const pricingTiers = [
  {
    name: "Free",
    price: "Free",
    popular: false,
    features: [
      "Up to 50 tasks",
      "Basic AI prioritization",
      "1 project",
      "Mobile app access",
      "Email support",
      "Basic templates",
    ],
  },
  {
    name: "Pro",
    price: "$20",
    popular: true,
    features: [
      "Unlimited tasks",
      "Advanced AI insights",
      "Unlimited projects",
      "Priority support",
      "Custom workflows",
      "Team collaboration (up to 5 members)",
      "Advanced analytics",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "$50",
    popular: false,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom AI training",
      "Advanced security & compliance",
      "White-label options",
      "On-premise deployment",
      "SLA guarantee",
    ],
  },
];

// Testimonial data for top row (10 testimonials)
const testimonialsTop: Testimonial[] = [
  {
    name: "Sarah Chen",
    quote: "mAInagement has revolutionized how our team collaborates. The AI insights are incredibly accurate.",
    company: "TechFlow Inc.",
    initials: "SC",
  },
  {
    name: "Michael Rodriguez",
    quote: "Best task management tool we've ever used. The intelligent automation saves us hours every week.",
    company: "Digital Dynamics",
    initials: "MR",
  },
  {
    name: "Emily Watson",
    quote: "The AI predictions help us stay ahead of deadlines. Our productivity has increased by 40%.",
    company: "CloudVentures",
    initials: "EW",
  },
  {
    name: "David Kim",
    quote: "Seamless integration with our workflow. The intelligent task prioritization is a game-changer.",
    company: "NextGen Solutions",
    initials: "DK",
  },
  {
    name: "Lisa Anderson",
    quote: "Our team loves how mAInagement learns from our patterns and adapts to our work style.",
    company: "InnovateLab",
    initials: "LA",
  },
  {
    name: "James Thompson",
    quote: "The most intuitive task manager I've used. The AI recommendations are spot-on every time.",
    company: "SwiftCode",
    initials: "JT",
  },
  {
    name: "Maria Garcia",
    quote: "mAInagement has transformed our project management. We couldn't work without it now.",
    company: "Creative Studio",
    initials: "MG",
  },
  {
    name: "Robert Taylor",
    quote: "The intelligent insights help us identify bottlenecks before they become problems.",
    company: "DataDriven Co.",
    initials: "RT",
  },
  {
    name: "Jennifer Lee",
    quote: "Outstanding tool for remote teams. The AI keeps everyone aligned and productive.",
    company: "RemoteFirst",
    initials: "JL",
  },
  {
    name: "Christopher Brown",
    quote: "Best investment we made this year. mAInagement pays for itself with increased efficiency.",
    company: "ScaleUp Technologies",
    initials: "CB",
  },
];

// Testimonial data for bottom row (10 testimonials)
const testimonialsBottom: Testimonial[] = [
  {
    name: "Amanda White",
    quote: "The AI-powered task management is exactly what our startup needed. Highly recommend!",
    company: "StartupHub",
    initials: "AW",
  },
  {
    name: "Daniel Martinez",
    quote: "Incredible how the system learns and adapts. Our workflow has never been smoother.",
    company: "AgileWorks",
    initials: "DM",
  },
  {
    name: "Jessica Park",
    quote: "The intelligent prioritization features are unmatched. Our team productivity soared.",
    company: "Innovation Labs",
    initials: "JP",
  },
  {
    name: "Kevin Johnson",
    quote: "mAInagement's AI insights help us make better decisions faster. Essential tool for our team.",
    company: "FastTrack",
    initials: "KJ",
  },
  {
    name: "Nicole Adams",
    quote: "The automation features save us countless hours. Best task manager on the market.",
    company: "ProductiveHQ",
    initials: "NA",
  },
  {
    name: "Thomas Wilson",
    quote: "Our team efficiency has improved dramatically since switching to mAInagement.",
    company: "Efficiency Pro",
    initials: "TW",
  },
  {
    name: "Rachel Green",
    quote: "The AI predictions are uncannily accurate. It's like having a smart assistant built-in.",
    company: "SmartTeam",
    initials: "RG",
  },
  {
    name: "Brian Davis",
    quote: "Perfect balance of simplicity and powerful AI features. Our team loves it.",
    company: "SimpleTech",
    initials: "BD",
  },
  {
    name: "Olivia Moore",
    quote: "mAInagement has become central to how we operate. The intelligence behind it is impressive.",
    company: "CoreSystems",
    initials: "OM",
  },
  {
    name: "Andrew Jackson",
    quote: "The best investment for productivity we've made. The AI features are revolutionary.",
    company: "Peak Performance",
    initials: "AJ",
  },
];
