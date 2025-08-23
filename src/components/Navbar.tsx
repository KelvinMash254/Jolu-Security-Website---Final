import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    about: false,
    services: false,
  });

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;

  let aboutTimeout: NodeJS.Timeout;
  let servicesTimeout: NodeJS.Timeout

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const handleAboutEnter = () => {
    clearTimeout(aboutTimeout);
    setOpenAbout(true);
  };
  const handleAboutLeave = () => {
    aboutTimeout = setTimeout(() => setOpenAbout(false), 200);
  };

  const handleServicesEnter = () => {
    clearTimeout(servicesTimeout);
    setOpenServices(true);
  };
  const handleServicesLeave = () => {
    servicesTimeout = setTimeout(() => setOpenServices(false), 200);
  };

  const handleQuoteClick = () => {
    navigate("/quote");
  };

  return (
    <nav className="bg-white dark:bg-black shadow-sm border-b sticky top-0 z-50 text-black dark:text-white">
      <div className="w-full px-2 md:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}lovable-uploads/jolu-logo.png`}
              alt="JOLU Group Security Ltd"
              className="h-10 w-auto"
            />
            <span className="ml-3 text-lg font-bold text-gray-900 dark:text-white">
              JOLU GROUP SECURITY
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 relative items-center">
            <Link to="/" className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Home</Link>

            <div className="relative" onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
              <button className="text-gray-700 dark:text-white hover:text-red-600 font-medium">About</button>
              {openAbout && (
                <div className="absolute bg-white dark:bg-black shadow-lg rounded-md mt-2 min-w-[180px] z-50">
                  <a href={`${base}#about`} className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">About Us</a>
                  <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">Our Team</Link>
                  <Link to="/gallery" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">Gallery</Link>
                  <a href={`${base}#documents`} className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">Company Profile & Brochure</a>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
              <button className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Services</button>
              {openServices && (
                <div className="absolute bg-white dark:bg-black shadow-lg rounded-md mt-2 min-w-[220px] z-50">
                  <Link to="/services/manned-guarding" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">Manned Guarding</Link>
                  <Link to="/services/events-security" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">Events Security</Link>
                  <Link to="/services/k9-unit" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">K9 Unit</Link>
                  <Link to="/services/cctv-installation" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">CCTV Installation</Link>
                  <Link to="/services/electric-fencing" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">Electric Fencing</Link>
                  <Link to="/services/alarm-response" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">Alarm Response</Link>
                  <Link to="/services/vip-close-protection" className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800">VIP Protection</Link>
                </div>
              )}
            </div>

            <a href={`${base}#industries`} className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Industries</a>
            <a href={`${base}#why-choose-us`} className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Why Choose Us</a>
            <a href={`${base}#contact`} className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Contact</a>
            <Link to="/blogs" className="text-gray-700 dark:text-white hover:text-red-600 font-medium">Blogs</Link>

            {/* Toggle Theme */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-red-600 text-white hover:bg-black transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <Button className="bg-red-600 hover:bg-red-700 text-white hidden md:inline-block" onClick={handleQuoteClick}>
            Get Quote
          </Button>

          {/* Toggle Theme Button in Mobile View */}
          <div className="md:hidden mr-1 flex items-center">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-red-600 text-white hover:bg-black transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Hamburger Icon */}
          <button className="md:hidden text-gray-700 dark:text-white" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${sidebarOpen ? "bg-black bg-opacity-50" : "pointer-events-none opacity-0"}`}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
            <span className="font-bold text-lg text-gray-900 dark:text-white">Menu</span>
            <button onClick={() => setSidebarOpen(false)}><X className="h-6 w-6" /></button>
          </div>

          <nav className="p-5 space-y-4">
            <Link to="/" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Home</Link>

            {/* About Mobile Dropdown */}
            <div>
              <button
                onClick={() =>
                  setMobileDropdown((prev) => ({ ...prev, about: !prev.about }))
                }
                className="flex items-center justify-between w-full text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400"
              >
                About <ChevronDown className="h-4 w-4" />
              </button>
              {mobileDropdown.about && (
                <div className="ml-4 mt-2 space-y-2 text-sm">
                  <a href={`${base}#about`} onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">About Us</a>
                  <Link to="/team" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Our Team</Link>
                  <Link to="/gallery" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Gallery</Link>
                  <a href={`${base}#documents`} onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Documents</a>
                </div>
              )}
            </div>

            {/* Services Mobile Dropdown */}
            <div>
              <button
                onClick={() =>
                  setMobileDropdown((prev) => ({ ...prev, services: !prev.services }))
                }
                className="flex items-center justify-between w-full text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400"
              >
                Services <ChevronDown className="h-4 w-4" />
              </button>
              {mobileDropdown.services && (
                <div className="ml-4 mt-2 space-y-2 text-sm">
                  <Link to="/services/manned-guarding" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Manned Guarding</Link>
                  <Link to="/services/events-security" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Events Security</Link>
                  <Link to="/services/k9-unit" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">K9 Unit</Link>
                  <Link to="/services/cctv-installation" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">CCTV Installation</Link>
                  <Link to="/services/electric-fencing" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Electric Fencing</Link>
                  <Link to="/services/alarm-response" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Alarm Response</Link>
                  <Link to="/services/vip-close-protection" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">VIP Protection</Link>
                </div>
              )}
            </div>

            <a href={`${base}#industries`} onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Industries</a>
            <a href={`${base}#why-choose-us`} onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Why Choose Us</a>
            <a href={`${base}#contact`} onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Contact</a>
            <Link to="/blogs" onClick={() => setSidebarOpen(false)} className="block text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-400">Blogs</Link>

            <button
              onClick={() => {
                setSidebarOpen(false);
                navigate("/quote");
              }}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-4 w-full"
            >
              Get Quote
            </button>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
