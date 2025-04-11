import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  php,
  mui,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  oracle,
  git,
  figma,
  docker,
  java,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  selenium,
  ecommercesite,
  cinecshuttle,
  appleweb,
  heritagelink,
  livedocs,
  carevenfresh,
  flixmovies,
  subscription,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "soft-skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: mobile,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  },
  
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,

  },/*
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },*/
  {
    name: "figma",
    icon: figma,
  },
  
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Heritage Link",
    description:
      "A web application that serves as a platform to preserve and promote Sri Lanka's cultural heritages globally. It serves as an information hub, offering details on the country's heritages and ancient places, and a marketplace for buying and selling unique items and souvenirs. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: heritagelink,
    source_code_link: "https://github.com/Dilesh99/HeritageLink",
  },
  {
    name: "CINEC Campus Shuttle Service Management System -Frontend",
    description:
      "A responsive web application that enables users to see the location of the bus based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "trackerapi",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: cinecshuttle,
    source_code_link: "https://github.com/Dilesh99/CINEC-ShuttleService-Frontend",
  },
  {
    name: "3D-iPhone 15 Pro Website clone",
    description:
      "Clone of the iPhone 15 Pro website. With a clean and minimalistic responsive design. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: appleweb,
    source_code_link: "https://github.com/Dilesh99/3D-iPhone-15-Pro-website",
  },
  {
    name: "Heritage Link - nextjs frontend",
    description:
      "A responsive user friendly frontend for Heritage Link ecommerce web application using nextjs and jsonserver. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "jsonserver",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: ecommercesite,
    source_code_link: "https://github.com/Dilesh99/First-next.js-project",
  },
  {
    name: "Livedocs",
    description:
      "A responsive collaborative documantation platform with live interaction features. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "shadcnUI ",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "jsm editor",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk ",
        color: "green-text-gradient",
      },
      {
        name: "Liveblocks",
        color: "pink-text-gradient",
      },
      {
        name: "Liveblocks-authentication",
        color: "orange-text-gradient",
      },
    ],
    image: livedocs,
    source_code_link: "https://github.com/Dilesh99/Livedocs",
  },
  {
    name: "Careven Fresh bakery & pastry shop web application",
    description:
      "A responsive user friendly web application for a bakery and pastry shop. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "shadcnUI",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: carevenfresh,
    source_code_link: "https://github.com/Dilesh99/Caraven-Fresh-web-application",
  },
  {
    name: "Flixmovies",
    description:
      "A responsive user friendly movie website where users can search and get their favorite movies",
    tags: [
      {
        name: "react + vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "orange-text-gradient",
      },
      
    ],
    image: flixmovies,
    source_code_link: "https://github.com/Dilesh99/Flixmovies",
  },
  {
    name: "Subscription-Tracker-API",
    description:
      "An API for a subscription tracker app. It allows users to create, update, and delete subscriptions and send subscription renewal reminders via email.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "mongoose",
        color: "orange-text-gradient",
      },
      {
        name: "upstash",
        color: "blue-text-gradient",
      },
      {
        name: "arcjet",
        color: "green-text-gradient",
      },
      {
        name: "JWT authentication",
        color: "pink-text-gradient",
      },
      {
        name: "bcryptjs",
        color: "orange-text-gradient",
      },
      {
        name: "salt",
        color: "blue-text-gradient",
      },
      {
        name: "arcjet",
        color: "green-text-gradient",
      },
      {
        name: "dayjs",
        color: "pink-text-gradient",
      },
      {
        name: "nodemailer",
        color: "orange-text-gradient",
      },
      
    ],
    image: subscription,
    source_code_link: "https://github.com/Dilesh99/Subscription-Tracker-API",
  },

  
];

export { services, technologies, experiences, testimonials, projects };