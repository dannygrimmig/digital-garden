export function TextReveal({
  letter,
  word,
  isHover,
}: {
  letter: string;
  word: string;
  isHover: boolean;
}) {
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
}
