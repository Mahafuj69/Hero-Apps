import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import ErrorApp from '../Errors/ErrorApp';
import SkeletonLoader from '../Components/SkeletonLoader';

const Apps = () => {
  const location = useLocation();
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  const [filteredApps, setFilteredApps] = useState(apps);

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
    }, 2000); // Show spinner for 2 seconds
  };

  // Check for unwanted path after /Apps (after all hooks)
  const unwantedPath = location.pathname.replace('/Apps', '');
  if (unwantedPath && unwantedPath !== '') {
    return <ErrorApp />;
  }

  if (loading) {
    return <SkeletonLoader count={20} />;
  }

  return (
    <div className='px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
      <div className='flex flex-col text-center mt-10 mb-10'>
        <h1 className='text-3xl md:text-5xl font-bold '>Our All Application</h1>
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

      {/* Spinner centered below the search bar */}
      {searching ? (
        <div className="flex justify-center my-4">
          <progress className="progress w-56"></progress>
        </div>
      ) : filteredApps.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredApps.map(apps => (
            <AppCard key={apps.id} apps={apps} />
          ))}
        </div>
      ) : (
        <ErrorApp />
      )}
    </div>
  );
};

export default Apps;