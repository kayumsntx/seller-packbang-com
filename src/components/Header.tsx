import { useEffect, useState } from 'react';

type Lang = 'en' | 'bn';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [lang, setLang] = useState<Lang>('en');

  // Transparent over the hero, solid after ~40px of scroll
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <header className={`topbar${solid ? ' solid' : ''}`}>
      <a className="brand" href="#">Seller Hub</a>
      <nav className="topnav">
        <a href="#how">How it works</a>
        <a href="#benefits">Benefits</a>
        <a href="#faq">FAQ</a>
        <button className="lang" type="button" onClick={() => setLang(l => (l === 'en' ? 'bn' : 'en'))}>
          EN | বাংলা
        </button>
      </nav>
    </header>
  );
}