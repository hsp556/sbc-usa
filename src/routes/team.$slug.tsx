import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { getTeamMember, type TeamMember } from "@/data/team";
import { breadcrumbJsonLd, jsonLdScript, seoMeta, SITE_NAME, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/team/$slug")({
  head: ({ params }) => {
    const member = getTeamMember(params.slug);
    if (!member) {
      return { meta: [{ title: "Team — SBCLLC USA" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${member.name} | ${member.role} — SBCLLC USA`;
    const seo = seoMeta({
      title,
      description: member.summary,
      path: `/team/${member.slug}`,
      keywords: `${member.name}, ${member.role}, SBCLLC USA, ${member.practiceAreas}`,
    });
    return {
      ...seo,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Person",
          name: member.name,
          jobTitle: member.role,
          description: member.summary,
          email: member.email,
          telephone: member.phone,
          image: `${SITE_URL}${member.photo}`,
          url: `${SITE_URL}/team/${member.slug}`,
          worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        }),
        jsonLdScript(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: member.name, path: `/team/${member.slug}` },
          ]),
        ),
      ],
    };
  },
  loader: ({ params }): { member: TeamMember } => {
    const member = getTeamMember(params.slug);
    if (!member) throw notFound();
    return { member };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Profile not found</h1>
        <Link to="/about" hash="team" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to the team
        </Link>
      </div>
    </SiteShell>
  ),
  component: TeamProfilePage,
});

function TeamProfilePage() {
  const { member } = Route.useLoaderData();
  const facts = [
    member.experience ? { label: "Experience", value: member.experience } : null,
    { label: "Company", value: member.company },
    { label: "Practice areas", value: member.practiceAreas },
  ].filter((fact): fact is { label: string; value: string } => fact !== null);

  return (
    <SiteShell>
      <section className="border-b border-border bg-[oklch(0.32_0.01_60)] text-white">
        <div className="container-page py-4">
          <p className="text-center text-lg font-semibold sm:text-xl">{member.name}</p>
          <p className="mt-1 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
            About · Team · {member.name}
          </p>
        </div>
      </section>

      <article className="bg-background py-10 sm:py-14">
        <div className="container-page">
          <Link to="/about" hash="team" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> All team
          </Link>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
            <aside>
              <img
                src={member.photo}
                alt={member.name}
                width={640}
                height={800}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href={`mailto:${member.email}`} className="inline-flex items-start gap-2 text-foreground hover:text-primary">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.75} />
                    {member.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="inline-flex items-start gap-2 text-foreground hover:text-primary">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.75} />
                    {member.phone}
                  </a>
                </li>
              </ul>
              <dl className="mt-6 space-y-4 border-t border-dashed border-border pt-5 text-sm">
                {facts.map((fact) => (
                  <div key={fact.label} className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-3">
                    <dt className="font-semibold">{fact.label}:</dt>
                    <dd className="text-muted-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>

            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{member.name}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{member.role}</p>
              <span className="mt-4 block h-px w-16 bg-border" />

              <div className="mt-8 space-y-6">
                {member.sections.map((section) => (
                  <section key={section.title} className="border border-border">
                    <h2 className="border-b border-border px-5 py-3 text-sm font-semibold">{section.title}</h2>
                    <div className="space-y-4 px-5 py-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                      ))}
                      {section.bullets ? (
                        <ul className="list-disc space-y-2 pl-5">
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
