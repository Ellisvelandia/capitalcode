import { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      client: 'Fashion Retail Co.',
      type: 'ecommerce',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Enterprise Dashboard',
      client: 'Tech Solutions Inc.',
      type: 'enterprise',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['Vue.js', 'Python', 'PostgreSQL'],
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      client: 'John Designer',
      type: 'personal',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Tailwind CSS'],
    },
  ];

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'personal', label: 'Personal' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.type === filter);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
        
        {/* Filters */}
        <div className="flex justify-center gap-4 mb-8">
          {filters.map((filterOption) => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value)}
              className={`px-4 py-2 rounded-md ${
                filter === filterOption.value
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors duration-200`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">Client: {project.client}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
