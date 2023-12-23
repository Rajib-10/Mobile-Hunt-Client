import { useContext, } from "react";
import {  Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../Hook/useCart";

const Navbar = () => {
  const {user, userLogOut} = useContext(AuthContext)
  const navigate = useNavigate()
  const [cart] = useCart()
 



  const handleLogout = () =>{
    userLogOut()
    navigate("/")
    
  }


  const navLinks = <>
  <li>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Home
    </NavLink>
  </li>

{
  user? <button onClick={handleLogout} className="btn btn-sm">Log out</button> : <>
  <li>
    <NavLink
      to="/login"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Login
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/register"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Register
    </NavLink>
  </li>
  </>
}
</>


    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to="/"><button className="btn btn-ghost text-xl">Mobile Hunt</button></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
 <Link to="/cart">
    <button className="btn">
  Cart
  <div className="badge badge-secondary">+{cart.length}</div>
</button>
 </Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;