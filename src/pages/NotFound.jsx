import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="absolute font-extrabold top-[5%] text-[20rem]">404</div>
      <div className="h-full text-center w-full flex  gap-3 justify-center flex-col backdrop-blur-xs bg-black/50">
        <div className="h-30 mb-8"></div>
        <div className="text-white text-2xl mb-5  p-4 backdrop-blur-xs bg-green-600/50">
          Oops! something went wrong
        </div>
        <Link
          to="/"
          className="italic text-sm mt-5 bg-white hover:bg-gray-300 rounded-lg w-fit mx-auto p-3"
        >
          Return to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
