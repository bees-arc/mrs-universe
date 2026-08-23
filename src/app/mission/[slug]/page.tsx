import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { missionCauses } from "@/data/contentData";

export function generateStaticParams() {
  return missionCauses.map((cause) => ({
    slug: cause.slug,
  }));
}

export default async function MissionCauseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cause = missionCauses.find((c) => c.slug === slug);

  if (!cause) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-20 px-6 md:px-16 max-w-5xl mx-auto w-full flex flex-col gap-12">
        {/* Back Link */}
        <div>
          <Link
            href="/mission"
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-sky-400 uppercase tracking-widest hover:text-white transition-colors"
          >
            &larr; Back to All Advocacy Causes
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <span className="text-[12px] font-mono text-sky-400 uppercase tracking-widest">
            {cause.category}
          </span>
          <h1 className="font-onest text-[36px] sm:text-[56px] font-extrabold text-white leading-tight uppercase">
            {cause.title}
          </h1>
          <p className="text-[18px] text-gray-300 font-light leading-relaxed">
            {cause.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/40">
          <Image
            src={cause.image}
            alt={cause.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover object-top"
          />
        </div>

        {/* Quote Callout */}
        <div className="bg-white/5 border-l-4 border-sky-400 p-8 rounded-r-2xl my-2 backdrop-blur-md">
          <p className="font-onest text-[20px] sm:text-[24px] font-medium text-white italic leading-relaxed">
            &ldquo;{cause.quote}&rdquo;
          </p>
          <span className="block mt-3 text-[12px] font-mono text-sky-400 uppercase tracking-widest">
            — Maleka Morani, Mrs. Universe 2026
          </span>
        </div>

        {/* Impact Points */}
        <div className="bg-white/5 border border-white/15 rounded-3xl p-8 flex flex-col gap-4 shadow-xl">
          <h3 className="font-onest text-[20px] font-bold text-white uppercase">
            Core Pillars of Impact &amp; Action
          </h3>
          <ul className="flex flex-col gap-3 text-[15px] text-gray-300 font-light">
            {cause.impactPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-sky-400 font-bold">&check;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Narrative */}
        <div className="flex flex-col gap-6 text-[16px] sm:text-[18px] text-gray-300 font-light leading-[1.85]">
          <h3 className="font-onest text-[24px] font-bold text-white uppercase pt-4">
            The Personal Journey &amp; Advocacy
          </h3>
          {cause.fullStory.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
          <Link
            href="/mission"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-[12px] uppercase tracking-wider hover:bg-white hover:text-black transition-all"
          >
            ALL ADVOCACY CAUSES
          </Link>
          <Link
            href="/support"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-[12px] uppercase tracking-wider hover:bg-gray-200 transition-all"
          >
            SUPPORT THIS CAUSE &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
