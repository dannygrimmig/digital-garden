export function Tag({ tag }: { tag: string }) {
  return (
    <p className="bg-sky-900 text-white px-2 py-1 w-max text-xs rounded-sm">
      {tag}
    </p>
  );
}
