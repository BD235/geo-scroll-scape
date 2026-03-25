import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

export type TabId = "home" | "about" | "works";

interface NavbarProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
];

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  return (
    <nav className="h-20 w-full flex items-center justify-between px-6 md:px-10 border-b border-border bg-background/80 backdrop-blur-sm z-50">
      {/* Logo */}
      <div className="flex-1">
        <span className="text-xl font-bold tracking-tight text-foreground">
          portfolio<span className="text-muted-foreground">.</span>
        </span>
      </div>

      {/* Center Nav */}
      <div className="hidden md:flex items-center gap-1 bg-muted rounded-full p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-200",
              activeTab === tab.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-3 py-1.5 text-xs font-medium rounded-full transition-all",
              activeTab === tab.id
                ? "bg-foreground text-background"
                : "text-muted-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Download CV */}
      <div className="flex-1 flex justify-end">
        <button className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          <Download className="w-4 h-4" />
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
