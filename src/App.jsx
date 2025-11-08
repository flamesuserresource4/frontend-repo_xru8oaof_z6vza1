import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        {/* CTA */}
        <section id="get-started" className="relative">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-white/70 p-8 text-center shadow-sm backdrop-blur dark:border-white/10 dark:from-white/5 dark:to-white/10">
              <h3 className="text-2xl font-semibold tracking-tight">Start selling your digital products today</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Create a product, share a link, and get paid instantly. It’s that simple.</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a href="#" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">Create your store</a>
                <a href="#pricing" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">See pricing</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-200/70 py-10 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        © {new Date().getFullYear()} Instapay. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
