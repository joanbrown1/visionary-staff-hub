import { Card } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  { id: 1, title: "STDL Document 2025 - Q4", size: "2.4 MB", date: "Nov 20, 2025" },
  { id: 2, title: "STDL Document 2025 - Q3", size: "2.1 MB", date: "Aug 15, 2025" },
  { id: 3, title: "STDL Document 2025 - Q2", size: "1.9 MB", date: "May 10, 2025" },
  { id: 4, title: "STDL Document 2025 - Q1", size: "2.3 MB", date: "Feb 5, 2025" },
];

export default function STDL() {
  return (
    <div className="space-y-6 py-6">
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold gradient-text">STDL Documents</h1>
        <p className="text-muted-foreground mt-1">Access and download STDL documentation</p>
      </div>

      <div className="space-y-4 animate-slide-up">
        {documents.map((doc, idx) => (
          <Card
            key={doc.id}
            className="glass-card border-border/30 p-6 hover:scale-[1.02] transition-smooth"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                <FileText className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{doc.title}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                  <span>{doc.size}</span>
                  <span>•</span>
                  <span>{doc.date}</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
