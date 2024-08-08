import { Tag } from './Tag';

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  );
}
