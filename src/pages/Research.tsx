import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight, BookOpen, Zap, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Research
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Academic contributions and ongoing research in software engineering and AI
              </p>
            </div>

            {/* Publications Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/20 rounded-lg">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Publications</h2>
              </div>

              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <Card key={index} className="bg-slate-800/60 border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-white leading-relaxed">
                            {pub.title}
                          </CardTitle>
                          <p className="text-emerald-400 text-sm font-medium mt-2">
                            {pub.authors}
                          </p>
                          <p className="text-gray-400 text-sm italic mt-1">
                            {pub.venue}
                          </p>
                          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {pub.period}
                            </div>
                            <span className="text-emerald-400">DOI: {pub.doi}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid gap-2">
                        {pub.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Ongoing Research Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-teal-500/20 rounded-lg">
                  <Zap className="w-5 h-5 text-teal-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Ongoing Research</h2>
              </div>

              <div className="space-y-4">
                {ongoingResearch.map((research, index) => (
                  <Card key={index} className="bg-slate-800/60 border-slate-700 hover:border-teal-500/50 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-semibold text-white leading-relaxed">
                            {research.title}
                          </CardTitle>
                          {research.subtitle && (
                            <p className="text-teal-400 text-sm font-medium mt-1">
                              {research.subtitle}
                            </p>
                          )}
                          <div className="flex items-center gap-1 mt-3 text-xs text-gray-500">
                            <Calendar className="w-3 h-3" />
                            {research.period}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid gap-2">
                        {research.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-700">
              <Link to="/achievements" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-slate-600 text-gray-300 hover:text-white hover:border-emerald-400 hover:bg-emerald-400/10"
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Previous: Achievements
                </Button>
              </Link>
              <Link to="/" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                  Back to Home
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
