import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/luxury/SectionHeading";
import PremiumButton from "@/components/luxury/PremiumButton";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore premium furniture services including custom woodwork, luxury upholstery, and metal fabrication.",
};

import { serviceCardsData, serviceSteps } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#EFE4D7_0%,#FAF8F5_45%,#FAF8F5_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow=" Our Services"
            title="End-To-End Furniture Services For Refined Interiors."
            description="From bespoke wood pieces to premium upholstery and precision metal detailing, we deliver complete solutions designed around your space."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCardsData.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                details={service.details}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {serviceSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-secondary-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[2rem] border border-accent/30 bg-linear-to-br from-primary via-[#4A2F22] to-secondary-foreground p-10 text-secondary sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-border">
            Custom Projects
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Need A Bespoke Furniture Solution?
          </h2>
          <p className="mt-4 max-w-3xl text-secondary/85">
            Share your ideas, dimensions, and style references. Our team will
            craft a personalized proposal tailored for your home or commercial
            space.
          </p>
          <PremiumButton
            href="/contact"
            variant="secondary"
            size="lg"
            className="mt-8 inline-flex bg-white/10 text-secondary hover:bg-white/20"
          >
            Start A Service Request
            <ArrowRight className="ml-1 h-4 w-4" />
          </PremiumButton>
        </div>
      </section>
    </main>
  );
}
