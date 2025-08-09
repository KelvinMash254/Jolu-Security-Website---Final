// src/pages/blog/EventSecurityChecklist.tsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const EventSecurityChecklist = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-100 min-h-screen flex flex-col justify-between">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Event Security in Kenya: What to Consider
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Published on July 23, 2025 by <strong>Jolu Group Security</strong>
        </p>

        <img
          src={`${import.meta.env.BASE_URL}lovable-uploads/event-security-what-to-consider.jpg`}
          alt="Event Security Kenya"
          className="rounded-lg w-full mb-10"
        />

        <section className="space-y-6 leading-relaxed">
          <p>
            Whether you're planning a wedding in Karen, a corporate launch in Westlands, or a public rally in Kisumu, 
            <strong> event security in Kenya isn't just a formality, it's a critical investment</strong>. 
            At <strong>Jolu Group Security</strong>, we specialize in keeping your guests, venue, and staff safe, so you can focus on the event itself.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Understand the Local Risks</h2>
          <p>
            From petty theft and traffic congestion to crowd unrest or unexpected protests, Kenyan events come with unique risks.
            Our team conducts a full on-site security assessment, tailored to your location, audience, and nature of the event.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Crowd Control & Access Management</h2>
          <p>
            Uncontrolled access leads to chaos. We implement ticket validation, manned entry points, bag checks, and guest list screening. 
            Our guards are trained to remain calm under pressure, whether managing VIPs or high volumes.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Liaison with Police and Local Officials</h2>
          <p>
            A successful event in Kenya often requires coordination with law enforcement and city council authorities. 
            Jolu Group helps you navigate permits, traffic police, and even emergency health support, all with one coordinated plan.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Emergency Response Planning</h2>
          <p>
            We don’t just guard. We prepare. From fire safety to medical emergencies and crowd evacuation protocols, 
            we provide rapid response teams and trained personnel ready to act at a moment’s notice.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Communication is Everything</h2>
          <p>
            During your event, our team stays in touch using radios, real-time reports, and designated security supervisors. 
            You’ll always know what’s happening, from setup to shutdown.
          </p>

          <p className="mt-8">
            Hosting an event soon?{" "}
            <Link to="/quote" className="text-red-600 hover:underline dark:text-red-400">
              Request a Free Quote
            </Link>{" "}
            from <strong>Jolu Group Security</strong> and let us help you create a safe, successful experience, wherever you are in Kenya.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventSecurityChecklist;
