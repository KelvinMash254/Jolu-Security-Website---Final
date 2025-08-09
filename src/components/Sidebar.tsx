
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleQuoteClick = () => {
    navigate("/quote");
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white dark:bg-black text-gray-800 dark:text-white shadow-lg`}
    >
      <div className="flex justify-between items-center px-4 py-4 border-b dark:border-gray-700">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="text-gray-600 dark:text-gray-300">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col space-y-4 p-4">
        <Link to="/" onClick={onClose} className="hover:text-red-600">
          Home
        </Link>
        <Link to="/team" onClick={onClose} className="hover:text-red-600">
          Our Team
        </Link>
        <Link to="/gallery" onClick={onClose} className="hover:text-red-600">
          Gallery
        </Link>
        <a href="#documents" onClick={onClose} className="hover:text-red-600">
          Documents
        </a>
        <div>
          <span className="font-semibold">Services</span>
          <div className="ml-4 mt-2 flex flex-col space-y-2 text-sm">
            <Link to="/services/manned-guarding" onClick={onClose}>Manned Guarding</Link>
            <Link to="/services/events-security" onClick={onClose}>Events Security</Link>
            <Link to="/services/k9-unit" onClick={onClose}>K9 Unit</Link>
            <Link to="/services/cctv-installation" onClick={onClose}>CCTV Installation</Link>
            <Link to="/services/electric-fencing" onClick={onClose}>Electric Fencing</Link>
            <Link to="/services/alarm-response" onClick={onClose}>Alarm Response</Link>
            <Link to="/services/vip-close-protection" onClick={onClose}>VIP Close Protection</Link>
          </div>
        </div>
        <a href="#industries" onClick={onClose} className="hover:text-red-600">
          Industries
        </a>
        <Link to="/blogs" onClick={onClose} className="hover:text-red-600">
          Blogs
        </Link>
        <button
          onClick={handleQuoteClick}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Get Quote
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
