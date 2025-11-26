import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Q4 Company Updates",
    excerpt: "Important updates and changes coming in the fourth quarter...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    date: "Nov 15, 2025",
  },
  {
    id: 2,
    title: "New HR Policies",
    excerpt: "Review the updated human resources policies and procedures...",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    date: "Nov 12, 2025",
  },
  {
    id: 3,
    title: "Team Building Event",
    excerpt: "Join us for our annual team building retreat next month...",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    date: "Nov 10, 2025",
  },
  {
    id: 4,
    title: "Training Schedule",
    excerpt: "New professional development courses available for staff...",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    date: "Nov 8, 2025",
  },
  {
    id: 5,
    title: "Office Renovation",
    excerpt: "Exciting updates to our workspace coming this winter...",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    date: "Nov 5, 2025",
  },
  {
    id: 6,
    title: "Benefits Update",
    excerpt: "Enhanced benefits package details for all staff members...",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    date: "Nov 1, 2025",
  },
];

export default function Info() {
  return (
    <div className="space-y-6 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Information Center</h1>
          <p className="text-muted-foreground mt-1">Stay updated with the latest news and announcements</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            className="pl-10 glass border-border/30 h-11 rounded-xl"
          />
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
        {posts.map((post, idx) => (
          <Card
            key={post.id}
            className="glass-card overflow-hidden border-border/30 hover:scale-105 transition-smooth cursor-pointer group"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-medium">
                {post.date}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 -ml-4">
                Read More →
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 pt-6 animate-fade-in">
        <Button variant="outline" size="sm" className="glass border-border/30">
          Previous
        </Button>
        <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
          1
        </Button>
        <Button variant="outline" size="sm" className="glass border-border/30">
          2
        </Button>
        <Button variant="outline" size="sm" className="glass border-border/30">
          3
        </Button>
        <Button variant="outline" size="sm" className="glass border-border/30">
          Next
        </Button>
      </div>
    </div>
  );
}
