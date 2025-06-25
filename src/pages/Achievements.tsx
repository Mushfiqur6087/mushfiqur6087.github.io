import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Trophy, Medal, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
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
      icon: <Medal className="w-6 h-6 text-orange-400" />,
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
      icon: <Award className="w-6 h-6 text-blue-400" />,
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
      icon: <Award className="w-6 h-6 text-green-400" />,
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
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center mb-20">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Recognition in competitions and research presentations
              </p>
            </div>

            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-slate-800/60 border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {achievement.icon}
                      </div>
                      <div className="flex-1 space-y-2">
                        <CardTitle className="text-xl font-semibold text-white">
                          {achievement.title}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                          <span className="text-emerald-400 font-medium">
                            {achievement.subtitle}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">{achievement.date}</span>
                        </div>
                        <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm font-medium rounded-full">
                          {achievement.badge}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <p className="text-gray-300">
                      {achievement.description}
                    </p>
                    
                    {achievement.highlights && (
                      <ul className="space-y-1">
                        {achievement.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="text-emerald-400 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}

                    {achievement.repo && (
                      <a
                        href={achievement.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Repository
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-700">
              <Link to="/projects" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-slate-600 text-gray-300 hover:text-white hover:border-emerald-400 hover:bg-emerald-400/10"
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Previous: Projects
                </Button>
              </Link>
              <Link to="/research" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                  Next: Research
                  <ArrowRight className="ml-2" size={16} />
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
