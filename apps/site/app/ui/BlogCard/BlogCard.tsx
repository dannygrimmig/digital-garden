import { BlogMetaData } from '@org/markdown';
import Image from 'next/image';
import Link from 'next/link';
import profile from '../../../public/profile-image.png';
import { formatDate } from '../../utils/utils';

export function BlogCard({ blog }: { blog: BlogMetaData }) {
  return (
    <Link
      href={`/articles/${blog.path}`}
      className="h-full min-h-40 grid grid-cols-4 grid-rows-2 sm:grid-rows-1 gap-2 sm:hover:outline hover:outline-slate-800 rounded-md p-2"
    >
      <figure className="bg-gray-200 relative col-span-4 sm:col-span-2 lg:col-span-1 rounded-md row-span-1 sm:min-h-max">
        <Image
          alt={blog.image.citation}
          src={blog.image.src}
          fill
          className="rounded-md"
          style={{ objectFit: 'cover' }}
        />
      </figure>

      <article className="col-span-4 sm:col-span-2 lg:col-span-3">
        <BlogCardDetails blog={blog} />
      </article>
    </Link>
  );
}

export function BlogCardDetails({ blog }: { blog: BlogMetaData }) {
  return (
    <div className="flex flex-col justify-around gap-2 h-full p-2">
      <div className="flex flex-col gap-2">
        <p className="bg-sky-900 text-white px-2 py-1 w-max text-xs rounded-sm">
          {blog.tags[0]}
        </p>
        <h3 className="text-xl">{blog.title}</h3>
      </div>

      <BlogCardAuthor author={blog.author} date={blog.date} />
    </div>
  );
}

export function BlogCardAuthor({
  author,
  date,
}: {
  author: string;
  date: string;
}) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative h-10 w-10">
        <Image alt="author" src={profile} fill className="rounded-full" />
      </div>

      <div className="flex flex-col gap-2 font-thin">
        <p>{author}</p>
        <p className="text-xs">{formatDate(date)}</p>
      </div>
    </div>
  );
}
