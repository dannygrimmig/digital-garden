import { BlogMetaData } from '@org/markdown';
import { BlogCard } from '../BlogCard/BlogCard';

export function BlogGrid({ blogs }: { blogs: BlogMetaData[] }) {
  return (
    <ul className="h-full flex flex-col gap-2">
      {blogs.length === 0 ? (
        <li>No blogs found</li>
      ) : (
        blogs.map((blog) => (
          <li key={blog.path} className="min-h-50">
            <BlogCard blog={blog} />
          </li>
        ))
      )}
    </ul>
  );
}
