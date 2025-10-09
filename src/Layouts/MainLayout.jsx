import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import RouteLoader from '../Components/RouteLoader';

const MainLayout = () => {
    return (
        <div className='flex flex-col'>
            <Navbar></Navbar>
             <RouteLoader>
                <div>
                <Outlet></Outlet>
                </div>
             </RouteLoader>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;