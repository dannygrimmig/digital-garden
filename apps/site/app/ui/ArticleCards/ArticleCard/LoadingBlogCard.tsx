export function LoadingBlogCard() {
  return (
    <div className="h-full grid grid-cols-4 grid-rows-2 sm:grid-rows-1 gap-2 rounded-md p-2 animate-pulse">
      <figure className="bg-gray-300 relative col-span-4 sm:col-span-2 lg:col-span-1 rounded-md row-span-1 sm:min-h-max"></figure>
      <article className="col-span-4 sm:col-span-2 lg:col-span-3">
        <div className="flex flex-col justify-around gap-2 h-full p-2">
          <div className="flex flex-col gap-2">
            <div className="bg-gray-300 text-transparent px-2 py-1 w-max text-xs rounded-sm h-4"></div>
            <div className="bg-gray-300 text-transparent w-3/4 h-6"></div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative h-10 w-10 bg-gray-300 rounded-full"></div>
            <div className="flex flex-col gap-2 font-thin">
              <div className="bg-gray-300 h-4 w-24"></div>
              <div className="bg-gray-300 h-3 w-16"></div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
