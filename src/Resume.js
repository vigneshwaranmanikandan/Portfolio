import React from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaPhone,} from 'react-icons/fa';
import { motion } from 'framer-motion';

  
function Resume() {
  return (
    <section id="resume" className=" py-16 px-6 lg:px-24 bg-blue-200">
      <div className="container mx-auto max-w-7xl">
        

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
          <div className="flex justify-center space-x-10 mb-8 animate-fadeIn">
            <a
              href="https://www.linkedin.com/in/vigneshwaranms/"
              className="text-gray-700 hover:text-blue-700 text-4xl transition-transform transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vigneshwaranmanikandan"
              className="text-gray-700 hover:text-gray-900 text-4xl transition-transform transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="tel:+918807118015"
              className="text-gray-700 hover:text-blue-700 text-4xl transition-transform transform hover:scale-125"
            >
              <FaPhone />
            </a>
          </div>
          <motion.a
            href="/Vigneshwaran M.pdf"
            download
            className="inline-block px-6 py-3 text-black font-semibold rounded-lg shadow-2xl  bg-white"
          >
            <FaDownload className="inline-block mr-2" /> Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
