import { Link, useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, YAxis } from "recharts";
import { toast } from "react-toastify";
import LoadingSpinner from "../Components/SkeletonLoader";
import { useState, useEffect } from "react";

const AppDetails = () => {
    const { id } = useParams();
    const { apps } = useApps();
    const [isInstalled, setIsInstalled] = useState(false);

    const app = apps.find((a) => String(a.id) === id);

    useEffect(() => {
        const checkInstallationStatus = () => {
            let installedApps = [];
            try {
                installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
                if (!Array.isArray(installedApps)) installedApps = [];
            } catch {
                installedApps = [];
            }
            const alreadyInstalled = installedApps.some((a) => a.id === app?.id);
            setIsInstalled(alreadyInstalled);
        };

        checkInstallationStatus();
    }, [app?.id]);

    if (!app) {
        return <LoadingSpinner />;
    }

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;

    const handleToInstallation = () => {
        let installedApps = [];
        try {
            installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
            if (!Array.isArray(installedApps)) installedApps = [];
        } catch {
            installedApps = [];
        }

        installedApps.push(app);
        localStorage.setItem("installedApps", JSON.stringify(installedApps));
        toast.success(`${app.title} Installed Successfully!`);
        setIsInstalled(true);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10">
            <div className="flex flex-col md:flex-row md:items-start md:gap-10 gap-8">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <img
                        src={image}
                        alt={title}
                        className="w-56 h-56 sm:w-64 sm:h-64 object-contain border rounded-2xl shadow-md p-4 bg-white"
                    />
                </div>

                <div className="w-full md:w-2/3 space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
                    <p className="text-blue-500 font-medium text-lg">{companyName}</p>

                    <div className="flex flex-wrap gap-6 sm:gap-10 text-base sm:text-lg mt-4">
                        <div className="w-1/2 sm:w-auto">
                            <p className="text-gray-500">Downloads</p>
                            <p className="font-semibold">{downloads}M</p>
                        </div>
                        <div className="w-1/2 sm:w-auto">
                            <p className="text-gray-500">Average Rating</p>
                            <p className="font-semibold">{ratingAvg}</p>
                        </div>
                        <div className="w-1/2 sm:w-auto">
                            <p className="text-gray-500">Total Reviews</p>
                            <p className="font-semibold">{reviews.toLocaleString()}</p>
                        </div>
                    </div>

                    <Link
                        onClick={handleToInstallation}
                        className={`btn ${
                            isInstalled ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
                        } text-white px-6 py-3 rounded-xl font-semibold mt-5 transition w-full sm:w-auto`}
                        disabled={isInstalled}
                    >
                        {isInstalled ? "Installed" : `Install Now (${size} MB)`}
                    </Link>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Ratings</h2>
                <div className="bg-white p-4 rounded-xl shadow-sm border">
                    <ResponsiveContainer width="100%" height={280}>
                        <BarChart
                            data={ratings}
                            layout="vertical"
                            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
                        >
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={70} />
                            <Tooltip
                                formatter={(value) => [value.toLocaleString(), "Total Ratings"]}
                                cursor={{ fill: "#f5f5f5" }}
                            />
                            <Bar dataKey="count" fill="#ff9800" barSize={25} radius={[4, 4, 4, 4]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-3 text-center md:text-left">Description</h2>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;
