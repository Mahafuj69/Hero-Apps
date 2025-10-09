import  { useEffect, useState } from 'react';
import downloads from '../assets/icon-downloads.png';
import ratings from '../assets/icon-ratings.png';
import { toast } from "react-toastify";
const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(apps);
    }, []);

const sortedApp = (
    () => {
    if (sortOrder === 'size-asc') {
        return [...installedApps].sort((a, b) => a.size - b.size);
    } else if (sortOrder === 'size-desc') {
        return [...installedApps].sort((a, b) => b.size - a.size);
    } else {
        return installedApps;
    }
})();



    const hendleUninstall = (appId) => {
        let installedApps = [];
        try {
            installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
            if (!Array.isArray(installedApps)) installedApps = [];
        } catch {
            installedApps = [];
        }

        const updatedInstalledApps = installedApps.filter((app) => app.id !== appId);
        localStorage.setItem("installedApps", JSON.stringify(updatedInstalledApps));
        setInstalledApps(updatedInstalledApps);
        toast.success(`App Uninstalled Successfully!`);
    }


    return (
    <div className='px-4 md:px-8 lg:px12 py-4 md:py-8 lg:py12' >
        
            <div className='flex flex-col text-center mt-10 mb-10'>
                <h1 className='text-5xl font-bold '>Your Installed Apps</h1>
                <p className=' mt-4 text-xl text-slate-500'>Explore All Trending Apps on the Market developed by us </p>
            </div>

            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold' > ({installedApps.length}) Apps Found </h1>

                <label className='form-control w-full max-w-xs'>
                    <select className='select select-bordered' value={sortOrder} onChange={a => setSortOrder(a.target.value)}>
                    <option value="none">Sort By Size</option>
                    <option value="size-asc">Low-&gt;High</option>
                    <option value="size-desc"> High-&gt;Low</option>
                    </select>
                </label>

            </div>
            <div>
                {sortedApp.map(app =>
                   <div className='flex justify-center m-4 gap-2'>
                    <div className="flex  w-full  max-w-2xl items-center rounded-lg bg-white p-4 shadow-sm" key={app.title}>
                        {app.image ? (
                            <img src={app.image} alt="" className="h-16 w-16 flex-shrink-0 rounded-xl object-cover mr-4" />
                        ) : (
                            <div className="h-16 w-16 flex-shrink-0 rounded-xl bg-gray-200 mr-4"></div>
                        )}

                        <div className="flex-grow min-w-0">
                            <p className="truncate text-base font-medium text-gray-800">{app.title}</p>

                            <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                    <img src={downloads} alt="" className='h-4' />
                                    <span>{app.downloads}</span>
                                </div>

                                <div className="flex items-center">
                                    <img src={ratings} alt="" className='h-4' />
                                    <span>{app.ratingAvg}</span>
                                </div>

                                 <div className="hidden sm:block"> 
                                      <span>{app.size} MB</span>
                                 </div>

                            </div>
                        </div>


                        <button
                            onClick={() => hendleUninstall(app.id)}
                            className="ml-4 flex-shrink-0 rounded-md bg-[#20dc6c] px-6 py-2 text-sm font-medium text-white transition hover:bg-[#1caf58]">
                            Uninstall
                        </button>

                    </div>
                   </div> )}
            </div>
        </div>
    );
};

export default Installation;
