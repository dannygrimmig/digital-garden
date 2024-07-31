import { BlogMetaData, getBlogMetaData } from '@org/markdown';
import Link from 'next/link';

export default function Index() {
  const blogs: BlogMetaData[] = getBlogMetaData();

  return (
    <main className="md:grid grid-cols-5 p-2 sm:p-4 min-h-screen max-w-7xl m-auto">
      <div className="col-span-2 p-2">
        <div className="grid grid-rows-3 h-full">
          <div className="bg-gray-200 animate-pulse relative row-span-2 rounded-lg"></div>

          <div className="row-span-1">
            <BlogCardDetails blog={largeblog} />
          </div>
        </div>
      </div>

      <div className="col-span-3 p-2">
        <ul className="h-full flex flex-col gap-2">
          {sampleBlogs.map((blog) => (
            <li key={blog.path} className="flex-1">
              <BlogCard blog={blog} />
            </li>
          ))}
          <li className="italic font-semibold text-xs">
            see all articles &gt;
          </li>
        </ul>
      </div>
    </main>
  );
}

export function BlogCard({ blog }: { blog: BlogMetaData }) {
  return (
    <div className="h-full grid grid-cols-4 gap-2">
      <div className="bg-gray-200 animate-pulse relative col-span-2 lg:col-span-1 rounded-lg"></div>

      <div className="col-span-2 lg:col-span-3">
        <BlogCardDetails blog={blog} />
      </div>
    </div>
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
      <div className="bg-gray-200 h-10 w-10 animate-pulse rounded-full border border-gray-500 outline outline-gray-500 outline-offset-2"></div>
      <div className="flex flex-col gap-2">
        <p>{author}</p>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
}

const largeblog: BlogMetaData = {
  path: '/path',
  title: 'This Article Goes Front and Center',
  author: 'Danny Grimmig',
  date: 'July 31, 2024',
  tags: ['golf'],
};
const sampleBlogs: BlogMetaData[] = [
  {
    path: '/path',
    title: 'First Article in The List',
    author: 'Danny Grimmig',
    date: 'April 17th, 2024',
    tags: ['web dev'],
  },
  {
    path: '/path',
    title: 'Article Numero Dos',
    author: 'Danny Grimmig',
    date: 'May 25th, 2024',
    tags: ['react'],
  },
  {
    path: '/path',
    title: 'Whoa... I Have Written Three Articles',
    author: 'Danny Grimmig',
    date: 'December 25th, 2024',
    tags: ['swe'],
  },
];
