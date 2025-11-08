import React from 'react';
import { CreditCard, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-5 flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 p-2 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <CreditCard className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">Instapay</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Features</a>
            <a href="#products" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Products</a>
            <a href="#pricing" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Pricing</a>
            <a href="#faq" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#get-started" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">Start free</a>
            <button aria-label="Menu" className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:text-white dark:hover:bg-white/10 md:hidden">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
