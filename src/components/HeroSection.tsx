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
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-18 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="space-y-4  animate-fade-up">
          <p className="inline-flex rounded-full border border-accent/35 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            FURNITURE'S MADE TO LAST.
          </p>
          <h1 className="text-4xl font-bold leading-tight text-secondary-foreground sm:text-5xl lg:text-7xl">
            Design Your Space With Elevated Warmth.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Signature furniture collections crafted from premium woods, refined
            finishes, and modern silhouettes for high-end homes and bespoke
            living spaces.
          </p>

          <div className="w-full max-w-xl rounded-2xl border border-border/80 bg-white/70 p-4 shadow-sm backdrop-blur-md">
            <div className="grid grid-cols-3 divide-x divide-border/60 text-center">
              {/* Stat 1 */}
              <div className="flex flex-col justify-center px-1 first:pl-0">
                <span className="text-xl font-bold tracking-tight text-secondary-foreground sm:text-3xl">
                  25+
                </span>
                <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                  Years experience
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col justify-center px-1">
                <span className="text-xl font-bold tracking-tight text-secondary-foreground sm:text-3xl">
                  3K+
                </span>
                <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                  Items Restored
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col justify-center px-1 last:pr-0">
                <span className="text-xl font-bold tracking-tight text-secondary-foreground sm:text-3xl">
                  5K+
                </span>
                <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                  Homes Delivered
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
            <PremiumButton
              href="/products/bedroom"
              size="lg"
              className="flex-1 px-2 sm:px-9 text-[11px] sm:text-base"
            >
              Explore Collection
            </PremiumButton>
            <PremiumButton
              href="/about"
              variant="secondary"
              size="lg"
              className="flex-1 px-2 sm:px-9 text-[11px] sm:text-base"
            >
              Discover Our Story
            </PremiumButton>
          </div>
        </div>
        <div className="relative animate-float">
          <div className="absolute left-9 -top-6 z-10 rounded-2xl border border-accent/40 bg-white px-4 py-3 text-sm shadow-lg">
            <p className="font-semibold text-secondary-foreground">
              Exclusive Crafted Pieces
            </p>
            <p className="text-xs text-muted-foreground">
              New arrivals every month
            </p>
          </div>
          <div className="absolute -bottom-6 right-9 z-10 rounded-2xl border border-border bg-white px-4 py-3 text-sm shadow-lg">
            <p className="font-semibold text-secondary-foreground">
              Visit Workshop
            </p>
            <p className="text-xs text-muted-foreground">Kathmandu, Nepal</p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary p-3 shadow-[0_30px_70px_-35px_rgba(43,43,43,0.75)]">
            <div className="relative aspect-square overflow-hidden rounded-[1.6rem]">
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
