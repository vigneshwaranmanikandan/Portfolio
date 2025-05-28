import React from "react";
import { Link } from "react-router-dom";
import profileImage from "./Image.jpg";

const About = () => {
  return (
    <section
  id="about"
  className="py-24 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-12 perspective-[1500px]">

    {/* Text Content */}
    <div className="w-full md:w-2/3 text-center md:text-left relative z-10">
      <h2 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 drop-shadow-md mb-6">
        About Me
      </h2>
      <p className="text-lg sm:text-xl text-white leading-relaxed mb-8">
        I’m a <span className="font-semibold text-blue-700">Full Stack Developer</span> who thrives on solving real-world problems with scalable and elegant solutions. I love creating
        engaging user experiences and clean code architecture.<br />
        <span className="font-semibold text-purple-700">Let’s build something amazing together.</span>
      </p>
      <Link
        to="/more-about-me"
        className="inline-block relative font-semibold text-white px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110"
      >
        More About Me
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-xl z-[-1]"></span>
      </Link>
    </div>

    {/* Profile Image with 3D & Glow */}
    <div className="w-full md:w-1/3 transform style-3d group perspective-[1000px]">
      <div className="relative rounded-2xl overflow-hidden transition-transform duration-500 transform group-hover:rotate-y-[10deg] group-hover:-rotate-x-[2deg] group-hover:scale-[1.03] shadow-2xl">
        <img
          src={profileImage}
          alt="Vigneshwaran - Full Stack Developer"
          className="rounded-2xl object-cover w-full h-auto"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-10 blur-2xl pointer-events-none z-[-1]" />
      </div>
    </div>
  </div>
</section>

  );
};

export default About;
