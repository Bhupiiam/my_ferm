import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import WhatWeDo from './sections/WhatWeDo';
import Services from './sections/Services';
import Process from './sections/Process';
import Industries from './sections/Industries';
import Why from './sections/Why';
import Cases from './sections/Cases';
import Blog from './sections/Blog';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <div className="noise-bg" />
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <Process />
        <Industries />
        <Why />
        <Cases />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


