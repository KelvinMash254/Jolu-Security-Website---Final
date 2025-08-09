import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DocumentsSection = () => {
  const basePath = import.meta.env.BASE_URL;

  const documents = [
    {
      title: "Company Profile",
      file: `${basePath}lovable-uploads/company-profile.pdf`,
    },
    {
      title: "Security Brochure",
      file: `${basePath}lovable-uploads/brochure.pdf`,
    },
  ];

  return (
    <motion.section
      id="documents"
      className="py-20 bg-white dark:bg-black transition-colors"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white">
            Jolu Security Company Documents
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between p-6 rounded-xl bg-gray-50 dark:bg-zinc-900 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-lg font-semibold text-black dark:text-white mb-4">
                {doc.title}
              </span>
              <a href={doc.file} download>
                <Button className="w-full flex gap-2 justify-center bg-red-600 hover:bg-red-700 text-white">
                  <Download className="w-4 h-4" /> Download
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
