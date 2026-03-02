import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { cvData } from "@/data/cv";

export async function generateStaticParams() {
  return cvData.experience.map((job) => ({
    slug: job.slug,
  }));
}

export default async function ExperienciaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = cvData.experience.find((j) => j.slug === slug);

  if (!job) notFound();

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="fixed inset-0 bg-pattern pointer-events-none z-0" />
      <div className="relative z-10">
        {/* Back link */}
        <div className="max-w-3xl mx-auto px-6 pt-24 pb-8">
          <Link
            href="/#experiencia"
            className="inline-flex items-center gap-2 text-gold hover:text-navy font-medium transition-colors"
          >
            ← Volver a experiencia
          </Link>
        </div>

        <article className="max-w-3xl mx-auto px-6 pb-24">
          <div className="bg-white rounded-lg shadow-lg border-l-4 border-gold p-8 md:p-12">
            <p className="text-sm font-semibold text-gold mb-2">{job.date}</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-2">
              {job.company}
            </h1>
            <p className="text-xl text-gray mb-8">
              <strong className="text-navy">{job.role}</strong>
            </p>
            <ul className="space-y-3">
              {job.tasks.map((task, j) => (
                <li
                  key={j}
                  className="text-navy-light pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-gold before:font-semibold"
                >
                  {task}
                </li>
              ))}
            </ul>
          </div>

          {/* Other experiences */}
          <div className="mt-12">
            <p className="text-sm text-gray mb-4">Otras experiencias</p>
            <div className="flex flex-wrap gap-2">
              {cvData.experience
                .filter((j) => j.slug !== slug)
                .map((j) => (
                  <Link
                    key={j.slug}
                    href={`/experiencia/${j.slug}`}
                    className="px-4 py-2 bg-white rounded border border-gold/30 hover:border-gold hover:bg-gold/5 text-navy text-sm font-medium transition-colors"
                  >
                    {j.company}
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
