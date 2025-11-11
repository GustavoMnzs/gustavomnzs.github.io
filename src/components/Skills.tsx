import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Zap, Search, Smartphone, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress", "Elementor"],
  },
  {
    icon: Palette,
    title: "Design & UX",
    skills: ["Figma", "UX/UI", "Responsive Design", "Prototipagem"],
  },
  {
    icon: Zap,
    title: "Performance",
    skills: ["Otimização", "Core Web Vitals", "Testes Automatizados", "Mobile First"],
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    skills: ["SEO Técnico", "Schema Markup", "Analytics", "Conversão"],
  },
  {
    icon: Smartphone,
    title: "Tecnologias",
    skills: ["CMS", "Git", "APIs", "Integrações"],
  },
  {
    icon: Users,
    title: "Metodologias",
    skills: ["Scrum", "Kanban", "Agile", "Trabalho em Equipe"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative scroll-fade-section bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-primary text-xs mb-6 tracking-[0.25em] uppercase font-semibold">
              Competências
            </h2>
            <p className="text-4xl md:text-6xl font-semibold text-foreground leading-tight max-w-4xl mx-auto">
              Tecnologias e{" "}
              <span className="text-primary">
                Habilidades
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="group relative overflow-hidden border border-border/50 bg-card/50 backdrop-blur-xl hover:border-primary/40 hover:bg-card/70 transition-all duration-300 animate-fade-in-up hover:shadow-[0_8px_30px_hsl(189,100%,50%,0.12)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
                </div>

                <CardContent className="p-7 space-y-5 relative">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-primary/5 text-foreground/70 rounded-lg border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
