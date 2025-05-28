import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava,  FaGitAlt, FaNetworkWired } from 'react-icons/fa';
import { SiExpress, SiSpringboot, SiMongodb, SiMysql, SiPostman, SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Java', icon: <FaJava className="text-red-600" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-700" /> },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        { name: 'VS Code', icon: <SiVisualstudiocode className="text-blue-500" /> },
      ],
    },
    {
      category: 'Networking',
      skills: [
        { name: 'Cisco Packet Tracer', icon: <FaNetworkWired className="text-indigo-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-center mb-16 drop-shadow-lg">
        Skills
      </h2>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-cyan-400 relative overflow-hidden group"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">{cat.category}</h3>
            <ul className="space-y-4">
              {cat.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-white group-hover:translate-x-1 transition-all duration-300">
                  <div className="text-2xl">{skill.icon}</div>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
            {/* Gradient hover ring */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 blur-2xl rounded-3xl z-0 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Animated glow rings */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full border-4 border-pink-500 opacity-10 animate-pulse blur-2xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-[30%] right-[5%] w-[200px] h-[200px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-30 blur-3xl rounded-full animate-ping z-0"></div>
    </section>
  );
};

export default Skills;
