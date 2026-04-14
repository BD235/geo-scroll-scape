import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Phone } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "bdicky0419@gmail.com",
    link: "mailto:bdicky0419@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Bernardinus Dicky",
    link: "https://linkedin.com/in/bernardinusdicky",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@bd2661",
    link: "https://github.com/bd2661",
    icon: Github,
  },
  {
    label: "Instagram",
    value: "@bernardinusd",
    link: "https://instagram.com/bernardinusd",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    value: "+62 85787765491",
    link: "https://wa.me/085787765491",
    icon: Phone,
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
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

const ContactView = () => {
  return (
    <div className="h-full overflow-y-auto px-6 md:px-16 lg:px-24 py-10 md:py-0 md:flex md:items-center">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center md:text-left"
        >
          <span className="text-xs font-bold text-muted-foreground tracking-[0.3em] uppercase">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Contact Me
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {contacts.map((contact) => (
            <motion.a
              key={contact.label}
              variants={item}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-2xl p-6 flex items-center gap-5 hover:border-foreground/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                <contact.icon className="w-6 h-6 text-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  {contact.label}
                </span>
                <span className="text-sm font-bold text-foreground break-all">
                  {contact.value}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactView;
