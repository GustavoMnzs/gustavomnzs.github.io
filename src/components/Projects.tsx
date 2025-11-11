import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import seastormImage from "@/assets/seastorm.png";
import equilibriumImage from "@/assets/equilibrium.png";
import snowfoxImage from "@/assets/snowfox.png";
import imagnisImage from "@/assets/imagnis.png";

const projects = [
  {
    name: "SeaStorm",
    url: "https://seastorm.com.br/",
    image: seastormImage,
    year: "2023",
    type: "Website Institucional",
  },
  {
    name: "Equilibrium Latam",
    url: "https://equilibriumlatam.com/",
    image: equilibriumImage,
    year: "2023",
    type: "Website Institucional",
  },
  {
    name: "Snowfox AI",
    url: "https://snowfox-ai.com/",
    image: snowfoxImage,
    year: "2024",
    type: "Website Corporativo",
  },
  {
    name: "Imagnis",
    url: "https://imagnis.com.br/",
    image: imagnisImage,
    year: "2024",
    type: "Website Institucional",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative scroll-fade-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-primary text-xs mb-6 tracking-[0.25em] uppercase font-semibold">Projetos</h2>
            <p className="text-4xl md:text-6xl font-semibold text-foreground leading-tight">
              Trabalhos Selecionados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className="group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-xl hover:border-primary/40 hover:bg-card/70 transition-all duration-300 animate-fade-in-up hover:shadow-[0_8px_30px_hsl(189,100%,50%,0.12)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
                </div>

                <CardContent className="p-0 relative">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button
                        size="lg"
                        onClick={() => window.open(project.url, "_blank")}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_20px_50px_hsl(189,100%,50%,0.3)] transition-all duration-300 font-medium"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Ver Projeto
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground/70">
                      <span>{project.type}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      <span>{project.year}</span>
                    </div>
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

export default Projects;
