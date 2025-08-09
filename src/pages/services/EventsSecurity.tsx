// src/pages/services/EventsSecurity.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const EventsSecurity = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}lovable-uploads/events-security.png)`,
        }}
      >
        <div className="absolute inset-0 bg-red-900 bg-opacity-40 flex items-center justify-center">
          <h1
            className="text-white text-4xl md:text-6xl font-bold text-center px-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Events Security Services
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-700 dark:text-red-400">
          Professional Protection for Every Occasion
        </h2>
        <p className="text-lg leading-8 mb-6">
          At <strong>Jolu Group Security</strong>, we know that safety and order are critical
          to the success of any event. From concerts and weddings to corporate functions and
          public festivals, our experienced security personnel are trained to manage crowds,
          protect guests, and handle emergencies with calm professionalism.
        </p>
        <p className="text-lg leading-8 mb-6">
          Our event security plans are tailored to your specific venue, audience size,
          and risk level—ensuring thorough coverage through access control, perimeter
          surveillance, VIP protection, and emergency readiness.
        </p>
      </section>

      {/* Why Choose Us */}
      <section
        className="bg-gray-100 dark:bg-neutral-900 py-16 transition-colors duration-300"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-4 text-gray-900 dark:text-white">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Why Our Event Security Services Stand Out
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Crowd Management Experts
              </h4>
              <p>
                We control foot traffic, prevent overcrowding, and ensure order—so your event runs
                smoothly from start to finish.
              </p>
            </div>
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                VIP & Guest Safety
              </h4>
              <p>
                Whether it's celebrities or high-level executives, we provide discreet and
                personalized protection for all your key guests.
              </p>
            </div>
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Emergency Response Ready
              </h4>
              <p>
                Our team is trained for fire, medical, and evacuation scenarios—with clear
                protocols and rapid coordination in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 bg-white dark:bg-neutral-900 text-black dark:text-white text-center transition-colors duration-300"
        data-aos="zoom-in"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Let Us Secure Your Next Event
        </h3>
        <p className="text-lg mb-8">
          Trust <strong>Jolu Group Security</strong> for peace of mind and professional handling
          of your event—no matter the size or scope.
        </p>
        <Link to="/quote">
          <Button className="text-white bg-red-700 hover:bg-red-800 text-lg px-6 py-3">
            Request a Free Quote
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default EventsSecurity;
