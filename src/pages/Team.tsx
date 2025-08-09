import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John",
    title: "Chief Executive Officer",
    image: "team/John.png",
    tier: "executives",
    bio: "John brings over 9 years of experience in security management, corporate leadership, and strategic operations. As the visionary behind Jolu Group Security, he leads with integrity, empowering teams and fostering a culture of accountability. His deep understanding of risk management and client-centered solutions has been instrumental in positioning the company as a trusted name in Kenya’s security industry.",
  },
  {
    name: "Lucy",
    title: "Managing Director",
    image: "team/Lucy.png",
    tier: "executives",
    bio: "Lucy is a dynamic leader with a strong background in business operations, client relations, and organizational growth. With over a decade of experience in the security and service sectors, she plays a pivotal role in driving JOLU Group Security’s mission forward. Her hands-on leadership style, strategic mindset, and commitment to excellence have made her a cornerstone of the company’s continued success and expansion.",
  },
  {
    name: "Shem",
    title: "General Manager",
    image: "team/Shem.png",
    tier: "gm",
    bio: "Shem brings a wealth of experience in operational leadership, team management, and service excellence. As General Manager, he ensures that day-to-day activities across all departments run smoothly and efficiently. Known for his problem-solving abilities and attention to detail, Shem plays a key role in maintaining high service standards, optimizing internal processes, and delivering on client expectations across the country.",
  },
  {
    name: "Paul",
    title: "Head of Operations & Business Development - Nakuru",
    image: "team/Paul.png",
    tier: "ops",
    bio: "Paul oversees all operational and client engagement activities within the Nakuru region. With a hands-on leadership approach and extensive experience in the security industry, he ensures seamless service delivery, personnel supervision, and business growth. Paul is known for his dedication to excellence, operational efficiency, and building strong client relationships. His deep understanding of the local landscape and proactive problem-solving make him a key pillar in the company's regional success.",
  },
  {
    name: "Kelvin",
    title: "Head of Operations & Business Development - Nairobi",
    image: "team/Kelvin.png",
    tier: "ops",
    bio: "Kelvin leads operations and growth initiatives in Nairobi with a strategic focus on client acquisition, service delivery, and relationship management. With a strong background in business development and field operations, he combines tactical execution with a deep understanding of client needs. His leadership ensures efficient deployment of security personnel, alignment with client goals, and sustained growth in the Nairobi region. Driven, adaptive, and results-oriented, Kelvin plays a vital role in expanding the company’s presence in the capital.",
  },
  {
    name: "Jackline",
    title: "Business Development Executive - Nakuru",
    image: "team/Jackline.png",
    tier: "bde",
    bio: "Jackline is a key figure in driving client engagement and service outreach in the Nakuru region. Her communication skills, attention to client needs, and commitment to quality ensure client satisfaction and business growth. She plays a crucial role in expanding our client base and strengthening our brand in the region.",
  },
  {
    name: "Leah",
    title: "Business Development Executive - Nairobi",
    image: "team/Leah.png",
    tier: "bde",
    bio: "Leah supports business expansion in Nairobi by cultivating strong client relationships and identifying new growth opportunities. With a client-first approach and a proactive mindset, she contributes to service excellence and strategic account development.",
  },
  {
    name: "Fred",
    title: "Business Development Executive - Nakuru",
    image: "team/Fred.png",
    tier: "bde",
    bio: "Fred’s expertise in client service and regional market knowledge enhances our business outreach in Nakuru. He’s passionate about security solutions that meet real-world challenges and plays a hands-on role in ensuring client expectations are met and exceeded.",
  },
];

const TeamCard = ({ member, setSelectedMember }) => (
  <motion.div
    onClick={() => setSelectedMember(member)}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="cursor-pointer bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden w-full max-w-xs"
  >
    <div className="w-full h-36 sm:h-40 bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden">
      <img
        src={`${import.meta.env.BASE_URL}lovable-uploads/${member.image}`}
        alt={member.name}
        className="w-full h-full object-contain p-2"
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
        {member.name}
      </h3>
      <p className="mt-1 text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-2">
        {member.title}
      </p>
    </div>
  </motion.div>
);

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedMember ? "hidden" : "auto";
  }, [selectedMember]);

  const grouped = {
    executives: teamMembers.filter((m) => m.tier === "executives"),
    gm: teamMembers.filter((m) => m.tier === "gm"),
    ops: teamMembers.filter((m) => m.tier === "ops"),
    bde: teamMembers.filter((m) => m.tier === "bde"),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-zinc-900 transition-colors">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
            Meet Our Team
          </h1>
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
            <div className="w-1/5 h-1 bg-red-700" />
            <div className="w-1/5 h-1 bg-red-700" />
          </div>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
            {grouped.executives.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>
          <div className="flex justify-center">
            {grouped.gm.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>
          <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
            {grouped.ops.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {grouped.bde.map((m, i) => (
              <TeamCard key={i} member={m} setSelectedMember={setSelectedMember} />
            ))}
          </div>
        </div>

        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2 sm:px-4 overflow-y-auto">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl w-full max-w-xl sm:max-w-2xl max-h-screen overflow-y-auto p-4 sm:p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-600"
                onClick={() => setSelectedMember(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
                <div className="w-full md:w-[40%] h-48 sm:h-60 bg-gray-100 dark:bg-zinc-700 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}lovable-uploads/${selectedMember.image}`}
                    alt={selectedMember.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full md:w-[60%]">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                    {selectedMember.name}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mb-3">
                    {selectedMember.title}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base text-justify leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Team;
