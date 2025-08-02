import { Award, Users, Code, Globe, BookOpen, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const achievements = [
    {
      icon: Code,
      number: '150+',
      label: 'Projects Completed',
      description: 'Successfully delivered web and mobile applications'
    },
    {
      icon: Users,
      number: '50+',
      label: 'Happy Clients',
      description: 'Satisfied clients across various industries'
    },
    {
      icon: Award,
      number: '8+',
      label: 'Years Experience',
      description: 'Professional software development experience'
    },
    {
      icon: Globe,
      number: '15+',
      label: 'Countries',
      description: 'Projects delivered globally'
    }
  ];

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React & Next.js', level: 90 },
    { name: 'Node.js & Express', level: 88 },
    { name: 'Python & Django', level: 85 },
    { name: 'AWS & Cloud Services', level: 82 },
    { name: 'Database Design', level: 90 },
    { name: 'Mobile Development', level: 78 },
    { name: 'DevOps & CI/CD', level: 80 }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'Delivering excellence through clean code, thorough testing, and attention to detail.',
      icon: Award
    },
    {
      title: 'Client Focus',
      description: 'Understanding business needs and translating them into effective technical solutions.',
      icon: Users
    },
    {
      title: 'Innovation',
      description: 'Staying ahead with latest technologies and modern development practices.',
      icon: Code
    },
    {
      title: 'Continuous Learning',
      description: 'Constantly improving skills and adapting to emerging technologies.',
      icon: BookOpen
    }
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Started Programming Journey',
      description: 'Began learning web development with HTML, CSS, and JavaScript'
    },
    {
      year: '2018',
      title: 'First Professional Role',
      description: 'Joined as Junior Developer at a tech startup'
    },
    {
      year: '2020',
      title: 'Full Stack Expertise',
      description: 'Mastered both frontend and backend technologies'
    },
    {
      year: '2022',
      title: 'Senior Developer',
      description: 'Promoted to Senior Developer and started leading teams'
    },
    {
      year: '2024',
      title: 'Technical Architect',
      description: 'Currently working as Technical Architect and Consultant'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding pt-32">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                  About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  I'm Hafiz Muhammad Umar Farooq, a passionate Senior Full Stack Developer 
                  with 8+ years of experience in creating scalable web applications and 
                  leading development teams.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  My journey started with a curiosity about how websites work, and it has 
                  evolved into a deep expertise in modern web technologies, cloud architecture, 
                  and team leadership. I believe in writing clean, maintainable code and 
                  creating solutions that make a real impact.
                </p>
                <div className="flex gap-4">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Coffee className="w-4 h-4 mr-2" />
                    Coffee Enthusiast
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Lifelong Learner
                  </Badge>
                </div>
              </div>

              <div className="slide-up">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="portfolio-card text-center">
                      <CardContent className="p-6">
                        <achievement.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                        <div className="text-3xl font-bold text-foreground mb-2">
                          {achievement.number}
                        </div>
                        <div className="text-sm font-semibold text-primary mb-2">
                          {achievement.label}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Technical Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Proficiency levels in key technologies and frameworks
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide my work and client relationships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="portfolio-card text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                My Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Key milestones in my professional development career
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start mb-12">
                    {/* Timeline dot */}
                    <div className="absolute left-8 w-4 h-4 bg-primary rounded-full transform -translate-x-2 shadow-glow"></div>
                    
                    {/* Content */}
                    <div className="ml-20">
                      <Card className="portfolio-card">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-2">
                            <Badge variant="secondary" className="text-primary font-bold">
                              {item.year}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Touch Section */}
        <section className="section-padding">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto premium-card">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Beyond the Code
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, mentoring aspiring developers, or enjoying a good cup of 
                coffee while reading about the latest industry trends. I believe that continuous 
                learning and sharing knowledge are essential for personal and professional growth.
              </p>
              <p className="text-lg text-muted-foreground">
                I'm passionate about building not just applications, but also building teams and 
                fostering a culture of innovation and excellence.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;