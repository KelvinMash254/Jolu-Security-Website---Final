import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Zap, Target, Star } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-red-600" />,
    title: "Licensed & Compliant",
    description:
      "We follow all government and industry regulations to ensure legal, secure operations.",
  },
  {
    icon: <Users className="h-8 w-8 text-red-600" />,
    title: "Trained Security Personnel",
    description:
      "Our guards are professionally trained and equipped to respond to any situation.",
  },
  {
    icon: <Clock className="h-8 w-8 text-red-600" />,
    title: "24/7 Availability",
    description:
      "You can count on us any time, day or night, for continuous protection.",
  },
  {
    icon: <Zap className="h-8 w-8 text-red-600" />,
    title: "Technology-Driven",
    description:
      "We integrate modern tools like CCTV, patrol trackers, and alarms into your security plan.",
  },
  {
    icon: <Target className="h-8 w-8 text-red-600" />,
    title: "Custom Solutions",
    description:
      "We tailor security plans for your property or business.",
  },
  {
    icon: <Star className="h-8 w-8 text-red-600" />,
    title: "Trusted by Clients",
    description:
      "We serve residential, corporate, and public institutions with excellence and professionalism.",
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="py-20 bg-white dark:bg-zinc-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Why Choose Jolu Group Security
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Clients across Kenya trust us because we provide reliable, professional, and tailored security solutions that work.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
