import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  overmaze,
  oropeza,
  cartodata,
  gebra,
  corten,
  gpt,
  L4M,
  bootstrap,
  vite,
  Github,
  tailwind,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Content Creator",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: Github,
  },
];

const experiences = [
  {
    title: "Electrical Enginner",
    company_name: "Oropeza Ingenieros",
    icon: oropeza,
    iconBg: "#ffffff",
    date: "2012 - 2015",
    points: [
      "Inspection and Diagnosis: perform regular inspections on electrical equipment to identify potential issues.",
      "Preventive Maintenance: develop and carry out preventive maintenance programs.",
      "Repair and Replacement: repair or coordinate with specialized technicians to address the issue. ",
      "Compliance with Regulations: ensuring that the equipment complies with applicable safety regulations and standards.",
    ],
  },
  {
    title: "Flight Crew Enginner",
    company_name: "CartoData",
    icon: cartodata,
    iconBg: "#fff",
    date: "2015 - 2018",
    points: [
      "Maintenance and calibration: perform regular maintenance on the electromechanical equipment used for aerial photography, such as cameras, stabilization systems, and image capture systems.",
      "Troubleshooting: diagnose and repair faulty components, resolving software conflicts and troubleshooting connectivity problems.",
      "Coordination with the pilot and photography team: closely collaborate with the pilot to ensure optimal performance of the electromechanical equipment during flights.",
      "Documentation and records: maintain accurate records of maintenance, repairs, and calibrations.",
    ],
  },
  {
    title: "Enginner",
    company_name: "Gebra",
    icon: gebra,
    iconBg: "#fff",
    date: "2018 - 2021",
    points: [
      "Schedule and meeting organization: schedule meetings and coordinating timelines.",
      "Communication and correspondence: manage communication, responding to emails and filtering requests.",
      "Travel and logistics coordination: take charge of organize business trips, book flights, hotels, and transportation.",
      "Information and document management: collect, organize, and maintain relevant documentation and files. ",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Overmaze",
    icon: overmaze,
    iconBg: "#fff",
    date: "2021 - Present",
    points: [
      "Website development and maintenance: create and maintain the websites and web apps, ensuring they function properly, are visually appealing, and adhere to modern design and usability standards.",
      "Troubleshooting and debugging: identify and resolve technical issues to ensure proper and error-free functionality.",
      "Responsive design and mobile optimization: ensure that websites and web apps dapt well on various devices and screen sizes.",
      "Team collaboration: participate in code reviews and providing constructive feedback to other developers.",
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
    name: "Corten",
    description:
      "Web-based platform that allows users to request a quotation and manage payments, providing a convenient and efficient solution for the industry needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: corten,
    source_code_link: "https://github.com/",
  },
  {
    name: "Youtube like",
    description:
      "A sleek web app resembling YouTube, powered by the YouTube API, featuring a vast collection of videos. Explore, discover, and enjoy seamless video playback, all in one immersive platform.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/",
  },
  {
    name: "Look 4 Music",
    description:
      "A dynamic web app inspired by Shazam, leveraging the Shazam API to identify music, provide lyrics, and display album covers. Explore an extensive library, discover new tunes, and delve into the immersive world of music",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: L4M,
    source_code_link: "https://github.com/",
  },
  {
    name: "Courses Landingpage",
    description:
      "Captivating, modern and clean design, with a combination of eye-catching colors that reflect technology and innovation.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
