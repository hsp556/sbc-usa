import { firmFaqs } from "@/lib/seo";

type FaqListProps = {
  items?: readonly { q: string; a: string }[];
  title?: string;
  intro?: string;
};

// Visible Q&A block. Pages that render it should also emit faqJsonLd(items) in head() so the
// FAQPage structured data matches the on-page text.
export function FaqList({
  items = firmFaqs,
  title = "Questions clients ask SBC US LLC",
  intro = "SBC US LLC — also SBC USA, SBC US, SBCLLC US and SBCLLC USA — is a tax, finance and compliance firm for businesses in the United States, India and the UAE. Local connect. Global outlook.",
}: FaqListProps) {
  return (
    <section className="night-stage overflow-hidden py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="container-page relative">
        <h2 id="faq-heading" className="max-w-2xl text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-4 max-w-2xl text-base text-white/70">{intro}</p>}
        <dl className="night-card mt-10 divide-y divide-white/10 overflow-hidden rounded-3xl">
          {items.map((item) => (
            <div key={item.q} className="px-6 py-6 sm:px-8">
              <dt className="text-lg font-semibold text-white">{item.q}</dt>
              <dd className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
