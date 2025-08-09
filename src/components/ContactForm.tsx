import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    county: "",
    area: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const counties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", "Garissa", "Homa Bay",
    "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii",
    "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera",
    "Marsabit", "Meru", "Migori", "Mombasa", "Murang’a", "Nairobi", "Nakuru", "Nandi",
    "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita Taveta", "Tana River",
    "Tharaka Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          county: "",
          area: "",
          message: "",
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  if (name === "phone") {
    // Allow only digits and plus sign
    const numericValue = value.replace(/[^\d+]/g, "");
    setFormData({ ...formData, [name]: numericValue });
  } else {
    setFormData({ ...formData, [name]: value });
  }
};

  return (
    <section className="py-10 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg border border-gray-200 bg-white dark:bg-black rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-black dark:text-white">
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 block">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 block">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 block">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9+]*"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 7XX XXX XXX"
                  maxLength={13}
                  className="border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="service" className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 block">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
                >
                  <option value="">Select a service</option>
                  <option value="manned-guarding">Manned Guarding</option>
                  <option value="events-security">Events Security</option>
                  <option value="k9-unit-services">K9 Unit Services</option>
                  <option value="cctv-installation">CCTV Installation</option>
                  <option value="electric-fencing">Electric Fencing</option>
                  <option value="alarm-response">Alarm Response</option>
                  <option value="vip-close-protection">VIP Close Protection</option>
                </select>
              </div>

              <div>
                <label htmlFor="county" className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 block">
                  County *
                </label>
                <select
                  id="county"
                  name="county"
                  required
                  value={formData.county}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
                >
                  <option value="">Select a county</option>
                  {counties.map((county) => (
                    <option key={county} value={county}>{county}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="area" className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 block">
                  Area/Town *
                </label>
                <Input
                  id="area"
                  name="area"
                  type="text"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="e.g. Thome, Syokimau, Moi Avenue"
                  className="border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your security needs..."
                  className="border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 text-black dark:text-white"
                />
              </div>

              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-base font-semibold py-2"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
