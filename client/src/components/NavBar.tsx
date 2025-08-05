import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  return (
    <div className="flex gap-4 p-4 bg-gray-100 shadow-md">
      <Link
        to="/"
        className={`font-medium ${
          location.pathname === "/"
            ? "text-blue-600 underline"
            : "text-gray-600"
        }`}
      >
        Main page
      </Link>
      <Link
        to="/saved"
        className={`font-medium ${
          location.pathname === "/saved"
            ? "text-blue-600 underline"
            : "text-gray-600"
        }`}
      >
        Saved users
      </Link>
    </div>
  );
};
