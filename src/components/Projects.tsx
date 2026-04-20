import { useState } from "react";
import { Github, ExternalLink, Calendar, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  demoUrls?: { label: string; url: string }[];
  githubUrl: string;
  startDate: Date;
  endDate: Date;
  category: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Survey Website",
      description: "A two-phase research platform for pedestrian trajectory annotation and reconstruction, built as a joint collaboration between BUET, Cal Poly, and UC Santa Cruz. Phase 1 lets annotators place strategic knots on pedestrian trajectories to mark significant movement points in real time. Phase 2 reconstructs those trajectories by drawing smooth curves through selected anchor points to validate annotation quality. The insights help improve simulation accuracy for autonomous vehicle safety.",
      image: "images/survey.png",
      technologies: ["Spring Boot", "Next.js", "Python", "PostgreSQL", "TailwindCSS"],
      liveUrl: "https://motiontagger.com/",
      githubUrl: "https://github.com/Mushfiqur6087/Survey-website",
      startDate: new Date("2025-05-01"),
      endDate: new Date(),
      category: "Web Development"
    },
    {
      title: "Testing Agent",
      description: "An intelligent test-automation framework that turns a single natural-language test description into multiple end-to-end test cases, then executes them with Playwright through a multi-agent architecture. Uses Large Language Models (LLM) for smart element detection, context-aware planning, result validation, and detailed logging.",
      image: "images/agent.jpg",
      technologies: ["Python", "Playwright", "LLM", "Multi-Agent"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/Testing-Agent",
      startDate: new Date("2025-05-15"),
      endDate: new Date(),
      category: "AI Agent"
    },
    {
      title: "Dormie - Hall Management System",
      description: "A comprehensive Hall Management System that automates dormitory administration. Features student registration, room allocation & tracking, fee collection & dues management, complaint handling, lost & found, and a Mess-Manager role — all behind role-based access control for Admins, Provosts, and Students. Built with a Next.js frontend, Spring Boot backend, Spring Data JPA for persistence, and fully containerised with Docker Compose for one-command deployment.",
      image: "/images/dormie.png",
      technologies: ["Next.js", "Spring Boot", "Spring Data JPA", "MySQL", "Docker"],
      liveUrl: "#",
      demoUrls: [
        { label: "Feature Demo", url: "https://www.youtube.com/watch?v=bEW4wTEY1lo" },
        { label: "Infrastructure Demo", url: "https://www.youtube.com/watch?v=P4edSB8yfHA" }
      ],
      githubUrl: "https://github.com/Mushfiqur6087/Dormie",
      startDate: new Date("2025-02-01"),
      endDate: new Date("2025-06-30"),
      category: "Web Development"
    },

    {
      title: "C Compiler",
      description: "A custom compiler project featuring a full pipeline: lexical analysis, parsing, semantic analysis, and code generation. It converts assembly code into fully working c code.",
      image: "/images/compiler.png",
      technologies: ["C", "Flex", "Bison"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/CSE310-Compiler-Sessional",
      startDate: new Date("2024-03-01"),
      endDate: new Date("2024-06-01"),
      category: "Systems Programming"
    },
    {
      title: "TCP SYN Flood DOS Attack",
      description: "A Python implementation of a TCP SYN flood Denial of Service attack that exploits the TCP three-way handshake. Supports two attack modes: a non-spoofed mode using the attacker's real IP, and an IP-spoofed mode with randomized source addresses for harder traceability. Features raw socket packet crafting (custom IPv4 and TCP headers with checksum computation), multi-threaded attack distribution with configurable packets-per-second rate, and a response sniffer that monitors SYN-ACK replies to verify target connectivity.",
      image: "/images/tcp-syn.png",
      technologies: ["Python", "Scapy"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/TCP-SYN-Flood-DOS-Attack",
      startDate: new Date("2024-03-01"),
      endDate: new Date("2024-06-01"),
      category: "Cybersecurity"
    },
    {
      title: "Neural Network from Scratch",
      description: "A neural network implementation from scratch in C++ featuring multiple layers, forward propagation, backpropagation, and various optimization techniques. The network supports several activation functions including Sigmoid, Softmax, and ReLU.",
      image: "images/nn.webp",
      technologies: ["C++"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/Neural-Network-From-Scratch",
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-01-31"),
      category: "Deep Learning"
    },
    {
      title: "BIIS",
      description: "A full-stack web application that offers role-based dashboards for administrators, faculty and students to handle course registration, grading, result and profile management.",
      image: "/images/BIIS.png",
      technologies: ["Node.js", "Express", "EJS", "JavaScript", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/BIIS-1.0",
      startDate: new Date("2023-09-01"),
      endDate: new Date("2023-12-10"),
      category: "Web Development"
    },
    {
      title: "ALU and MIPS",
      description: "Designed a 4-bit ALU and a single-cycle 4-bit MIPS CPU in Logisim, then ported the design to real hardware using an ATmega32 microcontroller and discrete TTL logic gates. Includes custom assembler, simulation testbenches, breadboard schematics.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Logisim", "ATmega32 (AVR)", "C/C++", "Assembly", "TTL Logic"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/CSE306-Computer-Architecture-Sessional",
      startDate: new Date("2023-10-14"),
      endDate: new Date("2024-02-14"),
      category: "Hardware"
    },
    {
      title: "TexLa",
      description: "TexLa is a custom-built car you can steer just by tilting your controller, thanks to gyroscope-based wireless control. It streams real-time video and connects to a mobile app, making remote driving both fun and interactive.",
      image: "/images/texla.jpg",
      technologies: ["Arduino", "ESP32", "C/C++", "Sensors"],
      liveUrl: "#",
      demoUrls: [{ label: "Demo", url: "https://www.youtube.com/watch?v=h2iItoTpC2I" }],
      githubUrl: "#",
      startDate: new Date("2024-02-19"),
      endDate: new Date("2024-03-19"),
      category: "Hardware"
    },
    {
      title: "MovieDB",
      description: "A Java-based movie library manager with fast CLI search and statistics over text data, plus a modern JavaFX desktop app. Enjoy secure login, live dashboards, easy add/transfer dialogs, and seamless multi-user sync powered by a Gradle-backed client-server backend.",
      image: "https://github.com/Mushfiqur6087/MovieDB/raw/master/final%20javafx%20project/screenshot_1.png",
      technologies: ["Java", "JavaFX", "Gradle", "Java Sockets"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/MovieDB",
      startDate: new Date("2022-07-05"),
      endDate: new Date("2022-09-20"),
      category: "Desktop Applications"
    },
    {
      title: "Street Racer",
      description: "A 2D car racing game built in C++ with OpenGL. Dodge enemy cars and obstacles, collect hearts for extra lives, and compete for the high score with persistent leaderboards, music, and full game-state management.",
      image: "https://github.com/Mushfiqur6087/CSE-102-Car-Racing-Game/raw/main/assets/images/ui/intro.jpg",
      technologies: ["C++", "OpenGL-GLUT", "Makefile"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/CSE-102-Car-Racing-Game",
      startDate: new Date("2022-01-01"),
      endDate: new Date("2022-06-20"),
      category: "Games"
    },
    {
      title: "ForeAgers",
      description: "A fast-paced, top-down 2D platformer adventure inspired by Zelda, built with Pygame for the CSE Fest game jam. Features parallax backgrounds, enemies, collectibles, and custom sound effects for an engaging retro experience.",
      image: "/images/zelda.webp",
      technologies: ["Python", "Pygame"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/teamAceForeAgers",
      startDate: new Date("2022-12-05"),
      endDate: new Date("2023-01-10"),
      category: "Games"
    }
  ];

  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const formatDateRange = (startDate: Date, endDate: Date) => {
    const start = startDate.toLocaleString('default', { month: 'short', year: 'numeric' });
    const isToday = endDate.toDateString() === new Date().toDateString();
    const end = isToday ? 'Present' : endDate.toLocaleString('default', { month: 'short', year: 'numeric' });
    return `${start} - ${end}`;
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight hover:text-blue-400 transition-colors duration-300 cursor-default">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8" />
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed hover:text-blue-300 transition-colors duration-300 cursor-default">
            A curated collection of my academic projects and personal explorations, 
            showcasing innovation across web development, machine learning, and systems programming.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/30"
                  : "bg-slate-800/50 text-gray-300 border border-slate-700 hover:border-blue-400/50 hover:text-blue-400 hover:bg-blue-900/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={`${project.title}-${index}`}
              className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-400/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-slate-900/50 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-xl border border-white/10 hover:text-blue-400 transition-colors duration-300">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 cursor-default">
                  {project.title}
                </h3>
                
                <p
                  className="text-gray-400 mb-5 text-sm leading-relaxed line-clamp-3 hover:text-blue-300 transition-colors duration-300 cursor-pointer select-none"
                  title="Click to read more"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.description}
                </p>
                
                {/* Project Duration */}
                <div className="flex items-center gap-2 mb-5 text-xs text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-default">
                  <Calendar size={14} className="hover:text-blue-400 transition-colors duration-300" />
                  <span>{formatDateRange(project.startDate, project.endDate)}</span>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-400/20 to-purple-500/20 text-blue-400 rounded-lg text-xs font-medium border border-blue-400/20 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-400 rounded-lg text-xs font-medium hover:text-blue-400 transition-colors duration-300 cursor-default">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px]"
                    >
                      <Button 
                        size="sm" 
                        className="bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white hover:text-blue-400 flex justify-center items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full group"
                      >
                        <Github size={16} className="group-hover:rotate-12 group-hover:text-blue-400 transition-all duration-300" />
                        <span className="text-sm font-medium">Code</span>
                      </Button>
                    </a>
                  )}
                  
                  {project.demoUrls && project.demoUrls.map((demo, idx) => (
                    <a
                      key={idx}
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px]"
                    >
                      <Button 
                        size="sm" 
                        className="bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white hover:text-blue-400 flex justify-center items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full group"
                      >
                        <FaYoutube size={16} className="group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">{demo.label}</span>
                      </Button>
                    </a>
                  ))}

                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px]"
                    >
                      <Button 
                        size="sm" 
                        className="bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white hover:text-blue-400 flex justify-center items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full group"
                      >
                        <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-sm font-medium">Live</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-blue-900/50 transition-colors duration-300">
              <Filter size={32} className="text-gray-500 hover:text-blue-400 transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-400 mb-2 hover:text-blue-400 transition-colors duration-300 cursor-default">No projects found</h3>
            <p className="text-gray-500 hover:text-blue-300 transition-colors duration-300 cursor-default">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Floating Description Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ animation: "fadeIn 0.2s ease" }}
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal Card */}
          <div
            className="relative z-10 max-w-2xl w-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 rounded-2xl shadow-2xl shadow-blue-500/10 p-8"
            style={{ animation: "slideUp 0.25s ease" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Category badge */}
            <span className="inline-block px-3 py-1 mb-4 bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-medium rounded-xl">
              {selectedProject.category}
            </span>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedProject.title}
            </h3>

            {/* Full description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 mb-5 text-xs text-gray-500">
              <Calendar size={14} />
              <span>{formatDateRange(selectedProject.startDate, selectedProject.endDate)}</span>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-400/20 to-purple-500/20 text-blue-400 rounded-lg text-xs font-medium border border-blue-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {selectedProject.githubUrl !== "#" && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                  <Button size="sm" className="bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white hover:text-blue-400 flex justify-center items-center gap-2 transition-all duration-300 w-full group">
                    <Github size={16} className="group-hover:rotate-12 transition-all duration-300" />
                    <span className="text-sm font-medium">Code</span>
                  </Button>
                </a>
              )}
              {selectedProject.demoUrls && selectedProject.demoUrls.map((demo, idx) => (
                <a key={idx} href={demo.url} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                  <Button size="sm" className="bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white hover:text-blue-400 flex justify-center items-center gap-2 transition-all duration-300 w-full group">
                    <FaYoutube size={16} />
                    <span className="text-sm font-medium">{demo.label}</span>
                  </Button>
                </a>
              ))}
              {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                  <Button size="sm" className="bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white hover:text-blue-400 flex justify-center items-center gap-2 transition-all duration-300 w-full group">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live</span>
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </section>
  );
};

export default Projects;
