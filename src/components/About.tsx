import { useState } from 'react';
import { Download } from 'lucide-react';
import SkillBar from './SkillBar';

const About = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education'>('skills');

  const skills = [
    { name: 'WordPress', percentage: 95 },
    { name: 'PHP', percentage: 90 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'jQuery', percentage: 90 },
    { name: 'AJAX', percentage: 90 },
    { name: 'HTML/CSS', percentage: 85 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: 'Jan 2021 - Present',
      description: 'Leading the frontend development team in creating modern, responsive web applications. Implemented new design system that improved development speed by 35%.'
    },
    {
      title: 'Frontend Developer',
      company: 'WebSolutions Ltd.',
      period: 'Mar 2018 - Dec 2020',
      description: 'Developed and maintained client websites using React, TypeScript, and modern CSS. Collaborated with designers to implement pixel-perfect UI components.'
    },
    {
      title: 'Junior Web Developer',
      company: 'CreativeMinds Agency',
      period: 'Jun 2016 - Feb 2018',
      description: 'Built responsive websites for various clients. Worked on improving website performance and accessibility.'
    }
  ];

  const education = [
    {
      degree: 'M.S. in Computer Science',
      institution: 'Tech University',
      period: '2014 - 2016',
      description: 'Specialized in Human-Computer Interaction and Web Technologies.'
    },
    {
      degree: 'B.S. in Computer Science',
      institution: 'State University',
      period: '2010 - 2014',
      description: 'Graduated with honors. Relevant coursework included Web Development, UI/UX Design, and Software Engineering.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
            I'm a passionate frontend developer with over 5 years of experience creating beautiful, functional web experiences.
            I specialize in building responsive, accessible websites using modern technologies like React, TypeScript, and Tailwind CSS.
            My goal is to create digital experiences that are not only visually appealing but also intuitive and performant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Nabeel S"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Nabeel S</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Frontend Developer</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Node.js</span>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
              <div className="flex border-b border-gray-200 dark:border-gray-600">
                <button
                  className={`flex-1 py-4 px-6 font-medium transition-colors duration-300 ${activeTab === 'skills' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                  onClick={() => setActiveTab('skills')}
                >
                  Skills
                </button>
                <button
                  className={`flex-1 py-4 px-6 font-medium transition-colors duration-300 ${activeTab === 'experience' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                  onClick={() => setActiveTab('experience')}
                >
                  Experience
                </button>
                <button
                  className={`flex-1 py-4 px-6 font-medium transition-colors duration-300 ${activeTab === 'education' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                  onClick={() => setActiveTab('education')}
                >
                  Education
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'skills' && (
                  <div className="space-y-6">
                    {skills.map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
                    ))}
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-8">
                    {experiences.map((experience, index) => (
                      <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-600 last:border-0 last:pb-0">
                        <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{experience.title}</h4>
                        <div className="flex items-center mb-2">
                          <span className="text-gray-600 dark:text-gray-300">{experience.company}</span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-gray-500 dark:text-gray-400">{experience.period}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{experience.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-600 last:border-0 last:pb-0">
                        <div className="absolute top-0 left-[-9px] w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                        <div className="flex items-center mb-2">
                          <span className="text-gray-600 dark:text-gray-300">{edu.institution}</span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-gray-500 dark:text-gray-400">{edu.period}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
