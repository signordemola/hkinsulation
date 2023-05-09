import React from 'react';

import projectsData from '../data/projectsData';

const Projects = () => {
  return (
    <section className="mx-auto container">
      <h1 className="text-4xl font-semibold text-center py-8">
        Recent Projects
      </h1>
      <div className="w-8/12 mx-auto p-4">
        {projectsData?.map((project) => (
          <div className="pb-10 shadow mb-4" key={project.id}>
            <img
              className="w-full object-cover object-center"
              src={project.image}
              alt={project.title}
            />

            <div className='px-4'>
              <h1 className=" text-2xl py-4 font-medium">{project.title}</h1>
              <p className=" text-sm text-gray-400">
                by {project.by} | {project.date}
              </p>

              <p className="pt-6 leading-8">{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
