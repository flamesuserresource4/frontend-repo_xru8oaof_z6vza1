import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['1 product', '100 orders/mo', 'Basic analytics']
  },
  {
    name: 'Pro',
    price: '$19/mo',
    features: ['Unlimited products', 'No order limits', 'Advanced analytics', 'Custom domain']
  },
  {
    name: 'Scale',
    price: '$99/mo',
    features: ['Priority support', 'Team seats', 'API access', 'SLAs']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Only pay when you earn. No hidden fees.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">{tier.name}</h3>
                <span className="text-xl font-semibold text-slate-900 dark:text-white">{tier.price}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Check className="h-4 w-4" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#get-started" className="mt-6 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">Choose {tier.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
