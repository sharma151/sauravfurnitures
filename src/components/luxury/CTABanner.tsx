import PremiumButton from "@/components/luxury/PremiumButton";

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-accent/35 bg-linear-to-br from-primary via-[#4A2F22] to-secondary-foreground p-8 text-secondary shadow-[0_35px_80px_-50px_rgba(43,43,43,0.95)] sm:p-12">
        <div
          className="absolute -right-24 top-0 h-60 w-60 rounded-full bg-accent/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-border">
            Luxury Customization
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Craft furniture made for your space and taste.
          </h2>
          <p className="mt-4 max-w-2xl text-secondary/85">
            Our designers collaborate with you to build made-to-measure pieces
            with premium materials, artisanal detailing, and timeless
            proportions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PremiumButton href="/contact" size="lg">
              Book A Design Consultation
            </PremiumButton>
            <PremiumButton
              href="/services"
              variant="secondary"
              size="lg"
              className="bg-white/10 text-secondary hover:bg-white/20"
            >
              Explore Services
            </PremiumButton>
          </div>
        </div>
      </div>
    </section>
  );
}
