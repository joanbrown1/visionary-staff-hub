import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Annual Leadership Summit",
    date: "Dec 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    attendees: 245,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
  },
  {
    id: 2,
    title: "Team Building Workshop",
    date: "Dec 8, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Conference Room A",
    attendees: 50,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
  },
  {
    id: 3,
    title: "Q4 All-Hands Meeting",
    date: "Nov 30, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Virtual",
    attendees: 450,
    status: "live",
    image: "https://images.unsplash.com/photo-1558403194-611308249627",
  },
  {
    id: 4,
    title: "Holiday Celebration",
    date: "Dec 20, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Ballroom",
    attendees: 320,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28",
  },
];

export default function Events() {
  return (
    <div className="space-y-6 py-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold gradient-text">Staff Events</h1>
        <p className="text-muted-foreground mt-1">Upcoming meetings, workshops, and celebrations</p>
      </div>

      {/* Events List */}
      <div className="space-y-4 animate-slide-up">
        {events.map((event, idx) => (
          <Card
            key={event.id}
            className="glass-card overflow-hidden border-border/30 hover:scale-[1.02] transition-smooth"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative md:w-64 h-48 md:h-auto overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {event.status === "live" && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-destructive text-destructive-foreground animate-glow-pulse">
                      🔴 LIVE
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-smooth">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-success" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-warning" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    {event.status === "live" ? (
                      <>
                        <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 glow">
                          Join Now
                        </Button>
                        <Button variant="outline" className="glass border-border/30">
                          Details
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                          Accept Invitation
                        </Button>
                        <Button variant="outline" className="glass border-border/30">
                          Maybe
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
