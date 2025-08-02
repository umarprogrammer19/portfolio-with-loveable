import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
const experiences = [
    {
      title: 'Technical Architect & Senior Consultant',
      company: 'Tech Solutions Global',
      location: 'Remote (Global)',
      period: '2023 - Present',
      type: 'Full-time',
      description: 'Leading technical architecture decisions for enterprise-level applications, managing distributed teams, and driving digital transformation initiatives across multiple industry verticals.',
      responsibilities: [
        'Architected and led implementation of microservices platform serving 500K+ users',
        'Established development standards and best practices across 3 development teams',
        'Designed cloud-native solutions reducing infrastructure costs by 40%',
        'Mentored 15+ developers and conducted technical workshops',
        'Led digital transformation projects for Fortune 500 clients'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
      achievements: [
        'Reduced deployment time from 2 hours to 15 minutes',
        'Improved application performance by 65%',
        'Successfully delivered 12 enterprise projects on time'
      ]
    },
    {
      title: 'Senior Full Stack Developer',
      company: 'InnovateTech Solutions',
      location: 'Lahore, Pakistan',
      period: '2021 - 2023',
      type: 'Full-time',
      description: 'Spearheaded development of scalable web applications and mobile solutions. Led cross-functional teams and established robust development workflows.',
      responsibilities: [
        'Led full-stack development of 8 major client projects with React and Node.js',
        'Implemented automated testing reducing bug reports by 50%',
        'Designed and developed RESTful APIs handling 100K+ daily requests',
        'Collaborated with UX/UI teams to deliver exceptional user experiences',
        'Established code review processes and development guidelines'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
      achievements: [
        'Delivered projects 20% ahead of schedule',
        'Achieved 99.9% uptime for critical applications',
        'Led team that won "Best Technical Innovation" award'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'DigitalCraft Agency',
      location: 'Karachi, Pakistan',
      period: '2019 - 2021',
      type: 'Full-time',
      description: 'Developed comprehensive web solutions for diverse clients ranging from startups to established enterprises. Specialized in modern JavaScript frameworks and database optimization.',
      responsibilities: [
        'Built 25+ responsive web applications using React and Vue.js',
        'Optimized database queries improving response times by 60%',
        'Integrated payment gateways and third-party APIs for e-commerce solutions',
        'Collaborated with design teams to implement pixel-perfect interfaces',
        'Provided technical consultation to clients on technology stack decisions'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Stripe API', 'Firebase'],
      achievements: [
        'Maintained 98% client satisfaction rate',
        'Successfully launched 25+ projects',
        'Reduced development time by 30% through reusable components'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupHub Technologies',
      location: 'Lahore, Pakistan',
      period: '2017 - 2019',
      type: 'Full-time',
      description: 'Started professional journey focusing on frontend development and gradually expanded to full-stack capabilities. Contributed to multiple startup projects and learned modern development practices.',
      responsibilities: [
        'Developed responsive frontend interfaces using HTML5, CSS3, and JavaScript',
        'Assisted in backend development with PHP and MySQL',
        'Participated in agile development processes and daily standups',
        'Collaborated with senior developers on code optimization',
        'Maintained and updated existing client websites'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'jQuery', 'Bootstrap', 'Git'],
      achievements: [
        'Completed training program with 95% score',
        'Contributed to 10+ successful project deliveries',
        'Received "Rising Star Developer" recognition'
      ]
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

                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Key Responsibilities:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.achievements && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 text-lg">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-accent">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs font-medium">
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