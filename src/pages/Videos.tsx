import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Blue Elite TV - Episode 45",
    thumbnail: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330",
    duration: "45:20",
    views: "1.2K views",
  },
  {
    id: 2,
    title: "Staff Training: Leadership Skills",
    thumbnail: "https://images.unsplash.com/photo-1552581234-26160f608093",
    duration: "32:15",
    views: "856 views",
  },
  {
    id: 3,
    title: "Company Vision 2025",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    duration: "28:40",
    views: "2.3K views",
  },
  {
    id: 4,
    title: "Monthly All-Hands Meeting",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    duration: "1:05:30",
    views: "1.8K views",
  },
  {
    id: 5,
    title: "Professional Development Series",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    duration: "42:55",
    views: "945 views",
  },
  {
    id: 6,
    title: "Product Launch Announcement",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    duration: "15:20",
    views: "3.1K views",
  },
];

export default function Videos() {
  return (
    <div className="space-y-6 py-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold gradient-text">Video Library</h1>
        <p className="text-muted-foreground mt-1">Access training videos, meetings, and Blue Elite TV content</p>
      </div>

      {/* Featured Video */}
      <Card className="glass-card overflow-hidden border-border/30 animate-scale-in">
        <div className="relative aspect-video">
          <img
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26"
            alt="Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <Button
            size="icon"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-primary/90 backdrop-blur-sm hover:bg-primary hover:scale-110 transition-smooth glow"
          >
            <Play className="h-10 w-10 ml-1" />
          </Button>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="glass px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
              FEATURED
            </div>
            <h2 className="text-2xl font-bold mb-2">Latest Blue Elite TV Episode</h2>
            <p className="text-foreground/80">Watch the newest episode featuring special guest speakers</p>
          </div>
        </div>
      </Card>

      {/* Video Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
        {videos.map((video, idx) => (
          <Card
            key={video.id}
            className="glass-card overflow-hidden border-border/30 hover:scale-105 transition-smooth cursor-pointer group"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                <Button
                  size="icon"
                  className="h-16 w-16 rounded-full bg-primary/90 backdrop-blur-sm hover:bg-primary glow"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 glass px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-smooth">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground">{video.views}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
