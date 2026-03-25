import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dorm Electricity Management",
    description:
      "A web application that uses OCR technology to automatically read electricity meters in student dormitories, streamlining billing and energy monitoring.",
    stack: ["Python", "Flask", "OCR", "OpenCV"],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Project bd02",
    description:
      "A self-hosted photo storage solution designed as a privacy-focused alternative to Google Photos, featuring album management and optimized media delivery.",
    stack: ["React", "Node.js", "CockroachDB", "S3"],
    color: "from-violet-500/10 to-pink-500/10",
  },
];

const WorksView = () => {
  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-8 md:py-0 overflow-y-auto md:overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
          Selected Works
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
          Projects
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 md:overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.35 }}
            className="min-w-[320px] md:min-w-[420px] flex-shrink-0"
          >
            <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              {/* Gradient header */}
              <div
                className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center border-b border-border`}
              >
                <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center shadow-sm">
                  <span className="text-2xl font-bold text-foreground">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-2.5 py-0.5 rounded-full font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorksView;
