import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { UserContext } from '../App';

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext);

  const Menu = () => {
    if(state){
      return (
        <>
        <div>
          <div className='navbar1'>
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/home"><span class="nav-title">Home</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/personal"><span class="nav-title">Personal Info</span></NavLink>
            </li>
            {/* <li className="nav-item">
            <NavLink className="nav-link" to="/srs"><span class="nav-title">SRS Entry</span></NavLink>
            </li> */}
            <li className="nav-item">
            <NavLink className="nav-link" to="/payment"><span class="nav-title">Pay Fees Online</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/contact"><span class="nav-title">Contact</span></NavLink>
            </li>
            <li className="nav-item" id = "logout">
            <NavLink className="nav-link" to="/logout"><span class="nav-title">Logout</span></NavLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Others
              </a>
              <div id="drop" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="nav-link" to="/personal"><span class="nav-title">Action</span></NavLink>
              <NavLink className="nav-link" to="/personal"><span class="nav-title">Action</span></NavLink>
              <NavLink className="nav-link" to="/personal"><span class="nav-title">Action</span></NavLink>
              </div>
            </li>
            </div>
        </div>
        </>
      )
    }else{
      return (
        <>
          <div className='navbar'>
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/home"><span class="nav-title">Home</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/personal"><span class="nav-title">Personal Info</span></NavLink>
            </li>
            {/* <li className="nav-item">
            <NavLink className="nav-link" to="/srs"><span class="nav-title">SRS Entry</span></NavLink>
            </li> */}
            <li className="nav-item">
            <NavLink className="nav-link" to="/contact"><span class="nav-title">Contact</span></NavLink>
            </li>
            <li className="nav-item" id = "register">
            <NavLink className="nav-link" to="/registeration"><span class="nav-title">Register</span></NavLink>
            </li>
            <li className="nav-item" id = "login">
            <NavLink className="nav-link" to="/login"><span class="nav-title">Login</span></NavLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Others
              </a>
              <div id="drop" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="nav-link" to="/login"><span class="nav-title">Action</span></NavLink>
                <NavLink className="nav-link" to="/personal"><span class="nav-title">Action</span></NavLink>
                <NavLink className="nav-link" to="/personal"><span class="nav-title">Action</span></NavLink>
                {/* <a class="dropdown-item" href="#"><NavLink className="nav-link" to="/login">Something else here</NavLink></a> */}
              </div>
            </li>
          </div>
        </>
      )
    }
  }

  return (
    <>
    <nav id="nav-contain" className="navbar navbar-expand-lg ">
    {/* <div id="nav-inner" className="container-fluid"> */}
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id='nav'>
        <Menu />  
        </ul>
        </div>
    {/* </div> */}
    </nav>


    </>
  )
}

export default Navbar;