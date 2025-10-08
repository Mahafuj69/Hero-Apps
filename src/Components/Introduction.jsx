import hero from "../assets/hero.png"
import { Link } from 'react-router';
import google from "../assets/google-logo.png"
import AppStore from "../assets/app-store.png"
const Introduction = () => {
    return (
       <div className="bg-slate-50 pt-20 pr-20 pb-0 pl-20 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center ">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                        We Build <br />
                        <span className="text-violet-600">Productive</span> Apps
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    
                </div>
            </div>
            <div className='flex justify-center items-center gap-6 mt-10'>
              <Link className='flex justify-center gap-2 text-black border p-3 rounded-md py-3 px-6 '><img src={google} alt="" className=' h-7' /> Google Play</Link>
              <Link className='flex justify-center gap-2 text-black border p-3 rounded-md py-3 px-6'><img src={AppStore} alt="" className='h-7' /> App Store</Link>
            </div>
            <div className='flex justify-center mt-10'>
              <img src={hero} alt="" />
            </div>
        </div>
        
    );
};

export default Introduction;