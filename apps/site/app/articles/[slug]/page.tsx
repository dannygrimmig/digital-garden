import { join } from 'path';
import { readdirSync } from 'fs';
import styles from './page.module.css';
import { getParsedFileContentBySlug, renderMarkdown } from '@org/markdown';
import { format } from 'date-fns';
import { BlogCardAuthor } from '../../ui/ArticleCards/ArticleCard/ArticleCard';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../../ui/Breadcrumb';
import { TagList } from '../../ui/Tags/TagList';

const POSTS_PATH = join(process.cwd(), '_articles');

export default async function Slug({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Parse the markdown content
  const articleMarkDownContent = getParsedFileContentBySlug(`${slug}.md`);
  const { frontMatter, content } = articleMarkDownContent;

  // Serialize the markdown content
  const htmlContent = await renderMarkdown(content);

  return (
    <main className="py-8 px-2 sm:px-4 max-w-6xl m-auto">
      <header className="mb-10 flex flex-col gap-2">
        <Breadcrumb slug={slug} />

        <h1 className="text-3xl sm:text-5xl font-thin">{frontMatter.title}</h1>

        <p className="font-light">{frontMatter.exerpt}</p>

        <TagList tags={frontMatter.tags || []} searchTag={true} />
      </header>

      <section className="sm:grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <Link href={'/author/dannygrimmig'}>
            <div className="sticky top-[72px] p-4 sm:hover:outline hover:outline-slate-800 rounded-md">
              <BlogCardAuthor
                author={frontMatter.author || ''}
                date={formatDate(frontMatter.date)}
              />
            </div>
          </Link>
        </div>

        <div className="col-span-3 p-4">
          <div className="bg-gray-200 relative h-[500px]">
            <Image
              alt={frontMatter.image?.citation || ''}
              src={frontMatter.image?.src || ''}
              fill
              className="rounded-md"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="text-gray-400 font-thin italic mb-4">
            {frontMatter.image?.citation}
          </p>

          <div
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>
    </main>
  );
}

function formatDate(dateString?: string): string {
  const date = new Date(dateString || '');
  return format(date, 'MMMM dd, yyyy'); // Format as 'July 31, 2024'
}

export async function generateStaticParams() {
  const paths = readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.md$/, ''))
    .map((slug) => ({ slug }));

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const { slug } = params;

  // fetch data
  const articleMarkDownContent = getParsedFileContentBySlug(`${slug}.md`);
  const { frontMatter } = articleMarkDownContent;

  return {
    title: frontMatter.title,
    description: frontMatter.exerpt,
  };
}
