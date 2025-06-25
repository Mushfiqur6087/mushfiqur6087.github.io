import Navigation from "@/components/Navigation";
import { ArrowRight, Github, Mail, ExternalLink, Download, Calendar, MapPin, Award } from "lucide-react";
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
                  className="w-40 h-40 rounded-full object-cover mx-auto border-4 border-emerald-500/30 shadow-2xl transition-all duration-500 hover:scale-110 hover:border-blue-400/50 hover:shadow-blue-500/20 hover:shadow-2xl hover:rotate-3 cursor-pointer"
                />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight hover:text-blue-400 transition-colors duration-300 cursor-default">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8" />
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed mb-6 font-semibold hover:text-blue-300 transition-colors duration-300 cursor-default">
                  Hi, I'm <strong className="hover:text-blue-400 transition-colors duration-300">Mushfiqur Rahman</strong>, a final-year CSE student at BUET.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6 hover:text-blue-300 transition-colors duration-300 cursor-default">
                  My research interests include natural language processing, software automation and testing, autonomous transportation systems, and bioinformatics and computational biology.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed hover:text-blue-300 transition-colors duration-300 cursor-default">
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
                className="group flex items-center px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Github className="w-5 h-5 mr-3 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12" />
                <span className="group-hover:text-blue-400 transition-colors duration-300">GitHub</span>
              </a>
              
              <a
                href="mailto:himel6087@gmail.com"
                className="group flex items-center px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:text-blue-400 transition-all duration-300 group-hover:bounce" />
                <span className="group-hover:text-blue-400 transition-colors duration-300">Email</span>
              </a>
              
              <a
                href="https://scholar.google.com/citations?user=nldFfnYAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <ExternalLink className="w-5 h-5 mr-3 group-hover:text-blue-400 transition-all duration-300 group-hover:-translate-y-1" />
                <span className="group-hover:text-blue-400 transition-colors duration-300">Google Scholar</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/mushfiqur-rahman-aab99417a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <ExternalLink className="w-5 h-5 mr-3 group-hover:text-blue-400 transition-all duration-300 group-hover:-translate-y-1" />
                <span className="group-hover:text-blue-400 transition-colors duration-300">LinkedIn</span>
              </a>
              
              <a
                href="https://www.kaggle.com/mushfiqurrahman6087"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-400/50 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <ExternalLink className="w-5 h-5 mr-3 group-hover:text-blue-400 transition-all duration-300 group-hover:-translate-y-1" />
                <span className="group-hover:text-blue-400 transition-colors duration-300">Kaggle</span>
              </a>
            </div>

            {/* CV Download */}
            <div className="text-center mb-16">
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-blue-500/30"
              >
                <Download className="w-5 h-5 mr-3 transition-all duration-300 hover:animate-bounce" />
                Download CV
              </a>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center hover:text-blue-400 transition-colors duration-300 cursor-default">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>

              <div className="space-y-8">
                {/* BUET */}
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-300 cursor-default">
                        Bangladesh University of Engineering & Technology
                      </h3>
                      <p className="text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors duration-300 cursor-default">
                        Bachelor of Science in Computer Science & Engineering
                      </p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 lg:mt-0 hover:text-blue-400 transition-colors duration-300 cursor-default">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>July 2021 – Present</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-default">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Rajshahi College */}
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-300 cursor-default">
                        Rajshahi College
                      </h3>
                      <p className="text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors duration-300 cursor-default">
                        Higher Secondary Certificate (Science)
                      </p>
                      <div className="flex items-center mt-2">
                        <Award className="w-4 h-4 mr-2 text-yellow-400 hover:text-blue-400 transition-colors duration-300" />
                        <span className="text-yellow-400 font-medium hover:text-blue-400 transition-colors duration-300 cursor-default">GPA 5.00 / 5.00</span>
                      </div>
                      <p className="text-gray-300 italic mt-1 hover:text-blue-300 transition-colors duration-300 cursor-default">
                        Talentpool Scholarship recipient
                      </p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 lg:mt-0 hover:text-blue-400 transition-colors duration-300 cursor-default">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Completed 2020</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-default">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Rajshahi, Bangladesh</span>
                  </div>
                </div>

                {/* Natore Govt Boys High School */}
                <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 hover:text-blue-400 transition-colors duration-300 cursor-default">
                        Natore Govt Boys High School
                      </h3>
                      <p className="text-blue-400 font-medium text-lg hover:text-blue-300 transition-colors duration-300 cursor-default">
                        Secondary School Certificate (Science)
                      </p>
                      <div className="flex items-center mt-2">
                        <Award className="w-4 h-4 mr-2 text-yellow-400 hover:text-blue-400 transition-colors duration-300" />
                        <span className="text-yellow-400 font-medium hover:text-blue-400 transition-colors duration-300 cursor-default">GPA 5.00 / 5.00</span>
                      </div>
                      <p className="text-gray-300 italic mt-1 hover:text-blue-300 transition-colors duration-300 cursor-default">
                        General Scholarship recipient
                      </p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 lg:mt-0 hover:text-blue-400 transition-colors duration-300 cursor-default">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Completed 2018</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-default">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Natore, Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end items-center pt-8 border-t border-slate-700">
              <Link to="/projects">
                <Button 
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  Next: Projects
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

export default About;
