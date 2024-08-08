'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogMetaData } from '@org/markdown';
import Breadcrumb from './Breadcrumb';
import { ArticleCardGrid } from './ArticleCards/ArticleCardGrid/ArticleCardGrid';
import SearchArticles from './SearchArticles';

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

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-2 mb-4">
        <Breadcrumb slug={search} />
        <SearchArticles placeholder="🔍" />
      </div>

      <ArticleCardGrid blogs={blogs} isLoading={loading} />
    </div>
  );
}
