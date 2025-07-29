import { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, Download, ArrowUp, ExternalLink, Code, Brain, Database, Globe, Smartphone, Server, Send } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullText = 'Building the future, one line of code at a time';

  useEffect(() => {
    // Typing animation
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowBackToTop(scrollPosition > 400);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Java', icon: <Code className="w-6 h-6" />, color: 'text-primary' },
    { name: 'Data Structures & Algorithms', icon: <Brain className="w-6 h-6" />, color: 'text-secondary' },
    { name: 'HTML/CSS', icon: <Globe className="w-6 h-6" />, color: 'text-accent' },
    { name: 'JavaScript', icon: <Code className="w-6 h-6" />, color: 'text-primary' },
    { name: 'Frontend Development', icon: <Smartphone className="w-6 h-6" />, color: 'text-secondary' },
    { name: 'Backend Development', icon: <Server className="w-6 h-6" />, color: 'text-accent' },
    { name: 'Database Management', icon: <Database className="w-6 h-6" />, color: 'text-primary' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text"></div>
            <div className="hidden md:flex space-x-8">
              {['Hero', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary/20 ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-primary/20 text-primary neon-glow' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="animate-fade-in-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text floating">
                VENKATA NARENDRA CHINTHAGUNTLA
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-primary neon-glow">
                Full Stack Developer
              </p>
              <div className="text-lg md:text-xl mb-6 text-accent neon-glow">
                Building full-stack solutions with futuristic design and solid logic.
              </div>
              <p className="text-base md:text-lg mb-8 text-muted-foreground leading-relaxed">
                Passionate and ambitious developer with strong foundations in Java and Data Structures & Algorithms. 
                Always ready to learn, adapt, and innovate with clean code and futuristic UI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
  <button 
    onClick={() => scrollToSection('contact')}
    className="glass-card px-6 py-3 text-base font-semibold hover-glow neon-border transition-all duration-300 justify-center"
>
    Download Resume
    </button>
  
  <button
    onClick={() => scrollToSection('contact')}
    className="glass-card px-6 py-3 text-base font-semibold hover-glow neon-border transition-all duration-300 justify-center"
  >
    Get In Touch
  </button>
</div>

              
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a href="https://github.com/Venkata-Narendra18" target="_blank" rel="noopener noreferrer" className="glass-card p-3 hover-glow transition-all duration-300">
                  <Github className="w-6 h-6 text-primary" />
                </a>
                <a href="https://www.linkedin.com/in/venkata-narendra-chinthaguntla-383254320/" target="_blank" rel="noopener noreferrer" className="glass-card p-3 hover-glow transition-all duration-300">
                  <Linkedin className="w-6 h-6 text-secondary" />
                </a>
                <a href="mailto:venkatanarendrachinthaguntla18@gmail.com" className="glass-card p-3 hover-glow transition-all duration-300">
                  <Mail className="w-6 h-6 text-accent" />
                </a>
              </div>
            </div>
            
            {/* Right Side */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden glass-card">
                  <img
                    src="/my-uploads/7cb11d01-4ad2-448d-bcb7-baf2904e631f.png"
                    alt="Venkata Narendra Chinthaguntla"
                    className="w-full h-full object-contain object-top"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 neon-glow animate-pulse-neon"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="glass-card p-12 animate-zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                I'm 
                <span className="text-foreground font-semibold"> Venkata Narendra Chinthaguntla</span> a final-year Computer Science Engineering student at Mohan Babu University, currently holding a CGPA of 8.94. With a strong passion for AI, edtech, and scalable systems, I specialize in developing full-stack solutions that blend futuristic design with robust logic.

My technical expertise spans
                         <span className="text-secondary neon-glow"> Full Stack Development</span> , 
                <span className="text-primary neon-glow"> Java</span> and 
                <span className="text-accent neon-glow"> Data Structures & Algorithms</span>. I've gained hands-on experience through impactful internships at 
                 <span className="text-primary neon-glow"> ISRO</span> 
    
, Google for Developers, and Agnirva, where I contributed to real-world projects across web, mobile, and space-tech domains.

Driven by innovation and a problem-solving mindset, I’m eager to join forward-thinking teams where I can leverage my skills and creativity to deliver meaningful tech solutions.


              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card p-8 hover-glow transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${skill.color} mb-4 neon-glow`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 px-6">
  <div className="container mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
      Featured Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "CodeKid Galaxy",
          description: "An interactive coding game platform designed to teach programming to kids through fun challenges and gamified levels.",
          github: "https://github.com/Venkata-Narendra18/codeKid-galaxy",
          live: "https://codekid-galaxy.vercel.app/",
          image: "/CodeKidGalaxy.png",
        },
        {
          title: "AI-D",
          description: "A conversational AI assistant built with Streamlit to provide quick and intelligent first aid guidance using OpenAI’s API.",
          github: "https://github.com/Venkata-Narendra18/aid_streamlit",
          live: "https://aidapp-dgw9md8jy3kr8zu55k5zay.streamlit.app/",
          image: "/AI-D.png",
        },
        {
          title: "CubeCrack",
          description: "A smart web app that helps solve Rubik’s Cubes using image input and AI-powered cube state detection.",
          github: "https://github.com/Venkata-Narendra18/RUBIX_AI",
          live: "https://rubixai-mcm2ver7dqrpjnpxylungs.streamlit.app/",
          image: "/CubeCrack.png",
        },
      ].map((project, index) => (
        <div
          key={index}
          className="glass-card p-8 hover-glow transition-all duration-500 animate-slide-in-left"
        >
          <div className="h-48 rounded-lg mb-6 overflow-hidden flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6">{project.description}</p>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Let's Connect
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="glass-card p-8 animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary neon-glow" />
                  <span className="text-muted-foreground">narendrachinthaguntla026@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-secondary neon-glow" />
                  <span className="text-muted-foreground">+91 9392661125</span>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-6 text-foreground">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/Venkata-Narendra18" target="_blank" rel="noopener noreferrer" className="glass-card p-4 hover-glow transition-all duration-300">
                    <Github className="w-6 h-6 text-primary" />
                  </a>
                  <a href="https://www.linkedin.com/in/venkata-narendra-chinthaguntla-383254320/" target="_blank" rel="noopener noreferrer" className="glass-card p-4 hover-glow transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-secondary" />
                  </a>
                  <a href="https://leetcode.com/u/Narendra-18/" target="_blank" rel="noopener noreferrer" className="glass-card p-4 hover-glow transition-all duration-300">
                    <Code className="w-6 h-6 text-accent" />
                  </a>
                  <a href="mailto:venkatanarendrachinthaguntla18@gmail.com" className="glass-card p-4 hover-glow transition-all duration-300">
                    <Mail className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Send Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full glass-card py-4 font-semibold hover-glow neon-border transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Venkata Narendra Chinthaguntla. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 glass-card p-4 hover-glow transition-all duration-300 animate-pulse-neon z-50"
        >
          <ArrowUp className="w-6 h-6 text-primary" />
        </button>
      )}
    </div>
  );
};

export default Index;