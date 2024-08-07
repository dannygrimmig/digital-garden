'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogGrid } from '../ui/BlogGrid/BlogGrid';

export function ArticlesPage() {
  // imported
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  console.log(search);

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
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return <BlogGrid blogs={blogs} />;
}
