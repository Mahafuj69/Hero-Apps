import { useState, useEffect } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import SkeletonLoader from '../Components/SkeletonLoader';
import { Link } from 'react-router';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    if (!search) setFilteredApps(apps);
  }, [apps, search]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearching(true);

    setTimeout(() => {
      const term = value.trim().toLocaleLowerCase();
      const result = term
        ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
        : apps;
      setFilteredApps(result);
      setSearching(false);
    }, 2000);
  };

  if (loading) return <SkeletonLoader count={20} />;

  return (
    <div className='px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
      <div className='flex flex-col text-center mt-10 mb-10'>
        <h1 className='text-3xl md:text-5xl font-bold'>Our All Application</h1>
        <p className='mt-4 text-lg md:text-xl text-slate-500'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
        <h1 className='text-xl md:text-2xl font-bold'>({filteredApps.length}) Apps Found</h1>
        <label className='input w-full md:w-auto'>
          <input
            value={search}
            onChange={handleSearchChange}
            type='search'
            placeholder='Search Apps'
            className='w-full'
          />
        </label>
      </div>
      {searching ? (
        <div className="flex justify-center my-4">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <>
          {filteredApps.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {filteredApps.map(apps => (
                <AppCard key={apps.id} apps={apps} />
              ))}
            </div>
          ) : (
            <div className='flex flex-col justify-center items-center h-48'>
              <h2 className='text-2xl font-semibold text-gray-500'>
                No Apps Found Try Again
              </h2>
              <Link
                className='btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white border-none mt-5'
                to="/apps"
              >
                Go Back
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Apps;
