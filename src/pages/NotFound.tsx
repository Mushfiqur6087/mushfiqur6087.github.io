import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Home, Code, Palette, Zap } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingShape = ({ delay, duration, size, color, className }: {
    delay: number;
    duration: number;
    size: string;
    color: string;
    className?: string;
  }) => (
    <div
      className={`absolute opacity-20 rounded-full blur-sm animate-pulse ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        animation: `float ${duration}s ease-in-out infinite ${delay}s`,
      }}
    />
  );

  const GlitchText = ({ children }: { children: string }) => (
    <div className="relative">
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
        {children}
      </span>
      <span className="absolute top-0 left-0 text-red-500 opacity-50 animate-ping">
        {children}
      </span>
      <span className="absolute top-0 left-0 text-blue-500 opacity-30 animate-bounce">
        {children}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        <FloatingShape delay={0} duration={6} size="60px" color="#8B5CF6" className="top-20 left-20" />
        <FloatingShape delay={1} duration={8} size="80px" color="#EC4899" className="top-40 right-32" />
        <FloatingShape delay={2} duration={7} size="40px" color="#06B6D4" className="bottom-32 left-40" />
        <FloatingShape delay={3} duration={9} size="100px" color="#F59E0B" className="bottom-20 right-20" />
        <FloatingShape delay={4} duration={5} size="50px" color="#10B981" className="top-60 left-1/2" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        {/* Interactive Mouse Follower */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-[120px] md:text-[200px] font-black leading-none mb-4">
            <GlitchText>404</GlitchText>
          </h1>
          
          {/* Animated Underline */}
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse" />
        </div>

        {/* Error Message */}
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Looks like this page decided to take a vacation. Don't worry though – 
            my portfolio has plenty of other amazing things to explore!
          </p>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          {[
            { Icon: Code, color: "text-blue-400" },
            { Icon: Palette, color: "text-pink-400" },
            { Icon: Zap, color: "text-yellow-400" }
          ].map(({ Icon, color }, index) => (
            <div
              key={index}
              className={`p-4 rounded-full bg-white/10 backdrop-blur-sm ${color} transform hover:scale-110 transition-all duration-300 animate-bounce`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Icon size={32} />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/"
            className="group flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25"
          >
            <Home size={20} />
            <span>Back to Portfolio</span>
            <div className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
              <ArrowLeft size={20} className="transform rotate-180" />
            </div>
          </a>
          
          <button
            onClick={() => window.history.back()}
            className="group flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Fun Quote */}
        <div className="mt-16">
          <blockquote className="text-gray-400 italic text-lg animate-fade-in">
            "Every 404 is just an opportunity to discover something better."
          </blockquote>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-purple-500/50 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-pink-500/50 animate-pulse" />

      {/* Floating Code Snippets */}
      <div className="absolute top-20 right-20 text-green-400/30 font-mono text-sm animate-bounce hidden lg:block">
        {"{ error: 404 }"}
      </div>
      <div className="absolute bottom-40 left-20 text-blue-400/30 font-mono text-sm animate-bounce hidden lg:block">
        {"console.log('lost?')"}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
