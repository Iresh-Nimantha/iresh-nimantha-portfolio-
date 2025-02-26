export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "src/public/assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "src/public/assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "src/public/assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "src/public/assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Aswanna - AI Podcast Platform",
    desc: "Aswanna is an innovative AI-powered platform that assists farmers in identifying crop diseases by simply uploading images. It offers real-time disease analysis, along with tailored recommendations to help improve crop health and productivity.",
    subdesc:
      "Built with React, Tailwind CSS, Laravel, and integrated with the Google Gemini API, Aswanna ensures fast, accurate disease detection, offering farmers actionable insights to protect their crops.",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "src/public/textures/project/aswanna.mp4",
    logo: "src/public/assets/aswanna.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "src/public/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "src/public/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "src/public/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Laravel",
        path: "src/public/assets/laravel.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "src/public/assets/figma.svg",
      },
    ],
  },
  {
    title: "Portfolios -Personalized 3D Websites",
    desc: "Personalized 3D Portfolios, built using React, Three.js, and Tailwind CSS, offers a highly customizable and responsive platform. It enables users to create visually engaging 3D model-based portfolios, complete with interactive features, allowing for a unique and immersive.",
    subdesc:
      "Personalized 3D Portfolios, built with React, Three.js, and Tailwind CSS, lets users create customizable, interactive 3D portfolios for a unique online presence.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "src/public/textures/project/project2.mp4",
    logo: "src/public/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "src/public/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "src/public/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "src/public/assets/tailwindcss.png",
      },

      {
        id: 4,
        name: "Framer Motion",
        path: "src/public/assets/figma.svg",
      },
    ],
  },
  {
    title: "JobNexus - Job Seeking & Sharing Platform",
    desc: "JobNexus is a modern job platform that helps users search, apply, and share jobs effortlessly. It connects job seekers with relevant opportunities through a streamlined interface. With real-time updates, users can track applications and stay ahead in their job search.",
    subdesc:
      "Built with MERN (MongoDB, Express, React, Node.js), JobNexus ensures fast, secure, and scalable job matching, providing users with real-time job updates and easy application tracking.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "src/public/textures/project/project3.mp4",
    logo: "src/public/assets/jobNexus.png",
    logoStyle: {
      innerHeight: "50px",
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "src/public/assets/spotlight3.png",
    tags: [
      {
        id: 2,
        name: "MongoDB",
        path: "src/public/assets/mongoDB.png",
      },
      {
        id: 2,
        name: "Expressjs",
        path: "src/public/assets/expressjs.png",
      },
      {
        id: 3,
        name: "Reactjs",
        path: "src/public/assets/react.svg",
      },
      {
        id: 4,
        name: "Nodejs ",
        path: "src/public/assets/nodejs.png",
      },
    ],
  },
  // {
  //   title: "Horizon - Online Banking Platform",
  //   desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
  //   subdesc:
  //     "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
  //   href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
  //   texture: "src/public/textures/project/project4.mp4",
  //   logo: "src/public/assets/project-logo4.png",
  //   logoStyle: {
  //     backgroundColor: "#0E1F38",
  //     border: "0.2px solid #0E2D58",
  //     boxShadow: "0px 0px 60px 0px #2F67B64D",
  //   },
  //   spotlight: "src/public/assets/spotlight4.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "src/public/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "src/public/assets/tailwindcss.png",
  //     },

  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "src/public/assets/framer.png",
  //     },
  //   ],
  // },
  //   {
  //     title: "Imaginify - AI Photo Manipulation App",
  //     desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
  //     subdesc:
  //       "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
  //     href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
  //     texture: "src/public/textures/project/project5.mp4",
  //     logo: "src/public/assets/project-logo5.png",
  //     logoStyle: {
  //       backgroundColor: "#1C1A43",
  //       border: "0.2px solid #252262",
  //       boxShadow: "0px 0px 60px 0px #635BFF4D",
  //     },
  //     spotlight: "src/public/assets/spotlight5.png",
  //     tags: [
  //       {
  //         id: 1,
  //         name: "React.js",
  //         path: "src/public/assets/react.svg",
  //       },
  //       {
  //         id: 2,
  //         name: "TailwindCSS",
  //         path: "src/public/assets/tailwindcss.png",
  //       },

  //       {
  //         id: 4,
  //         name: "Framer Motion",
  //         path: "src/public/assets/framer.png",
  //       },
  //     ],
  //   },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],

    reactLogoPosition: isSmall
      ? [2, 3, 0] // Smaller screens
      : isMobile
      ? [4, 3.5, 0] // Mobile devices
      : isTablet
      ? [5, 4, 0] // Tablet
      : [10, 2.5, 15], // Larger screens

    ringPosition: isSmall
      ? [-4, 6, 0] // Smaller screens
      : isMobile
      ? [-8, 9, 0] // Mobile devices
      : isTablet
      ? [-10, 9, 0] // Tablet
      : [-80, 40, 4], // Larger screens

    targetPosition: isSmall
      ? [-4, -12, 5] // Smaller screens
      : isMobile
      ? [-7, -9, -7] // Mobile devices
      : isTablet
      ? [-9, -6, -8] // Tablet
      : [-15, -14, 3], // Larger screens
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "src/public/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "src/public/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "src/public/assets/notion.svg",
    animation: "salute",
  },
];
