import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = ['all', ...new Set(projectsData.map(project => project.category))];

  useEffect(() => {
    setIsAnimating(true);
    
    const timer = setTimeout(() => {
      if (filter === 'all') {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(
          projectsData.filter(project => project.category === filter)
        );
      }
      setIsAnimating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
            Here are some of my recent projects. Each one has been carefully crafted to
            meet specific needs and deliver excellent user experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                filter === category
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`transition-opacity duration-300 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;