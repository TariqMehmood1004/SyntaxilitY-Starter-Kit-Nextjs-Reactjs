"use client";

import Link from "next/link";

export default function TFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo / Brand */}
        <div className="text-lg font-semibold tracking-tight">
          SyntaxilitY Kit
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
            Docs
          </Link>
          <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">
            GitHub
          </Link>
        </nav>

      </div>

      {/* Bottom line */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
          © {year} SyntaxilitY Starter Kit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
