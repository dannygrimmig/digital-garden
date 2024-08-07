'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BlogGrid } from '../ui/BlogGrid/BlogGrid';
import { BlogMetaData } from '@org/markdown';
import Breadcrumb from './Breadcrumb';

export function ArticlesPage() {
  // imported
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const router = useRouter();

  // managed
  const [blogs, setBlogs] = useState<BlogMetaData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(search);

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
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/articles?search=${encodeURIComponent(searchTerm)}`);
    setSearchTerm('');
  };

  return (
    <div>
      <div className="flex flex-col gap-2 mb-4">
        <Breadcrumb slug={search} />
        <form onSubmit={(e) => handleSearch(e)} className="flex gap-2 max-w-96">
          <input
            type="text"
            placeholder={'🔍'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 py-1 px-2 rounded-md w-full"
          />
        </form>
      </div>

      <BlogGrid blogs={blogs} isLoading={loading} />
    </div>
  );
}
