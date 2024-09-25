import Link from 'next/link';

export function Tag({
  tag,
  searchTag = false,
}: {
  tag: string;
  searchTag?: boolean;
}) {
  const style = 'bg-sky-900 text-white px-2 py-1 w-max text-xs rounded-sm';
  if (searchTag) {
    return (
      <Link
        href={`/articles?search=${encodeURIComponent(tag)}`}
        className={`${style} hover:bg-sky-600`}
      >
        {tag}
      </Link>
    );
  } else {
    return <p className={style}>{tag}</p>;
  }
}
