import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code2, Lightbulb, ShieldCheck } from "lucide-react";

const techStack = [
  "Next.js", "React", "Tailwind CSS", "TypeScript", "Javascript"
];

const otherSkills = [
  "QA Engineer", "Data Analyst", "SQL"
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
    <div className="h-full overflow-y-auto px-6 md:px-16 lg:px-24 py-10 md:py-0 md:flex md:items-center">
      <motion.div
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Education — spans 2 cols */}
        <motion.div
          variants={item}
          className="md:col-span-2 bg-card border border-border rounded-2xl p-7 md:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-11 h-11 rounded-2xl bg-muted flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-xs font-bold text-muted-foreground tracking-[0.2em] uppercase">
              Education
            </span>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              Universitas Atma Jaya Yogyakarta
            </h3>
            <p className="text-muted-foreground mt-2 text-base font-semibold">
              Sistem Informasi · Sarjana (S1)
            </p>
          </div>
        </motion.div>

        {/* Expertise — spans 1 col */}
        <motion.div
          variants={item}
          className="bg-card border border-border rounded-2xl p-7 md:p-8 flex flex-col justify-start hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-11 h-11 rounded-2xl bg-muted flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-xs font-bold text-muted-foreground tracking-[0.2em] uppercase">
              Expertise
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {otherSkills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-3 py-1 text-[10px] font-bold rounded-lg border-foreground/10"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Filosofi — spans 1 col */}
        <motion.div
          variants={item}
          className="bg-card border border-border rounded-2xl p-7 md:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-11 h-11 rounded-2xl bg-muted flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-xs font-bold text-muted-foreground tracking-[0.2em] uppercase">
              Filosofi
            </span>
          </div>
          <p className="text-sm text-muted-foreground/90 leading-relaxed italic font-medium">
            "Desain yang baik adalah desain yang memudahkan pengguna mencapai tujuannya."
          </p>
        </motion.div>

        {/* Tech Stack — spans 2 cols on desktop */}
        <motion.div
          variants={item}
          className="md:col-span-2 bg-card border border-border rounded-2xl p-7 md:p-8 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-muted flex items-center justify-center">
              <Code2 className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-xs font-bold text-muted-foreground tracking-[0.2em] uppercase">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-1.5 text-xs font-bold rounded-xl bg-muted/60 text-foreground border border-border/50"
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
