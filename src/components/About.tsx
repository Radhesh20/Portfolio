import React from 'react';
import { Code, Smartphone, Palette, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code className="w-8 h-8" />, number: '5+', label: 'Projects Completed' },
    { icon: <Smartphone className="w-8 h-8" />, number: '1+', label: 'Years Experience' },
    { icon: <Palette className="w-8 h-8" />, number: '25+', label: 'Designs Created' },
    { icon: <Award className="w-8 h-8" />, number: '5+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello there! I'm <span className="text-cyan-400 font-semibold">Radhesh Kumar</span>, 
              a passionate Computer Science student and developer with a love for creating 
              elegant, user-centric digital experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm driven by a fascination with problem-solving and innovative technologies. 
              My journey in tech has equipped me with a solid foundation in 
              <span className="text-pink-400 font-semibold"> mobile development</span>, 
              <span className="text-cyan-400 font-semibold"> full-stack web technologies</span>, and 
              <span className="text-purple-400 font-semibold"> creative design solutions</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me solving algorithm challenges on platforms like 
              <span className="text-cyan-400 font-semibold"> LeetCode</span> and 
              <span className="text-pink-400 font-semibold"> GeeksForGeeks</span>, continuously 
              expanding my technical expertise and staying ahead of emerging trends.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {['Problem Solving', 'Creative Thinking', 'Team Collaboration', 'Continuous Learning'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-cyan-400 rounded-full text-sm font-medium border border-gray-600 hover:border-cyan-400/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Location</span>
                  <span className="text-cyan-400 font-semibold">Trichy, India</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Education</span>
                  <span className="text-cyan-400 font-semibold">Computer Science</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Focus</span>
                  <span className="text-cyan-400 font-semibold">Full-Stack Development</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Status</span>
                  <span className="text-green-400 font-semibold">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 text-center hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-cyan-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
