// import React, { useState } from 'react';
// import useApps from '../Hooks/useApps';
// import AppCard from '../Components/AppCard';

// const Apps = () => {
//      const {apps} = useApps ()
//     const [search, setSearch] = useState('')
//     const term = search.trim().toLocaleLowerCase()
//    const searchedApps = term
//     ? apps.filter(app=>app.name.toLocaleLowerCase() .includes(term)): apps
    
   
//     return (
//         <div>        
//                  <div className='flex flex-col text-center mt-10 mb-10'>
//                 <h1 className='text-5xl font-bold '>Our All Application</h1>
//                 <p className=' mt-4 text-xl text-slate-500'>Explore All Apps on the Market developed by us. We code for Millions </p>
//                    </div>
           
//             <div className='flex justify-between'>
//                 <h1 className='text-2xl font-bold' > ({apps.length}) Apps Found </h1>
//                 <label className="input">
//                      <input 
//                      value={search}
//                      onChange={(e)=> setSearch(e.target.value)} 
//                      type="search" 
//                      placeholder="Search Apps" 
//                      />
//                 </label>
//             </div>
//              <div>
//             <div>
//             <div className='grid grid-cols-1 md:grid-cols-4 '>
//                 {searchedApps.map(apps => (
//                 <AppCard key={apps.id} apps={apps} />
//             ))}
//             </div>
//         </div>
//         </div>
//         </div>
//     );
// };

// export default Apps;



import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import ErrorApp from '../Errors/ErrorApp';

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState('');

  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter(app =>
        (app?.name ?? '').toLocaleLowerCase().includes(term)
      )
    : apps;

  console.log(searchedApps);

  return (
    <div>
      {/* Heading */}
      <div className='flex flex-col text-center mt-10 mb-10'>
        <h1 className='text-5xl font-bold'>Our All Application</h1>
        <p className='mt-4 text-xl text-slate-500'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search Bar */}
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-bold'>
          ({searchedApps.length}) Apps Found
        </h1>
        <label className='input'>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type='search'
            placeholder='Search Apps'
          />
        </label>
      </div>

      {/* App Cards */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {searchedApps.length > 0 ? (
          searchedApps.map((app) => (
            <AppCard key={app.id} apps={app} />
          ))
        ) : (
          <ErrorApp></ErrorApp>
        )}
      </div>
    </div>
  );
};

export default Apps;
