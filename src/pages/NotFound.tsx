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
      data-oid="xpax7o7"
    >
      <div className="text-center" data-oid="8b6gzgt">
        <h1 className="text-4xl font-bold mb-4" data-oid="odqfa8f">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-4" data-oid="7evz:r_">
          Oops! Page not found
        </p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 underline"
          data-oid="f-0c4pc"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
