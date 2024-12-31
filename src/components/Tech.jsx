import React from "react";
import { motion } from 'framer-motion'
import { BallCanvas } from "./canvas";
import  SectionWrapper  from "../hoc";
import { technologies } from "../constants";
import { textVariant } from '../utils/motion'
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have worked with</p> <h2 className={styles.sectionHeadText}>Technologies.</h2>
    
    <div className='mt-5 flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");