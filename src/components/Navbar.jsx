import "../navbar.css";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import { TfiEmail } from "react-icons/tfi";

const Navbar = () => {
  return (
    <motion.div
      className="fixed top-0 w-full pt-3 bg-black z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between container mx-auto max-w-5xl">
        <div className="h-20 w-20 navbar-logo p-2">
          <img className="border rounded-full" src={logo} alt="logo" />
        </div>
        <div className="">
          <ul className="flex gap-4 list-none">
            <motion.li
              className="p-4"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
                transition: { duration: 0.3 },
              }}
            >
              WORK
            </motion.li>
            <motion.li
              className="p-4"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
                transition: { duration: 0.3 },
              }}
            >
              EXPERTISE
            </motion.li>
            <motion.li
              className="p-4"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
                transition: { duration: 0.3 },
              }}
            >
              ABOUT
            </motion.li>
            <motion.li
              className="p-4"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
                transition: { duration: 0.3 },
              }}
            >
              INSIGHT
            </motion.li>
            <motion.li
              className="p-2"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="button flex justify-center gap-2 items-center bg-yellow-400 border-black rounded text-black h-10 w-40 hover:bg-yellow-500">
                <div>
                  <TfiEmail />
                </div>
                <div>START A PROJECT</div>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
