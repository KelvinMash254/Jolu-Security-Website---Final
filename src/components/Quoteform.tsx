import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    county: '',
    area: '',
    service: '',
    message: '',
    guards: ''
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || "https://jolu-security-website-final.onrender.com";
      const response = await fetch(`${API_BASE_URL}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          county: '',
          area: '',
          service: '',
          message: '',
          guards: ''
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send quote request. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again later.",
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
      const numericValue = value.replace(/[^\d+]/g, '');
      const sanitized = numericValue.startsWith('+')
        ? '+' + numericValue.slice(1).replace(/\D/g, '')
        : numericValue.replace(/\D/g, '');

      setFormData(prev => ({ ...prev, phone: sanitized }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const counties = [
    "Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita Taveta", "Garissa", "Wajir", "Mandera",
    "Marsabit", "Isiolo", "Meru", "Tharaka Nithi", "Embu", "Kitui", "Machakos", "Makueni",
    "Nyandarua", "Nyeri", "Kirinyaga", "Murang'a", "Kiambu", "Turkana", "West Pokot", "Samburu",
    "Trans Nzoia", "Uasin Gishu", "Elgeyo Marakwet", "Nandi", "Baringo", "Laikipia", "Nakuru",
    "Narok", "Kajiado", "Kericho", "Bomet", "Kakamega", "Vihiga", "Bungoma", "Busia",
    "Siaya", "Kisumu", "Homa Bay", "Migori", "Kisii", "Nyamira", "Nairobi"
  ];

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">Full Name *</label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-white dark:bg-zinc-900 text-black dark:text-white border-gray-300 dark:border-gray-700"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">Email Address *</label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-white dark:bg-zinc-900 text-black dark:text-white border-gray-300 dark:border-gray-700"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 text-sm">Phone Number *</label>
            <Input
              id="phone"
              inputMode='numeric'
              name="phone"
              type="tel"
              required
              maxLength={13}
              value={formData.phone}
              onChange={handleChange}
              className="bg-white dark:bg-zinc-900 text-black dark:text-white border-gray-300 dark:border-gray-700"
              placeholder="+254 7XX XXX XXX"
            />
          </div>

          <div>
            <label htmlFor="company" className="block mb-1 text-sm">Company Name</label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="bg-white dark:bg-zinc-900 text-black dark:text-white border-gray-300 dark:border-gray-700"
              placeholder="Optional"
            />
          </div>

          <div>
            <label htmlFor="county" className="block mb-1 text-sm">County *</label>
            <select
              id="county"
              name="county"
              required
              value={formData.county}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-white dark:bg-zinc-900 text-black dark:text-white border border-gray-300 dark:border-gray-700"
            >
              <option value="">Select a county</option>
              {counties.map((county) => (
                <option key={county} value={county}>{county}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="area" className="block mb-1 text-sm">Area/Town *</label>
            <Input
              id="area"
              name="area"
              type="text"
              required
              value={formData.area}
              onChange={handleChange}
              className="bg-white dark:bg-zinc-900 text-black dark:text-white border-gray-300 dark:border-gray-700"
              placeholder="e.g. Syokimau, Kilimani"
            />
          </div>

          <div>
            <label htmlFor="guards" className="block mb-1 text-sm">Number of Guards</label>
            <Input
              id="guards"
              name="guards"
              type="number"
              min="1"
              value={formData.guards}
              onChange={handleChange}
              className="bg-white dark:bg-zinc-900 text-black dark:text-white border-gray-300 dark:border-gray-700"
              placeholder="Optional"
            />
          </div>

          <div>
            <label htmlFor="service" className="block mb-1 text-sm">Service Needed</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-white dark:bg-zinc-900 text-black dark:text-white border border-gray-300 dark:border-gray-700"
            >
              <option value="">Select a service</option>
              <option value="manned-guarding">Manned Guarding</option>
              <option value="k9-unit-services">K9 Unit Services</option>
              <option value="event-security">Events Security</option>
              <option value="cctv-installation">CCTV Installation</option>
              <option value="alarm-response">Alarm Response</option>
              <option value="electric-fencing">Electric Fencing</option>
              <option value="vip-close-protection">VIP Close Protection</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block mb-1 text-sm">Message</label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your security needs..."
              className="bg-white dark:bg-zinc-900 text-black dark:text-white border-gray-300 dark:border-gray-700"
            />
          </div>

          <div className="md:col-span-2">
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <Loader className="animate-spin mr-2 h-4 w-4" />
                  Sending...
                </span>
              ) : (
                "Request Quote"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
