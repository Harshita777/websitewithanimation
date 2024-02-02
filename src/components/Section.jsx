import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../section.css";
import image from "../../public/body.png";

const Section = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight / 2) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, duration: 1 },
      });
    }
  }, [isVisible, controls]);

  return (
    <div className="section container mx-auto max-w-5xl mt-48">
      <div>
        <motion.img
          src={image}
          alt="image"
          className="header-image mt-20"
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 2 }}
        />
      </div>
      <motion.div ref={sectionRef}>
        <motion.h1
          className="first-heading mt-48"
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 2 }}
          animate={controls}
        >
          Let's unite for <br /> innovation
        </motion.h1>
      </motion.div>
      <div className="text-end pt-9">
        <motion.h1
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-8xl"
          initial={{ y: -100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 2, delay: 2 }}
        >
          Join 400+
        </motion.h1>
        <motion.p
          className="text-4xl"
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 2, delay: 2 }}
        >
          companies already growing
        </motion.p>
      </div>
    </div>
  );
};

export default Section;
