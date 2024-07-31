import {
  BlogMetaData,
  getBlogMetaData,
  getBlogMetaDataByFileName,
} from '@org/markdown';
import Link from 'next/link';
import profile from '../public/profile-image.png';
import Image from 'next/image';

export default function Index() {
  const mainArticle = getBlogMetaDataByFileName('digital_garden.md');
  const blogs: BlogMetaData[] = getBlogMetaData();

  // derived
  const first3 = blogs.slice(0, 3);

  return (
    <main className="md:grid grid-cols-5 p-2 sm:p-4 min-h-screen max-w-7xl m-auto">
      <div className="col-span-2 p-2">
        <Link href={`/articles/${mainArticle.path}`}>
          <div className="grid grid-rows-3 h-full">
            <div className="bg-gray-200 animate-pulse relative row-span-2 rounded-lg"></div>

            <div className="row-span-1">
              <BlogCardDetails blog={mainArticle} />
            </div>
          </div>
        </Link>
      </div>

      <div className="col-span-3 p-2">
        <ul className="h-full flex flex-col gap-2">
          {first3.map((blog) => (
            <li key={blog.path} className="flex-1">
              <BlogCard blog={blog} />
            </li>
          ))}
          <li className="underline italic font-semibold text-xs">
            <Link href="/articles">see all articles &gt;</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export function BlogCard({ blog }: { blog: BlogMetaData }) {
  return (
    <Link href={`/articles/${blog.path}`}>
      <div className="h-full grid grid-cols-4 gap-2">
        <div className="bg-gray-200 animate-pulse relative col-span-2 lg:col-span-1 rounded-lg"></div>

        <div className="col-span-2 lg:col-span-3">
          <BlogCardDetails blog={blog} />
        </div>
      </div>
    </Link>
  );
}

export function BlogCardDetails({ blog }: { blog: BlogMetaData }) {
  return (
    <div className="flex flex-col justify-around gap-2 h-full p-2">
      <div className="flex flex-col gap-2">
        <p className="bg-slate-800 text-white px-2 py-1 w-max text-xs rounded-sm">
          {blog.tags[0]}
        </p>
        <h3 className="font-bold text-xl">{blog.title}</h3>
      </div>
      <BlogCardAuthor author={blog.author} date="April 17th, 2024" />
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
      <div className="flex flex-col gap-2">
        <p>{author}</p>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
}
