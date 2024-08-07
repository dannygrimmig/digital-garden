import { Suspense } from 'react';
import { ArticlesPage } from '../ui/ArticlesPage';

export default function ArticlesPageContainer() {
  return (
    <main className="p-2 sm:p-4 min-h-[calc(100vh-74px)] flex flex-col">
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
