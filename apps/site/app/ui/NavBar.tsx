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
  const [isHover, setIsHover] = React.useState(false);
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/articles?search=${encodeURIComponent(searchTerm)}`);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleClose = () => {
    setSearchTerm('');
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <TextReveal isHover={isHover} letter="🔍" word="search" />
      </button>

      {isOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-white bg-opacity-95 z-50 flex justify-center items-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-slate-900 rounded-full hover:bg-slate-800 text-white"
          >
            <span className="text-lg font-thin">X</span>
          </button>

          <form
            onSubmit={(e) => handleSearch(e)}
            className="flex gap-2 sm:min-w-96 border-b-2 border-sky-900 p-4"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search articles"
              className="p-4 border-none outline-none flex-1 sm:text-3xl bg-inherit"
              ref={inputRef}
            />

            <button
              type="submit"
              className="p-2 bg-sky-900 text-white rounded-full hover:bg-sky-600"
            >
              search
            </button>
          </form>
        </div>
      )}
    </>
  );
};
