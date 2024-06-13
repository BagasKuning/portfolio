import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = aboutRef.current;
      const windowHeight = window.innerHeight;
      const elementTop = aboutElement.getBoundingClientRect().top + 300;
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
    <div className="md:px-6 px-3 py-24 relative bg-black text-white" ref={aboutRef}>
      <p className="md:text-6xl sm:text-5xl text-4xl text-justify relative">
        <span className="about-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundImage: `linear-gradient(to bottom, white ${scrollProgress * 100}%, transparent ${scrollProgress * 100}%)` }}>
            Dedicated to crafting visually stunning and user-centric web experiences. With a keen eye for design and a commitment to seamless functionality, I transform ideas into engaging digital realities that captivate and delight users.
        </span>
      </p>
    </div>
  );
};

export default About;
