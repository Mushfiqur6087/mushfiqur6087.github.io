import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight, BookOpen, Zap, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Research() {
  const publications = [
    {
      title: "Code Comment Classification with Data Augmentation and Transformer-Based Models",
      authors: "Mushfiqur Rahman and Mohammed Latif Siddiq",
      venue: "4th International Workshop on Natural Language-based Software Engineering (NLBSE 2025)",
      period: "October 2024 – May 2025",
      doi: "10.1109/NLBSE66842.2025.00013",
      highlights: [
        "Designed data-augmentation techniques for code-comment semantics",
        "Fine-tuned transformer models (CodeBERT, RoBERTa)",
        "Performed ablation studies and hyper-parameter tuning",
        "Manuscript accepted at NLBSE 2025"
      ],
      type: "published"
    }
  ];

  const ongoingResearch = [
    {
      title: "Analyzing Pedestrian Behavior in Autonomous Vehicle Simulations",
      subtitle: "Path Clustering, Knot Detection, and Human Annotation",
      period: "April 2024 – Ongoing",
      highlights: [
        "Designed experimental framework for clustering pedestrian paths",
        "Investigated knot-based path simplification using curvature metrics",
        "Developed large-scale human-annotation platform",
        "Analyzing annotation patterns for AV simulation benchmarks"
      ],
      type: "ongoing"
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
                  Research
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8" />
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed hover:text-blue-300 transition-colors duration-300 cursor-default">
                Academic contributions and ongoing research in software engineering, natural language processing, and autonomous systems.
              </p>
            </div>

            {/* Publications Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h2 className="text-3xl font-semibold text-white hover:text-blue-400 transition-colors duration-300 cursor-default">Publications</h2>
              </div>

              <div className="space-y-8">
                {publications.map((pub, index) => (
                  <div key={index} className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white leading-relaxed hover:text-blue-400 transition-colors duration-300 cursor-default">
                        {pub.title}
                      </h3>
                      <p className="text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors duration-300 cursor-default">
                        {pub.authors}
                      </p>
                      <p className="text-gray-400 italic hover:text-blue-400 transition-colors duration-300 cursor-default">
                        {pub.venue}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-default">
                          <Calendar className="w-4 h-4" />
                          {pub.period}
                        </div>
                        <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300 cursor-default">
                          DOI: {pub.doi}
                        </span>
                      </div>
                      <div className="space-y-2 mt-6">
                        {pub.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-default">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors duration-300" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ongoing Research Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  <Zap className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h2 className="text-3xl font-semibold text-white hover:text-blue-400 transition-colors duration-300 cursor-default">Ongoing Research</h2>
              </div>

              <div className="space-y-8">
                {ongoingResearch.map((research, index) => (
                  <div key={index} className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white leading-relaxed hover:text-blue-400 transition-colors duration-300 cursor-default">
                        {research.title}
                      </h3>
                      {research.subtitle && (
                        <p className="text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors duration-300 cursor-default">
                          {research.subtitle}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-default">
                        <Calendar className="w-4 h-4" />
                        {research.period}
                      </div>
                      <div className="space-y-2 mt-6">
                        {research.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-default">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors duration-300" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-slate-700">
              <Link to="/achievements">
                <Button className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                  <ArrowLeft className="mr-2 transition-all duration-300 hover:-translate-x-1" size={16} />
                  Previous: Achievements
                </Button>
              </Link>
              <Link to="/skills">
                <Button className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                  Next: Skills
                  <ArrowRight className="ml-2 transition-all duration-300 hover:translate-x-1" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
