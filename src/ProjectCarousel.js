// ProjectCarousel.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';
import project5 from './images/project5.png';
import project6 from './images/project6.png';
import project7 from './images/project7.png';
import project8 from './images/project8.png';
import project9 from './images/project9.png';
import achievement1 from './images/achievement1.png';
import achievement2 from './images/achievement2.png';
import achievement3 from './images/achievement3.png';
import achievement4 from './images/achievement4.png';
import achievement5 from './images/achievement5.png';
import achievement7 from './images/achievement7.png';

const images = [
  { src: project1, caption: 'Smart Expense Tracker' },
  { src: project2, caption: 'Career Guidance Quiz App' },
  { src: project3, caption: 'Cisco Packet Tracer Simulation' },
  { src: project4, caption: 'IoT Temp & Humidity Monitoring' },
  { src: project5, caption: 'Staffing Agency' },
  { src: project6, caption: 'CECT Portal' },
  { src: project7, caption: 'Chatbot' },
  { src: project8, caption: 'Tours & Travels Site' },
  { src: project9, caption: 'Fashion Site' },
  { src: achievement1, caption: 'Certificate: Software Development' },
  { src: achievement2, caption: 'Best Student Award' },
  { src: achievement3, caption: 'Certificate: Frontend Internship' },
  { src: achievement4, caption: 'Certificate: Full Stack Developer' },
  { src: achievement5, caption: 'Certificate: Content Writing' },
  { src: achievement7, caption: 'Certificate: NPTEL IIOT 4.0' },
];


const ProjectCarousel = () => {
  return (
    <div className="py-16 bg-[#0f172a] text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500">
        Projects & Achievements
      </h2>
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView="auto"
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          grabCursor={false}
        >
          {[...images, ...images].map((item, index) => ( // doubled for smoother loop
            <SwiperSlide
              key={index}
              style={{ width: '250px' }}
              className="flex justify-center"
            >
              <div className="flex flex-col items-center w-full">
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
                <p className="mt-3 text-base text-gray-300 text-center">{item.caption}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCarousel;
