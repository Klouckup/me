import { Hero } from '@/components/landing/Hero';
import { Profile } from '@/components/landing/Profile';
import { ShortIntroduction } from '@/components/landing/ShortIntroduction';

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Hero />
      <ShortIntroduction />
    </main>
  );
}
