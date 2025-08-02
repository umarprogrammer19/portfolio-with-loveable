import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-coding.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="order-2 md:order-1 fade-in">
          <div className="relative">
            <img
              src={heroImage}
              alt="Developer workspace with code"
              className="rounded-2xl shadow-elegant w-full h-auto max-w-lg mx-auto"
            />
            <div className="absolute inset-0 bg-hero-gradient opacity-10 rounded-2xl"></div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="order-1 md:order-2 text-center md:text-left slide-up">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground font-medium">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Hafiz Muhammad <span className="bg-hero-gradient bg-clip-text text-transparent">Umar Farooq</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Senior Full Stack Developer & Technical Architect
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Transforming business ideas into scalable digital solutions with 8+ years of expertise in 
              full-stack development, cloud architecture, and team leadership.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="btn-hero">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" className="btn-secondary">
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-6">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;