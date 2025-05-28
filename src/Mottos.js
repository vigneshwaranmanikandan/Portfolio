import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Mottos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  const mottos = [
    {
      text: 'Innovation distinguishes between a leader and a follower.',
    },
    {
      text: 'The only way to do great work is to love what you do.',
    },
    {
      text: 'Success is not the key to happiness. Happiness is the key to success.',
    },
  ];

  return (
    <section
      id="mottos"
      className="py-24 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-shimmer pointer-events-none mix-blend-overlay opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold text-white text-center mb-16 drop-shadow-2xl">
          Mottos
        </h2>
        <Slider {...settings}>
          {mottos.map((motto, index) => (
            <div key={index} className="p-4">
              <div className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30 transform-gpu hover:rotate-[1deg] hover:scale-[1.03] hover:shadow-[0px_20px_40px_rgba(0,0,0,0.2)] transition-all duration-700 ease-in-out">
                {/* Gradient light reflection */}
                <div className="absolute -top-1 -left-1 w-full h-full rounded-3xl border border-white/20 group-hover:opacity-100 opacity-0 transition duration-700 pointer-events-none"></div>

                {/* Glass shimmer */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl z-0"></div>

                <p className="relative text-2xl md:text-3xl font-semibold text-white leading-relaxed z-10">
                  “{motto.text}”
                </p>

                {/* Bottom glow line */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 h-1.5 w-28 rounded-full opacity-90 group-hover:scale-x-110 transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .bg-shimmer {
          background: linear-gradient(120deg, #ffffff 0%, #ffffff33 20%, #ffffff11 100%);
          background-size: 200% 200%;
          animation: shimmer 15s infinite linear;
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .slick-dots li button:before {
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px;
        }

        .slick-dots li.slick-active button:before {
          color: white;
        }
      `}</style>
    </section>
  );
}

export default Mottos;
