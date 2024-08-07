import { Suspense } from 'react';
import { ArticlesPage } from '../ui/ArticlesPage';
import { BlogGrid } from '../ui/BlogGrid/BlogGrid';

export default function ArticlesPageContainer() {
  return (
    <main className="p-2 sm:p-4">
      <Suspense fallback={<BlogGrid blogs={[]} isLoading={true} />}>
        <ArticlesPage />
      </Suspense>
    </main>
  );
}
