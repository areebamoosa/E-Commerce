const ProductGridSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-14 w-full bg-gray-200" />

      <div className="relative w-full h-[250px] sm:h-[550px] overflow-hidden">
        <div className="w-full h-full bg-gray-200" />
        <div className="absolute sm:bottom-[40px] sm:left-[7%] left-[3%] bottom-[20px] h-5 sm:h-7 w-32 sm:w-48 bg-gray-300 rounded" />
      </div>

      <div className="flex sm:gap-5 gap-5 justify-start items-start m-8 mt-10 sm:m-10 lg:ml-15 overflow-x-auto">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="sm:w-[130px] sm:h-[130px] w-[60px] h-[60px] rounded-md flex justify-center items-center flex-col shrink-0"
          >
            <div className="w-full h-full bg-gray-200 rounded-md" />
            <div className="h-3 sm:h-4 w-14 sm:w-24 mt-2 bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center m-6 sm:m-10 lg:m-15">
        <div className="h-5 sm:h-7 w-24 sm:w-36 bg-gray-200 rounded mt-5 sm:ml-4 lg:ml-18" />
        <div className="h-9 sm:h-11 w-[160px] sm:w-[170px] bg-gray-200 rounded-md mt-5 sm:mr-2 lg:mr-18" />
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 sm:px-10 lg:px-16">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="w-full h-[200px] sm:h-[280px] bg-gray-200 rounded-md" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-8 bg-gray-200 rounded w-full mt-2" />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center items-center">
        <div className="h-10 w-32 bg-gray-200 rounded-md" />
      </div>

      <div className="mt-12 h-56 w-full bg-gray-200" />
    </div>
  );
};

export default ProductGridSkeleton;