import { NavBar } from './components';
import { nav, site } from './data/content';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Services } from './sections/Services';
import { Work } from './sections/Work';
import { Process } from './sections/Process';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="wrap top" id="top">
        <NavBar brand={site.name} links={nav.links} cta={nav.cta} />
      </div>
      <main id="main">
        <Hero />
        <Skills />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
