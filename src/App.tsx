import Header from './components/Header';
import Hero from './components/Hero';
import { HowItWorks, Benefits, Faq } from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Faq />
      </main>
      <Footer />
    </>
  );
}