'use client';

import dynamic from "next/dynamic";
import HeroLeftContent from '@/components/ui/HeroLeftContent';
import HeroProfilePicture from '@/components/ui/ProfilePicture';
 
const StatsSection = dynamic(
  () => import('@/components/Sections/StatsSection'),
  { loading: () => <SectionLoader height="h-40" /> }
);

const TechStackSection = dynamic(
  () => import('@/components/Sections/TechStackSection'),
  { loading: () => <SectionLoader height="h-64" /> }
);

const AchievementSection = dynamic(
  () => import('@/components/Sections/AchievementSection'),
  { loading: () => <SectionLoader height="h-64" /> }
);

const ContactSection = dynamic(
  () => import('@/components/Sections/ContactSection'),
  { loading: () => <SectionLoader height="h-48" /> }
);

// 🔥 Reusable skeleton loader
function SectionLoader({ height }: { height: string }) {
  return (
    <div className={`w-full ${height} animate-pulse rounded-xl bg-black/30 border border-white/10`} />
  );
}

export default function Home() {
  return (
    <>
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-24 pb-20 relative">

        {/* Background Grid Pattern */}
        <div className="fixed inset-0 -z-10 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
 
        <section className="pt-20 pb-6">
          <div className="relative bg-gradient-to-br from-black/40 via-gray-900/50 to-black/50 backdrop-blur-lg rounded-2xl p-8 sm:p-10 transition-all duration-500 overflow-hidden border border-white/10 hover:border-green-500/30">

            <div className="relative max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-12 lg:gap-14 items-center">
                <HeroLeftContent />
                <HeroProfilePicture />
              </div>
            </div>
          </div>
        </section> 

        <section className="my-2">
          <StatsSection />
        </section>

        <section className="my-16">
          <TechStackSection />
        </section>

        <section className="my-16">
          <AchievementSection />
        </section>

        <section className="my-1">
          <ContactSection />
        </section>

      </main>
    </>
  );
}