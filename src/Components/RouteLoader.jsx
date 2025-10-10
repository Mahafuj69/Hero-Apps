import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import spnner from '../assets/logo.png'

const RouteLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
       <div className="flex items-center justify-center min-h-[60vh]">
      
      <div className="flex items-center text-4xl font-bold text-gray-700 uppercase tracking-widest">
        
        <span>L</span>
        
        <img 
          src={spnner} 
          alt="Loading..." 
          className="w-10 h-10 mx-2 animate-spin" 
        />
        
        <span>ading..</span>

      </div>
    </div>
    );
  }

  return children;
};

export default RouteLoader;