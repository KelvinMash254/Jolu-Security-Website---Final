import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Footer from "@/components/Footer";

const Blogs = () => {
  return (
    <div className="bg-white dark:bg-black min-h-screen flex flex-col justify-between">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Blogs & Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay informed with industry trends, safety tips, and security news curated by our experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Link to="/blog/top-5-ways" className="block group">
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-zinc-800 group">
                <CardHeader>
                  <div className="mb-4">
                    <img
                      src={`${import.meta.env.BASE_URL}lovable-uploads/secure-home.jpg`}
                      alt="Top 5 Ways to Secure Your Home"
                      className="w-full h-auto max-h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Top 5 Ways to Secure Your Home
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                    Published on July 23, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Discover practical tips and proven techniques to improve the security of your home and loved ones.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Blog Post 2 */}
            <Link to="/blog/event-security-checklist" className="block group">
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-zinc-800 group">
                <CardHeader>
                  <div className="mb-4">
                    <img
                      src={`${import.meta.env.BASE_URL}lovable-uploads/event-security-what-to-consider.jpg`}
                      alt="Event Security: What to Consider"
                      className="w-full h-auto max-h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Event Security: What to Consider
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                    Published on July 11, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Planning an event? Here’s a checklist for ensuring the safety and success of your public or private gathering.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Blog Post 3 */}
            <Link to="/blog/why-cctv-matters" className="block group">
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-zinc-800 group">
                <CardHeader>
                  <div className="mb-4">
                    <img
                      src={`${import.meta.env.BASE_URL}lovable-uploads/cctv-image.jpg`}
                      alt="Why Every Business Needs a CCTV System"
                      className="w-full h-auto max-h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    Why Every Business Needs a CCTV System
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
                    Published on July 23, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Explore the benefits of CCTV monitoring for commercial spaces, from theft prevention to operational oversight.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
