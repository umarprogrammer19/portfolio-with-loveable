import { Code, Lightbulb, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'AWS/Docker', level: 75 },
  ];

  const achievements = [
    { icon: Code, title: '50+ Projects', description: 'Successfully delivered projects ranging from startups to enterprise' },
    { icon: Users, title: '20+ Happy Clients', description: 'Built lasting relationships with clients worldwide' },
    { icon: Zap, title: '5+ Years Experience', description: 'Continuously learning and growing in the tech industry' },
    { icon: Lightbulb, title: 'Innovation Focused', description: 'Always exploring new technologies and best practices' },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating elegant solutions 
            to complex problems. When I'm not coding, you'll find me exploring new technologies 
            or contributing to open-source projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Introduction */}
          <div className="slide-up">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Started my journey as a self-taught developer, driven by curiosity and a passion 
                  for problem-solving. Over the years, I've had the privilege to work with amazing 
                  teams and contribute to projects that impact thousands of users.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and creating user experiences 
                  that are both functional and delightful. Always eager to learn and share 
                  knowledge with the developer community.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="portfolio-card group">
                    <CardContent className="p-4 text-center">
                      <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="skill-bar h-2 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-foreground mb-4">Core Strengths</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'Problem Solving', 'Team Leadership', 'Communication', 'Agile/Scrum',
                  'Code Review', 'Mentoring', 'Project Management', 'Creative Thinking'
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;