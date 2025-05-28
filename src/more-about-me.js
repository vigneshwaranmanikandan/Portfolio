import React from 'react';


function MoreAboutMe() {
  return (
    <div className="py-24 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      {/* Gradient overlay for soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-40 blur-2xl z-0"></div>

      <div className="container mx-auto relative z-10">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          More About Me
        </h1>

        {/* Intro */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-800 bg-white/70 rounded-xl p-6 shadow-md">
          I am currently in my third year of pursuing a Bachelor of Engineering in Computer Science and Engineering at Knowledge Institute of Technology. My development journey began with a strong focus on front-end development, where I specialized in crafting intuitive, user-friendly, and visually appealing UI/UX interfaces that enhance user experience.

As my curiosity grew, I expanded into back-end development, learning to build scalable server-side applications using Node.js. I then deepened my understanding of databases by working with MySQL, gaining hands-on experience in data modeling and query optimization.

In addition to web development, I explored networking fundamentals through Cisco Packet Tracer, which helped me grasp how digital communication works at the infrastructure level. I also ventured into cloud computing, understanding deployment, virtualization, and cloud architecture essentials.

From the early stages of my journey, I have also been passionate about content creation, particularly for e-commerce platforms, where I contributed to building engaging and conversion-driven digital content.


            <br /><br />
            As I continue to grow, I am now delving into server-side technologies, database management, and API integration. My aim is to bridge the gap between front-end aesthetics and back-end functionality, ultimately becoming a proficient Full Stack Developer. My journey is fueled by a commitment to continuous learning, and I'm eager to build robust, scalable solutions that make a meaningful impact.
          </p>
        </section>

        {/* Expertise */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Expertise</h2>
          <ul className="list-disc list-inside text-lg text-gray-800 bg-white/70 rounded-xl p-6 shadow-md">
            <li>UI/UX</li>
            <li>Full Stack Development</li>
            <li>Networking</li>
            <li>Cloud Computing</li>
            <li>Content Writing</li>
          </ul>
        </section>

        <section className="mb-12">
  <h2 className="text-4xl font-bold text-pink-800 mb-4">Work Experience</h2>
  <ul className="list-disc list-inside text-lg text-gray-800 bg-white/70 rounded-xl p-6 shadow-md space-y-4">
    
    <li>
      <strong>Full Stack Developer Intern</strong> – <em>Asridhi Info Tech (Startup)</em><br />
      <span className="text-sm text-gray-700">Present</span><br />
      Currently working as a Full Stack Developer Intern, contributing to both front-end and back-end development. Collaborating in an agile environment to build dynamic, scalable web applications that solve real-world business problems.
    </li>
    
    <li>
      <strong>Frontend Developer Intern</strong> – <em>Nexus Logic Technologies</em><br />
      <span className="text-sm text-gray-700">2 Months</span><br />
      Worked on designing and developing intuitive, responsive user interfaces. Gained hands-on experience with modern UI frameworks and collaborated on live projects to enhance user experiences.
    </li>

    <li>
      <strong>Software Developer</strong> – <em>Prodigy InfoTech</em><br />
      Involved in full-stack development tasks, including feature development, bug fixing, and optimization. Developed and maintained scalable codebases while working in a fast-paced environment.
    </li>

    <li>
      <strong>Content Writer</strong> – <em>Earth5R</em><br />
      Created engaging and informative content focused on sustainability and environmental awareness. Contributed to digital content that aimed to drive eco-conscious community engagement.
    </li>

    <li>
      <strong>Consultancy Project</strong> – <em>Matrimony Website</em><br />
      Worked on a consultancy-based web application project focused on building a modern and user-friendly Matrimony Website with seamless user experience and design.
    </li>

    <li>
      <strong>JSW Consultancy Project</strong> – <em>OHC Website</em><br />
      Worked as a Business Analyst and Front end developer in the JSW Consultancy project.
    </li>

  </ul>
</section>

      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes dance {
          0%, 100% {
            transform: rotate(0deg) translateY(0);
          }
          25% {
            transform: rotate(-5deg) translateY(-4px);
          }
          50% {
            transform: rotate(5deg) translateY(4px);
          }
          75% {
            transform: rotate(-2deg) translateY(-2px);
          }
        }
        .animate-dance {
          animation: dance 5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default MoreAboutMe;
