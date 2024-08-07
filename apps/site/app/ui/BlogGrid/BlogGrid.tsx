import * as React from 'react';

import { BlogMetaData } from '@org/markdown';
import { BlogCard } from '../BlogCard/BlogCard';

export function BlogGrid({ blogs }: { blogs: BlogMetaData[] }) {
  return (
    <ul className="md:grid grid-cols-2 gap-2">
      {blogs.map((blog) => (
        <li key={blog.path}>
          <BlogCard blog={blog} />
        </li>
      ))}
    </ul>
  );
}
