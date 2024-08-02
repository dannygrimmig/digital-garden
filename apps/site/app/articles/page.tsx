import { BlogMetaData, getBlogMetaData } from '@org/markdown';
import { Search } from '../ui/Search/Search';

export default function ArticlesPage() {
  // imported
  const blogs: BlogMetaData[] = getBlogMetaData();

  return <Search blogs={blogs} />;
}
