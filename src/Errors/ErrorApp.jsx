import { Link } from "react-router";
import apperror from "../assets/App-Error.png"
const ErrorApp = () => {
    return (
     <div className="">
        
            <div className="flex flex-col items-center w-max ml-83">
          <img src={apperror} alt="" />
          
            <h1 className="text-6xl mt-3">Oops, App not found!</h1>
          <p className="text-slate-600 mt-4">The App you are requesting is not found on our system. Please try another apps</p>
           <Link to='/Home' className=" text-center px-4 py-3 mt-3 w-40 rounded bg-gradient-to-br from-[#632ee3] to-[#9f62f2]">Go Back!</Link>
       
          </div>


     </div>
      );
};

export default ErrorApp;