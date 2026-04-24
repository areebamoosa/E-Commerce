const SkinnSkeleton = () => {
  return (
    <div className="min-h-screen bg-black animate-pulse">
      <div className="h-14 w-full bg-zinc-800" />

      <div className="pt-[130px] sm:pt-[200px]">
        <div className="h-7 sm:h-10 lg:h-12 w-36 sm:w-56 lg:w-72 bg-zinc-700 rounded ml-8 sm:ml-12 lg:ml-30" />
      </div>

      <div className="flex justify-between items-center m-6 sm:m-10 lg:m-15">
        <div className="h-5 sm:h-7 w-24 sm:w-36 bg-zinc-700 rounded mt-5 sm:ml-4 lg:ml-18" />
        <div className="h-9 sm:h-11 w-[160px] sm:w-[170px] bg-zinc-700 rounded-md mt-5" />
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 sm:px-10 lg:px-16">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="w-full h-[200px] sm:h-[280px] bg-zinc-800 rounded-md" />
            <div className="h-4 bg-zinc-700 rounded w-3/4" />
            <div className="h-4 bg-zinc-700 rounded w-1/2" />
            <div className="h-8 bg-zinc-700 rounded w-full mt-2" />
          </div>
        ))}
      </div>

      <div className="mt-50 h-56 w-full bg-zinc-900" />
    </div>
  );
};

export default SkinnSkeleton;
