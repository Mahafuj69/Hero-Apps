import { Link } from "react-router";
import error from "../assets/error-404.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Error404 = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-10 pr-5 pb-10 pl-5 md:pt-20 md:pr-20 md:pb-20 md:pl-20">
        <img src={error} alt="Error" className="w-full max-w-md" />
        <h1 className="text-4xl mt-3 text-center md:text-6xl">
          Oops, page not found!
        </h1>
        <p className="text-slate-600 mt-4 text-center">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="px-4 py-3 mt-3 rounded bg-gradient-to-br from-[#632ee3] to-[#9f62f2]"
        >
          Go Back!
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;