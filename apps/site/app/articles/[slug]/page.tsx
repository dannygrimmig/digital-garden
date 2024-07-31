import { join } from 'path';
import { readdirSync } from 'fs';
import styles from './page.module.css';
import { getParsedFileContentBySlug, renderMarkdown } from '@org/markdown';

const POSTS_PATH = join(process.cwd(), '_articles');

export default async function Slug({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Parse the markdown content
  const articleMarkDownContent = getParsedFileContentBySlug(slug, POSTS_PATH);
  const { frontMatter, content } = articleMarkDownContent;

  // Serialize the markdown content
  const htmlContent = await renderMarkdown(content);

  return (
    <div className={styles.container}>
      <h1 className="text-4xl font-semibold">{frontMatter.title}</h1>
      <h3 className="font-light">by {frontMatter.author}</h3>

      {/* Render HTML content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export async function generateStaticParams() {
  const paths = readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.md/, ''))
    .map((slug) => ({ slug }));

  return paths;
}
