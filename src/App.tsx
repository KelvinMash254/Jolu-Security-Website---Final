import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "@/utils/ScrollToHash";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Layout from "./components/Layout";
import QuotePage from "./pages/QuotePage";
import Blogs from "./pages/Blogs";

import MannedGuarding from "./pages/services/MannedGuarding";
import EventsSecurity from "./pages/services/EventsSecurity";
import K9Unit from "./pages/services/K9Unit";
import CCTVInstallation from "./pages/services/CCTVInstallation";
import ElectricFencing from "./pages/services/ElectricFencing";
import AlarmResponse from "./pages/services/AlarmResponse";
import VIPCloseProtection from "./pages/services/VIPCloseProtection";

import Top5Ways from "./pages/blog/Top5Ways";
import EventSecurityChecklist from "./pages/blog/EventSecurityChecklist";
import WhyCCTVMatters from "./pages/blog/WhyCCTVMatters";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <ScrollToHash />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="team" element={<Team />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="quote" element={<QuotePage />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/top-5-ways" element={<Top5Ways />} />
            <Route path="blog/event-security-checklist" element={<EventSecurityChecklist />} />
            <Route path="blog/why-cctv-matters" element={<WhyCCTVMatters />} />

            {/* Service Pages */}
            <Route path="services/manned-guarding" element={<MannedGuarding />} />
            <Route path="services/events-security" element={<EventsSecurity />} />
            <Route path="services/k9-unit" element={<K9Unit />} />
            <Route path="services/cctv-installation" element={<CCTVInstallation />} />
            <Route path="services/electric-fencing" element={<ElectricFencing />} />
            <Route path="services/alarm-response" element={<AlarmResponse />} />
            <Route path="services/vip-close-protection" element={<VIPCloseProtection />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        {/* ✅ WhatsApp Floating Button */}
        <a
          href="https://wa.me/254790298003"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.79 11.79 0 0012 0C5.37 0 .02 5.35 0 12a11.82 11.82 0 001.64 6l-1.7 6.2 6.34-1.66A11.77 11.77 0 0012 24c6.63 0 12-5.37 12-12a11.78 11.78 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.14-1.44l-.37-.23-3.76.99 1-3.65-.24-.38A9.95 9.95 0 012 12C2 6.49 6.49 2 12 2a9.93 9.93 0 019.92 9.91A9.93 9.93 0 0112 22zm5.28-7.09c-.3-.15-1.78-.88-2.06-.98s-.48-.15-.69.15-.79.98-.97 1.18-.36.22-.66.07a8.04 8.04 0 01-2.37-1.46 8.92 8.92 0 01-1.66-2.07c-.17-.3 0-.46.13-.61.13-.14.3-.36.45-.54s.2-.3.3-.51a.56.56 0 00-.03-.53c-.08-.15-.69-1.66-.94-2.28s-.5-.52-.69-.53H7.7c-.15 0-.4.06-.61.3s-.8.78-.8 1.9.82 2.21.94 2.37a9.76 9.76 0 002.93 3.07c.41.28.73.45.99.57a5.18 5.18 0 002.37.49c.72 0 1.38-.17 1.9-.52.29-.2.89-.64 1.01-1.26s.12-1.15.08-1.26-.27-.2-.56-.35z" />
          </svg>
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
