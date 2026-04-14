import { useState } from "react";
import { cn } from "@/lib/utils";
import { FileText, Menu, X } from "lucide-react";

export type TabId = "home" | "about" | "works" | "contact";

interface NavbarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleTabClick = (tabId: TabId) => {
    onTabChange(tabId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="h-20 w-full flex items-center justify-between px-6 md:px-10 bg-background z-50 sticky top-0">
      {/* Logo Section - Left Aligned */}
      <div className="flex-1 basis-0 flex justify-start items-center">
        <button
          onClick={() => handleTabClick("home")}
          className="hover:opacity-80 transition-opacity duration-200 focus:outline-none"
        >
          <img
            src="/logo_bd01.svg"
            alt="Logo"
            className="h-[40px] md:h-[50px] w-auto object-contain"
          />
        </button>
      </div>

      {/* Desktop Menu Section - Centered */}
      <div className="hidden md:flex flex-none items-center justify-center px-4 gap-8 bg-transparent">
        {tabs.map((tab, index) => (
          <div key={tab.id} className="flex items-center gap-8">
            <button
              onClick={() => onTabChange(tab.id)}
              style={{ color: activeTab === tab.id ? "#ff4537" : undefined }}
              className={cn(
                "relative text-[17px] font-medium transition-colors duration-200",
                activeTab !== tab.id ? "text-foreground/70" : "text-foreground"
              )}
            >
              {tab.label}
            </button>
            {index < tabs.length - 1 && (
              <span className="text-muted-foreground/30 font-light">|</span>
            )}
          </div>
        ))}
      </div>

      {/* CV & Hamburger Section - Right Aligned */}
      <div className="flex-1 basis-0 flex justify-end items-center gap-4">
        {/* Desktop CV Button */}
        <a
          href="/bd_resume.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-2.5 py-2.5 bg-[#ff4537] text-white rounded-md text-base font-medium hover:opacity-80 transition-opacity duration-200"
        >
          <FileText className="w-6 h-6" />
          CV
        </a>

        {/* Hamburger Icon - Mobile Only */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-[60] flex flex-col items-center justify-center transition-all duration-300 transform md:hidden",
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 p-2 text-foreground"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center gap-6 w-full max-w-xs px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              style={{ color: activeTab === tab.id ? "#ff4537" : undefined }}
              className={cn(
                "text-2xl font-medium transition-colors duration-200",
                activeTab !== tab.id ? "text-foreground/70" : "text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}

          <div className="w-full h-px bg-foreground/10 my-2" />

          <a
            href="/cv-dicky.pdf"
            download
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#ff4537] text-white rounded-lg text-lg font-medium hover:opacity-80 transition-opacity duration-200 shadow-md"
          >
            <FileText className="w-5 h-5" />
            CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
