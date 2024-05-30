import { Link } from "react-router-dom";

function NavbarLayout() {
  return (
    <>
      <div className="bg-purple-700 p-6 flex items-center justify-between">
        <div className="text-white text-4xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            CRUD
          </Link>
        </div>
        <div className="space-x-4 text-2xl">
          <Link to="/createuser" className="text-white hover:text-gray-400">
            Create User
          </Link>
          <Link to="/myprofile" className="text-white hover:text-gray-400">
            My Profile
          </Link>
          <Link to="/signup" className="text-white hover:text-gray-400">
            Sign Up
          </Link>
          <Link to="/login" className="text-white hover:text-gray-400">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavbarLayout;
