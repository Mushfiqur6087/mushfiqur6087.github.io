import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight, Code2, Database, Wrench, Layers, Sparkles, Zap, Cpu, Globe, Terminal, Box, Cloud, GitBranch, BarChart3, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code2 className="w-8 h-8 text-blue-400 group-hover:text-purple-400 transition-all duration-300 group-hover:rotate-12" />,
      color: 'from-blue-500 to-cyan-400',
      items: [
        { name: 'TypeScript', icon: <Code2 className="text-blue-400 w-5 h-5" /> },
        { name: 'JavaScript', icon: <Zap className="text-yellow-400 w-5 h-5" /> },
        { name: 'Python', icon: <Terminal className="text-yellow-500 w-5 h-5" /> },
        { name: 'C++', icon: <Cpu className="text-blue-500 w-5 h-5" /> },
        { name: 'Java', icon: <Code2 className="text-red-500 w-5 h-5" /> },
        { name: 'Assembly', icon: <Terminal className="text-gray-400 w-5 h-5" /> },
        { name: 'Shell Scripting', icon: <Terminal className="text-green-400 w-5 h-5" /> },
        { name: 'OpenGL', icon: <Box className="text-green-300 w-5 h-5" /> },
      ],
    },
    {
      category: 'Web Stack',
      icon: <Globe className="w-8 h-8 text-purple-400 group-hover:text-pink-400 transition-all duration-300 group-hover:rotate-12" />,
      color: 'from-purple-500 to-pink-400',
      items: [
        { name: 'React', icon: <Globe className="text-cyan-400 w-5 h-5" /> },
        { name: 'Node.js', icon: <Globe className="text-green-500 w-5 h-5" /> },
        { name: 'TailwindCSS', icon: <Sparkles className="text-teal-400 w-5 h-5" /> },
        { name: 'Spring Boot', icon: <Workflow className="text-green-600 w-5 h-5" /> },
        { name: 'EJS', icon: <Globe className="text-red-400 w-5 h-5" /> },
      ],
    },
    {
      category: 'Python & Data Science',
      icon: <BarChart3 className="w-8 h-8 text-orange-400 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12" />,
      color: 'from-orange-500 to-red-400',
      items: [
        { name: 'PyTorch', icon: <BarChart3 className="text-orange-500 w-5 h-5" /> },
        { name: 'TensorFlow', icon: <BarChart3 className="text-yellow-400 w-5 h-5" /> },
        { name: 'Pandas', icon: <BarChart3 className="text-blue-400 w-5 h-5" /> },
        { name: 'NumPy', icon: <BarChart3 className="text-yellow-400 w-5 h-5" /> },
        { name: 'Matplotlib', icon: <BarChart3 className="text-indigo-400 w-5 h-5" /> },
        { name: 'Seaborn', icon: <BarChart3 className="text-cyan-600 w-5 h-5" /> },
      ],
    },
    {
      category: 'Databases',
      icon: <Database className="w-8 h-8 text-green-400 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12" />,
      color: 'from-green-500 to-emerald-400',
      items: [
        { name: 'MongoDB', icon: <Database className="text-green-400 w-5 h-5" /> },
        { name: 'PostgreSQL', icon: <Database className="text-blue-400 w-5 h-5" /> },
        { name: 'MySQL', icon: <Database className="text-blue-500 w-5 h-5" /> },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: <Wrench className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12" />,
      color: 'from-slate-500 to-gray-400',
      items: [
        { name: 'Git', icon: <GitBranch className="text-orange-400 w-5 h-5" /> },
        { name: 'Linux', icon: <Terminal className="text-gray-300 w-5 h-5" /> },
        { name: 'Docker', icon: <Box className="text-blue-400 w-5 h-5" /> },
        { name: 'Azure Cloud', icon: <Cloud className="text-blue-600 w-5 h-5" /> },
        { name: 'GitHub Actions', icon: <Workflow className="text-blue-400 w-5 h-5" /> },
        { name: 'Arduino', icon: <Cpu className="text-blue-400 w-5 h-5" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight hover:text-blue-400 transition-colors duration-300 cursor-default">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Skills & Technologies
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8" />
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed hover:text-blue-300 transition-colors duration-300 cursor-default">
                Technologies and tools I work with to build modern applications and solve complex problems.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {skills.map((group, groupIndex) => (
                <div 
                  key={group.category} 
                  className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-default">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {group.items.map((skill, index) => (
                      <div 
                        key={skill.name}
                        className="group/skill bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
                      >
                        {/* Skill Icon */}
                        <div className="flex justify-center mb-3">
                          <div className="p-2 rounded-lg bg-slate-700/50 group-hover/skill:bg-slate-600/50 transition-all duration-300 group-hover/skill:scale-110">
                            {skill.icon}
                          </div>
                        </div>
                        
                        {/* Skill Name */}
                        <div className="text-center">
                          <h4 className="text-gray-200 font-medium text-sm group-hover/skill:text-blue-400 transition-colors duration-300 cursor-default">
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-slate-700">
              <Link to="/research">
                <Button className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                  <ArrowLeft className="mr-2 transition-all duration-300 hover:-translate-x-1" size={16} />
                  Previous: Research
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                  Next: Contact
                  <ArrowRight className="ml-2 transition-all duration-300 hover:translate-x-1" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Skills;
