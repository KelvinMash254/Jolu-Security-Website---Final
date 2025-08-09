// src/pages/blog/WhyCCTVMatters.tsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const WhyCCTVMatters = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-100 min-h-screen flex flex-col justify-between">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Why Every Business in Kenya Needs a CCTV System
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Published on July 23, 2025 by <strong>Jolu Group Security</strong>
        </p>

        <img
          src={`${import.meta.env.BASE_URL}lovable-uploads/cctv-image.jpg`}
          alt="Business CCTV Security"
          className="rounded-lg w-full mb-10"
        />

        <section className="space-y-6 leading-relaxed">
          <p>
            Whether you run a supermarket in Nakuru, a hardware shop in Gikambura, or a tech firm in Upper Hill, 
            <strong> security should never be left to chance</strong>. 
            In today’s fast-paced world, a CCTV surveillance system is more than just a deterrent. It’s your silent watchdog.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Deter Theft & Break-Ins</h2>
          <p>
            Just the presence of CCTV cameras makes would-be criminals think twice. 
            Whether it’s petty shoplifting or break-ins after hours, CCTV reduces risk and creates accountability. 
            In areas like Eastleigh or Mombasa's Old Town where theft is a common concern, 
            CCTV offers a practical first line of defense.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Monitor Staff & Operations</h2>
          <p>
            Business owners can’t be everywhere at once, but your cameras can. 
            From back office operations to cash registers, 
            a well-placed CCTV system helps you track performance, reduce internal fraud, and improve customer service.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Get Real-Time Access Anywhere</h2>
          <p>
            Modern CCTV systems allow remote monitoring via smartphone or laptop. 
            Whether you’re in Kisii visiting family or attending a trade fair in Kampala, 
            you can view your business in real time, anytime.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Aid in Investigations & Dispute Resolution</h2>
          <p>
            In case of disputes, CCTV footage serves as unbiased evidence. 
            Whether it’s a customer complaint, a workplace incident, or a police case, 
            footage can protect your staff, reputation, and bottom line.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Boost Customer Confidence</h2>
          <p>
            Customers feel safer in monitored environments. 
            Whether it’s a boutique in Kilimani or a restaurant in Thika, 
            visible surveillance builds trust and trust builds loyalty.
          </p>

          <p className="mt-8">
            Don’t wait until something goes wrong.{" "}
            <Link to="/quote" className="text-red-600 hover:underline dark:text-red-400">
              Request a Free Quote
            </Link>{" "}
            today and let <strong>Jolu Group Security</strong> design and install a custom CCTV system that fits your business needs and your budget.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyCCTVMatters;
