import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in-up">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none">
              Gustavo{" "}
              <span className="text-primary">
                Menezes
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground tracking-tight">
              Desenvolvedor Front-End{" "}
              <span className="text-primary font-semibold">Pleno</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Especializado em WordPress/Elementor · Performance · UX · Conversão
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_20px_50px_hsl(189,100%,50%,0.3)] transition-all duration-300 text-base px-8 py-6 rounded-xl font-medium"
            >
              Ver Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-border/50 text-foreground hover:bg-card hover:border-primary/30 transition-all duration-300 text-base px-8 py-6 rounded-xl backdrop-blur-sm font-medium"
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Scroll indicator */}
          <div 
            onClick={() => scrollToSection("services")}
            className="flex flex-col items-center gap-3 mt-16 cursor-pointer group"
          >
            <span className="text-xs font-light text-muted-foreground/50 group-hover:text-primary transition-colors duration-300 tracking-wider uppercase">Scroll</span>
            <div className="animate-bounce">
              <ArrowDown className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
