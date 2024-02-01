import "../navbar.css";
import logo from "../../public/logo.png";
import { TfiEmail } from "react-icons/tfi";
const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto max-w-5xl">
      <div className="h-20 w-20 navbar-logo p-2">
        <img src={logo} alt="logo" />
      </div>
      <div className="">
        <ul className="flex list-none">
          <li className="p-4">WORK</li>
          <li className="p-4">EXPERTISE</li>
          <li className="p-4">ABOUT</li>
          <li className="p-4">INSIGHT</li>
          <li className="p-2">
            <div className="flex justify-center gap-2 items-center bg-yellow-400 border-black rounded text-black h-10 w-40">
              <div className="">
                <TfiEmail className="" />
              </div>
              <div>START A PROJECT</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
