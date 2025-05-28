import React, { useEffect, useRef } from 'react';

function Achievements() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.offsetWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="achievements" className=" text-black py-16 px-4 bg-blue-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-8">Achievements</h2>
        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex flex-nowrap scroll-smooth transition-transform duration-300"
          >
            {/* Achievement 1 */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white text-gray-900 rounded-lg shadow-lg p-6 m-4 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Top Performer Award</h3>
              <p className="text-gray-700 mb-4">Received the Top Performer Award for outstanding contributions and performance in the recent project.</p>
              <span className="block text-gray-600">2024</span>
            </div>
            {/* Achievement 2 */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white text-gray-900 rounded-lg shadow-lg p-6 m-4 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Certified Full Stack Developer</h3>
              <p className="text-gray-700 mb-4">Completed a comprehensive Full Stack Developer certification course with a focus on modern web technologies.</p>
              <span className="block text-gray-600">2023</span>
            </div>
            {/* Achievement 3 */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white text-gray-900 rounded-lg shadow-lg p-6 m-4 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">Hackathon Winner</h3>
              <p className="text-gray-700 mb-4">Won first place in a national hackathon with a project that solves real-world problems using innovative technology.</p>
              <span className="block text-gray-600">2022</span>
            </div>
            {/* Achievement 4 */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white text-gray-900 rounded-lg shadow-lg p-6 m-4 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Innovative Project Award</h3>
              <p className="text-gray-700 mb-4">Awarded for developing an innovative project that significantly improved efficiency in our department.</p>
              <span className="block text-gray-600">2021</span>
            </div>
            {/* Achievement 5 */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white text-gray-900 rounded-lg shadow-lg p-6 m-4 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Employee of the Month</h3>
              <p className="text-gray-700 mb-4">Recognized as Employee of the Month for exceptional performance and dedication to the team.</p>
              <span className="block text-gray-600">2020</span>
            </div>
            {/* Achievement 6 */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white text-gray-900 rounded-lg shadow-lg p-6 m-4 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Leadership Excellence</h3>
              <p className="text-gray-700 mb-4">Awarded for demonstrating outstanding leadership and mentoring skills throughout the year.</p>
              <span className="block text-gray-600">2019</span>
            </div>
            {/* Achievement 7 */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white text-gray-900 rounded-lg shadow-lg p-6 m-4 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">Best Design Award</h3>
              <p className="text-gray-700 mb-4">Won the Best Design Award for creating a highly effective and visually appealing user interface.</p>
              <span className="block text-gray-600">2018</span>
            </div>
            {/* Achievement 8 */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white text-gray-900 rounded-lg shadow-lg p-6 m-4 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-red-700 mb-4">Community Service Award</h3>
              <p className="text-gray-700 mb-4">Honored with the Community Service Award for significant contributions to local community projects.</p>
              <span className="block text-gray-600">2017</span>
            </div>
            {/* Achievement 9 */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white text-gray-900 rounded-lg shadow-lg p-6 m-4 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Technical Excellence Award</h3>
              <p className="text-gray-700 mb-4">Received the Technical Excellence Award for delivering high-quality technical solutions and support.</p>
              <span className="block text-gray-600">2016</span>
            </div>
            {/* Achievement 10 */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white text-gray-900 rounded-lg shadow-lg p-6 m-4 flex-shrink-0">
              <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Innovation Challenge Winner</h3>
              <p className="text-gray-700 mb-4">Awarded as the winner of the Innovation Challenge for developing a groundbreaking new technology.</p>
              <span className="block text-gray-600">2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
