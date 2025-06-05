import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      data-oid="ex6:-l:"
    >
      <div className="text-center" data-oid="awjr9nq">
        <h1 className="text-4xl font-bold mb-4" data-oid=":7kxbfd">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-4" data-oid="iod1fse">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 underline"
          data-oid="lrqzl:l"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
