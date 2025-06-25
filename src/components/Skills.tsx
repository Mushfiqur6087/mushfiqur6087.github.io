import { 
  Code2, 
  Database, 
  Wrench, 
  Layers,
  Sparkles,
  Zap,
  Shield,
  Cpu,
  Globe,
  Terminal,
  Box,
  Cloud,
  GitBranch,
  BarChart3,
  Workflow
} from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: <Code2 className="w-4 h-4" />, // smaller icon
    color: 'from-blue-500 to-cyan-400',
    items: [
      { name: 'TypeScript', icon: <Code2 className="text-blue-400 w-4 h-4" /> },
      { name: 'JavaScript', icon: <Zap className="text-yellow-400 w-4 h-4" /> },
      { name: 'Python', icon: <Terminal className="text-yellow-500 w-4 h-4" /> },
      { name: 'C++', icon: <Cpu className="text-blue-500 w-4 h-4" /> },
      { name: 'Java', icon: <Shield className="text-red-500 w-4 h-4" /> },
      { name: 'Assembly', icon: <Terminal className="text-gray-400 w-4 h-4" /> },
      { name: 'Shell Scripting', icon: <Terminal className="text-green-400 w-4 h-4" /> },
      { name: 'OpenGL', icon: <Box className="text-green-300 w-4 h-4" /> },
    ],
  },
  {
    category: 'Web Stack',
    icon: <Globe className="w-4 h-4" />, // smaller icon
    color: 'from-purple-500 to-pink-400',
    items: [
      { name: 'React', icon: <Globe className="text-cyan-400 w-4 h-4" /> },
      { name: 'Node.js', icon: <Globe className="text-green-500 w-4 h-4" /> },
      { name: 'TailwindCSS', icon: <Sparkles className="text-teal-400 w-4 h-4" /> },
      { name: 'Spring Boot', icon: <Workflow className="text-green-600 w-4 h-4" /> },
      { name: 'EJS', icon: <Globe className="text-red-400 w-4 h-4" /> },
    ],
  },
  {
    category: 'Python & Data Science',
    icon: <BarChart3 className="w-4 h-4" />, // smaller icon
    color: 'from-orange-500 to-red-400',
    items: [
      { name: 'PyTorch', icon: <BarChart3 className="text-orange-500 w-4 h-4" /> },
      { name: 'TensorFlow', icon: <BarChart3 className="text-yellow-400 w-4 h-4" /> },
      { name: 'Pandas', icon: <BarChart3 className="text-blue-400 w-4 h-4" /> },
      { name: 'NumPy', icon: <BarChart3 className="text-yellow-400 w-4 h-4" /> },
      { name: 'Matplotlib', icon: <BarChart3 className="text-indigo-400 w-4 h-4" /> },
      { name: 'Seaborn', icon: <BarChart3 className="text-cyan-600 w-4 h-4" /> },
    ],
  },
  {
    category: 'Databases',
    icon: <Database className="w-4 h-4" />, // smaller icon
    color: 'from-green-500 to-emerald-400',
    items: [
      { name: 'MongoDB', icon: <Database className="text-green-400 w-4 h-4" /> },
      { name: 'PostgreSQL', icon: <Database className="text-blue-400 w-4 h-4" /> },
      { name: 'MySQL', icon: <Database className="text-blue-500 w-4 h-4" /> },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: <Wrench className="w-4 h-4" />, // smaller icon
    color: 'from-slate-500 to-gray-400',
    items: [
      { name: 'Git', icon: <GitBranch className="text-orange-400 w-4 h-4" /> },
      { name: 'Linux', icon: <Terminal className="text-gray-300 w-4 h-4" /> },
      { name: 'Docker', icon: <Box className="text-blue-400 w-4 h-4" /> },
      { name: 'Azure Cloud', icon: <Cloud className="text-blue-600 w-4 h-4" /> },
      { name: 'GitHub Actions', icon: <Workflow className="text-blue-400 w-4 h-4" /> },
      { name: 'Arduino', icon: <Cpu className="text-blue-400 w-4 h-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent)] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.1),transparent)] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          
          <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to build modern applications and solve complex problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((group, groupIndex) => (
            <div 
              key={group.category} 
              className="group relative"
              style={{ animationDelay: `${groupIndex * 0.1}s` }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl backdrop-blur-sm border border-slate-700/50 transition-all duration-500 group-hover:border-slate-600/80 group-hover:shadow-2xl group-hover:shadow-purple-500/10"></div>
              
              <div className="relative p-8 lg:p-10">
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${group.color} shadow-lg`}>
                    <div className="text-white">
                      {group.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{group.category}</h3>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {group.items.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="group/skill relative bg-slate-800/40 rounded-xl p-2 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/5"
                      style={{ animationDelay: `${(groupIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      {/* Skill Icon */}
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-lg bg-slate-700/50 group-hover/skill:bg-slate-600/50 transition-colors duration-300">
                          <div className="text-lg">
                            {skill.icon}
                          </div>
                        </div>
                      </div>
                      {/* Skill Name */}
                      <div className="text-center">
                        <h4 className="text-gray-200 font-semibold text-xs group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
