
const Banner = () => {


    return (
         <div className="bg-gradient-to-r from-violet-600 to-indigo-600 w-full h-[410px] mx-auto flex flex-col justify-start items-center gap-10 p-20">
            <h2 className="text-3xl font-bold tracking-tight text-center text-white sm:text-4xl">
                Trusted By Millions, Built For You
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-36 text-center w-full">
                <div className="flex flex-col">
                    <div className="text-base leading-7 text-purple-200">Total Downloads</div>
                    <div className="order-first text-5xl font-semibold tracking-tight text-white">
                        29.6M
                    </div>
                    <p className="mt-1 text-sm leading-6 text-purple-300">21% More Than Last Month</p>
                </div>
                <div className="flex flex-col">
                    <div className="text-base leading-7 text-purple-200">Total Reviews</div>
                    <div className="order-first text-5xl font-semibold tracking-tight text-white">
                        906K
                    </div>
                    <p className="mt-1 text-sm leading-6 text-purple-300">46% More Than Last Month</p>
                </div>
                <div className="flex flex-col">
                    <div className="text-base leading-7 text-purple-200">Active Apps</div>
                    <div className="order-first text-5xl font-semibold tracking-tight text-white">
                        132+
                    </div>
                    <p className="mt-1 text-sm leading-6 text-purple-300">31 More Will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;