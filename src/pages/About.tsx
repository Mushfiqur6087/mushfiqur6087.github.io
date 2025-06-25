import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight, Github, Mail, ExternalLink, Download, Calendar, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="mb-8">
                <img
                  src="/images/myimage.png"
                  alt="Mushfiqur Rahman profile"
                  className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-emerald-500/30 shadow-2xl"
                />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-8" />
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed mb-6 font-semibold">
                  Hi, I’m <strong>Mushfiqur M  MMMMMMMMM Rahman</strong>, a final-year CSE student at BUET.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  My research interests include natural language processing, software automation and testing, autonomous transportation systems, and bioinformatics and computational biology.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am passionate about building robust, user-friendly web applications using modern technologies. I enjoy solving complex problems, collaborating on innovative projects, and continuously learning new tools and frameworks to expand my skill set.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://github.com/Mushfiqur6087"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-emerald-400/50 text-gray-300 hover:text-white transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-3 group-hover:text-emerald-400 transition-colors" />
                GitHub
              </a>
              
              <a
                href="mailto:himel6087@gmail.com"
                className="group flex items-center px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-emerald-400/50 text-gray-300 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:text-emerald-400 transition-colors" />
                Email
              </a>
              
              <a
                href="https://scholar.google.com/citations?user=nldFfnYAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-emerald-400/50 text-gray-300 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-3 group-hover:text-emerald-400 transition-colors" />
                Google Scholar
              </a>
              
              <a
                href="https://www.linkedin.com/in/mushfiqur-rahman-aab99417a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-emerald-400/50 text-gray-300 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-3 group-hover:text-emerald-400 transition-colors" />
                LinkedIn
              </a>
              
              <a
                href="https://www.kaggle.com/mushfiqurrahman6087"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-emerald-400/50 text-gray-300 hover:text-white transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5 mr-3 group-hover:text-emerald-400 transition-colors" />
                Kaggle
              </a>
            </div>

            {/* CV Download */}
            <div className="text-center mb-16">
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-3" />
                Download CV
              </a>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>

              <div className="space-y-8">
                {/* BUET */}
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Bangladesh University of Engineering & Technology
                      </h3>
                      <p className="text-emerald-400 font-medium text-lg">
                        Bachelor of Science in Computer Science & Engineering
                      </p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 lg:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>July 2021 – Present</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Rajshahi College */}
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Rajshahi College
                      </h3>
                      <p className="text-emerald-400 font-medium text-lg">
                        Higher Secondary Certificate (Science)
                      </p>
                      <div className="flex items-center mt-2">
                        <Award className="w-4 h-4 mr-2 text-yellow-400" />
                        <span className="text-yellow-400 font-medium">GPA 5.00 / 5.00</span>
                      </div>
                      <p className="text-gray-300 italic mt-1">
                        Talentpool Scholarship recipient
                      </p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 lg:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Completed 2020</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Rajshahi, Bangladesh</span>
                  </div>
                </div>

                {/* Natore Govt Boys High School */}
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Natore Govt Boys High School
                      </h3>
                      <p className="text-emerald-400 font-medium text-lg">
                        Secondary School Certificate (Science)
                      </p>
                      <div className="flex items-center mt-2">
                        <Award className="w-4 h-4 mr-2 text-yellow-400" />
                        <span className="text-yellow-400 font-medium">GPA 5.00 / 5.00</span>
                      </div>
                      <p className="text-gray-300 italic mt-1">
                        General Scholarship recipient
                      </p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 lg:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Completed 2018</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Natore, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-slate-700">
              <Link to="/">
                <Button 
                  variant="outline"
                  className="border-slate-600 text-gray-300 hover:text-white hover:border-emerald-400 hover:bg-emerald-400/10"
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Previous
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                >
                  Next: Projects
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

export default About;