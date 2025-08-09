// src/pages/services/VIPCloseProtection.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const VIPCloseProtection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}lovable-uploads/vip-close-protection.png)`,
        }}
      >
        <div className="absolute inset-0 bg-red-900 bg-opacity-40 flex items-center justify-center">
          <h1
            className="text-white text-4xl md:text-6xl font-bold text-center px-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            VIP Close Protection
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-black dark:text-white"
          data-aos="fade-up"
        >
          Elite Personal Security
        </h2>
        <p
          className="text-lg leading-8 mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At <strong>Jolu Group Security</strong>, we understand that high-profile individuals,
          executives, and dignitaries face unique and dynamic threats. Our VIP Close Protection
          services are tailored to deliver discreet, effective, and round-the-clock personal
          security.
        </p>
        <p
          className="text-lg leading-8 mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our expertly trained protection officers operate with precision and discretion,
          ensuring your safety without compromising your comfort or mobility. From route planning
          and surveillance to real-time threat response, we offer comprehensive protection
          wherever you go.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 dark:bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3
            className="text-2xl md:text-3xl font-semibold text-center text-gray-900 dark:text-white mb-10"
            data-aos="fade-up"
          >
            Why Clients Trust Our VIP Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Discreet and Professional
              </h4>
              <p>
                Our personnel blend into your environment, ensuring seamless protection without
                drawing attention or disrupting your routine.
              </p>
            </div>
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Highly Trained Officers
              </h4>
              <p>
                Each protection agent is trained in close-quarter defense, surveillance detection,
                evasive driving, and emergency medical response.
              </p>
            </div>
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Confidential & Customizable
              </h4>
              <p>
                We prioritize confidentiality and tailor every security detail to your lifestyle,
                itinerary, risk level, and personal preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white dark:bg-neutral-900 text-black dark:text-white text-center">
        <h3
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-up"
        >
          Need Private Security You Can Rely On?
        </h3>
        <p
          className="text-lg mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Reach out to us today for trusted VIP close protection services anywhere in Kenya and
          beyond.
        </p>
        <Link to="/quote">
          <Button
            className="bg-red-700 text-white hover:bg-red-800 text-lg px-6 py-3"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Request a Free Quote
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default VIPCloseProtection;
