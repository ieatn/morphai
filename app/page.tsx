import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CharacterExamples from './components/CharacterExamples';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CharacterExamples />
        <Pricing />
        <FAQ />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}
