import Image from "next/image";
import PremiumButton from "@/components/luxury/PremiumButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E8DCCF_0%,#FAF8F5_45%,#FAF8F5_100%)]" />
      <div
        className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="space-y-8 animate-fade-up">
          <p className="inline-flex rounded-full border border-accent/35 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Contemporary furniture, redefined.
          </p>
          <h1 className="text-4xl font-bold leading-tight text-secondary-foreground sm:text-5xl lg:text-7xl">
            Design Your Space With Elevated Warmth.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Signature furniture collections crafted from premium woods, refined
            finishes, and modern silhouettes for high-end homes and bespoke
            living spaces.
          </p>
          <div className="grid max-w-lg grid-cols-3 gap-3 rounded-2xl border border-border bg-white/70 p-4">
            <div>
              <p className="text-2xl font-semibold text-secondary-foreground">25+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Years
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-secondary-foreground">3K+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Items Restored
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-secondary-foreground">5K+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Homes delivered
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <PremiumButton href="/products/bedroom" size="lg">
              Explore Collection
            </PremiumButton>
            <PremiumButton href="/about" variant="secondary" size="lg">
              Discover Our Story
            </PremiumButton>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute -left-6 top-8 z-10 rounded-2xl border border-accent/40 bg-white/90 px-4 py-3 text-sm shadow-lg">
            <p className="font-semibold text-secondary-foreground">
              Exclusive Crafted Pieces
            </p>
            <p className="text-xs text-muted-foreground">New arrivals every month</p>
          </div>
          <div className="absolute -bottom-5 right-4 z-10 rounded-2xl border border-border bg-white/90 px-4 py-3 text-sm shadow-lg">
            <p className="font-semibold text-secondary-foreground">Visit Workshop</p>
            <p className="text-xs text-muted-foreground">Kathmandu, Nepal</p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary p-3 shadow-[0_30px_70px_-35px_rgba(43,43,43,0.75)]">
            <div className="relative aspect-4/5 overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/banner.avif"
                alt="Luxury living room furniture setup"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-secondary-foreground/45 via-transparent to-accent/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
