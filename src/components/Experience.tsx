import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Lead development of cloud-native applications serving 100K+ users. Architect scalable microservices and mentor junior developers.',
      responsibilities: [
        'Led a team of 5 developers in rebuilding the core platform using React and Node.js',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with product team to define technical requirements and roadmap',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker', 'Kubernetes']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Built MVP from ground up, scaling to 10K users. Developed both frontend and backend systems with focus on performance and user experience.',
      responsibilities: [
        'Developed responsive web application using React and Express.js',
        'Designed and implemented RESTful APIs and database schemas',
        'Integrated third-party services including payment gateways and analytics',
        'Optimized application performance achieving 95+ Lighthouse scores'
      ],
      technologies: ['React', 'Express.js', 'JavaScript', 'MongoDB', 'Stripe API', 'Heroku']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      period: '2019 - 2020',
      type: 'Contract',
      description: 'Created engaging web experiences for diverse clients. Specialized in modern JavaScript frameworks and responsive design.',
      responsibilities: [
        'Built 15+ responsive websites for various industries',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Optimized websites for SEO and accessibility standards',
        'Maintained and updated existing client projects'
      ],
      technologies: ['Vue.js', 'HTML5', 'CSS3', 'SASS', 'Webpack', 'Git']
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional <span className="bg-hero-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of my professional journey, showcasing the impact I've made 
            and the technologies I've mastered along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 slide-up ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10 shadow-glow"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="portfolio-card">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;