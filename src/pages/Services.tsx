import { Code, Cloud, Smartphone, Database, Shield, Zap, Users, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.',
      features: ['React & Next.js', 'Node.js & Express', 'TypeScript', 'RESTful APIs'],
      pricing: 'Starting from $5,000'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions design and implementation on AWS, Azure, and Google Cloud platforms.',
      features: ['AWS Solutions', 'Microservices', 'Docker & Kubernetes', 'CI/CD Pipelines'],
      pricing: 'Starting from $3,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications using React Native and modern development practices.',
      features: ['React Native', 'iOS & Android', 'Push Notifications', 'App Store Deployment'],
      pricing: 'Starting from $8,000'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Efficient database architecture and optimization for high-performance applications.',
      features: ['PostgreSQL', 'MongoDB', 'Redis', 'Database Optimization'],
      pricing: 'Starting from $2,000'
    },
    {
      icon: Shield,
      title: 'Security Consulting',
      description: 'Application security audits, penetration testing, and security implementation.',
      features: ['Security Audits', 'Penetration Testing', 'OAuth Implementation', 'Data Encryption'],
      pricing: 'Starting from $4,000'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Technical team leadership, mentoring, and agile project management.',
      features: ['Team Mentoring', 'Code Reviews', 'Agile Methodology', 'Technical Planning'],
      pricing: 'Starting from $150/hour'
    }
  ];

  const packages = [
    {
      name: 'Startup Package',
      price: '$15,000',
      duration: '2-3 months',
      description: 'Perfect for startups looking to build their MVP',
      features: [
        'Full Stack Web Application',
        'Responsive Design',
        'Basic Admin Panel',
        'Database Setup',
        'Basic SEO Optimization',
        '3 Months Support'
      ],
      popular: false
    },
    {
      name: 'Business Package',
      price: '$35,000',
      duration: '4-6 months',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Advanced Web Application',
        'Mobile App (iOS & Android)',
        'Admin Dashboard',
        'Cloud Deployment',
        'API Integration',
        'Advanced Security',
        '6 Months Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: '$75,000',
      duration: '6-12 months',
      description: 'Enterprise-grade solution with full customization',
      features: [
        'Custom Enterprise Solution',
        'Microservices Architecture',
        'Advanced Analytics',
        'Third-party Integrations',
        'Load Balancing & Scaling',
        'Dedicated Support Team',
        '12 Months Support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding pt-32 text-center">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Professional <span className="bg-hero-gradient bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Delivering world-class software solutions with cutting-edge technologies 
                and proven methodologies to accelerate your business growth.
              </p>
              <Button className="btn-hero">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                What I Offer
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive development services tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="portfolio-card h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-4">
                      <p className="text-lg font-semibold text-primary">{service.pricing}</p>
                      <Button className="mt-4 w-full" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Development Packages
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the perfect package for your project requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`portfolio-card relative ${pkg.popular ? 'scale-105 border-primary/50' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-primary my-4">{pkg.price}</div>
                    <p className="text-muted-foreground">{pkg.duration}</p>
                    <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full mt-6 ${pkg.popular ? 'btn-hero' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>
                      Choose Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Development Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that ensures quality and timely delivery
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Requirements gathering and project planning' },
                { step: '02', title: 'Design', desc: 'UI/UX design and architecture planning' },
                { step: '03', title: 'Development', desc: 'Agile development with regular updates' },
                { step: '04', title: 'Deployment', desc: 'Testing, deployment, and ongoing support' }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto premium-card">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your requirements and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  Schedule Free Consultation
                </Button>
                <Button variant="outline" className="btn-secondary">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;