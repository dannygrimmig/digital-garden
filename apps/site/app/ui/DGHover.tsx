'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export const NameReveal = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link href="/">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <WordReveal letter="D" word="anny" isHover={isHover} />
        <WordReveal letter="G" word="rimmig" isHover={isHover} />
      </div>
    </Link>
  );
};

export const WordReveal = ({
  letter,
  word,
  isHover,
}: {
  letter: string;
  word: string;
  isHover: boolean;
}) => {
  return (
    <div className="w-max relative flex overflow-hidden">
      <p className="letter bg-white z-10">{letter}</p>
      <p
        className={`transition duration-500 ${
          isHover ? '' : 'sm:-translate-x-full'
        }`}
      >
        {word}
      </p>
    </div>
  );
};
