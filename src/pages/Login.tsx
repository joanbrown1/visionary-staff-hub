import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export default function Login() {
  const [portalId, setPortalId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login
    setTimeout(() => {
      setLoading(false);
      toast.success("Login successful! Redirecting...");
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <Card className="w-full max-w-md glass-card border-border/30 p-8 animate-scale-in">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your BLW Staff Portal</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="portalId" className="text-foreground">Portal ID</Label>
            <Input
              id="portalId"
              type="text"
              placeholder="Enter your portal ID"
              value={portalId}
              onChange={(e) => setPortalId(e.target.value)}
              className="glass h-12 border-border/30 focus:border-primary transition-smooth"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="glass h-12 border-border/30 focus:border-primary transition-smooth"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-smooth font-semibold rounded-xl glow"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/30" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-card text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full h-12 glass border-border/30 hover:bg-primary/10 transition-smooth rounded-xl font-medium"
        >
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113"
            alt="KingsChat"
            className="w-5 h-5 mr-2 rounded"
          />
          Login with KingsChat
        </Button>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Need help? <a href="/contact" className="text-primary hover:underline font-medium">Contact Support</a>
        </p>
      </Card>
    </div>
  );
}
