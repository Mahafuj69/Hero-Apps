import { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import ErrorApp from '../Errors/ErrorApp';

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState('');
  const term = search.trim().toLocaleLowerCase();

  const searchedApps = term
    ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className='px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
      <div className='flex flex-col text-center mt-10 mb-10'>
        <h1 className='text-3xl md:text-5xl font-bold '>Our All Application</h1>
        <p className='mt-4 text-lg md:text-xl text-slate-500'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
        <h1 className='text-xl md:text-2xl font-bold'>({searchedApps.length}) Apps Found</h1>
        <label className='input w-full md:w-auto'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='search'
            placeholder='Search Apps'
            className='w-full'
          />
        </label>
      </div>

      {searchedApps.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {searchedApps.map(apps => (
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
