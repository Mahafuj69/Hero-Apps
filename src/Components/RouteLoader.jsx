import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouteLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return children;
};

export default RouteLoader;