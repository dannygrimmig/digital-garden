import { BlogMetaData, getBlogMetaData } from '@org/markdown';
import Link from 'next/link';

export default function Index() {
  const blogs: BlogMetaData[] = getBlogMetaData();

  return (
    <main>
      <nav className="bg-slate-400">
        <h1>Home</h1>
      </nav>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>

        <ul className="list-disc">
          {blogs.map((blog) => (
            <li key={blog.path} className="mb-2">
              <Link href={`/articles/${blog.path}`}>
                <p className="text-blue-500 hover:underline">{blog.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
