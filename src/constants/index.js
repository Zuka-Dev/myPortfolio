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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    spaceuni,
    upwork,
    mzt,
    wra,
    ytbc,
    zma,
    mui,
    nobnol,
    portf,
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
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Software Engineer",
        icon: creator,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Front-End Developer",
        icon: mobile,
    },
    {
        title: "Back-End Developer",
        icon: backend,
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
        name: "Redux Toolkit",
        icon: redux,
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
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Front-End Developer Intern",
        company_name: "Space Universe",
        icon: spaceuni,
        iconBg: "#383E56",
        date: "Oct 2020 - Jan 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Freelancer",
        icon: upwork,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility with differnt systems",
            "Participating in code reviews and providing constructive feedback to other developers as well as getting new requirements from the clients.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Ifeanyi proved me wrong.",
        name: "Oliseh Azuka",
        designation: "Senior Developer",
        company: "LiveIzy",
        image: "https://www.nobnol.org/assets/mtt/mtt6.jpeg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Ifeanyi does.",
        name: "David Azuka Obieke",
        designation: "Financial Consultant",
        company: "Multisectoral Consulting",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Ifeanyi optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Chukwufumnanya Azuka",
        designation: "Technical Support Advocate",
        company: "TekExperts",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "World Rankings",
        description:
            "This app basically is about countries I used NextJS and basic API consumpsion to build this web app. the web app basically has a list of countries in and renders information about them.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "next",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: wra,
        source_code_link: "https://github.com/Zuka-Dev/World-ranks",
        live_link: "https://world-ranks-chi.vercel.app/",
    },
    {
        name: "My Portfolio",
        description:
            "This app basically is about countries I used React and static data consumpsion as well as  used and sourced 3d images to make this good, the web app basically displays all my works and things about me",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "framermotion",
                color: "pink-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: portf,
        source_code_link: "https://github.com/Zuka-Dev/World-ranks",
        live_link: "https://world-ranks-chi.vercel.app/",
    },
    {
        name: "mZT-2",
        description:
            "This app, I basically wanted to test my designing skills with React JS and pure CSS. I implemented modern react design patterns and concepts as well as contemporary CSS design methods.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: mzt,
        source_code_link: "https://github.com/Zuka-Dev/UI-Project",
        live_link: "https://u-i-projects.netlify.app//",
    },
    {
        name: "Youtube clone",
        description:
            "I made a YouTube clone with React JS and I made use of MaterialUI instead of raw CSS. I also made use of Youtube v3 API from RapidAPI.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "materialui",
                color: "green-text-gradient",
            },
            {
                name: "rapidAPI",
                color: "pink-text-gradient",
            },
        ],
        image: ytbc,
        source_code_link: "https://github.com/Zuka-Dev/youtube-cloned",
        live_link: "https://youtube-clonedz.netlify.app/",
    },

    {
        name: "zukiMoney",
        description:
            "I made a template with React JS and I made use of styled-components instead of raw CSS. This project is a FinTech landing page.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "styledcomponents",
                color: "green-text-gradient",
            },
        ],
        image: zma,
        source_code_link: "https://github.com/Zuka-Dev/zuki-money",
        live_link: "https://zuki-money.netlify.app/",
    },
    {
        name: "No Boundaries No Limits",
        description:
            "I made this page for a particular foundation using pure knowledge of semantic html and weel-organised use of CSS",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: nobnol,
        source_code_link: "https://github.com/Zuka-Dev/nnn",
        live_link: "https://www.nobnol.org/",
    },
];

export { services, technologies, experiences, testimonials, projects };
