import { BlogMetaData } from '@org/markdown';

export function BlogGrid({ blogs }: { blogs: BlogMetaData[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {blogs.length === 0 ? (
        <li>No blogs found</li>
      ) : (
        blogs.map((blog) => (
          <li key={blog.path}>
            <p>{blog.title}</p>
          </li>
        ))
      )}
    </ul>
  );
}
