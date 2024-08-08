import { BlogMetaData } from '@org/markdown';
import { ArticleCard } from '../ArticleCard/ArticleCard';

export function ArticleCardGrid({
  blogs,
  isLoading,
}: {
  blogs: BlogMetaData[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <ul className="flex flex-col gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className="flex-1">
            <ArticleCard blog={{} as BlogMetaData} isLoading={true} />
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
            <ArticleCard blog={blog} isLoading={false} />
          </li>
        ))
      )}
    </ul>
  );
}
