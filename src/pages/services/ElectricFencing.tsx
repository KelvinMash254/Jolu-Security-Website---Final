// src/pages/services/ElectricFencing.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const ElectricFencing = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}lovable-uploads/electric-fence.png)`,
        }}
      >
        <div className="absolute inset-0 bg-red-900 bg-opacity-40 flex items-center justify-center">
          <h1
            className="text-white text-4xl md:text-6xl font-bold text-center px-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Electric Fencing Solutions
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-red-700 dark:text-red-400">
          Smarter Boundaries, Stronger Protection
        </h2>
        <p className="text-lg leading-8 mb-6">
          At <strong>Jolu Group Security</strong>, we offer high-performance electric fencing systems
          that deliver powerful perimeter protection for residential, commercial, and industrial
          spaces. These solutions provide a strong visual and physical deterrent against unauthorized entry.
        </p>
        <p className="text-lg leading-8 mb-6">
          From integrated alarm systems to professional-grade components, our electric fencing
          setups are installed with precision and compliance in mind—ensuring safety,
          efficiency, and 24/7 protection.
        </p>
      </section>

      {/* Why Choose Us */}
      <section
        className="bg-gray-100 dark:bg-neutral-900 py-16 transition-colors duration-300"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto px-4 text-gray-900 dark:text-white">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Why Our Electric Fencing Services Stand Out
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                High-Voltage Deterrence
              </h4>
              <p>
                Our fencing systems deliver a non-lethal electric shock that discourages intruders
                and helps protect your perimeter effectively.
              </p>
            </div>
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Real-Time Monitoring
              </h4>
              <p>
                Integrated with alarm and surveillance systems, our fences provide real-time alerts
                and monitoring to keep your property secure at all times.
              </p>
            </div>
            <div
              className="bg-white dark:bg-black p-6 rounded-lg shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="font-bold text-lg text-red-700 dark:text-red-400 mb-2">
                Customized Installation
              </h4>
              <p>
                We assess your property’s layout and risk level to design and install electric fencing
                that fits perfectly—both functionally and aesthetically.
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
          Defend Your Boundaries Today
        </h3>
        <p className="text-lg mb-8">
          Get a professionally installed electric fencing solution from Jolu Group Security—built to last,
          and trusted to protect.
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

export default ElectricFencing;
