import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import Img1 from './portfolio.png';
import Img2 from './find_images.png';
import Img3 from './color_genrator.png';
import Img4 from './coffe.png';
import Img5 from './Bagwan_transport.png';
import Img6 from './tailwind_portfolio.jpg';
import Img7 from './fruit_nutrition.jpg';



export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-sky-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-sky-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-sky-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: Img1,
    url: 'https://mudassarbagwan-portfolio.vercel.app/',
    github: 'https://github.com/MudassarBagwan',
    title: 'first project',
    text: 'Showcasing my web development skills and projects, my portfolio highlights innovative solutions and modern technologies. Explore my work to see how I combine creativity and technical expertise to build responsive, user-friendly websites. Connect with me to discuss potential collaborations or learn more about my development journey.',
  },
  {
    id: nanoid(),
    img: Img2,
    url: 'https://imagefindermsb.netlify.app/',
    github: 'https://github.com/MudassarBagwan',
    title: 'second project',
    text: 'Showcasing my web development skills and projects, my portfolio highlights innovative solutions and modern technologies. Explore my work to see how I combine creativity and technical expertise to build responsive, user-friendly websites. Connect with me to discuss potential collaborations or learn more about my development journey.',
  },
  {
    id: nanoid(),
    img: Img3,
    url: 'https://colorgenrator.vercel.app/',
    github: 'https://github.com/MudassarBagwan',
    title: 'third project',
    text: 'Showcasing my web development skills and projects, my portfolio highlights innovative solutions and modern technologies. Explore my work to see how I combine creativity and technical expertise to build responsive, user-friendly websites. Connect with me to discuss potential collaborations or learn more about my development journey.',
  },
  {
    id: nanoid(),
    img: Img4,
    url: 'https://coffee-discover.vercel.app/',
    github: 'https://github.com/MudassarBagwan',
    title: 'fourth project',
    text: 'Showcasing my web development skills and projects, my portfolio highlights innovative solutions and modern technologies. Explore my work to see how I combine creativity and technical expertise to build responsive, user-friendly websites. Connect with me to discuss potential collaborations or learn more about my development journey.',
  },
  {
    id: nanoid(),
    img: Img5,
    url: 'https://msbtransport.netlify.app/',
    github: 'https://github.com/MudassarBagwan',
    title: 'sixth project',
    text: 'Showcasing my web development skills and projects, my portfolio highlights innovative solutions and modern technologies. Explore my work to see how I combine creativity and technical expertise to build responsive, user-friendly websites. Connect with me to discuss potential collaborations or learn more about my development journey.',
  },

  {
    id: nanoid(),
    img: Img6,
    url: 'https://msbtailwindportfolio.netlify.app/',
    github: 'https://github.com/MudassarBagwan',
    title: 'seventh project',
    text: 'Showcasing my web development skills and projects, my portfolio highlights innovative solutions and modern technologies. Explore my work to see how I combine creativity and technical expertise to build responsive, user-friendly websites. Connect with me to discuss potential collaborations or learn more about my development journey.',
  },

  {
    id: nanoid(),
    img: Img7,
    url: 'https://msbfruitsnutrition.netlify.app/',
    github: 'https://github.com/MudassarBagwan',
    title: 'fifth project',
    text: 'Showcasing my web development skills and projects, my portfolio highlights innovative solutions and modern technologies. Explore my work to see how I combine creativity and technical expertise to build responsive, user-friendly websites. Connect with me to discuss potential collaborations or learn more about my development journey.',
  },
  

  
];
