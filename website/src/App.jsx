import React from 'react';
import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";
import { Code, Users, Laptop, Zap, MessageSquare, ChevronRight, Menu, X, Github, Twitter, Linkedin } from "lucide-react";

// Main App Component
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Handle scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "team", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleContactSubmit = () => {
    toast.success("Message sent! We'll be in touch soon.");
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Toaster position="top-right" />
      
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a href="#home" className="flex items-center">
                  <span className="text-2xl font-bold text-black">cross<span className="text-lime-500">bow</span></span>
                </a>
              </motion.div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "services", "projects", "team", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item ? "text-lime-500" : "text-gray-600 hover:text-lime-500"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["home", "services", "projects", "team", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item ? "text-lime-500" : "text-gray-600 hover:text-lime-500"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-lime-400 to-lime-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Crafting Digital Excellence
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg">
                We build powerful, scalable software solutions that drive business growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors duration-300 text-center"
                >
                  Get in Touch
                </a>
                <a 
                  href="#services" 
                  className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Our Services <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <div className="bg-white rounded-xl shadow-xl p-6 relative z-10">
                  <pre className="text-xs md:text-sm text-gray-800 overflow-x-auto">
{`function Crossbow() {
  return (
    <div className="innovation">
      {solutions.map(solution => (
        <DeliverExcellence key={solution.id} 
          client={solution.client} />
      ))}
    </div>
  );
}`}
                  </pre>
                </div>
                <div className="absolute -top-3 -left-3 w-full h-full bg-black rounded-xl -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive software development and consultancy services to help your business thrive in the digital landscape.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: "Custom Development",
                description: "Tailored software solutions designed to meet your specific business requirements and challenges."
              },
              {
                icon: <Laptop size={32} />,
                title: "Web Applications",
                description: "Scalable and responsive web applications built with modern frameworks and best practices."
              },
              {
                icon: <Users size={32} />,
                title: "Tech Consultancy",
                description: "Expert guidance on technology strategy, architecture, and implementation roadmaps."
              },
              {
                icon: <Zap size={32} />,
                title: "Performance Optimization",
                description: "Improve your existing systems for better speed, reliability, and user experience."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-lime-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-lime-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our recent work and success stories that showcase our expertise and capabilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FinTech Dashboard",
                category: "Web Application",
                image: "/fintech.png",
                description: "A comprehensive financial dashboard for real-time data analysis and reporting."
              },
              {
                title: "Healthcare Platform",
                category: "Enterprise Solution",
                image: "/health.webp",
                description: "Secure patient management system with integrated telehealth capabilities."
              },
              {
                title: "E-commerce Ecosystem",
                category: "Full-Stack Development",
                image: "/ecommerce.png",
                description: "Scalable online marketplace with advanced inventory management system."
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-black text-white text-xs px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href="#" className="text-lime-600 font-medium hover:text-lime-700 flex items-center gap-1">
                    View Case Study <ChevronRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center gap-2 text-black bg-lime-400 px-6 py-3 rounded-md font-medium hover:bg-lime-500 transition-colors duration-300">
              View All Projects <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our talented team of developers, designers, and consultants passionate about creating exceptional software solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Simbarashe Mutombe",
                role: "Software Engineer",
                image: "/icon.png"
              },
              {
                name: "Newlife Marangwanda",
                role: "Lead Engineer",
                image: "/icon.png"
              },
              {
                name: "James Wilson",
                role: "DevOps Engineer",
                image: "/icon.png"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 relative">
                  <div className="rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-lime-400">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-lime-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8 max-w-lg">
                Have a project in mind or need consultancy services? We'd love to hear from you. Fill out the form, and our team will get back to you shortly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-lime-500 rounded-full p-2 mt-1">
                    <MessageSquare size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-300">contact@crossbow.dev</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-lime-500 rounded-full p-2 mt-1">
                    <Laptop size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Follow Us</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="text-gray-300 hover:text-lime-500 transition-colors">
                        <Github size={24} />
                      </a>
                      <a href="#" className="text-gray-300 hover:text-lime-500 transition-colors">
                        <Twitter size={24} />
                      </a>
                      <a href="#" className="text-gray-300 hover:text-lime-500 transition-colors">
                        <Linkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleContactSubmit}
                  className="w-full bg-lime-500 text-black py-3 px-6 rounded-md font-medium hover:bg-lime-400 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-2xl font-bold">
                cross<span className="text-lime-500">bow</span>
              </a>
              <p className="mt-2 text-gray-400 max-w-md">
                Crafting exceptional software solutions that drive business growth and innovation.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Crossbow. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}