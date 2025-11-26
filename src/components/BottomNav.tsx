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
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass-card border-t">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-muted-foreground hover:text-foreground transition-smooth min-w-[64px]"
            activeClassName="text-primary"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
