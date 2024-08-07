import { NextResponse } from 'next/server';
import { getBlogMetaData } from '@org/markdown';

// Define the GET request handler for the API route
export async function GET(request: Request) {
  // Create a URL object from the incoming request's URL
  const url = new URL(request.url);

  // Extract the 'search' query parameter from the URL
  const search = url.searchParams.get('search') || '';

  // Retrieve the list of blog metadata using the provided utility function
  const blogs = getBlogMetaData();

  // If search is empty, return all blogs without filtering
  if (!search) {
    return NextResponse.json(blogs);
  }

  // Filter the blogs based on the search term
  const filteredBlogs = blogs.filter((blog) => {
    // Convert the search term to lowercase for case-insensitive comparison
    const lowerCaseSearchTerm = search.toLowerCase();

    // Check if any of the blog's attributes include the search term
    return (
      blog.title.toLowerCase().includes(lowerCaseSearchTerm) || // Check if the title includes the search term
      blog.author.toLowerCase().includes(lowerCaseSearchTerm) || // Check if the author includes the search term
      blog.tags.some((tag) => tag.toLowerCase().includes(lowerCaseSearchTerm)) // Check if any tag includes the search term
    );
  });

  // Respond with the filtered list of blogs in JSON format
  return NextResponse.json(filteredBlogs);
}
