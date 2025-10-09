import logo from '../assets/logo.png'

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <img
        src={logo}
        alt="Loading..."
        className="w-20 h-20 animate-spin-infinite-fast"
      />
    </div>
  );
};

export default LoadingSpinner;
