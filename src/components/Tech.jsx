import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import SectionWrapper from "../hoc";
import { technologies } from "../constants";
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import{ BallCanvas} from "./canvas"; // Assuming this is the 3D canvas component

const Tech = () => {
  // State to track if the screen is mobile or desktop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);  // If the screen width is 768px or less, set it as mobile
      } else {
        setIsMobile(false); // Otherwise, it's considered a desktop
      }
    };

    // Check screen size on component mount
    checkScreenSize();

    // Add resize event listener to check screen size on window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have worked with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>

        {/* Render 3D BallCanvas if it's a desktop */}
        {isMobile ? (
          // 2D grid layout for mobile
          <div className='mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-10 justify-center'>
            {technologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-gradient-to-r from-green-300 to-blue-400 shadow-xl"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: index * 0.1 }, // Delay the appearance of each bubble
                }}
                whileHover={{
                  scale: 1.2, // Slightly enlarge the bubble on hover
                  transition: { duration: 0.3 }
                }}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-2/3 h-2/3 object-contain rounded-full"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          // 3D BallCanvas for desktop
          <div className='mt-5 flex flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
              <div key={technology.name} className='w-28 h-28'>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
