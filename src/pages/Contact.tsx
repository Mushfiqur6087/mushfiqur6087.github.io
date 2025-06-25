import Navigation from "@/components/Navigation";
import { Mail, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and interesting projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, 
                    I'd love to hear from you. Feel free to reach out!
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <Mail className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">2005107@cse.buet.ac.bd</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <MapPin className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400">Titumir Hall, Polashi, BUET</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
                <form className="space-y-6" action="mailto:2005107@cse.buet.ac.bd" method="POST" encType="text/plain">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500"
                    />
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500"
                    />
                  </div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500"
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                  />
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-start">
              <Link to="/research">
                <Button 
                  variant="outline" 
                  className="border-slate-600 text-gray-300 hover:text-white hover:border-emerald-400"
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Previous: Research
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
