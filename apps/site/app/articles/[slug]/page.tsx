import { join } from 'path';
import { readdirSync } from 'fs';
import styles from './page.module.css';
import {
  formatDate,
  getParsedFileContentBySlug,
  renderMarkdown,
} from '@org/markdown';

const POSTS_PATH = join(process.cwd(), '_articles');

export default async function Slug({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Parse the markdown content
  const articleMarkDownContent = getParsedFileContentBySlug(`${slug}.md`);
  const { frontMatter, content } = articleMarkDownContent;

  // Serialize the markdown content
  const htmlContent = await renderMarkdown(content);

  return (
    <main className="p-2 sm:p-4 max-w-6xl m-auto">
      <header className="mb-10 font-thin">
        <h1 className="text-5xl">{frontMatter.title}</h1>
        <p>{frontMatter.exerpt}</p>
      </header>

      <section className="sm:grid grid-cols-4 gap-2">
        <div className="col-span-1 font-thin">
          <div className="p-4 border border-black rounded-md mb-4 ">
            <h2>Meta Data</h2>
            <MetaDataDetail label="author" detail={frontMatter.author} />
            <MetaDataDetail
              label="date"
              detail={formatDate(frontMatter.date)}
            />
          </div>
          <div className="p-4">
            <h2>Share</h2>
            🚧 work in progress...
          </div>
        </div>

        <div className="col-span-3 p-4">
          <div
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>
    </main>
  );
}

function MetaDataDetail({
  label,
  detail = '',
}: {
  label: string;
  detail?: string;
}) {
  return (
    <div>
      <label className="text-xs font-bold">{label}</label>
      <p className="">{detail}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const paths = readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.md$/, ''))
    .map((slug) => ({ slug }));

  return paths;
}
