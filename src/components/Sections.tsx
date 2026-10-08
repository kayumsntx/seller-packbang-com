type Item = readonly [title: string, text: string];

const STEPS: Item[] = [
  ['Register', 'Create an account with your phone number and verify your details.'],
  ['List products', 'Add photos, prices and stock. Bulk upload is supported.'],
  ['Ship and get paid', 'Pack the order. We collect it, deliver it and pay you.'],
];

const BENEFITS: Item[] = [
  ['Reach', 'Show your products to millions of shoppers.'],
  ['Logistics', 'Pickup, delivery and returns are handled for you.'],
  ['Payments', 'Cash on delivery and digital wallets, settled on schedule.'],
  ['Support', 'Mentors and guides help you grow your first sales.'],
];

const FAQS: Item[] = [
  ['Do I need a trade licence?', 'Individuals can start with personal details. Businesses can add licence details later.'],
  ['What does it cost to join?', 'Registration is free. A commission applies to each completed sale.'],
  ['When do I get paid?', 'Payouts are made on a regular cycle after orders are delivered.'],
];

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <h2>Start selling in three steps</h2>
      <ol className="steps">
        {STEPS.map(([title, text]) => (
          <li key={title}><h3>{title}</h3><p>{text}</p></li>
        ))}
      </ol>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="section alt" id="benefits">
      <h2>Why sellers stay</h2>
      <div className="grid">
        {BENEFITS.map(([title, text]) => (
          <article key={title}><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section" id="faq">
      <h2>Common questions</h2>
      {FAQS.map(([q, a]) => (
        <details key={q}><summary>{q}</summary><p>{a}</p></details>
      ))}
    </section>
  );
}