import { X, Home, FileText, Video, Calendar, User, BookOpen, Phone, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { NavLink } from "./NavLink";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: FileText, label: "Information Center", path: "/info" },
  { icon: Video, label: "Videos", path: "/videos" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: BookOpen, label: "STDL", path: "/stdl" },
  { icon: Phone, label: "Contact", path: "/contact" },
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay - Mobile Only */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Desktop Sidebar - Always visible on md+ */}
      <aside className="hidden md:block fixed top-0 left-0 bottom-0 z-40 w-72 glass-card border-r">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/30">
            <h2 className="font-bold text-lg gradient-text">Menu</h2>
          </div>

          {/* Profile Section */}
          <div className="p-6 border-b border-border/30">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">Staff Member</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-smooth"
                  activeClassName="bg-primary/10 text-primary font-medium"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border/30">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar - Slide in from left */}
      <aside
        className={`
          md:hidden fixed top-0 left-0 bottom-0 z-50 w-72
          glass-card border-r transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/30">
            <h2 className="font-bold text-lg gradient-text">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-primary/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Profile Section */}
          <div className="p-6 border-b border-border/30">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">Staff Member</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-primary/10 transition-smooth"
                  activeClassName="bg-primary/10 text-primary font-medium"
                  onClick={onClose}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border/30">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
