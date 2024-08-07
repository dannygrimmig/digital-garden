import { Suspense } from 'react';
import { ArticlesPageChild } from '../ui/ArticlesPage';

export default function ArticlesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticlesPageChild />
    </Suspense>
  );
}
