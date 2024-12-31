import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';

// Import icons for soft skills
import { FaRegCommentDots, FaUsers, FaBrain, FaLightbulb, FaHandsHelping, FaCogs, FaTasks, FaChartLine, FaHandshake } from 'react-icons/fa';

const SoftSkillCard = ({ skill, description, icon }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    iconStyle={{ background: "#1d1836" }}
    icon={<div className="w-[100%] h-[100%] object-contain">{icon}</div>}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{skill}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{description}</p>
    </div>
  </VerticalTimelineElement>
);

const SoftSkills = () => {
  const softSkills = [
    {
      skill: 'Communication',
      description: 'Effectively conveying information and ideas through various mediums.',
      icon: <FaRegCommentDots />
    },
    {
      skill: 'Leadership',
      description: 'Guiding teams to achieve goals while inspiring and motivating them.',
      icon: <FaUsers />
    },
    {
      skill: 'Problem-solving',
      description: 'Identifying issues and coming up with effective solutions.',
      icon: <FaCogs />
    },
    {
      skill: 'Creativity',
      description: 'Thinking outside the box and coming up with innovative solutions.',
      icon: <FaLightbulb />
    },
    {
      skill: 'Critical Thinking',
      description: 'Analyzing information objectively to make sound decisions.',
      icon: <FaBrain />
    },
    {
      skill: 'Teamwork',
      description: 'Collaborating with others to achieve a common goal.',
      icon: <FaHandsHelping />
    },
    {
      skill: 'Adaptability',
      description: 'Adjusting to new situations and challenges effectively.',
      icon: <FaTasks />
    },
    {
      skill: 'Collaboration',
      description: 'Working together with others to achieve shared objectives.',
      icon: <FaHandshake />
    },
    {
      skill: 'Decision Making',
      description: 'Making informed and timely decisions based on available information.',
      icon: <FaChartLine />
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I excel at</p>
        <h2 className={styles.sectionHeadText}>Soft Skills</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {softSkills.map((skill, index) => (
            <SoftSkillCard
              key={index}
              skill={skill.skill}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(SoftSkills, "soft-skills");
