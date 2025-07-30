import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, ChevronDown, ChevronUp, Eye } from 'lucide-react';

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-development', name: 'Website Design & Dev' },
    { id: 'app-development', name: 'App Design & Dev' },
    { id: 'ui-design', name: 'Logo Design' },
    { id: 'social-media', name: 'Social Media Posts' },
    { id: 'print-design', name: 'Posters' },
    { id: 'video-design', name: 'YouTube Thumbnails' }
  ];

  const sampleProjects = [
    {
      id: 1,
      title: 'Cloud-Based To-Do List App',
      category: 'web-development',
      description: 'A simple, elegant task manager with dark UI theme and filtering system.',
      image: './public/todo.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      demoUrl: '',
      githubUrl: '',
      featured: true
    },
    {
      id: 2,
      title: 'Pong 2D Android Game',
      category: 'app-development',
      description: 'A classic Pong-style game with AI opponent, scoring system, and responsive controls.',
      image: './public/pong.webp',
      technologies: ['Java', 'Android', 'Game Physics'],
      demoUrl: 'https://github.com/Radhesh20/Pong2D-Android-Application/releases/download/v1.0/app-debug.apk',
      githubUrl: 'https://github.com/Radhesh20/Pong2D-Android-Application',
      featured: true
    },
    {
      id: 3,
      title: 'Typing Speed Tester',
      category: 'web-development',
      description: 'Web app to test and improve typing speed. Displays random sentences, calculates WPM, and highlights errors in real-time.',
      image: './public/typing.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Events'],
      demoUrl: 'https://radhesh20.github.io/TypeSpeedTester/',
      githubUrl: 'https://github.com/Radhesh20/TypeSpeedTester',
      featured: false
    },
    {
      id: 4,
      title: 'Fitness Tracker Console App',
      category: 'app-development',
      description: 'Java-based application with user authentication, activity logging, workout plans, and calorie calculation.',
      image: './public/fitness.jpeg',
      technologies: ['Java', 'OOP', 'Console UI', 'File I/O'],
      demoUrl: '',
      githubUrl: 'https://github.com/Radhesh20/FitnessApp',
      featured: false
    },
    {
      id: 5,
      title: 'Modern Logo Design',
      category: 'ui-design',
      description: 'Creative logo design for youtube channel .',
      image: './public/psyker.jpg',
      technologies: ['Photoshop', 'Canva', 'Social Media Strategy'],
      demoUrl: '',
      githubUrl: '',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Banner',
      category: 'social-media',
      description: 'Engaging social media banner design announcing status.',
      image: './public/Team_Mayhem_on_Grind.png',
      technologies: ['Photoshop', 'Canva', 'Social Media Strategy'],
      demoUrl: '',
      githubUrl: '',
      featured: false
    },
    {
      id: 7,
      title: 'Event Certificate',
      category: 'print-design',
      description: 'Certificate designs for technical events.',
      image: '',
      technologies: ['Adobe Photoshop', 'Illustrator', 'Print Design'],
      demoUrl: '',
      githubUrl: '',
      featured: false
    },
    {
      id: 8,
      title: 'YouTube Thumbnails',
      category: 'video-design',
      description: 'Eye-catching YouTube thumbnail designs for gaming channel.',
      image: './public/thumb_Avi.jpg',
      technologies: ['Photoshop', 'Canva', 'Graphic Design'],
      demoUrl: '',
      githubUrl: '',
      featured: false
    }
  ];

  useEffect(() => {
    // Initialize projects directly from sampleData, no localStorage involved
    setProjects(sampleProjects);
  }, []); // Empty dependency array means this runs only once on mount


  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleProjectClick = (project) => {
    // For design categories, show image popup
    if (['ui-design', 'social-media', 'print-design', 'video-design'].includes(project.category)) {
      setSelectedImage(project.image);
    }
    // For development projects, you can add navigation to demo/github
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Toggle Button */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my diverse portfolio of projects across web development, mobile apps, and creative design
          </p>
          
          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-8 group flex items-center justify-center mx-auto px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-white font-semibold hover:from-cyan-500/30 hover:to-pink-500/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <Eye className="w-5 h-5 mr-3" />
            <span>{isExpanded ? 'Hide Projects' : 'View My Projects'}</span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 ml-3 group-hover:transform group-hover:-translate-y-1 transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-5 h-5 ml-3 group-hover:transform group-hover:translate-y-1 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Collapsible Content */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer h-96"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Project Links Overlay */}
                    {(project.category === 'web-development' || project.category === 'app-development') && (
                      <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors duration-200 transform hover:scale-110"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200 transform hover:scale-110"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col justify-between h-48">
                    <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-gray-700 text-cyan-400 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    {(project.category === 'web-development' || project.category === 'app-development') && (
                      <div className="flex space-x-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <Github size={16} />
                          <span className="text-sm font-medium">Source Code</span>
                        </a>
                      )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
                <p className="text-gray-500">Try selecting a different category or check back later.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Project Preview"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;