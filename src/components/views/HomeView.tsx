import { useState, useRef } from "react";
import { motion } from "framer-motion";

const HomeView = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isAnimating = useRef(false);
  const DURATION = 800; // Animation duration in ms

  const handleToggle = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    setIsFlipped(prev => !prev);

    // Lock toggling until animation completes
    setTimeout(() => {
      isAnimating.current = false;
    }, DURATION);
  };

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-start pt-0 px-6 bg-background overflow-hidden perspective-1000">
      {/* Name SVG - Background layer (Static) */}
      <div className="w-full max-w-[98vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] relative z-0 mt-8 md:mt-4 lg:mt-2 transition-all duration-300 pointer-events-none">
        <img
          src="/teks_bd.svg"
          alt="Bernardinus Dicky"
          className="w-full h-auto select-none pointer-events-none drop-shadow-2xl"
        />
      </div>

      {/* Flip Container - Photos anchored to bottom of viewport, improved circle animation */}
      <div className="absolute inset-0 pointer-events-none z-10 flex items-start justify-center pt-[22vh]">
        <motion.div
          className="relative w-full h-[78vh] max-w-[95vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] pointer-events-none cursor-pointer group"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            duration: DURATION / 1000,
            ease: [0.4, 0, 0.2, 1]
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT SIDE */}
          <div className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-end">
            {/* Gradient Orange Circle */}
            <motion.div
              onMouseEnter={handleToggle}
              animate={{
                scale: isFlipped ? 0.85 : 1,
              }}
              transition={{
                scale: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="absolute top-[4%] w-[55vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] aspect-square rounded-full bg-gradient-to-t from-[#fe4302] to-[#fd9900] z-10 opacity-100 pointer-events-auto"
            />

            {/* User Photo */}
            <div
              onMouseEnter={handleToggle}
              className="relative h-[48vh] md:h-[53vh] lg:h-[65vh] z-20 pointer-events-auto"
            >
              <img
                src="/dicky_motion.png"
                alt="Bernardinus Dicky Front"
                className="h-full w-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>

          {/* BACK SIDE */}
          <div
            className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-end"
            style={{ transform: "rotateY(180deg)" }}
          >
            {/* Custom Image Circle - Back layer */}
            <motion.div
              onMouseEnter={handleToggle}
              animate={{
                scale: isFlipped ? 1 : 0.85,
              }}
              transition={{
                scale: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="absolute top-[4%] w-[55vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] aspect-square rounded-full z-10 opacity-100 pointer-events-auto overflow-hidden"
            >
              <img
                src="/lingkaran01.png"
                alt="Circle Back"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* User Photo - Back face layer */}
            <div
              onMouseEnter={handleToggle}
              className="relative h-[48vh] md:h-[53vh] lg:h-[65vh] z-20 pointer-events-auto"
            >
              <img
                src="/dicky_motion3.png"
                alt="Bernardinus Dicky Back"
                className="h-full w-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ADDITIONAL INFORMATION BLOCKS */}
      {/* Left Info - Greeting & Bio */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-[10vw] md:left-[13.4vw] bottom-12 md:bottom-20 z-30 max-w-[85vw] md:max-w-[320px] pointer-events-none"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
          Halo 👋,<br />Saya Dicky
        </h2>
        <div className="h-1 w-12 bg-orange-500 my-4 md:my-6" />
        <p className="text-[10px] md:text-xs tracking-[0.3em] text-foreground/80 uppercase font-black">
          Creative Dev & Designer
        </p>
        <p className="text-xs md:text-sm text-foreground/70 mt-4 leading-relaxed font-bold">
          Membangun produk digital Fokus pada inovasi dan pengalaman pengguna.
        </p>
      </motion.div>

      {/* Right Info - Notes/Status */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute right-[10vw] md:right-[13.4vw] bottom-12 md:bottom-20 z-30 max-w-[280px] hidden md:block text-right pointer-events-none"
      >
        <p className="text-[10px] md:text-xs tracking-[0.3em] text-foreground/80 uppercase font-black mb-3">Status:</p>
        <p className="text-sm text-foreground/90 leading-relaxed italic font-medium font-serif">
          "Aktif mengeksplorasi teknologi masa depan,<br />
          menghadirkan solusi desain yang progresif,<br />
          serta terus berinovasi dalam setiap karya,<br />
          menciptakan dampak positif yang nyata."
        </p>
      </motion.div>
    </div>
  );
};

export default HomeView;
