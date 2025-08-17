import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    image: '/p1.png',
    title: 'E-Commerce',
    description: 'E-commerce project with various product categories, CSS styling, responsive navbar, hover effects, smooth transitions, and interactive features for a dynamic shopping experience across different product types.',
    skills: ['React', 'Tailwind Css', 'Node', 'Express','MongoDb'],
    demo: 'https://shashi-e-commerce.netlify.app/',
    source: 'https://github.com/SPSingh-1/E-commerce'
  },
  {
    image: '/p2.png',
    title: 'News-React',
    description: 'News-React is a responsive news app showing daily updates from different countries and categories. It features displays news using cards for a clean, user-friendly experience.It uses a navbar and cards to display API-sourced news',
    skills: ['React', 'Bootstrap', 'Express'],
    demo: 'https://gregarious-mandazi-2dfe3a.netlify.app/',
    source: 'https://github.com/SPSingh-1/News-react-vite'
  },
  {
    image: '/p3.png',
    title: 'Translator-React',
    description: 'Translator-React is a powerful translation app that supports 193 languages, converts and translates PDF content, and saves data in PDF, Word, Excel formats. Includes mic and speaker buttons for voice input/output.',
    skills: ['React', 'Express', 'Tailwind'],
    demo: 'https://translator-clone.netlify.app/',
    source: 'https://github.com/SPSingh-1/Translator-React'
  }
];

const Projects = () => {
  return (
    <section className='Pcontainer' id="project">
      <h2 className='Ptitle'>Projects</h2>
      <div className='Projects'>
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
