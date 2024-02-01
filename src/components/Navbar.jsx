import "../navbar.css"
import logo from "../../public/logo.png"

const Navbar = () => {
  return (
   <div className="navbar">
    <div className="navbar-logo">
    <img src={logo} alt="logo" />
    </div>
     <div className="navbar-list">
     <ul className="flex" >
        <li>WORK</li>
        <li>EXPERTISE</li>
        <li>ABOUT</li>
        <li>INSIGHT</li>
        <li>
            <button>START A PROJECT</button>
        </li>
     </ul>
     </div>
     
   </div>
  )
}

export default Navbar