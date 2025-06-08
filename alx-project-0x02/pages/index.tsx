import type { NextPage } from 'next';
import Header from '../components/layout/Header';

const Home: NextPage = () => (
  <div>
    <Header title="Welcome to SoloForge!" />
    <main className="p-6">
      <p className="text-lg">Your Next.js + TypeScript + Tailwind app is ready.</p>
    </main>
  </div>
);

export default Home;
