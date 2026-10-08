import AuthCard from './AuthCard';

const STATS: ReadonlyArray<readonly [string, string]> = [
  ['Nationwide', 'delivery coverage'],
  ['Weekly', 'payouts'],
  ['Free', 'seller training'],
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Turn your products into a business that sells every day</h1>
        <p>List once, get orders from across the country, and let us handle delivery and payouts.</p>
        <ul className="stats">
          {STATS.map(([big, small]) => (
            <li key={big}><strong>{big}</strong><span>{small}</span></li>
          ))}
        </ul>
      </div>
      <AuthCard />
    </section>
  );
}