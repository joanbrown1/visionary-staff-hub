import { Home, FileText, Radio, Calendar, User } from "lucide-react";
import { NavLink } from "./NavLink";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: FileText, label: "Info", path: "/info" },
  { icon: Radio, label: "Live", path: "/live" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass-card border-t safe-bottom">
      <div className="flex items-center justify-around h-20 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl text-muted-foreground hover:text-foreground transition-smooth min-w-[60px] flex-1"
            activeClassName="text-primary bg-primary/10"
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            <span className="text-xs font-medium truncate w-full text-center">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
