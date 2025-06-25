import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Projects />
            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-slate-700">
              <Link to="/">
                <Button 
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <ArrowLeft className="mr-2 transition-all duration-300 hover:-translate-x-1" size={16} />
                  Previous: About
                </Button>
              </Link>
              <Link to="/achievements">
                <Button 
                  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  Next: Achievements
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

export default ProjectsPage;
