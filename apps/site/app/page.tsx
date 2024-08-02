import {
  BlogMetaData,
  getBlogMetaData,
  getBlogMetaDataByFileName,
} from '@org/markdown';
import Link from 'next/link';
import { BlogCard, BlogCardDetails } from './ui/BlogCard/BlogCard';

export default function Index() {
  const mainArticle = getBlogMetaDataByFileName('digital_garden.md');
  const blogs: BlogMetaData[] = getBlogMetaData();

  // derived
  const first3 = blogs.slice(0, 3);

  return (
    <main className="md:grid grid-cols-5 p-2 sm:p-4 min-h-[calc(100vh-74px)] m-auto text-slate-800">
      <div className="col-span-2 p-2">
        <Link href={`/articles/${mainArticle.path}`}>
          <div className="grid grid-rows-3 h-full sm:hover:outline hover:outline-slate-800 rounded-md p-2">
            <div className="bg-gray-200 animate-pulse relative row-span-2 rounded-md"></div>

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
