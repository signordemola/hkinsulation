import React from 'react';

import projectsData from '../data/projectsData';

const Projects = () => {
  console.log(projectsData);
  return (
    <section className="container mx-auto">
      <div>
        <h1 className="text-center text-[28px] uppercase pt-4 pb-10">Recent Projects</h1>

        <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData?.map((project) => (
            <div key={project.id} className="mx-auto p-2 cursor-pointer">
              <img src={project.image} alt={project.title} />
              <h1 className="py-2 text-[18px]">{project.title}</h1>
              <p className="text-[15px] text-gray-700">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
