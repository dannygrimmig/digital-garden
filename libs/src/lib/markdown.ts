import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export function getParsedFileContentBySlug(
  fileName: string,
  postsPath: string
): { frontMatter: any; content: any } {
  const postFilePath = join(postsPath, `${fileName}.md`);
  const fileContent = readFileSync(postFilePath);

  const { data, content } = matter(fileContent);

  return {
    frontMatter: data,
    content: content,
  };
}

export async function renderMarkdown(markdownContent: string) {
  return marked(markdownContent || '');
}

export interface BlogMetaData {
  path: string;
  title: string;
  author: string;
  date: string;
}

const POSTS_PATH = join(process.cwd(), '_articles');
export function getBlogMetaData(): BlogMetaData[] {
  const postFiles = readdirSync(POSTS_PATH);

  const blogMetaData = postFiles.map((fileName) => {
    const fileContent = readFileSync(join(POSTS_PATH, fileName), 'utf8');
    const { data } = matter(fileContent);

    return {
      path: fileName.replace(/\.mdx?$/, ''), // Remove extension for slug usage
      title: data.title || 'Untitled',
      author: data.author || 'Unknown',
      date: data.date || 'No date',
    };
  });

  return blogMetaData;
}
