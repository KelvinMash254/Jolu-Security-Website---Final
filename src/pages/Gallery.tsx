import React from "react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const galleryItems = [
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/best-image.jpeg`, caption: "Our Guards On Duty at a Naivasha Event" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/events-security.jpg`, caption: "Ensuring Safety During a Major Event" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/1.jpeg`, caption: "K9 Unit Receiving Deployment Briefing" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/15.jpeg`, caption: "Deployment of Guards in Nakuru" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/2.jpeg`, caption: "Experienced Guards at a Rift Valley Event" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/14.jpeg`, caption: "Nairobi Team Geared for Deployment" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/3.jpeg`, caption: "Guard Remaining Vigilant During an Event" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/13.jpeg`, caption: "Operations Manager Conducting a Site Visit" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/4.jpeg`, caption: "Team Members Sharing a Dinner Moment" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/12.jpeg`, caption: "Preparing for Deployment in Nairobi" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/5.jpeg`, caption: "Dinner Gathering in Naivasha" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/11.jpeg`, caption: "Client Site Surveillance in Progress" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/6.jpeg`, caption: "Kenya Urban Forum Event Security" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/10.jpeg`, caption: "On-Site Supervision & Inspection" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250428-WA0102.jpg`, caption: "Final Brief Before Deployment" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/7.jpeg`, caption: "Active Security Team at Kenya Urban Forum" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/9.jpeg`, caption: "Team Discussion on Strategy & Tactics" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250428-WA0106.jpg`, caption: "Dedicated Deployment Taskforce" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/8.jpeg`, caption: "Annual Dinner with the Full Team" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250428-WA0021.jpg`, caption: "Security Engagement at Kangemi" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250428-WA0095.jpg`, caption: "Leadership Team - MD and GM" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250428-WA0100.jpg`, caption: "Capturing the Moment - Photo Session" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250428-WA0107.jpg`, caption: "Part of Our Reliable Team" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250720-WA0058.jpg`, caption: "Monthly Review Meeting at HQ" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250720-WA0061.jpg`, caption: "Our Nakuru Team Posing Together" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250720-WA0064.jpg`, caption: "Post-Meeting Photo Session in Nakuru" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250720-WA0067.jpg`, caption: "Team Photo Featuring the Men of JOLU" },
  { src: `${import.meta.env.BASE_URL}lovable-uploads/gallery/IMG-20250720-WA0069.jpg`, caption: "Team Photoshoot in Kangemi" },
];

const Gallery = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black transition-colors duration-500">
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Gallery</h1>
          <div className="absolute top-3/4 left-0 right-0 h-1 bg-red-700 max-w-[100px] mx-auto mt-2"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-500"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-72 object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs sm:text-sm text-center px-3 py-2 transition-opacity duration-300">
                {item.caption}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
