import { ReactNode, useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background w-full">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main content - responsive padding for header, sidebar, and bottom nav */}
      <main className="pt-20 pb-24 md:pb-8 md:ml-72 px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {children}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};
