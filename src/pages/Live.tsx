import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Radio, Users, Video } from "lucide-react";

const liveMeetings = [
  {
    id: 1,
    title: "Executive Board Meeting",
    code: "EXEC-2025-11",
    attendees: 12,
    duration: "45 min",
    isLive: true,
  },
  {
    id: 2,
    title: "Department Sync",
    code: "DEPT-2025-43",
    attendees: 28,
    duration: "30 min",
    isLive: true,
  },
];

const scheduledMeetings = [
  {
    id: 3,
    title: "Product Roadmap Review",
    time: "2:00 PM Today",
    code: "PROD-2025-15",
  },
  {
    id: 4,
    title: "Team Standup",
    time: "Tomorrow 9:00 AM",
    code: "TEAM-2025-89",
  },
];

export default function Live() {
  return (
    <div className="space-y-6 py-6">
      {/* Header */}
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold gradient-text">Live Meetings</h1>
        <p className="text-muted-foreground mt-1">Join active meetings or view upcoming sessions</p>
      </div>

      {/* Live Now */}
      <div className="space-y-4 animate-scale-in">
        <div className="flex items-center gap-2">
          <Radio className="h-5 w-5 text-destructive animate-pulse" />
          <h2 className="text-xl font-semibold">Live Now</h2>
        </div>

        {liveMeetings.map((meeting) => (
          <Card key={meeting.id} className="glass-card border-border/30 p-6 hover:scale-[1.02] transition-smooth">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-destructive text-destructive-foreground animate-glow-pulse">
                    🔴 LIVE
                  </Badge>
                  <h3 className="text-lg font-semibold">{meeting.title}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{meeting.attendees} participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    <span>Code: {meeting.code}</span>
                  </div>
                  <span>Duration: {meeting.duration}</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 glow h-12 px-8">
                Join Meeting
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Upcoming */}
      <div className="space-y-4 animate-slide-up">
        <h2 className="text-xl font-semibold">Upcoming</h2>

        {scheduledMeetings.map((meeting) => (
          <Card key={meeting.id} className="glass-card border-border/30 p-6 hover:scale-[1.02] transition-smooth">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">{meeting.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>{meeting.time}</span>
                  <span>Code: {meeting.code}</span>
                </div>
              </div>
              <Button variant="outline" className="glass border-border/30">
                Set Reminder
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Join with Code */}
      <Card className="glass-card border-border/30 p-6 animate-fade-in">
        <h3 className="text-lg font-semibold mb-4">Join with Meeting Code</h3>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter meeting code..."
            className="flex-1 h-12 px-4 rounded-xl glass border border-border/30 focus:border-primary outline-none transition-smooth"
          />
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 h-12 px-8">
            Join
          </Button>
        </div>
      </Card>
    </div>
  );
}
