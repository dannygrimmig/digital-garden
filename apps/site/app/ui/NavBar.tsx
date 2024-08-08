'use client';
import * as React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { TextReveal } from './TextReveal';
import SearchArticles from './SearchArticles';

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white flex justify-between items-center border-b px-4 py-2 sticky top-0 z-10">
      <div className="flex gap-8 items-center">
        <DGReveal isRevealed={pathname === '/'} />

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

      <SearchArticles placeholder="search articles" isAbsolute={true} />
    </nav>
  );
}

const links = ['articles'];

const DGReveal = ({ isRevealed = false }: { isRevealed?: boolean }) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <Link href="/">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <TextReveal letter="D" word="anny" isHover={isHover || isRevealed} />
        <TextReveal letter="G" word="rimmig" isHover={isHover || isRevealed} />
      </div>
    </Link>
  );
};
