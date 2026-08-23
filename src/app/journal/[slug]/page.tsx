import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { journalPosts } from "@/data/contentData";

export function generateStaticParams() {
  return journalPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="pt-28 pb-20 px-6 md:px-16 max-w-4xl mx-auto w-full flex flex-col gap-12">
        {/* Back Link */}
        <div>
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-sky-400 uppercase tracking-widest hover:text-white transition-colors"
          >
            &larr; Back to Reflections &amp; Journal
          </Link>
        </div>

        {/* Article Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="flex items-center gap-4 text-[12px] font-mono text-sky-400 uppercase tracking-wider">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span className="text-gray-400">{post.readTime}</span>
          </div>

          <h1 className="font-onest text-[36px] sm:text-[52px] font-extrabold text-white leading-tight uppercase">
            {post.title}
          </h1>

          <p className="text-[18px] text-gray-300 font-light leading-relaxed">
            {post.subtitle}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/40">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover object-top"
          />
        </div>

        {/* Quote Callout */}
        {post.quote && (
          <div className="bg-white/5 border-l-4 border-sky-400 p-8 rounded-r-2xl my-4 backdrop-blur-md">
            <p className="font-onest text-[20px] sm:text-[24px] font-medium text-white italic leading-relaxed">
              &ldquo;{post.quote}&rdquo;
            </p>
            <span className="block mt-3 text-[12px] font-mono text-sky-400 uppercase tracking-widest">
              — {post.author}, Mrs. Universe 2026
            </span>
          </div>
        )}

        {/* Article Paragraphs */}
        <div className="flex flex-col gap-6 text-[16px] sm:text-[18px] text-gray-300 font-light leading-[1.85]">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Author Bio Card */}
        <div className="bg-white/5 border border-white/15 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-center shadow-xl mt-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-sky-400">
            <Image
              src="/images/hero_pose_202608132331.jpg"
              alt="Maleka Morani"
              fill
              sizes="96px"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h4 className="font-onest text-[20px] font-bold text-white uppercase">
              About Maleka Morani
            </h4>
            <p className="text-[13px] text-gray-300 font-light leading-relaxed">
              Registered Nurse (ICU, ER, Aesthetics, Psych), mother of Ariyana &amp; Mikhail, cancer survivor, advocate for domestic violence awareness, and Mrs. Universe 2026.
            </p>
            <Link
              href="/story"
              className="text-[12px] font-bold text-sky-400 uppercase tracking-wider hover:underline mt-1 inline-block"
            >
              READ FULL BIOGRAPHY &rarr;
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-white/10 flex justify-between items-center">
          <Link
            href="/journal"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-[12px] uppercase tracking-wider hover:bg-white hover:text-black transition-all"
          >
            ALL ESSAYS
          </Link>
          <Link
            href="/support"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-[12px] uppercase tracking-wider hover:bg-gray-200 transition-all"
          >
            SUPPORT MY JOURNEY
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
