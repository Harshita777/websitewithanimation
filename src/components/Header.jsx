import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import image from "../../public/gsk1.png";
import "../header.css";

const Header = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".body");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          controls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 2 },
          });
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="container mx-auto max-w-5xl">
      <div>
        <div className="first-heading">
          <motion.h1
            className="text-center mt-20 gradient-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            Creating
          </motion.h1>
        </div>
        <div className="first-subheading text-center text-5xl ">
          <motion.h5
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            Discerning Digital Works and <br />
            Communication Collaterals
          </motion.h5>
        </div>
      </div>
      <div className="flex justify-between gap-12 mt-56">
        <div className="body text-start mt-24">
          <motion.h1
            className="second-heading gradient-text bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent text-9xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            We are
          </motion.h1>
          <motion.h5
            className="second-subheading text-4xl mt-4"
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
          >
            Creative Designers, Insightful <br />
            Strategists, and Exceptional <br />
            Engineers
          </motion.h5>
          <p className="paragraph mt-3">
            The organization is focused on foregrounding expertise in its
            services, staying updated on global trends, refining domain
            knowledge, and adapting to evolving content creation arenas to
            effectively serve client brands.
          </p>
        </div>
        <div className="header-image mt-20">
          <motion.img
            src={image}
            alt="image"
            className="header-image "
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
