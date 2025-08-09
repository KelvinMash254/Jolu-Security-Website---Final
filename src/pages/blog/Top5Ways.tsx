// src/pages/blog/Top5Ways.tsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Top5Ways = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-100 min-h-screen flex flex-col justify-between">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Top 5 Smart Ways to Secure Your Home
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Published on July 23, 2025 by <strong>Jolu Group Security</strong>
        </p>

        <img
          src={`${import.meta.env.BASE_URL}lovable-uploads/secure-home.jpg`}
          alt="Secure your home"
          className="rounded-lg w-full mb-10"
        />

        <section className="space-y-6 leading-relaxed">
          <p>
            Your home is your sanctuary. It’s where your family lives, memories are made, and valuables are kept.
            But in today’s world, leaving your home unsecured is a risk you can’t afford to take.
            At <strong>Jolu Group</strong>, we know that true peace of mind begins with smart, proactive security.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Install a Modern CCTV Surveillance System</h2>
          <p>
            CCTV is your home’s watchful eye, 24/7. A well-placed system not only deters intruders but gives you
            visibility over your compound. Our systems offer night vision, motion detection, and mobile monitoring.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Secure All Entry Points</h2>
          <p>
            Most break-ins happen through doors or windows. Reinforce them with deadbolts, grills, or smart locks.
            Jolu Group also offers assessments to identify weak spots in your structure.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Use Outdoor Security Lighting</h2>
          <p>
            Motion sensor lights deter suspicious activity by making hiding difficult.
            Place them near entrances, driveways, and dark corners for full coverage.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Set Up a Professional Alarm Response System</h2>
          <p>
            A loud alarm is good. A quick response is better. Jolu Group offers professional alarm response
            that sends trained guards to your home within minutes of a breach.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Train Your Household on Safety Protocols</h2>
          <p>
            Awareness is the first line of defense. Train family and staff on how to lock up,
            respond to threats, and report suspicious activity.
          </p>

          <p className="mt-8">
            Want a customized home security assessment?{" "}
            <Link
              to="/quote"
              className="text-red-600 hover:underline dark:text-red-400"
            >
              Request a Free Quote
            </Link>{" "}
            from our expert team today.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Top5Ways;
