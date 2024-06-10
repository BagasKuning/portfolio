import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = aboutRef.current;
      const windowHeight = window.innerHeight;
      const elementTop = aboutElement.getBoundingClientRect().top;
      const elementHeight = aboutElement.offsetHeight;

      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const progress = (windowHeight - elementTop) / elementHeight;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="p-6 py-16 relative bg-black text-white" id='about' ref={aboutRef}>
      <p className="text-6xl text-justify relative">
        <span className="about-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundImage: `linear-gradient(to bottom, white ${scrollProgress * 100}%, transparent ${scrollProgress * 100}%)` }}>
          I am a passionate software engineer specializing in frontend development, dedicated to crafting visually stunning and user-centric web experiences. With a keen eye for design and a commitment to seamless functionality, I transform ideas into engaging digital realities that captivate and delight users.
        </span>
      </p>
    </div>
  );
};

export default About;
