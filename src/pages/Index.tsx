import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar, { type TabId } from "@/components/Navbar";
import HomeView from "@/components/views/HomeView";
import AboutView from "@/components/views/AboutView";
import WorksView from "@/components/views/WorksView";
import ContactView from "@/components/views/ContactView";

const views: Record<TabId, React.ComponentType> = {
  home: HomeView,
  about: AboutView,
  works: WorksView,
  contact: ContactView,
};

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const ActiveView = views[activeTab];

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col max-md:h-auto max-md:min-h-screen max-md:overflow-auto">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 relative" style={{ height: "calc(100vh - 80px)" }}> {/* Match subtraction to navbar height (h-20 = 80px) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 max-md:relative max-md:min-h-[calc(100vh-80px)]" // Match subtraction to navbar height
          >
            <ActiveView />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
