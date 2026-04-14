import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Mobile Electricity App",
    description: "Aplikasi mobile untuk pembacaan meteran listrik otomatis menggunakan OCR.",
    stack: ["TypeScript", "Next.js", "Tailwind", "OCR"],
    link: "https://github.com/bernardinusdicky",
  },
  {
    title: "Portfolio Scape",
    description: "Desain portofolio interaktif dengan Bento Grid dan 3D flip animation.",
    stack: ["React", "Vite", "Framer Motion"],
    link: "https://github.com/bernardinusdicky",
  },
  {
    title: "Data Analysis Dashboard",
    description: "Visualisasi data menggunakan Power BI dan SQL untuk pelaporan performa.",
    stack: ["SQL", "Power BI", "Excel"],
    link: "https://github.com/bernardinusdicky",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

const WorksView = () => {
  return (
    <div className="h-full overflow-y-auto px-6 md:px-16 lg:px-24 py-10 md:py-0 md:flex md:items-center">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <span className="text-xs font-bold text-muted-foreground tracking-[0.3em] uppercase">
            Portfolio
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Projects
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              variants={item}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-2xl p-6 flex flex-col justify-between hover:border-foreground/20 hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                    <Github className="w-5 h-5 text-foreground" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-muted/50 text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorksView;
