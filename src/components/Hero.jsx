import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        {/* 3D Spline Background */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradients for depth, don't block interactions */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-slate-950/70 dark:via-slate-950/20 dark:to-slate-950/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 grid gap-8 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur dark:border-white/10 dark:bg-white/5">
              <CreditCard className="h-3.5 w-3.5" />
              Instant payouts globally
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Sell Digital Products with Instant Payments
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Launch your store in minutes. Deliver files automatically, accept payments worldwide, and get paid instantly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800 active:translate-y-0 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Rocket className="h-4 w-4" />
                Get Started Free
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 active:translate-y-0 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                View Demo Products
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">No monthly fees • 5-minute setup • Secure by default</p>
          </div>
          <div className="h-[520px] lg:h-[600px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
