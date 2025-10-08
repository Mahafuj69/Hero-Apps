import Introduction from '../Components/Introduction';
import Banner from '../Components/Banner';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';


const Home = () => {
 const apps = useLoaderData();
 const featuredApps = apps.slice(0, 8)
 console.log(apps)
    return (
      
    
        <div>
          

            <Introduction></Introduction>
            <Banner></Banner>
              <div className='flex flex-col text-center mt-10 mb-10'>
                <h1 className='text-4xl font-bold '>Trending Apps</h1>
                <p className='mt-4 text-slate-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 '>
                {featuredApps.map(apps => (
                <AppCard key={apps.id} apps={apps} />
            ))}
            </div>
            <div className='flex justify-center mt-10 mb-10'>
                <Link to='/Apps' className='btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2]'>Show All</Link>
            </div>
        </div>
    );
};

export default Home;