import { useState } from "react";
import { Github, ExternalLink, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  startDate: Date;
  endDate: Date;
  category: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects: Project[] = [
    {
      title: "Survey Website",
      description: "Full-stack web app for visualising pedestrian trajectories, placing knot annotations in real time, and reviewing session statistics. Developed as part of a research project to analyse pedestrian movement pattern.", 
      image: "images/survey.png",
      technologies: ["Spring Boot", "Next.js", "Python", "PostgreSQL", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/Survey-website",
      startDate: new Date("2025-05-01"),
      endDate: new Date("2025-05-30"),
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
      endDate: new Date("2025-06-06"),
      category: "Machine Learning"
    },
    {
      title: "Neural Network from Scratch",
      description: "A neural network implementation from scratch in C++ featuring multiple layers, forward propagation, backpropagation, and various optimization techniques. The network supports several activation functions including Sigmoid, Softmax, and ReLU.",
      image: "images/nn.webp",
      technologies: ["C++"],
      liveUrl: "#",
      githubUrl: "https://github.com/Mushfiqur6087/Neural-Network-From-Scratch",
      startDate: new Date("2024-06-15"),
      endDate: new Date("2024-06-23"),
      category: "Machine Learning"
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
      title: "BIIS - BUET Institutional Information System Clone",
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
      title: "ALU and MIPS (Simulation + Hardware)",
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
      liveUrl: "https://www.youtube.com/watch?v=h2iItoTpC2I",
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
    const end = endDate.toLocaleString('default', { month: 'short', year: 'numeric' });
    return `${start} - ${end}`;
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-800/50 text-gray-300 border border-slate-700 hover:border-blue-500/50 hover:text-white"
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
              className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
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
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-5 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Project Duration */}
                <div className="flex items-center gap-2 mb-5 text-xs text-gray-500">
                  <Calendar size={14} />
                  <span>{formatDateRange(project.startDate, project.endDate)}</span>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg text-xs font-medium border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-400 rounded-lg text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 border-none text-white flex justify-center items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full group"
                      >
                        <Github size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-sm font-medium">Code</span>
                      </Button>
                    </a>
                  )}
                  
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button 
                        size="sm" 
                        className={`border-none text-white flex justify-center items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full group ${
                          project.liveUrl.includes("youtube.com")
                            ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400"
                            : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400"
                        }`}
                      >
                        {project.liveUrl.includes("youtube.com") ? (
                          <>
                            <FaYoutube size={16} className="group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-sm font-medium">Demo</span>
                          </>
                        ) : (
                          <>
                            <ExternalLink size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                            <span className="text-sm font-medium">Live</span>
                          </>
                        )}
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
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter size={32} className="text-gray-500" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
