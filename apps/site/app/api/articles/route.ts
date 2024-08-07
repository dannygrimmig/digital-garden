import { NextResponse } from 'next/server';
import { getBlogMetaData } from '@org/markdown';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';

  //  Get Blogs
  const blogs = getBlogMetaData();

  // Filter Blogs
  const filteredBlogs = blogs.filter((blog) => {
    const lowerCaseSearchTerm = search.toLowerCase();
    return (
      blog.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      blog.author.toLowerCase().includes(lowerCaseSearchTerm) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm))
    );
  });

  return NextResponse.json(filteredBlogs);
}
