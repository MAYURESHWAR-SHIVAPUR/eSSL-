import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/footer';
import Achive from '../components/achive';
import Explore from '../components/Explore';
import Model from '../components/Model';
import Reviews from '../components/Reviews';

const Landing = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Triggered when button in NavBar is clicked
  const changeBackground = () => {
    setIsAnimating(true);
  };

  // Called automatically when the CSS animation finishes
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Overlay Element */}
      <div
        onAnimationEnd={handleAnimationEnd}
        className={`fixed top-[-120%] left-0 w-screen h-[110vh] bg-black pointer-events-none z-[9999] [clip-path:ellipse(100%_70%_at_50%_30%)] ${isAnimating ? 'bg-black-slide' : ''
          }`}
      />

      <NavBar changeBackground={changeBackground} />
      <Hero />
      <Explore />
      <About />
      <Reviews />
      <Achive />
      <Model />
      <Footer />
    </div>
  );
};

export default Landing;