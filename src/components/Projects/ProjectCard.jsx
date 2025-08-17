import React from 'react';

const ProjectCard = ({ image, title, description, skills, demo, source }) => {
  return (
    <div className='PCcontainer'>
      <img src={image} alt={title} className='Pimage'/>
      <h3 className='PCtitle'>{title}</h3>
      <p className='PCdescription'>{description}</p>
      <ul className='PCskills'>
        {skills.map((skill, index) => (
          <li key={index} className='PCskill'>{skill}</li>
        ))}
      </ul>
      <div className='PClinks'>
        <a href={demo} className='PClink'>Demo</a>
        <a href={source} className='PClink'>Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
