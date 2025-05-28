// SlideInSection.js
import React, { useEffect, useState } from 'react';

const SlideInSection = ({ children, animation = 'fade-in', className = '', ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(props.id);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [props.id]);

  return (
    <div
      id={props.id}
      className={`transition-opacity duration-700 ${isVisible ? animation : 'opacity-0'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default SlideInSection;
