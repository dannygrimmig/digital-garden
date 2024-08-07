import { BlogMetaData } from '@org/markdown';
import { BlogCard } from '../BlogCard/BlogCard';

export function BlogGrid({
  blogs,
  isLoading,
}: {
  blogs: BlogMetaData[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <ul className="flex flex-col gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="flex-1">
            <BlogCard blog={{} as BlogMetaData} isLoading={true} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {blogs.length === 0 ? (
        <li>No blogs found</li>
      ) : (
        blogs.map((blog) => (
          <li key={blog.path} className="flex-1">
            <BlogCard blog={blog} isLoading={false} />
          </li>
        ))
      )}
    </ul>
  );
}
