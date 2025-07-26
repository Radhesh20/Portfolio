import React from 'react';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Cloud, 
  Globe,
  Cpu,
  Monitor,
  Server,
  Layers,
  GitBranch,
  Figma,
  ChevronDown,
  ChevronUp,
  Zap
} from 'lucide-react';

const Skills = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: 'Java', icon: <Cpu className="w-6 h-6" /> },
        { name: 'Python', icon: <Code className="w-6 h-6" /> },
        { name: 'JavaScript', icon: <Globe className="w-6 h-6" /> },
        { name: 'Dart', icon: <Smartphone className="w-6 h-6" /> },
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: 'HTML/CSS', icon: <Monitor className="w-6 h-6" /> },
        { name: 'React.js', icon: <Layers className="w-6 h-6" /> },
        { name: 'Node.js', icon: <Server className="w-6 h-6" /> },
        { name: 'Express.js', icon: <Server className="w-6 h-6" /> },
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: 'Android (Java)', icon: <Smartphone className="w-6 h-6" /> },
        { name: 'Flutter', icon: <Smartphone className="w-6 h-6" /> },
        { name: 'React Native', icon: <Smartphone className="w-6 h-6" /> },
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
        { name: 'Spring Boot', icon: <Server className="w-6 h-6" /> },
        { name: 'MongoDB', icon: <Database className="w-6 h-6" /> },
        { name: 'Firebase', icon: <Cloud className="w-6 h-6" /> },
      ]
    },
    {
      title: 'Design & Tools',
      icon: <Palette className="w-8 h-8" />,
      skills: [
        { name: 'Figma', icon: <Figma className="w-6 h-6" /> },
        { name: 'Adobe Creative Suite', icon: <Palette className="w-6 h-6" /> },
        { name: 'Git/GitHub', icon: <GitBranch className="w-6 h-6" /> },
        { name: 'AWS', icon: <Cloud className="w-6 h-6" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Toggle Button */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
          
          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-8 group flex items-center justify-center mx-auto px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-white font-semibold hover:from-cyan-500/30 hover:to-pink-500/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-3" />
            <span>{isExpanded ? 'Hide Skills' : 'Explore My Skills'}</span>
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
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-8 text-center group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex flex-col items-center p-4 bg-gray-800/30 rounded-xl hover:bg-gray-700/30 transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <div className="text-cyan-400 mb-3 group-hover:text-pink-400 transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <div className="text-center">
                          <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills Tags */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Additional Expertise</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'RESTful APIs', 'GraphQL', 'Docker', 'Linux', 'Agile/Scrum',
                  'UI/UX Design', 'Responsive Design', 'SEO Optimization',
                  'Performance Optimization', 'Testing', 'DevOps', 'Cloud Computing'
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium border border-gray-600/50 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-pink-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
