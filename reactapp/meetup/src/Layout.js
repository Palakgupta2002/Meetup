import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    < >
    <div >
      <nav >
        <ul style={{display:"flex",justifyContent:"space-evenly"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;
