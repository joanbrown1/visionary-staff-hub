import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, User, Users, Heart, Briefcase } from "lucide-react";

export default function Profile() {
  return (
    <div className="space-y-6 py-6">
      {/* Profile Header */}
      <Card className="glass-card border-border/30 p-6 animate-scale-in">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 border-4 border-primary/20">
            <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold gradient-text">John Doe</h1>
            <p className="text-muted-foreground">Staff Member • ID: BLW-2024-001</p>
            <div className="flex gap-2 mt-4 justify-center md:justify-start">
              <Button variant="outline" size="sm" className="glass border-border/30">
                Edit Profile
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                Verify with KingsChat
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Tabbed Information */}
      <Tabs defaultValue="id-card" className="animate-fade-in">
        <TabsList className="glass w-full justify-start overflow-x-auto border-border/30">
          <TabsTrigger value="id-card" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span>ID Card</span>
          </TabsTrigger>
          <TabsTrigger value="basic" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Basic Info</span>
          </TabsTrigger>
          <TabsTrigger value="family" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Family</span>
          </TabsTrigger>
          <TabsTrigger value="medical" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span>Medical</span>
          </TabsTrigger>
          <TabsTrigger value="recruitment" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span>Recruitment</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="id-card" className="mt-6">
          <Card className="glass-card border-border/30 p-6">
            <h3 className="text-lg font-semibold mb-4">Staff ID Card</h3>
            <div className="aspect-video max-w-md mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-primary-foreground flex flex-col justify-between glow">
              <div>
                <p className="text-sm opacity-80">BLW Staff Portal</p>
                <h4 className="text-2xl font-bold mt-1">John Doe</h4>
              </div>
              <div>
                <p className="text-sm opacity-80">Staff ID</p>
                <p className="text-xl font-semibold">BLW-2024-001</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="basic" className="mt-6 space-y-6">
          <Card className="glass-card border-border/30 p-6">
            <h3 className="text-lg font-semibold mb-6">Basic Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" className="glass border-border/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" className="glass border-border/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@blw.org" className="glass border-border/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" defaultValue="+1 234 567 8900" className="glass border-border/30" />
              </div>
            </div>
            <Button className="mt-6 bg-gradient-to-r from-primary to-accent">
              Save Changes
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="family" className="mt-6">
          <Card className="glass-card border-border/30 p-6">
            <h3 className="text-lg font-semibold mb-6">Family Information</h3>
            <p className="text-muted-foreground text-center py-8">
              Family information will be displayed here
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="medical" className="mt-6">
          <Card className="glass-card border-border/30 p-6">
            <h3 className="text-lg font-semibold mb-6">Medical Information</h3>
            <p className="text-muted-foreground text-center py-8">
              Medical records will be displayed here
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="recruitment" className="mt-6">
          <Card className="glass-card border-border/30 p-6">
            <h3 className="text-lg font-semibold mb-6">Recruitment Information</h3>
            <p className="text-muted-foreground text-center py-8">
              Recruitment details will be displayed here
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
