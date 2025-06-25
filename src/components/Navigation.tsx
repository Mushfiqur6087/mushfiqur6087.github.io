
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Research", href: "/research" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-slate-700/50" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-110"
            >
              Portfolio
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                    location.pathname === item.href 
                      ? "text-white bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-pink-500/80 shadow-lg shadow-blue-500/30 border border-blue-400/30" 
                      : "text-gray-300 hover:text-white hover:bg-slate-800/60 hover:border-blue-400/20 border border-transparent hover:shadow-lg hover:shadow-blue-500/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-2 rounded-lg hover:bg-slate-800/50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 shadow-xl">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.href 
                    ? "text-white bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-pink-500/80 shadow-lg shadow-blue-500/30 border border-blue-400/30" 
                    : "text-gray-300 hover:text-white hover:bg-slate-800/60 hover:border-blue-400/20 border border-transparent hover:shadow-lg hover:shadow-blue-500/10"
                }`}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;