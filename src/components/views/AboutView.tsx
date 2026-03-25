import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code2, Sparkles } from "lucide-react";

const techStack = [
  "React", "Node.js", "Python", "Flask", "Tailwind CSS",
  "TypeScript", "PostgreSQL", "Git",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const AboutView = () => {
  return (
    <div className="h-full overflow-y-auto md:overflow-hidden px-6 md:px-16 lg:px-24 py-8 md:py-0 md:flex md:items-center">
      <motion.div
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min md:auto-rows-fr"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Education — spans 2 cols */}
        <motion.div
          variants={item}
          className="md:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
              Education
            </span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Universitas Atma Jaya Yogyakarta
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Information Systems · Undergraduate
            </p>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          variants={item}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
              Philosophy
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I believe in building interfaces that feel <span className="text-foreground font-medium">invisible</span> — clean, fast, and purposeful. Good UI should get out of the way.
          </p>
        </motion.div>

        {/* Tech Stack — spans full width */}
        <motion.div
          variants={item}
          className="md:col-span-3 bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
              <Code2 className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-1.5 text-sm font-medium rounded-full"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutView;
