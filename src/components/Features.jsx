import React from 'react';
import { Shield, Globe, Zap, FileDown } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'PCI-compliant payments, webhooks signing, and fraud detection baked in.'
  },
  {
    icon: Zap,
    title: 'Instant payouts',
    desc: 'Connect your bank and receive money in seconds, not days.'
  },
  {
    icon: Globe,
    title: 'Global reach',
    desc: 'Accept cards and wallets in 135+ currencies with automatic tax handling.'
  },
  {
    icon: FileDown,
    title: 'Auto delivery',
    desc: 'Instant file delivery and license keys with download limits and updates.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Everything you need to sell digital products</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">From checkout to delivery, we handle the heavy lifting so you can focus on building.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white transition group-hover:scale-105 dark:bg-white dark:text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
