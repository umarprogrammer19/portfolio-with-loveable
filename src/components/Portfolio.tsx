import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
const projects = [
    {
      title: 'Enterprise Resource Planning System',
      description: 'Comprehensive ERP solution for manufacturing companies with inventory management, production planning, financial reporting, and real-time analytics. Serves 50+ departments across multiple locations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      metrics: ['500K+ users', '99.9% uptime', '40% cost reduction'],
      category: 'Enterprise'
    },
    {
      title: 'FinTech Mobile Application',
      description: 'Advanced mobile banking and investment platform with AI-powered financial insights, cryptocurrency trading, and advanced security features. Used by 100K+ active users.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain', 'AI/ML'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      metrics: ['100K+ users', '$10M+ transactions', '4.8/5 rating'],
      category: 'Mobile'
    },
    {
      title: 'Healthcare Management Platform',
      description: 'Complete healthcare management system with patient records, appointment scheduling, telemedicine, and billing integration. HIPAA compliant with advanced security.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true,
      metrics: ['25+ hospitals', '50K+ patients', 'HIPAA compliant'],
      category: 'Healthcare'
    },
    {
      title: 'E-Learning Platform',
      description: 'Advanced online learning platform with interactive courses, live streaming, AI-powered assessments, and progress tracking for educational institutions.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      technologies: ['React', 'Django', 'PostgreSQL', 'WebRTC', 'AI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      metrics: ['10K+ students', '500+ courses', '95% completion rate'],
      category: 'Education'
    },
    {
      title: 'Real Estate CRM',
      description: 'Comprehensive CRM solution for real estate agencies with property management, lead tracking, automated marketing, and financial reporting.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      metrics: ['200+ agents', '10K+ properties', '30% sales increase'],
      category: 'CRM'
    },
    {
      title: 'Supply Chain Analytics',
      description: 'AI-powered supply chain optimization platform with predictive analytics, inventory forecasting, and automated procurement workflows.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'React', 'D3.js', 'TensorFlow', 'Apache Kafka'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      metrics: ['20% cost reduction', '99% accuracy', '15+ companies'],
      category: 'Analytics'
    },
    {
      title: 'IoT Dashboard Platform',
      description: 'Real-time IoT device monitoring and control platform with data visualization, alerts, and automated responses for smart manufacturing.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'InfluxDB', 'MQTT', 'Grafana'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      metrics: ['1000+ devices', 'Real-time data', '25% efficiency gain'],
      category: 'IoT'
    },
    {
      title: 'Social Commerce Platform',
      description: 'Next-generation social commerce platform combining social networking with e-commerce, featuring influencer partnerships and AI recommendations.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      metrics: ['50K+ users', '$2M+ revenue', '4.9/5 rating'],
      category: 'E-commerce'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects that demonstrate my expertise in full-stack development, 
            from concept to deployment.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
                <Card key={index} className="portfolio-card group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-black/60 text-white border-none">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.metrics.map((metric, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs text-accent">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Tech Stack:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button size="sm" className="flex-1 btn-accent">
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
                <Card key={index} className="portfolio-card group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-black/60 text-white border-none text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-5 space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.metrics.slice(0, 2).map((metric, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs text-accent">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
