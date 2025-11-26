import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-6 py-6 max-w-4xl mx-auto">
      <div className="animate-fade-in text-center">
        <h1 className="text-3xl font-bold gradient-text">Contact Support</h1>
        <p className="text-muted-foreground mt-1">We're here to help</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
        <Card className="glass-card border-border/30 p-6 hover:scale-105 transition-smooth">
          <div className="p-4 rounded-2xl bg-primary/10 text-primary w-fit mb-4">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Email Support</h3>
          <p className="text-muted-foreground text-sm mb-3">Get help via email</p>
          <a href="mailto:support@blw.org" className="text-primary hover:underline font-medium">
            support@blw.org
          </a>
        </Card>

        <Card className="glass-card border-border/30 p-6 hover:scale-105 transition-smooth">
          <div className="p-4 rounded-2xl bg-accent/10 text-accent w-fit mb-4">
            <Phone className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
          <p className="text-muted-foreground text-sm mb-3">Call us during business hours</p>
          <a href="tel:+1234567890" className="text-primary hover:underline font-medium">
            +1 (234) 567-8900
          </a>
        </Card>

        <Card className="glass-card border-border/30 p-6 hover:scale-105 transition-smooth">
          <div className="p-4 rounded-2xl bg-success/10 text-success w-fit mb-4">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
          <p className="text-muted-foreground text-sm mb-3">Chat with our support team</p>
          <button className="text-primary hover:underline font-medium">
            Start Chat
          </button>
        </Card>

        <Card className="glass-card border-border/30 p-6 hover:scale-105 transition-smooth">
          <div className="p-4 rounded-2xl bg-warning/10 text-warning w-fit mb-4">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Office Location</h3>
          <p className="text-muted-foreground text-sm mb-3">Visit us in person</p>
          <p className="text-foreground">
            123 Business Ave<br />
            Suite 456<br />
            City, State 12345
          </p>
        </Card>
      </div>
    </div>
  );
}
