import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
  User
} from "lucide-react";

// Navigation Component
const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-900/90 to-pink-900/90 backdrop-blur-lg border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            TROSSACHS GROUP
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['Dashboard', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Dashboard' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-purple-300 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/80" />
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
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
          >
            TROSSACHS GROUP
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Exclusive Tech Solutions • Web Development • Mobile Apps • UI/UX Design • Brand Identity
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotateX: 10 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Explore Our Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotateX: -10 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get Started
            </motion.button>
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
          className="absolute top-20 left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
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
          className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"
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
                  className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20"
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-300">{stat.label}</div>
                </motion.div>
              </Card3D>
            ))}
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Services Preview */}
      <ParallaxSection className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Our Exclusive Services
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Development",
                icon: Code,
                description: "Custom web applications with cutting-edge technology",
                image: "https://images.unsplash.com/photo-1563089145-599997674d42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZ3xlbnwwfHx8cHVycGxlfDE3NDk1ODI3MTZ8MA&ixlib=rb-4.1.0&q=85"
              },
              {
                title: "Mobile Apps",
                icon: Smartphone,
                description: "Native and cross-platform mobile solutions",
                image: "https://images.pexels.com/photos/5475761/pexels-photo-5475761.jpeg"
              },
              {
                title: "UI/UX Design",
                icon: Palette,
                description: "Beautiful and intuitive user experiences",
                image: "https://images.pexels.com/photos/7657856/pexels-photo-7657856.jpeg"
              },
              {
                title: "Brand Identity",
                icon: Star,
                description: "Complete branding and visual identity solutions",
                image: "https://images.unsplash.com/photo-1619708838487-d18b744f2ea4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMGRlc2lnbnxlbnwwfHx8cHVycGxlfDE3NDk1ODI3MTB8MA&ixlib=rb-4.1.0&q=85"
              }
            ].map((service, index) => (
              <Card3D key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                    <service.icon className="absolute bottom-4 right-4 w-8 h-8 text-purple-400" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-purple-300 text-sm">{service.description}</p>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 pt-24">
      <ParallaxSection className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Trossachs Group
          </motion.h1>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card3D>
              <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-purple-300 mb-6">
                  Founded with a vision to revolutionize the tech industry, Trossachs Group has emerged as a leading force in exclusive digital solutions. We combine cutting-edge technology with creative excellence to deliver unparalleled results.
                </p>
                <p className="text-purple-300 mb-6">
                  Our team of skilled developers, designers, and strategists work collaboratively to transform ideas into powerful digital experiences that drive business growth and innovation.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full"
                >
                  Learn More <ArrowRight className="inline w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </Card3D>
            
            <Card3D>
              <motion.div
                whileHover={{ rotateY: 10 }}
                className="relative h-96 rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.pexels.com/photos/8728386/pexels-photo-8728386.jpeg"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
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
      description: "Custom web applications built with the latest technologies",
      features: ["React/Next.js", "Node.js/Python", "Cloud Deployment", "API Integration"],
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZ3xlbnwwfHx8cHVycGxlfDE3NDk1ODI3MTZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Mobile Apps",
      icon: Smartphone,
      description: "Native and cross-platform mobile solutions",
      features: ["iOS/Android", "React Native", "Flutter", "App Store Optimization"],
      image: "https://images.pexels.com/photos/5475761/pexels-photo-5475761.jpeg"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Beautiful and intuitive user experiences",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      image: "https://images.pexels.com/photos/7657856/pexels-photo-7657856.jpeg"
    },
    {
      title: "Brand Identity",
      icon: Star,
      description: "Complete branding and visual identity solutions",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets"],
      image: "https://images.unsplash.com/photo-1619708838487-d18b744f2ea4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMGRlc2lnbnxlbnwwfHx8cHVycGxlfDE3NDk1ODI3MTB8MA&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 pt-24">
      <ParallaxSection className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                    <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                      <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                      <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                      <p className="text-purple-300 mb-6">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-purple-300">
                            <Zap className="w-4 h-4 text-purple-400 mr-2" />
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
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
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

// Blog Page
const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the web development landscape in 2025.",
      date: "2025-01-15",
      author: "Tech Team",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZ3xlbnwwfHx8cHVycGxlfDE3NDk1ODI3MTZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Mobile App Design Trends",
      excerpt: "Discover the latest mobile app design trends that are revolutionizing user experiences.",
      date: "2025-01-10",
      author: "Design Team",
      image: "https://images.pexels.com/photos/5475761/pexels-photo-5475761.jpeg"
    },
    {
      title: "Brand Identity in Digital Age",
      excerpt: "How to create compelling brand identities that resonate in the digital landscape.",
      date: "2025-01-05",
      author: "Creative Team",
      image: "https://images.unsplash.com/photo-1619708838487-d18b744f2ea4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMGRlc2lnbnxlbnwwfHx8cHVycGxlfDE3NDk1ODI3MTB8MA&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 pt-24">
      <ParallaxSection className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Blog
          </motion.h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card3D key={index}>
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-purple-400 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                      <User className="w-4 h-4 ml-4 mr-2" />
                      {post.author}
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-purple-300 text-sm mb-4">
                      {post.excerpt}
                    </p>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center"
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
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 pt-24">
      <ParallaxSection className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Us
          </motion.h1>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <Card3D>
              <div className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-purple-300 mb-8">
                  Ready to start your next project? Let's discuss how we can bring your vision to life with our exclusive tech solutions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center text-purple-300">
                    <Mail className="w-6 h-6 text-purple-400 mr-4" />
                    <span>hello@trossachsgroup.com</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <Phone className="w-6 h-6 text-purple-400 mr-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                    <span>Innovation District, Tech City</span>
                  </div>
                </div>
              </div>
            </Card3D>
            
            <Card3D>
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-800/40 to-pink-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 space-y-6">
                <div>
                  <label className="block text-purple-300 mb-2">Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:border-purple-400 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-300 mb-2">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:border-purple-400 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-300 mb-2">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:border-purple-400 focus:outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
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
  return (
    <div className="App">
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
      </BrowserRouter>
    </div>
  );
}

export default App;