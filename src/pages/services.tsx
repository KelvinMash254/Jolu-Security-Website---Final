import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Service {
  title: string;
  description: string;
  image: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/services`);
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/609259d6-4c6b-4219-a763-13ae779e9163.png"
                alt="JOLU Group Security Ltd"
                className="h-10 w-auto"
              />
              <span className="ml-3 text-lg font-bold text-gray-900">JOLU Group Security</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-red-600 font-medium">Home</a>
              <a href="/#about" className="text-gray-700 hover:text-red-600 font-medium">About</a>
              <a href="/services" className="text-red-600 font-medium">Services</a>
              <a href="/#industries" className="text-gray-700 hover:text-red-600 font-medium">Industries</a>
              <a href="/#why-choose-us" className="text-gray-700 hover:text-red-600 font-medium">Why Choose Us</a>
              <a href="/#contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Security Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to meet your specific needs and protect what matters most to you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader className="p-0">
                  <div className="w-full h-48 bg-white rounded-t-md overflow-hidden flex items-center justify-center">
                  <img
                    src={`${import.meta.env.VITE_API_URL}${service.image}`}
                    alt={service.title}
                    className="h-full w-full object-contain"
                  />
                  </div>
                  <div className="px-4 pt-4">
                    <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
