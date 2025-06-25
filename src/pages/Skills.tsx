import React from 'react';
import Navigation from "@/components/Navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      <main className="pt-16">
        <Skills />
        {/* Navigation Buttons */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
              <Link to="/achievements">
                <Button className="bg-white text-gray-400 hover:text-emerald-600">
                  <ArrowLeft className="mr-2" size={16} />
                  Previous: Achievements
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white">
                  Next: Contact
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

export default SkillsPage;