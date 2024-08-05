import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POSTS_PATH = join(process.cwd(), '_articles');

const getFileContent = (fileName: string) =>
  readFileSync(join(POSTS_PATH, fileName), 'utf8');

export function getParsedFileContentBySlug(fileName: string): {
  frontMatter: FrontMatter;
  content: string;
} {
  const fileContent = getFileContent(fileName);
  const { data, content } = matter(fileContent);

  return {
    frontMatter: data,
    content: content,
  };
}

export async function renderMarkdown(markdownContent: string) {
  return marked(markdownContent || '');
}

export function getBlogMetaData(): BlogMetaData[] {
  const postFiles = readdirSync(POSTS_PATH);

  const blogMetaData = postFiles.map((fileName) => {
    return getBlogMetaDataByFileName(fileName);
  });

  blogMetaData.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // For descending order; use dateA - dateB for ascending order
  });

  return blogMetaData;
}

export function getBlogMetaDataByFileName(fileName: string): BlogMetaData {
  const fileContent = getFileContent(fileName);
  const { data } = matter(fileContent);

  return {
    path: fileName.replace(/\.mdx?$/, ''), // Remove extension for slug usage
    title: data['title'] || 'Untitled',
    author: data['author'] || 'Unknown',
    date: data['date'] || 'No date',
    tags: data['tags'] || [],
    image: data['image'] || { src: '', citation: '' },
  };
}

interface FrontMatter {
  title?: string;
  exerpt?: string;
  date?: string;
  author?: string;
  tags?: string[];
  image?: { src?: string; citation?: string };
}

export interface BlogMetaData {
  path: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  image: { src: string; citation: string };
}
