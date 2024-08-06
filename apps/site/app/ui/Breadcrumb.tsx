import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ slug }: { slug: string }) => {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: slug, path: `/articles/${slug}` },
  ];

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center text-sm text-gray-700">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center text-sm">
            <Link href={item.path}>
              <p className="hover:text-blue-600">{item.name}</p>
            </Link>

            {index < breadcrumbItems.length - 1 && (
              <svg
                className="w-4 h-4 mx-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
