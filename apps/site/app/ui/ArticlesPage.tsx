'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogGrid } from '../ui/BlogGrid/BlogGrid';
import { BlogMetaData } from '@org/markdown';

export function ArticlesPage() {
  // imported
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  // managed
  const [blogs, setBlogs] = useState<BlogMetaData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch(
        `/api/articles?search=${encodeURIComponent(search)}`
      );
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    }

    fetchBlogs();
  }, [search]);

  if (loading) {
    return (
      <div>
        <p>Blog Grid Loading</p>
      </div>
    );
  }

  return <BlogGrid blogs={blogs} />;
}
