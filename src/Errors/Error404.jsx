
import { Link } from "react-router";
import error from "../assets/error-404.png"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Error404 = () => {
    return (
    <div>
        <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center pt-20 pr-20 pb-20 pl-20">
          <img src={error} alt="" />
          
            <h1 className="text-6xl mt-3">Oops, page not found!</h1>
          <p className="text-slate-600 mt-4">The page you are looking for is not available.</p>
           <Link className="px-4 py-3 mt-3 rounded bg-gradient-to-br from-[#632ee3] to-[#9f62f2]">Go Back!</Link>
       
          </div>
            <Footer></Footer>
    </div>
    );
};

export default Error404;