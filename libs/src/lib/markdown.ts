import { readFileSync } from 'fs';
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
