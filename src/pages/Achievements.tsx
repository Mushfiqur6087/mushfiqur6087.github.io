import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Trophy, Medal, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-400 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12" />,
      title: "Champion – BUET CSE Fest 2024",
      subtitle: "Poster Presentation",
      date: "April 2024",
      description: "Research on autonomous vehicle simulation models using knot-based string clustering",
      highlights: [
        "Identified 31 trajectory clusters",
        "42% of pedestrian paths deviate from straight-line motion",
        "High agreement between clustering and manual annotation"
      ],
      repo: "https://github.com/Mushfiqur6087/PP_CSEFEST_24",
      badge: "🏆 Champion"
    },
    {
      icon: <Medal className="w-8 h-8 text-orange-400 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12" />,
      title: "Top 26 – Game of Datathon",
      subtitle: "Bitfest 2025 (KUET CSE Fest)",
      date: "February 2025",
      description: "ML model for ranking candidate résumés against job descriptions",
      highlights: [
        "Processed 24k training samples",
        "LightGBM regression with MAE ≈ 0.27",
        "Ranked 26th out of 104 teams"
      ],
      repo: "https://github.com/Mushfiqur6087/Game-of-Datathon-Bitfest-2025",
      badge: "⚔️ 26/104"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400 group-hover:text-purple-400 transition-all duration-300 group-hover:rotate-12" />,
      title: "Top 40 – DL Sprint 3.0",
      subtitle: "Bengali AI Math Olympiad (BUET CSE Fest)",
      date: "March 2025",
      description: "Bengali-first pipeline for solving Olympiad-style math problems",
      highlights: [
        "Fine-tuned 7B parameter model with LoRA",
        "Chain-of-thought prompting improved accuracy by ~8%",
        "Ranked 40th out of 150 teams"
      ],
      repo: "https://github.com/Mushfiqur6087/DL-Sprint-3.0-Bengali-AI-Math-Olympiad",
      badge: "🏅 40/150"
    },
    {
      icon: <Award className="w-8 h-8 text-green-400 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12" />,
      title: "Qualified – BUET CSE Fest Hackathon 2023",
      subtitle: "DevOps Category",
      date: "November 2023",
      description: "Successfully qualified for the second round in BUET CSE Fest Hackathon",
      badge: "✅ Qualified"
    }
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
                  Achievements
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8" />
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed hover:text-blue-300 transition-colors duration-300 cursor-default">
                Recognition in competitions and research presentations showcasing excellence in machine learning, deep learning, and research innovation.
              </p>
            </div>

            {/* Achievements Section */}
            <div className="mb-16">
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        {achievement.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-300 cursor-default">
                            {achievement.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                            <span className="text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors duration-300 cursor-default">
                              {achievement.subtitle}
                            </span>
                            <span className="text-gray-500 hidden sm:inline">•</span>
                            <span className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-default">
                              {achievement.date}
                            </span>
                          </div>
                          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                            {achievement.badge}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-lg leading-relaxed hover:text-blue-300 transition-colors duration-300 cursor-default">
                          {achievement.description}
                        </p>
                        
                        {achievement.highlights && (
                          <ul className="space-y-2">
                            {achievement.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-default">
                                <span className="text-blue-400 mt-1 font-bold">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {achievement.repo && (
                          <a
                            href={achievement.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group/link"
                          >
                            <ExternalLink className="w-5 h-5 group-hover/link:text-blue-400 transition-all duration-300 group-hover/link:-translate-y-1" />
                            <span className="group-hover/link:text-blue-400 transition-colors duration-300 font-medium">View Repository</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-slate-700">
              <Link to="/">
                <Button className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                  <ArrowLeft className="mr-2 transition-all duration-300 hover:-translate-x-1" size={16} />
                  Previous: About
                </Button>
              </Link>
              <Link to="/research">
                <Button className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                  Next: Research
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

export default Achievements;
