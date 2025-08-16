import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone, Mail, MapPin, Shield, Users, Clock, CheckCircle, Star, Eye, AlertTriangle,
  Building, Home, School, ShoppingBag, Utensils, Camera, UserCheck, Car, Calendar,
  Zap, Dog, Download
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { QuoteForm } from "@/components/QuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { IndustryCard } from "@/components/IndustryCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Hero from "@/pages/Hero"; // Adjust the path if needed
import './Hero.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { DocumentsSection } from "@/components/DocumentsSection";
import Footer from '@/components/Footer';

import MannedGuarding from "@/pages/services/MannedGuarding";
import EventsSecurity from "@/pages/services/EventsSecurity";
import K9Unit from "@/pages/services/K9Unit";
import CCTVInstallation from "@/pages/services/CCTVInstallation";
import ElectricFencing from "@/pages/services/ElectricFencing";
import AlarmResponse from "@/pages/services/AlarmResponse";
import VIPCloseProtection from "@/pages/services/VIPCloseProtection";



            const cardVariants = {
              hidden: { opacity: 0, y: 30 },
              visible: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.2,
                  duration: 0.6,
                },
              }),
            };


      // ✅ Reusable animated number counter
              const AnimatedCounter = ({ end, suffix = '', duration = 2 }) => {
                const { ref, inView } = useInView({ triggerOnce: true });
                return (
                  <div ref={ref}>
                    {inView ? <CountUp end={end} duration={duration} suffix={suffix} /> : '0'}
                  </div>
                );
              };


                const serviceData = [
                  {
                    title: "Manned Guarding",
                    path: "/services/manned-guarding",
                    image: `${import.meta.env.BASE_URL}lovable-uploads/manned-guarding.jpg`,
                    desc: "Professional security personnel providing reliable and comprehensive security solutions for residential, commercial, and industrial properties.",
                  },
                  {
                    title: "Events Security",
                    path: "/services/events-security",
                    image: `${import.meta.env.BASE_URL}lovable-uploads/events-security.png`,
                    desc: "Exceptional event security solutions and professional services to ensure safety and smooth execution of gatherings of all sizes.",
                  },
                  {
                    title: "K9 Unit Services",
                    path: "/services/k9-unit",
                    image: `${import.meta.env.BASE_URL}lovable-uploads/k9-unit.png`,
                    desc: "Specialized canine security units for enhanced threat detection, drug screening, and comprehensive security operations.",
                  },
                  {
                    title: "CCTV Installation",
                    path: "/services/cctv-installation",
                    image: `${import.meta.env.BASE_URL}lovable-uploads/cctv-installation.png`,
                    desc: "Advanced CCTV installation services to help clients monitor and secure their premises effectively with continuous monitoring.",
                  },
                  {
                    title: "Electric Fencing",
                    path: "/services/electric-fencing",
                    image: `${import.meta.env.BASE_URL}lovable-uploads/electric-fence.png`,
                    desc: "Professional electric fencing installation and maintenance services to create secure perimeters for residential and commercial properties.",
                  },
                  {
                    title: "Alarm Response",
                    path: "/services/alarm-response",
                    image: `${import.meta.env.BASE_URL}lovable-uploads/alarm-response.png`,
                    desc: "Swift and reliable alarm response services to protect property and respond immediately to security threats and potential risks.",
                  },
                  {
                    title: "VIP Close Protection",
                    path: "/services/vip-close-protection",
                    image: `${import.meta.env.BASE_URL}lovable-uploads/vip-close-protection.png`,
                    desc: "Elite personal protection services for high-profile individuals, executives, and VIPs requiring discreet and professional security.",
                  },
                ];


          

const QuickStats = () => (
  <section className="py-16 bg-white dark:bg-black text-gray-900 dark:text-white">
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
          <div>Protection</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-red-600 mb-2">
            <AnimatedCounter end={500} suffix="+" />
          </div>
          <div>Clients Protected</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-red-600 mb-2">
            <AnimatedCounter end={100} suffix="%" />
          </div>
          <div>Client Satisfaction</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-red-600 mb-2">
            <AnimatedCounter end={5} suffix="+" />
          </div>
          <div>Years Experience</div>
        </div>
      </div>
    </div>
  </section>
);


const AboutUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-zinc-900 text-black dark:text-white"
    >
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - from left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="px-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Jolu Group Security Ltd
            </h2>
            <p className="px-4 text-lg text-gray-700 dark:text-gray-300 mb-6">
              Jolu Group Security Limited is a trusted security company
              providing comprehensive and tailored protective services,
              logistics, procurement, and training for the defense, energy, and
              financial sectors, as well as high net-worth clients, diplomatic
              missions, and international organizations operating in high-risk,
              volatile, hostile, and complex environments.
            </p>
            <p className="px-4 text-lg text-gray-700 dark:text-gray-300 mb-8">
              At Jolu Group Security, we believe that safety is the foundation
              of progress. Our mission is to deliver reliable, mission-driven
              security solutions that empower individuals and organizations to
              operate confidently, even in the most challenging environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <Shield className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  ),
                  label: "Integrity",
                },
                {
                  icon: (
                    <Eye className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  ),
                  label: "Vigilance",
                },
                {
                  icon: (
                    <Users className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  ),
                  label: "Professionalism",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="text-center"
                >
                  {item.icon}
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content - from right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={`${import.meta.env.BASE_URL}lovable-uploads/gallery/best-image.jpeg`}
              alt="About Jolu"
              className="w-full h-auto rounded-2xl shadow-lg max-w-x1"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

      // ✅ Main Index Page
      const Index = () => {
        const [showQuoteForm, setShowQuoteForm] = useState(false);

        return (
          <div className="overflow-x-hidden">
            {/* Hero Section */}

            <Hero />

            {/* Stats + About */}
            <QuickStats />
            <AboutUs />       

                                {/* Services Section */}
                                <section id="services" className="py-20 bg-white dark:bg-zinc-900">
                                  <div className="w-full">
                                    <div className="text-center mb-16">
                                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                        Our Security Services
                                      </h2>
                                      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                        Comprehensive security solutions tailored to meet your specific needs and protect what matters most to you.
                                      </p>
                                    </div>

                                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                      {serviceData.map((service, index) => (
                                        <motion.div
                                          key={index}
                                          initial={{ opacity: 0 }}
                                          whileInView={{ opacity: 1 }}
                                          viewport={{ once: true, amount: 0.2 }}
                                          transition={{
                                            delay: index * 0.1,
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 90,
                                            damping: 18,
                                          }}
                                          whileHover={{
                                            scale: 1.03,
                                            transition: { type: "spring", stiffness: 200 },
                                          }}
                                          className="transition-transform duration-300 h-full"
                                        >
                                          <Link to={service.path} className="block h-full">
                                            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl dark:hover:shadow-zinc-700 transition-shadow duration-300 overflow-hidden h-full group flex flex-col justify-between">
                                              <div>
                                                <div className="overflow-hidden">
                                                  <img
                                                    src={service.image}
                                                    alt={service.title}
                                                   className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                  />
                                                </div>
                                                <div className="px-6 py-5">
                                                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                                    {service.title}
                                                  </h3>
                                                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                    {service.desc}
                                                  </p>
                                                </div>
                                              </div>

                                              {/* Learn More button (still inside the same Link) */}
                                              <div className="px-6 pb-5 mt-auto">
                                                <span className="inline-block mt-4 text-sm font-medium text-red-600 dark:text-red-400 hover:underline">
                                                  Learn More →
                                                </span>
                                              </div>
                                            </div>
                                          </Link>
                                        </motion.div>
                                      ))}
                                    
                                    </div>
                                  </div>
                                </section>

                                {/* Industries Section */}
                                <section id="industries" className="py-20 bg-gray-50 dark:bg-zinc-900">
                                  <div className="w-full">
                                    <div className="text-center mb-16">
                                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                        Industries We Serve
                                      </h2>
                                      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                        Our expertise spans across multiple sectors, providing specialized security solutions for diverse industries.
                                      </p>
                                    </div>

                                    <motion.div
                                      className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                      initial="hidden"
                                      whileInView="show"
                                      viewport={{ once: true, amount: 0.2 }}
                                      transition={{ staggerChildren: 0.2 }}
                                    >
                                      {[
                                        {
                                          title: "Residential",
                                          img: `${import.meta.env.BASE_URL}lovable-uploads/residential.jpg`,
                                          alt: "Residential Security in Kenya",
                                          desc: "Protecting homes and residential communities with tailored security solutions for families and property owners.",
                                        },
                                        {
                                          title: "Commercial",
                                          img: `${import.meta.env.BASE_URL}lovable-uploads/commercial.jpeg`,
                                          alt: "Commercial Buildings in Nairobi",
                                          desc: "Comprehensive security services for offices, business centers, and commercial facilities across Kenya.",
                                        },
                                        {
                                          title: "Educational",
                                          img: `${import.meta.env.BASE_URL}lovable-uploads/educational.jpg`,
                                          alt: "Educational Institutions in Kenya",
                                          desc: "Specialized security solutions for schools, colleges, and educational institutions to ensure student safety.",
                                        },
                                        {
                                          title: "Retail",
                                          img: `${import.meta.env.BASE_URL}lovable-uploads/retail.jpg`,
                                          alt: "Retail Stores and Shopping Centers",
                                          desc: "Protecting retail stores, shopping centers, and commercial outlets from theft and security threats.",
                                        },
                                        {
                                          title: "Hospitality",
                                          img: `${import.meta.env.BASE_URL}lovable-uploads/hospitality.jpg`,
                                          alt: "Hotels and Hospitality in Kenya",
                                          desc: "Security services for hotels, restaurants, and hospitality venues to ensure guest safety and peace of mind.",
                                        },
                                        {
                                          title: "Construction",
                                          img: `${import.meta.env.BASE_URL}lovable-uploads/construction.jpg`,
                                          alt: "Construction Sites Security",
                                          desc: "Site security and equipment protection for construction projects and development sites.",
                                        },
                                      ].map(({ title, img, alt, desc }, i) => (
                                        <motion.div
                                          key={i}
                                          variants={{
                                            hidden: { opacity: 0 },
                                            show: { opacity: 1 },
                                          }}
                                          whileHover={{ scale: 1.02 }}
                                          transition={{ duration: 0.5, ease: "easeOut" }}
                                          className="bg-white dark:bg-zinc-800 hover:shadow-lg dark:hover:shadow-zinc-700 transition-shadow duration-300 rounded-2xl overflow-hidden shadow-md h-full"
                                        >
                                          <CardHeader>
                                            <div className="mb-4">
                                              <img
                                                src={img}
                                                alt={alt}
                                                className="w-full h-48 object-cover rounded-lg"
                                              />
                                            </div>
                                            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{title}</CardTitle>
                                          </CardHeader>
                                          <CardContent>
                                            <p className="text-gray-600 dark:text-gray-300">{desc}</p>
                                          </CardContent>
                                        </motion.div>
                                      ))}
                                    </motion.div>
                                  </div>
                                </section>


                                                  <WhyChooseUs />


                                                        <DocumentsSection />

 {/* Contact Section */}
<section id="contact" className="py-20 bg-white dark:bg-zinc-900">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="w-full"
  >
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
        Get In Touch
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Ready to secure your property? Contact us today for a free consultation and personalized security assessment.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* LEFT SIDE - Contact Info + Maps */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="px-4 text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
          Contact Information
        </h3>
        <div className="space-y-6">
          <div className="px-4 flex items-start">
            <Phone className="h-6 w-6 text-red-500 mr-4 mt-1" />
            <div>
              <div className="font-semibold text-neutral-800 dark:text-white">Phone</div>
              <div className="text-gray-700 dark:text-gray-300">+254 790 298 003 | +254 790 182 487</div>
            </div>
          </div>
          <div className="px-4 flex items-start">
            <Mail className="h-6 w-6 text-red-500 mr-4 mt-1" />
            <div>
              <div className="font-semibold text-neutral-800 dark:text-white">Email</div>
              <div className="text-gray-700 dark:text-gray-300">info@jolusecurity.com</div>
            </div>
          </div>
          <div className="px-4 flex items-start">
            <MapPin className="h-6 w-6 text-red-500 mr-4 mt-1" />
            <div>
              <div className="font-semibold text-neutral-800 dark:text-white">Nairobi – Main Office</div>
              <div className="text-gray-700 dark:text-gray-300">Thome Estate, Nairobi</div>
            </div>
          </div>
          <div className="px-4 flex items-start">
            <MapPin className="h-6 w-6 text-red-500 mr-4 mt-1" />
            <div>
              <div className="font-semibold text-neutral-800 dark:text-white">Nakuru – Regional Office</div>
              <div className="text-gray-700 dark:text-gray-300">Nakuru</div>
            </div>
          </div>
          <div className="px-4 flex items-start">
            <MapPin className="h-6 w-6 text-red-500 mr-4 mt-1" />
            <div>
              <div className="font-semibold text-neutral-800 dark:text-white">Migori – Branch Office</div>
              <div className="text-gray-700 dark:text-gray-300">Rongo</div>
            </div>
          </div>
        </div>

        <div className="px-4 mt-8">
          <a href="https://wa.me/254790298003" target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-sm transition-all">
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp Us
            </Button>
          </a>
        </div>

        {/* Maps */}
        <div className="px-4 mt-12 space-y-10">
          <div>
            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">Nairobi – Main Office</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.416901251848!2d36.8508475!3d-1.2194246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1c5a6c4b21a7%3A0x991d0a8f3c176aad!2sThome%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1712312919946!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-2">Nakuru - Regional Office</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.768809440484!2d36.060809509865564!3d-0.2854380997105522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298dbee7691795%3A0x57bb3856ac0d67f7!2sKFA%20Building%2C%20Geoffrey%20Kamau%20Ave%2C%20Nakuru!5e0!3m2!1sen!2ske!4v1752868635219!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE - Contact Form */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  </motion.div>
</section>





      { /* Footer */}
                        
<Footer />

      {showQuoteForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setShowQuoteForm(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <QuoteForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

