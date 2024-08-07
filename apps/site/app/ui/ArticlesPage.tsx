'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogGrid } from '../ui/BlogGrid/BlogGrid';

export function ArticlesPageChild() {
  // imported
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  // managed
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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
    return <p>Loading...</p>;
  }

  return <BlogGrid blogs={blogs} />;
}
