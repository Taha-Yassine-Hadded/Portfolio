

export const gridItems = [
  {
    id: 1,
    title: "I prioritize Responsive Design for seamless user experiences on all devices",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "I focus on writing clean code and delivering results quickly.",
    description: "High code quality",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "UniMindCare",
    des: "UniMindCare is a platform designed to support universities in managing psychological care for students. It facilitates collaboration between students, teachers, and psychologists to identify at-risk students, gather feedback, and implement tailored follow-up actions. It also provides tools to guide teachers in addressing psychological concerns.",
    img: "/p1.png",
    iconLists: ["/node.svg", "/ex.svg", "/re.svg", "/MongoDB.svg", "/Flask.png", "/dock.svg"],
    link: "https://fluffy-ganache-bbac91.netlify.app",
    videosrc: "dOOeEHzHuRw",
    git: "https://github.com/Taha-Yassine-Hadded/UniMindCare-PI",
    underDev: false,
    type: true
  },
  {
    id: 2,
    title: "MindMentor",
    des: "MindMentor is a React-based web application designed to support well-being through intelligent mental health insights. It integrates three machine learning models served via FastAPI endpoints — KNN for stress level prediction, and two XGBoost models for burnout detection and personalized content recommendation based on emotion. The frontend offers an interactive, user-friendly interface to visualize results and receive tailored guidance. Built with a focus on accessibility and responsiveness, it bridges data-driven insights with mental wellness.",
    img: "/p2.png",
    videosrc: "tK696OIMqWk",
    iconLists: ["/re.svg", "/tail.svg", "/fastapi.svg"],
    git: "https://github.com/Taha-Yassine-Hadded/MindMentor",
    underDev: false,
    type: true
  },
  {
    id: 3,
    title: "Karhabty",
    des: "Karhabty is a full-stack web application for managing car maintenance and spare parts. Built with React, Express.js, MongoDB, Tailwind CSS, and JWT security, it serves users, enterprises, and admins. Users and enterprises can manage their cars, track spare parts, and receive smart recommendations based on kilometrage and part age. Admins can oversee users, suppliers, mechanics, electricians, and spare part inventories through a centralized dashboard.",
    img: "/p4.png",
    iconLists: ["/node.svg", "/ex.svg", "/re.svg", "/tail.svg", "/MongoDB.svg"],
    videosrc: "q80yht2-Z74",
    git: "https://github.com/Taha-Yassine-Hadded/Karhabty",
    underDev: true,
    type: true
  },
  {
    id: 4,
    title: "EcoEvents",
    des: "EcoEvents is a Laravel-based web application that connects users with environmental and sustainability-focused events. It allows users to discover, join, and participate in eco-friendly initiatives and community-driven activities. Built with Laravel, Vite, Blade, and MySQL, it ensures a smooth and dynamic user experience. The platform encourages collaboration and awareness around ecological actions and local environmental movements.",
    img: "/p3.png",
    iconLists: ["/lara.png", "/Vite.svg", "/node.svg", "/MySQL.svg"],
    videosrc: "",
    git: "https://github.com/Taha-Yassine-Hadded/EcoEvents-Laravel",
    underDev: true,
    type: true
  },
  {
    id: 5,
    title: "Socialite",
    des: "Socialite is a Django-based social platform that inspires users to explore the world and share their travel experiences. It enables users to connect, create communities, and engage through posts, photos, and discussions about global destinations. The platform promotes cultural exchange and communication among travelers worldwide.",
    img: "/p5.png",
    iconLists: ["/Django.png", "/tail.svg", "/MongoDB.svg"],
    videosrc: "",
    git: "https://github.com/Taha-Yassine-Hadded/Socialite",
    type: true,
    underDev: true,
  },
  {
    id: 6,
    title: "EduSmart",
    des: "EduSmart is an e-learning platform built with Symfony and MySQL, designed to enhance collaboration between teachers and students. It provides tools for course management, assignments, and progress tracking in an intuitive interface. Teachers can create and manage educational content, while students can access lessons and submit work easily. The platform aims to make digital learning more interactive, organized, and accessible.",
    img: "/p6.png",
    iconLists: ["/Symfony.png", "/Bootstrap.svg", "/MySQL.svg"],
    videosrc: "",
    git: "https://github.com/Taha-Yassine-Hadded/EduSmart-PI",
    type: true,
    underDev: false,
  },
  {
    id: 7,
    title: "Xtensus - Reference Management App",
    des: "Xtensus - Reference Management application is designed to streamline searching and filtering past projects of the Xtensus company. It helps teams quickly find and reference similar projects for future work. Developed collaboratively during my internship, it enhances efficiency and knowledge reuse within the organization.",
    img: "/p7.png",
    iconLists: ["/Symfony.png", "/Angular.svg", "/ts.svg", "/Bootstrap.svg", "/MySQL.svg"],
    videosrc: "",
    git: "https://github.com/Taha-Yassine-Hadded/GestionReference-Front",
    type: true,
    underDev: false,
  },
  {
    id: 8,
    title: "TalentLink",
    des: "TalentLink is a Spring Boot application with Thymeleaf and Spring Security, developed as a final year project. The platform connects talents with recruiters, facilitating job discovery and candidate selection. It provides a secure and interactive environment for managing profiles, applications, and job postings efficiently.",
    img: "/p8.png",
    iconLists: ["/Spring.svg", "/Thym.png", "/Bootstrap.svg", "/MySQL.svg"],
    videosrc: "",
    git: "https://github.com/Taha-Yassine-Hadded/TalentLink",
    type: true,
    underDev: false,
  }

];

export const testimonials = [
  {
    quote:
      "Taha Yassine was a dedicated intern in our team at Teamsyst. He contributed significantly to our web projects, especially TelentLink and Karhabty. His quick learning, teamwork, and initiative were impressive. I highly recommend him for any development role.",
    name: "Mohamed Khalil",
    designation: "SeniorJava Developer & Team Lead at Teamsyst",
    src: "/testimonials/khalil.jpg",
  },
  {
    quote:
      "Taha is a talented developer with a strong ability to solve problems and deliver quality solutions. We worked together on several projects, and I was always impressed by his technical skills, collaboration, and dedication. He is a great teammate and a reliable full stack developer.",
    name: "Ahmed Tahri",
    designation: "Full Stack Developer",
    src: "/testimonials/ahmed.jpg",
  },
];

export const socialMedia = [
  {
    id: 2,
    img: "/wha.svg",
    href: "https://wa.me/21627862415"
  },
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/Taha-Yassine-Hadded"
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/taha-yassine-hadded-7a5504237/"
  },
];