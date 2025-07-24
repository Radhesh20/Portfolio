import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Dart', level: 75 },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Android (Java)', level: 90 },
        { name: 'Flutter', level: 85 },
        { name: 'React Native', level: 70 },
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'Spring Boot', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Firebase', level: 80 },
      ]
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe Creative Suite', level: 80 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'AWS', level: 70 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      />
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
                className={`px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-full text-sm font-medium border border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;