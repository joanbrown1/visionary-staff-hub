import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, TrendingUp, Users, Calendar, Video } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const carouselImages = [
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
];

const infoCards = [
  {
    title: "Getting Started Guide",
    excerpt: "Learn how to navigate your new staff portal...",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "Portal Updates",
    excerpt: "Check out the latest features and improvements...",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Staff Announcements",
    excerpt: "Important news and updates for all team members...",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
  },
];

const statsCards = [
  { icon: Users, label: "Active Staff", value: "1,234", color: "text-primary" },
  { icon: Calendar, label: "Events This Week", value: "12", color: "text-accent" },
  { icon: Video, label: "New Videos", value: "8", color: "text-success" },
  { icon: TrendingUp, label: "Engagement", value: "94%", color: "text-warning" },
];

export default function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="space-y-8 py-6">
      {/* Hero Carousel */}
      <div className="relative rounded-3xl overflow-hidden glass-card animate-scale-in group">
        <div className="relative h-64 md:h-96">
          <img
            src={carouselImages[currentSlide]}
            alt="Slide"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
              Welcome to BLW Portal
            </h2>
            <p className="text-foreground/80 text-sm md:text-base">
              Your modern enterprise platform for seamless collaboration
            </p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 glass hover:bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 glass hover:bg-primary/20 opacity-0 group-hover:opacity-100 transition-smooth"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? "w-8 bg-primary" : "w-2 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
        {statsCards.map((stat, idx) => (
          <Card
            key={idx}
            className="glass-card p-6 hover:scale-105 transition-smooth cursor-pointer border-border/30"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl bg-primary/10 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Espees Conversion Card */}
      <Card className="glass-card p-6 border-border/30 animate-fade-in">
        <h3 className="text-xl font-bold mb-4 gradient-text">Espees Conversion</h3>
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem value="balance" className="border-border/30">
            <AccordionTrigger className="hover:no-underline hover:bg-primary/5 px-4 rounded-xl transition-smooth">
              <span className="font-medium">Current Balance</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Available Espees</span>
                  <span className="text-2xl font-bold text-primary">12,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Conversion Rate</span>
                  <span className="font-semibold">1 Espees = $0.10</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="history" className="border-border/30">
            <AccordionTrigger className="hover:no-underline hover:bg-primary/5 px-4 rounded-xl transition-smooth">
              <span className="font-medium">Recent Transactions</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <div>
                    <p className="font-medium">Converted to USD</p>
                    <p className="text-sm text-muted-foreground">2 days ago</p>
                  </div>
                  <span className="text-success font-semibold">-5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Earned Reward</p>
                    <p className="text-sm text-muted-foreground">1 week ago</p>
                  </div>
                  <span className="text-accent font-semibold">+2,500</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-smooth font-semibold rounded-xl h-12 glow">
          Convert Espees
        </Button>
      </Card>

      {/* Information Center */}
      <div className="animate-fade-in">
        <h3 className="text-2xl font-bold mb-6 gradient-text">Information Center</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoCards.map((card, idx) => (
            <Card
              key={idx}
              className="glass-card overflow-hidden border-border/30 hover:scale-105 transition-smooth cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{card.excerpt}</p>
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 -ml-4">
                  Read More →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
