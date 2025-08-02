import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hafiz.umar@example.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+92 300 1234567',
      description: 'Call me for urgent matters'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Lahore, Pakistan',
      description: 'Available for remote work globally'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '9 AM - 6 PM PKT',
      description: 'Monday to Friday'
    }
  ];

  const services = [
    'Web Application Development',
    'Mobile App Development',
    'Cloud Architecture Consulting',
    'Technical Team Leadership',
    'Code Review & Optimization',
    'Database Design & Optimization',
    'API Development & Integration',
    'DevOps & Deployment Setup'
  ];

  const projectTypes = [
    { label: 'Web Application', value: 'web' },
    { label: 'Mobile App', value: 'mobile' },
    { label: 'API Development', value: 'api' },
    { label: 'Cloud Migration', value: 'cloud' },
    { label: 'Consulting', value: 'consulting' },
    { label: 'Other', value: 'other' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding pt-32">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Let's Work <span className="bg-hero-gradient bg-clip-text text-transparent">Together</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Have a project in mind? I'd love to hear about it. Let's discuss how we can 
                bring your vision to life with cutting-edge technology and professional expertise.
              </p>
              <Badge variant="secondary" className="px-6 py-2 text-sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Usually responds within 24 hours
              </Badge>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="premium-card">
                  <CardHeader>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Start Your Project
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and I'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Full Name *
                        </label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Email Address *
                        </label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Company/Organization
                        </label>
                        <Input placeholder="Your company name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Phone Number
                        </label>
                        <Input placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Project Type *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {projectTypes.map((type, index) => (
                          <label key={index} className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="projectType" value={type.value} className="text-primary" />
                            <span className="text-sm text-foreground">{type.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Budget Range
                      </label>
                      <select className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground">
                        <option value="">Select budget range</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-35k">$15,000 - $35,000</option>
                        <option value="35k-75k">$35,000 - $75,000</option>
                        <option value="75k+">$75,000+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Project Description *
                      </label>
                      <Textarea 
                        placeholder="Tell me about your project, requirements, timeline, and any specific technologies you'd like to use..."
                        rows={6}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Timeline
                      </label>
                      <Input placeholder="When do you need this completed?" />
                    </div>

                    <Button className="btn-hero w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to receive communications from me 
                      regarding your project inquiry.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="portfolio-card">
                  <CardHeader>
                    <h3 className="text-2xl font-bold text-foreground">
                      Contact Information
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.title}</h4>
                          <p className="text-foreground font-medium">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Services */}
                <Card className="portfolio-card">
                  <CardHeader>
                    <h3 className="text-2xl font-bold text-foreground">
                      Services Offered
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="portfolio-card bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Need Quick Help?
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      For urgent matters or quick questions
                    </p>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Schedule Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quick answers to common questions about working with me
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    question: "What's your typical project timeline?",
                    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. I provide detailed timelines during initial consultation."
                  },
                  {
                    question: "Do you work with startups?",
                    answer: "Absolutely! I love working with startups and have special packages designed for early-stage companies. I understand the unique challenges and constraints startups face."
                  },
                  {
                    question: "What's included in your support?",
                    answer: "All projects include post-launch support ranging from 3-12 months depending on the package. This includes bug fixes, minor updates, and technical assistance."
                  },
                  {
                    question: "Can you work with my existing team?",
                    answer: "Yes, I can integrate seamlessly with your existing development team, provide technical leadership, code reviews, and mentoring as needed."
                  },
                  {
                    question: "Do you provide hosting services?",
                    answer: "I help set up and configure hosting on major cloud platforms like AWS, Azure, or Vercel. I can also recommend the best hosting solution for your specific needs."
                  },
                  {
                    question: "What technologies do you specialize in?",
                    answer: "I specialize in React, Next.js, Node.js, TypeScript, Python, and cloud technologies. I stay updated with the latest frameworks and best practices."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="portfolio-card">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;