import { Suspense } from 'react';
import { ArticlesPage } from '../ui/ArticlesPage';
import { ArticleCardGrid } from '../ui/ArticleCards/ArticleCardGrid/ArticleCardGrid';

export default function ArticlesPageContainer() {
  return (
    <main className="p-4 sm:p-8">
      <Suspense fallback={<ArticleCardGrid blogs={[]} isLoading={true} />}>
        <ArticlesPage />
      </Suspense>
    </main>
  );
}
