import { Link } from "react-router";
import upError from "../assets/App-Error.png"
const ErrorApp = () => {
  return (
   <div>
      <div className="w-full h-screen flex justify-center items-center">
    
      <div className="flex flex-col items-center p-4">
      <img src={upError} alt="App Error" className="max-w-full h-auto" />
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl mt-3 text-center">Oops, App not found!</h1>
      <p className="text-slate-600 mt-4 text-center">The App you are requesting is not found on our system. Please try another apps</p>
       <Link to='/' className=" text-center px-4 py-3 mt-3 w-40 rounded bg-gradient-to-br from-[#632ee3] to-[#9f62f2]">Go Back!</Link>
     
      </div>


   </div>
      
   </div>

    );
};

export default ErrorApp;