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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        // Fetch blogs from the API
        const response = await fetch(
          `/api/articles?search=${encodeURIComponent(search)}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the response JSON
        const data = await response.json();

        // Update state with the fetched blogs
        setBlogs(data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
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

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1">
        <BlogGrid blogs={blogs} />
      </div>
    </div>
  );
}
