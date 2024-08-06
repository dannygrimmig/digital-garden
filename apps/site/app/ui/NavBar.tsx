'use client';

import * as React from 'react';
import { NameReveal } from './DGHover';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white flex border-b px-4 py-2 sticky top-0 z-10">
      <div className="flex gap-4 items-center">
        <NameReveal />

        {links.map((link) => (
          <Link key={link} href={`/${link}`}>
            <p
              className={`nav-item relative ${
                pathname === `/${link}` && 'active'
              }`}
            >
              {link}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}

const links = ['articles'];
