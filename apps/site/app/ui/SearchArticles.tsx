import * as React from 'react';
import { useRouter } from 'next/navigation';
import { TextReveal } from './TextReveal';

interface SearchProps {
  placeholder: string;
  isAbsolute?: boolean;
}

const SearchArticles: React.FC<SearchProps> = ({
  placeholder,
  isAbsolute = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isHover, setIsHover] = React.useState(false);
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/articles?search=${encodeURIComponent(searchTerm)}`);
    if (isAbsolute) {
      setIsOpen(false);
    }
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

  if (isAbsolute) {
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
          <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 z-50 flex justify-center items-center p-4">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-slate-900 rounded-full hover:bg-slate-800 text-white"
            >
              <span className="text-lg font-thin">X</span>
            </button>

            <form
              onSubmit={(e) => handleSearch(e)}
              className="flex p-2 gap-2 w-full sm:w-auto sm:min-w-96 border-b-2 border-sky-900"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={placeholder}
                className="p-4 border-none outline-none flex-1 sm:text-3xl bg-inherit"
                ref={inputRef}
              />

              <button
                type="submit"
                className="p-2 bg-sky-900 text-xs text-white rounded-full hover:bg-sky-600"
              >
                search
              </button>
            </form>
          </div>
        )}
      </>
    );
  }

  return (
    <form onSubmit={(e) => handleSearch(e)} className="flex gap-2 max-w-96">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 py-1 px-2 rounded-md w-full"
      />
    </form>
  );
};

export default SearchArticles;
