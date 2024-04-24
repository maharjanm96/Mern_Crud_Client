function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">User CRUD</div>
      <div className="nav-links">
        <a className="nav-link" href="#">
          Create User
        </a>
        <a className="nav-link" href="#">
          My Profile
        </a>
        <a className="nav-link" href="#">
          Sign Up
        </a>
        <a className="nav-link" href="#">
          Login
        </a>
      </div>
    </div>
  );
}

export default Navbar;
