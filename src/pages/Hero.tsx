import React from 'react';
import './Hero.css';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  'lovable-uploads/hero1.jpeg',
  'lovable-uploads/hero2.jpeg',
  'lovable-uploads/hero3.jpeg',
];

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden py-20 text-white w-full max-w-full"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div className="hero-background w-full h-full">
          {images.map((img, i) => (
            <div
              key={i}
              className="hero-slide w-full h-full"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL + img})`,
                animationDelay: `${i * 6}s`,
                opacity: i === 0 ? 1 : 0, // Optional: start first slide visible
              }}
            />
          ))}
        </div>
        {/* Dark Overlay */}
        <div className="hero-overlay absolute inset-0 bg-black bg-opacity-0"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-0 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-line-1">
          Your Safety,<br />
          <span className="text-red-600">Our Commitment.</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto fade-in-line-2">
          Protecting homes, businesses, and communities across Kenya with reliable, professional security services you can trust.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-start text-center sm:text-left">
          <Button
            asChild
            size="lg"
            className="border border-white bg-transparent text-white text-lg px-8 py-4 flex items-center gap-2 transition-transform transform hover:scale-105 active:scale-95 hover:bg-red-600 hover:text-white"
          >
            <a href="tel:+254790298003">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>

          <Link to="/quote">
            <Button
              size="lg"
              className="border border-white bg-transparent text-white text-lg px-8 py-4 flex items-center gap-2 transition-transform transform hover:scale-105 active:scale-95 hover:bg-red-600 hover:text-white"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
