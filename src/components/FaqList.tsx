import { firmFaqs } from "@/lib/seo";

export function FaqList() {
  return (
    <section className="bg-gradient-soft py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="container-page">
        <h2 id="faq-heading" className="max-w-2xl text-2xl font-bold sm:text-3xl md:text-4xl">
          Questions clients ask SBCLLC USA
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          SBCLLC USA is a tax, finance and compliance firm for businesses in the United States, India and the UAE. Local connect. Global outlook.
        </p>
        <dl className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card">
          {firmFaqs.map((item) => (
            <div key={item.q} className="px-6 py-6 sm:px-8">
              <dt className="text-lg font-semibold">{item.q}</dt>
              <dd className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
