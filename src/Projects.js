import React from 'react';
import Slider from 'react-slick';
import { FaCode, FaLayerGroup } from 'react-icons/fa';
import { FaNetworkWired, FaLightbulb, FaChartLine, FaMicrochip } from 'react-icons/fa';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const projectData = [
    {
      title: 'JSW-OHC Consultancy Project',
      description: 'A website for JSW Occupational Health Center.',
      icon: <FaLayerGroup size={28} className="text-cyan-500" />,
      features: ['Data Management', 'Front End Design', 'Employees Hospitality Management'],
    },
    {
      title: 'CECT Portal-KIOT Consultancy',
      description: 'Web app for credit equivalence.',
      icon: <FaLayerGroup size={28} className="text-indigo-500" />,
      features: ['Course Swapping', 'Course Management',  'Frontend UI'],
    },
    {
      title: 'Assisting Chatbot',
      description: 'Chatbot offering user guidance & knowledge tips.',
      icon: <FaCode size={28} className="text-green-500" />,
      features: ['Student Guidance', 'Answer Doubts', 'Basic Tips'],
    },
    {
      title: 'Billing System',
      description: 'Calculates total price based on item quantity.',
      icon: <FaCode size={28} className="text-pink-500" />,
      features: ['Price Accuracy', 'Simplify Work', 'User Friendly'],
    },
    {
      title: 'Game: Catch Me! If You Can!',
      description: 'Fun Java AWT game for all age groups.',
      icon: <FaCode size={28} className="text-yellow-500" />,
      features: ['Engaging Gameplay', 'Simple Controls', 'Enjoyable for All Ages'],
    },
    {
      title: 'Cisco Packet Tracer Simulation',
      description: 'Designed and simulated real-world network topologies.',
      icon: <FaNetworkWired size={28} className="text-indigo-500" />,
      features: ['Network Design', 'Router & Switch Configuration', 'Practical Cisco Lab'],
    },
    {
      title: 'Career Guidance Quiz App',
      description: 'Interactive React-based quiz platform for students.',
      icon: <FaLightbulb size={28} className="text-yellow-400" />,
      features: ['User Authentication', 'Quiz Navigation', 'Google Login + Answer Email'],
    },
    {
      title: 'Smart Expense Tracker',
      description: 'Track expenses with Bootstrap and jQuery.',
      icon: <FaChartLine size={28} className="text-green-400" />,
      features: ['Category-wise Expense', 'Bootstrap UI', 'Interactive Charts'],
    },
    {
      title: 'IoT: Temperature & Humidity Alert',
      description: 'Embedded system sending sensor data to phone.',
      icon: <FaMicrochip size={28} className="text-red-500" />,
      features: ['Arduino + DHT11', 'Real-time SMS Alert', 'Embedded IoT System'],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
<section
  id="projects"
  className="py-24 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden"
>
  <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-center mb-14 drop-shadow-md">
    Featured Projects
  </h2>

  <div className="container mx-auto px-6">
    <Slider {...settings}>
      {projectData.map((project, index) => (
        <div key={index} className="px-4">
          <div className="bg-white/5 text-white rounded-3xl p-6 relative transition-all duration-500 transform hover:scale-[1.03] hover:rotate-[0.5deg] shadow-lg group overflow-hidden border border-white/10">
            
            {/* Glow Ring */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700 z-0"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-5 gap-4">
                <div className="p-4 bg-white rounded-full shadow-xl">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-semibold group-hover:text-cyan-300 transition duration-300">
                  {project.title}
                </h3>
              </div>
              <p className="mb-4 text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="group-hover:text-cyan-300 transition-colors duration-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

  );
}

export default Projects;
