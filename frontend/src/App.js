import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Code, 
  Smartphone, 
  Palette, 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Star,
  Users,
  Award,
  Target,
  MessageCircle,
  Calendar,
  User,
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Menu,
  XIcon,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink
} from "lucide-react";

// Preloader Component
const Preloader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-sky-900 to-cyan-900 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-20 h-20 border-4 border-sky-500/30 border-t-sky-400 rounded-full mx-auto mb-6"
            />
            <motion.h2
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent"
            >
              TROSSACHS GROUP
            </motion.h2>
            <p className="text-sky-300 mt-2">Loading Excellence...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Blog Management System
const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the web development landscape in 2025.",
    content: `The web development industry continues to evolve at a rapid pace. In 2025, we're seeing incredible advancements in framework efficiency, AI integration, and user experience optimization.

Key trends include:
- Server-side rendering becoming the default
- AI-powered code generation tools
- Enhanced performance optimization
- Progressive Web Apps reaching desktop parity

At Trossachs Group, we stay ahead of these trends to deliver cutting-edge solutions for our clients.`,
    date: "2025-01-15",
    author: "Tech Team",
    image: "https://images.unsplash.com/photo-1631334709265-83dcee08ba9d"
  },
  {
    id: 2,
    title: "Mobile App Design Trends",
    excerpt: "Discover the latest mobile app design trends that are revolutionizing user experiences.",
    content: `Mobile app design continues to push boundaries in 2025. We're seeing a shift towards more immersive experiences, better accessibility, and seamless cross-platform consistency.

Latest trends include:
- Neumorphism making a comeback
- Voice-first interface design
- Micro-interactions for enhanced UX
- Dark mode as the preferred choice

Our design team incorporates these trends while maintaining usability and brand consistency.`,
    date: "2025-01-10",
    author: "Design Team",
    image: "https://images.unsplash.com/photo-1593422146705-ea6965a1d7a9"
  },
  {
    id: 3,
    title: "Brand Identity in Digital Age",
    excerpt: "How to create compelling brand identities that resonate in the digital landscape.",
    content: `Building a strong brand identity in today's digital world requires a deep understanding of both traditional design principles and modern digital behavior.

Essential elements include:
- Consistent visual language across platforms
- Adaptive logos for various contexts
- Color psychology in digital spaces
- Typography that works across devices

Our brand identity projects focus on creating memorable, scalable visual systems.`,
    date: "2025-01-05",
    author: "Creative Team",
    image: "https://images.unsplash.com/photo-1488665717449-ca273d1d60a3"
  }
];

// Navigation Component
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-sky-900/95 to-cyan-900/95 backdrop-blur-lg border-b border-sky-500/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            >
              TROSSACHS GROUP
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group transition-colors duration-300 ${
                  isActive(item.path) 
                    ? 'text-sky-400' 
                    : 'text-white hover:text-sky-300'
                }`}
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400 transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-sky-500/20"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`transition-colors duration-300 ${
                      isActive(item.path) 
                        ? 'text-sky-400' 
                        : 'text-white hover:text-sky-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-sky-900 to-cyan-900 border-t border-sky-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-4"
            >
              TROSSACHS GROUP
            </motion.div>
            <p className="text-sky-300 mb-6 max-w-md">
              Exclusive tech solutions specializing in web development, mobile apps, UI/UX design, and brand identity. 
              Transforming ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 bg-sky-800/40 rounded-full flex items-center justify-center text-sky-400 hover:text-white hover:bg-sky-600 transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Services</h3>
            <div className="space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Brand Identity'].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="block text-sky-300 hover:text-sky-400 transition-colors duration-300"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Featured Projects</h3>
            <div className="space-y-3">
              {['Poetry Farm', 'Online Eatery', 'Trading Site'].map((project) => (
                <div
                  key={project}
                  className="flex items-center text-sky-300 hover:text-sky-400 transition-colors duration-300 cursor-pointer"
                >
                  <ExternalLink size={14} className="mr-2" />
                  {project}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-sky-500/20">
          <div className="flex items-center text-sky-300">
            <Mail className="w-5 h-5 text-sky-400 mr-3" />
            <span>hello@trossachsgroup.com</span>
          </div>
          <div className="flex items-center text-sky-300">
            <Phone className="w-5 h-5 text-sky-400 mr-3" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center text-sky-300">
            <MapPin className="w-5 h-5 text-sky-400 mr-3" />
            <span>Innovation District, Tech City</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-sky-500/20 text-center">
          <p className="text-sky-400">
            © {new Date().getFullYear()} Trossachs Group. All rights reserved. 
            <span className="mx-2">|</span>
            Crafted with excellence in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Parallax Section Component
const ParallaxSection = ({ children, className = "", offset = 0.5 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
      style={{
        transform: inView ? `translateY(${offset * 20}px)` : 'translateY(100px)'
      }}
    >
      {children}
    </motion.div>
  );
};

// 3D Card Component
const Card3D = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ 
        rotateX: 10,
        rotateY: 10,
        scale: 1.05,
        z: 100
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`transform-gpu perspective-1000 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

// Dashboard/Home Page
const Dashboard = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-cyan-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1631334709265-83dcee08ba9d')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-cyan-900/80" />
        </div>
        
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 100 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-600 bg-clip-text text-transparent hero-title"
          >
            TROSSACHS GROUP
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto hero-subtitle"
          >
            Exclusive Tech Solutions • Web Development • Mobile Apps • UI/UX Design • Brand Identity
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.1, rotateX: 10 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-sky-500/50 transition-all duration-300"
              >
                Explore Our Work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.1, rotateX: -10 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-sky-400 text-sky-400 font-bold rounded-full hover:bg-sky-400 hover:text-white transition-all duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-sky-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"
        />
      </section>

      {/* Stats Section */}
      <ParallaxSection className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Projects Completed", icon: Target },
              { number: "50+", label: "Happy Clients", icon: Users },
              { number: "5", label: "Years Experience", icon: Award },
              { number: "24/7", label: "Support", icon: Zap }
            ].map((stat, index) => (
              <Card3D key={index} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-sky-800/40 to-cyan-800/40 backdrop-blur-lg rounded-2xl p-6 border border-sky-500/20 hover-lift"
                >
                  <stat.icon className="w-8 h-8 text-sky-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sky-300">{stat.label}</div>
                </motion.div>
              </Card3D>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Featured Projects */}
      <ParallaxSection className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Poetry Farm",
                category: "Web Development & UI/UX",
                description: "A creative agricultural platform combining poetry with farming, featuring immersive storytelling and farm management tools.",
                image: "https://images.unsplash.com/photo-1651384360730-8c218a6e8da9"
              },
              {
                title: "Online Eatery",
                category: "Mobile App & Brand Identity",
                description: "Complete food delivery platform with custom mobile apps, branding, and restaurant management system.",
                image: "https://images.unsplash.com/photo-1488665717449-ca273d1d60a3"
              },
              {
                title: "Trading Site",
                category: "Web Development & UI/UX",
                description: "Professional trading platform with real-time data, advanced analytics, and secure transaction processing.",
                image: "https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg"
              }
            ].map((project, index) => (
              <Card3D key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-sky-800/40 to-cyan-800/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-sky-500/20 group project-card"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent" />
                    <div className="absolute bottom-4 right-4 px-2 py-1 bg-sky-500/80 text-white text-xs rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sky-300 text-sm">{project.description}</p>
                  </div>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

// About Page
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-cyan-900 pt-24">
      <ParallaxSection className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
            About Trossachs Group
          </motion.h1>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card3D>
              <div className="bg-gradient-to-br from-sky-800/40 to-cyan-800/40 backdrop-blur-lg rounded-2xl p-8 border border-sky-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-sky-300 mb-6">
                  Founded with a vision to revolutionize the tech industry, Trossachs Group has emerged as a leading force in exclusive digital solutions. We combine cutting-edge technology with creative excellence to deliver unparalleled results.
                </p>
                <p className="text-sky-300 mb-6">
                  Our portfolio includes innovative projects like Poetry Farm, Online Eatery, and advanced Trading Sites - each showcasing our ability to transform unique ideas into powerful digital experiences.
                </p>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-full"
                  >
                    Learn More <ArrowRight className="inline w-4 h-4 ml-2" />
                  </motion.button>
                </Link>
              </div>
            </Card3D>
            
            <Card3D>
              <motion.div
                whileHover={{ rotateY: 10 }}
                className="relative h-96 rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1631334709265-83dcee08ba9d"
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent" />
              </motion.div>
            </Card3D>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

// Services Page
const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: Code,
      description: "Custom web applications built with the latest technologies, like our Poetry Farm platform that combines creativity with functionality.",
      features: ["React/Next.js", "Node.js/Python", "Cloud Deployment", "API Integration"],
      image: "https://images.unsplash.com/photo-1631334709265-83dcee08ba9d"
    },
    {
      title: "Mobile Apps",
      icon: Smartphone,
      description: "Native and cross-platform mobile solutions, including comprehensive food delivery apps like our Online Eatery project.",
      features: ["iOS/Android", "React Native", "Flutter", "App Store Optimization"],
      image: "https://images.unsplash.com/photo-1593422146705-ea6965a1d7a9"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Beautiful and intuitive user experiences that prioritize usability and aesthetic appeal across all our projects.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      image: "https://images.unsplash.com/photo-1651384360730-8c218a6e8da9"
    },
    {
      title: "Brand Identity",
      icon: Star,
      description: "Complete branding and visual identity solutions that create memorable experiences and strong market presence.",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets"],
      image: "https://images.unsplash.com/photo-1488665717449-ca273d1d60a3"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-cyan-900 pt-24">
      <ParallaxSection className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </motion.h1>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card3D key={index}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="bg-gradient-to-br from-sky-800/40 to-cyan-800/40 backdrop-blur-lg rounded-2xl p-8 border border-sky-500/20 service-card">
                      <service.icon className="w-12 h-12 text-sky-400 mb-4" />
                      <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                      <p className="text-sky-300 mb-6">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sky-300">
                            <Zap className="w-4 h-4 text-sky-400 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  >
                    <div className="relative h-80 rounded-2xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent" />
                    </div>
                  </motion.div>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

// Blog Page with Management
const Blog = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    image: ''
  });

  const handleAddPost = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      image: ''
    });
    setEditingPost(null);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleEditPost = (post) => {
    setFormData(post);
    setEditingPost(post.id);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleSavePost = () => {
    if (editingPost) {
      // Edit existing post
      setPosts(posts.map(post => 
        post.id === editingPost ? { ...formData, id: editingPost } : post
      ));
    } else {
      // Add new post
      const newPost = {
        ...formData,
        id: Math.max(...posts.map(p => p.id)) + 1,
        date: new Date().toISOString().split('T')[0]
      };
      setPosts([newPost, ...posts]);
    }
    setIsEditing(false);
    setShowForm(false);
    setEditingPost(null);
  };

  const handleDeletePost = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setShowForm(false);
    setEditingPost(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-cyan-900 pt-24">
      <ParallaxSection className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <motion.h1 className="text-6xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Our Blog
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleAddPost}
              className="px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-full flex items-center hover:shadow-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Post
            </motion.button>
          </div>

          {/* Blog Post Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="mb-12"
              >
                <Card3D>
                  <div className="bg-gradient-to-br from-sky-800/40 to-cyan-800/40 backdrop-blur-lg rounded-2xl p-8 border border-sky-500/20">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {editingPost ? 'Edit Post' : 'Add New Post'}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sky-300 mb-2">Title</label>
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          className="w-full px-4 py-3 bg-sky-900/30 border border-sky-500/30 rounded-lg text-white placeholder-sky-400 focus:border-sky-400 focus:outline-none focus-ring"
                          placeholder="Post title"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sky-300 mb-2">Author</label>
                        <input
                          type="text"
                          value={formData.author}
                          onChange={(e) => setFormData({...formData, author: e.target.value})}
                          className="w-full px-4 py-3 bg-sky-900/30 border border-sky-500/30 rounded-lg text-white placeholder-sky-400 focus:border-sky-400 focus:outline-none focus-ring"
                          placeholder="Author name"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sky-300 mb-2">Image URL</label>
                      <input
                        type="url"
                        value={formData.image}
                        onChange={(e) => setFormData({...formData, image: e.target.value})}
                        className="w-full px-4 py-3 bg-sky-900/30 border border-sky-500/30 rounded-lg text-white placeholder-sky-400 focus:border-sky-400 focus:outline-none focus-ring"
                        placeholder="https://..."
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sky-300 mb-2">Excerpt</label>
                      <textarea
                        value={formData.excerpt}
                        onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                        rows="2"
                        className="w-full px-4 py-3 bg-sky-900/30 border border-sky-500/30 rounded-lg text-white placeholder-sky-400 focus:border-sky-400 focus:outline-none resize-none focus-ring"
                        placeholder="Brief excerpt..."
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sky-300 mb-2">Content</label>
                      <textarea
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        rows="8"
                        className="w-full px-4 py-3 bg-sky-900/30 border border-sky-500/30 rounded-lg text-white placeholder-sky-400 focus:border-sky-400 focus:outline-none resize-none focus-ring blog-form"
                        placeholder="Full content..."
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={handleSavePost}
                        className="px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-lg flex items-center"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Post
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={handleCancel}
                        className="px-6 py-3 border border-sky-500 text-sky-400 rounded-lg flex items-center hover:bg-sky-500/10"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </motion.button>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card3D key={post.id}>
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-sky-800/40 to-cyan-800/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-sky-500/20 group relative blog-card"
                >
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleEditPost(post)}
                      className="p-2 bg-sky-600/80 text-white rounded-full hover:bg-sky-600"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 bg-red-600/80 text-white rounded-full hover:bg-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sky-400 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                      <User className="w-4 h-4 ml-4 mr-2" />
                      {post.author}
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-sky-300 text-sm mb-4">
                      {post.excerpt}
                    </p>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-sky-400 hover:text-sky-300 font-medium text-sm flex items-center"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.button>
                  </div>
                </motion.article>
              </Card3D>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

// Contact Page
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-900 to-cyan-900 pt-24">
      <ParallaxSection className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
            Contact Us
          </motion.h1>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <Card3D>
              <div className="bg-gradient-to-br from-sky-800/40 to-cyan-800/40 backdrop-blur-lg rounded-2xl p-8 border border-sky-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-sky-300 mb-8">
                  Ready to start your next project? Whether it's a creative platform like Poetry Farm, a comprehensive food delivery system, or a sophisticated trading platform, let's discuss how we can bring your vision to life.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center text-sky-300">
                    <Mail className="w-6 h-6 text-sky-400 mr-4" />
                    <span>hello@trossachsgroup.com</span>
                  </div>
                  <div className="flex items-center text-sky-300">
                    <Phone className="w-6 h-6 text-sky-400 mr-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-sky-300">
                    <MapPin className="w-6 h-6 text-sky-400 mr-4" />
                    <span>Innovation District, Tech City</span>
                  </div>
                </div>
              </div>
            </Card3D>
            
            <Card3D>
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-sky-800/40 to-cyan-800/40 backdrop-blur-lg rounded-2xl p-8 border border-sky-500/20 space-y-6">
                <div>
                  <label className="block text-sky-300 mb-2">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-sky-900/30 border border-sky-500/30 rounded-lg text-white placeholder-sky-400 focus:border-sky-400 focus:outline-none focus-ring"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sky-300 mb-2">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-sky-900/30 border border-sky-500/30 rounded-lg text-white placeholder-sky-400 focus:border-sky-400 focus:outline-none focus-ring"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sky-300 mb-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 bg-sky-900/30 border border-sky-500/30 rounded-lg text-white placeholder-sky-400 focus:border-sky-400 focus:outline-none resize-none focus-ring"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-sky-500/50 transition-all duration-300"
                >
                  Send Message <MessageCircle className="inline w-4 h-4 ml-2" />
                </motion.button>
              </form>
            </Card3D>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

// Main App Component
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Preloader isLoading={isLoading} />
      <BrowserRouter>
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;