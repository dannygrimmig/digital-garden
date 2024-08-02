'use client';
import { BlogMetaData } from '@org/markdown';
import * as React from 'react';
import { BlogCard } from '../BlogCard/BlogCard';

export function Search({ blogs }: { blogs: BlogMetaData[] }) {
  // managed
  const [search, setSearch] = React.useState<string>('');
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  // derived
  const possibleTags = getUniqueTags(blogs);

  const filteredArticles = blogs.filter((blog) => {
    const titleMatch = blog.title.toLowerCase().includes(search.toLowerCase());
    const tagsMatch =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => blog.tags.includes(tag));

    return titleMatch && tagsMatch;
  });

  // helpers
  const onSelectTag = (tag: string) => {
    setSelectedTags(
      (prevTags) =>
        prevTags.includes(tag)
          ? prevTags.filter((t) => t !== tag) // Remove the tag if already selected
          : [...prevTags, tag] // Add the tag if not selected
    );
  };

  return (
    <main className="p-2 sm:p-4">
      <div className="flex gap-2 flex-wrap mb-2 items-center">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          className="border border-black flex-1 p-1"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="flex gap-2 flex-1">
          {possibleTags.map((tag) => (
            <Tag
              key={tag}
              tag={tag}
              isSelected={selectedTags.includes(tag)}
              onChange={(tag) => onSelectTag(tag)}
            />
          ))}
        </ul>
      </div>

      <ul className="md:grid grid-cols-2 gap-2">
        {filteredArticles.map((blog) => (
          <li key={blog.path}>
            <BlogCard blog={blog} />
          </li>
        ))}
      </ul>
    </main>
  );
}

function Tag({
  tag,
  isSelected,
  onChange,
}: {
  tag: string;
  isSelected: boolean;
  onChange: (tag: string) => void;
}) {
  return (
    <div className="relative">
      <input
        type="checkbox"
        id={`tag-${tag}`}
        checked={isSelected}
        onChange={() => onChange(tag)}
        className={`w-full h-full absolute border-none`}
      />
      <label
        htmlFor={`tag-${tag}`}
        className={`text-xs relative font-mono text-white p-2 cursor-pointer rounded-sm flex gap-2 ${
          isSelected ? 'bg-sky-600 ' : 'bg-sky-800 hover:bg-sky-700'
        }`}
      >
        {tag} {isSelected && <p>x</p>}
      </label>
    </div>
  );
}

const getUniqueTags = (blogs: BlogMetaData[]): string[] => {
  // Get All
  const allTags = blogs.reduce<string[]>((acc, currBlog) => {
    return acc.concat(currBlog.tags);
  }, []);

  // Get Uniques
  const uniqueTags = [...new Set(allTags)];

  // Return
  return uniqueTags;
};
