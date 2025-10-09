import hero from "../assets/hero.png";
import { Link } from "react-router";
import google from "../assets/google-logo.png.png";
import AppStore from "../assets/apple-ios.png";
const Introduction = () => {
    return (
        <div className="bg-slate-50 pt-10 pr-6 pb-0 pl-6 md:pt-20 md:pr-20 md:pb-0 md:pl-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center ">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
                        We Build <br />
                        <span className="text-violet-600">Productive</span> Apps
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        At HERO.IO , we craft innovative apps designed to make everyday
                        life simpler, smarter, and more exciting. Our goal is to turn your
                        ideas into digital experiences that truly make an impact.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-6 md:gap-6 md:mt-10">
                <a
                    href="https://play.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center gap-2 text-black border p-2 rounded-md py-2 px-4 md:py-3 md:px-6 "
                >
                    <img src={google} alt="" className=" h-5 md:h-7" /> Google Play
                </a>
                <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center gap-2 text-black border p-2 rounded-md py-2 px-4 md:py-3 md:px-6"
                >
                    <img src={AppStore} alt="" className="h-5 md:h-7" /> App Store
                </a>
            </div>
            <div className="flex justify-center mt-6 md:mt-10">
                <img src={hero} alt="" className="w-full md:w-auto" />
            </div>
        </div>
    );
};

export default Introduction;