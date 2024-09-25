import { Tag } from './Tag';

export function TagList({
  tags,
  searchTag = false,
}: {
  tags: string[];
  searchTag?: boolean;
}) {
  return (
    <ul className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag tag={tag} searchTag={searchTag} />
        </li>
      ))}
    </ul>
  );
}
