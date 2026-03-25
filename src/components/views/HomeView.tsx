import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HomeView = () => {
  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 gap-10 md:gap-16">
      {/* Left: Text */}
      <motion.div
        className="flex-1 flex flex-col justify-center max-w-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
          Welcome
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]">
          Hello<span className="text-muted-foreground">.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
          I'm an <span className="text-foreground font-medium">Information Systems</span> student
          focusing on{" "}
          <span className="text-foreground font-medium">Frontend Web Development</span> and{" "}
          <span className="text-foreground font-medium">Quality Assurance Engineering</span>.
        </p>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
          Building clean, performant, and accessible digital experiences.
        </p>
        <div className="mt-8 flex gap-3">
          <button className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            View Works
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-muted transition-colors">
            About Me
          </button>
        </div>
      </motion.div>

      {/* Right: Image placeholder */}
      <motion.div
        className="flex-1 flex items-center justify-center max-w-md w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className="w-full aspect-square max-w-sm rounded-3xl bg-card border border-border flex items-center justify-center overflow-hidden">
          <div className="text-center p-8">
            <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">👋</span>
            </div>
            <p className="text-sm text-muted-foreground">Your photo here</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeView;
