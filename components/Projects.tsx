import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: '',
    description: '',
    imageUrl: ''
  },
  {
    id: 2,
    title: '',
    description: '',
    imageUrl: ''
  },
  {
   id: 3,
    title: '',
    description: '.',
    imageUrl: ''
  },
   {
    id: 4,
    title: '',
    description: '',
    imageUrl: ''
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-transform duration-300">
    <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover"/>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Signature Projects</h2>
          <div className="w-24 h-1 bg-[#6b0000] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;