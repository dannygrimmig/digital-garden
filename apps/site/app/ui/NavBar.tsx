'use client';
import * as React from 'react';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { TextReveal } from './TextReveal';

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

      <SearchInNav />
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

const SearchInNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/articles?search=${encodeURIComponent(searchTerm)}`);
    setIsOpen(false);
    setSearchTerm('');
  };

  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        <p>search</p>
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 z-50 flex justify-center items-center">
          <form onSubmit={(e) => handleSearch(e)} className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search articles"
              className="p-4 border border-blue-500 rounded"
              ref={inputRef}
            />

            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </>
  );
};
