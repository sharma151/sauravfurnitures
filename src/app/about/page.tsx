import type { Metadata } from "next";
import { ArrowRight, Users, Clock3, Leaf } from "lucide-react";
import SectionHeading from "@/components/luxury/SectionHeading";
import PremiumButton from "@/components/luxury/PremiumButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story, craftsmanship, and design philosophy behind Saurav Furnitures.",
};

import { aboutValues, aboutStats, aboutPhilosophyItems } from "@/lib/constants";

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#EFE4D7_0%,#FAF8F5_45%,#FAF8F5_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-7">
            <SectionHeading
              eyebrow="About Saurav Furnitures"
              title="A Luxury Furniture House Built On Craft, Warmth, And Precision."
              description="Our journey started as a family workshop and evolved into a modern  furniture manufacturer trusted by homeowners, architects, and interior designers."
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-white/80 p-4"
                >
                  <p className="text-2xl font-semibold text-secondary-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
              <PremiumButton href="/contact" size="lg" className="flex-1 whitespace-nowrap px-2 text-[11px] sm:px-9 sm:text-base">
                Talk To Our Team
              </PremiumButton>
              <PremiumButton href="/services" variant="secondary" size="lg" className="flex-1 whitespace-nowrap px-2 text-[11px] sm:px-9 sm:text-base">
                Explore Services
              </PremiumButton>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border bg-card p-8 shadow-[0_30px_65px_-48px_rgba(59,36,26,0.92)]">
            <h2 className="text-2xl font-semibold text-secondary-foreground">
              Our Design Philosophy
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We create furniture that balances visual elegance and everyday
              ease. Every line, curve, texture, and proportion is considered so
              your home feels curated yet deeply comfortable.
            </p>
            <div className="mt-8 space-y-4">
              {aboutPhilosophyItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4"
                  >
                    <Icon className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-secondary-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <SectionHeading
          eyebrow="What Defines Us"
          title="Craft Values Behind Every Signature Piece."
          description="Quality restoration for every budget. We combine traditional techniques with modern durability to fix, refinish, and renew your furniture."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {aboutValues.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.title}
                className="group rounded-3xl border border-border bg-card p-7 shadow-[0_22px_45px_-40px_rgba(59,36,26,0.95)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/45"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-accent/35 bg-secondary p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold text-secondary-foreground">
                  {section.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-[2rem] border border-accent/35 bg-linear-to-br from-primary via-[#4A2F22] to-secondary-foreground p-10 text-secondary shadow-[0_34px_78px_-56px_rgba(43,43,43,0.95)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-border">
            Quality Craftsmanship
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Custom Builds or Classic Restorations—We Do Both.
          </h2>
          <p className="mt-4 max-w-3xl text-secondary/85">
            Whether we are manufacturing a brand-new custom piece to fit your
            space or carefully restoring a family heirloom, our focus remains on
            structural integrity and honest work that stands the test of time.
          </p>
          <PremiumButton
            href="/contact"
            variant="secondary"
            size="lg"
            className="mt-8 inline-flex bg-white/10 text-secondary hover:bg-white/20"
          >
            Start Your Project
            <ArrowRight className="ml-1 h-4 w-4" />
          </PremiumButton>
        </div>
      </section>
    </main>
  );
}
