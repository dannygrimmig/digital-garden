import { Suspense } from 'react';
import { ArticlesPage } from '../ui/ArticlesPage';

export default function ArticlesPageContainer() {
  return (
    <main className="p-2 sm:p-4">
      <Suspense
        fallback={
          <div>
            <p>Articles Page Container Loading...</p>
          </div>
        }
      >
        <ArticlesPage />
      </Suspense>
    </main>
  );
}
