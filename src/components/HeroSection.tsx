import Image from "next/image";
import PremiumButton from "@/components/luxury/PremiumButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#E8DCCF_0%,_#FAF8F5_45%,_#FAF8F5_100%)]" />
      <div
        className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#C6A77D]/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="space-y-8 animate-fade-up">
          <p className="inline-flex rounded-full border border-[#C6A77D]/35 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#5B3A29]">
            Contemporary  furniture, redefined.
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[#3B241A] sm:text-5xl lg:text-7xl">
            Design Your Space With Elevated Warmth.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[#6B7280] sm:text-lg">
            Signature furniture collections crafted from premium woods, refined
            finishes, and modern silhouettes for high-end homes and bespoke
            living spaces.
          </p>
          <div className="grid max-w-lg grid-cols-3 gap-3 rounded-2xl border border-[#E8DCCF] bg-white/70 p-4">
            <div>
              <p className="text-2xl font-semibold text-[#3B241A]">30+</p>
              <p className="text-xs uppercase tracking-[0.1em] text-[#6B7280]">
                Years
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#3B241A]">4.9</p>
              <p className="text-xs uppercase tracking-[0.1em] text-[#6B7280]">
                Rating
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#3B241A]">5K+</p>
              <p className="text-xs uppercase tracking-[0.1em] text-[#6B7280]">
                Homes Styled
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
          <div className="absolute -left-6 top-8 z-10 rounded-2xl border border-[#C6A77D]/40 bg-white/90 px-4 py-3 text-sm shadow-lg">
            <p className="font-semibold text-[#3B241A]">
              Exclusive Crafted Pieces
            </p>
            <p className="text-xs text-[#6B7280]">New arrivals every month</p>
          </div>
          <div className="absolute -bottom-5 right-4 z-10 rounded-2xl border border-[#E8DCCF] bg-white/90 px-4 py-3 text-sm shadow-lg">
            <p className="font-semibold text-[#3B241A]">Visit Workshop</p>
            <p className="text-xs text-[#6B7280]">Kathmandu, Nepal</p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E8DCCF] bg-[#F7F3EE] p-3 shadow-[0_30px_70px_-35px_rgba(43,43,43,0.75)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/banner.avif"
                alt="Luxury living room furniture setup"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B241A]/45 via-transparent to-[#C6A77D]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
