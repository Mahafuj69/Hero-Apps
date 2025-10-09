

const SkeletonLoader = ({count = 8}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 ' >
      {Array.from({length: count}).map((__,index)=>(   
        <div key={index} className="flex  flex-col gap-4">
   <div className="skeleton h-48 w-full"></div>
   <div className="skeleton h-4 w-28"></div>
   <div className="skeleton h-4 w-full"></div>
</div>))}
    </div>
  );
};

export default SkeletonLoader;
