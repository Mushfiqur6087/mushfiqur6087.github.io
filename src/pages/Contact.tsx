import Navigation from "@/components/Navigation";
import { Mail, MapPin, ArrowLeft, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "2005107@cse.buet.ac.bd"
      };

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or send an email directly to 2005107@cse.buet.ac.bd",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  Get In Touch
                </span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8" />
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed hover:text-blue-300 transition-colors duration-300 cursor-default">
                I'm always open to discussing new opportunities, interesting projects, and potential collaborations. Let's connect!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                    <MessageSquare className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  <h2 className="text-3xl font-semibold text-white hover:text-blue-400 transition-colors duration-300 cursor-default">Let's Connect</h2>
                </div>

                <div className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                  <p className="text-gray-300 leading-relaxed mb-8 hover:text-blue-400 transition-colors duration-300 cursor-default">
                    Whether you have a project in mind, want to collaborate on research, or just want to say hello, 
                    I'd love to hear from you. Feel free to reach out through the form or directly via email!
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                        <Mail className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg hover:text-blue-400 transition-colors duration-300 cursor-default">Email</p>
                        <p className="text-blue-400 hover:text-blue-300 transition-colors duration-300 cursor-default">2005107@cse.buet.ac.bd</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                        <MapPin className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg hover:text-blue-400 transition-colors duration-300 cursor-default">Location</p>
                        <p className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-default">Titumir Hall, Polashi, BUET</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="group bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                    <Send className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors duration-300 cursor-default">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-default">Name</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name" 
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 hover:border-blue-400/50 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-default">Email</label>
                      <Input 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email" 
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 hover:border-blue-400/50 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-default">Subject</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject" 
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 hover:border-blue-400/50 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-default">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message" 
                      rows={6}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 hover:border-blue-400/50 transition-all duration-300 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 transition-all duration-300 hover:translate-x-1" size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-start pt-8 border-t border-slate-700">
              <Link to="/skills">
                <Button className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-blue-500 hover:via-purple-600 hover:to-pink-600 text-white transform hover:scale-110 hover:-rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                  <ArrowLeft className="mr-2 transition-all duration-300 hover:-translate-x-1" size={16} />
                  Previous: Skills
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