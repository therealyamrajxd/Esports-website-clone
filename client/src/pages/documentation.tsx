import { Book, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Documentation() {
  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics of setting up and configuring Gacky",
      items: ["Installation", "Basic Setup", "First Commands"],
    },
    {
      title: "Esports Features",
      description: "Tournament and scrim management documentation",
      items: ["Creating Tournaments", "Managing Scrims", "Slot Systems"],
    },
    {
      title: "Moderation",
      description: "Keep your server safe and organized",
      items: ["Auto-Mod", "Role Management", "Channel Controls"],
    },
    {
      title: "Premium",
      description: "Premium features and configuration",
      items: ["Premium Setup", "Advanced Features", "Custom Commands"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-multi opacity-10 animate-gradient-shift bg-[length:200%_200%]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold flex items-center gap-2">
              <Book className="w-4 h-4" />
              Learn More
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-purple bg-clip-text text-transparent" data-testid="text-page-title">
            Documentation
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8" data-testid="text-page-description">
            Everything you need to know about using Gacky
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                className="pl-12 py-6 bg-card border-card-border focus:border-primary/50 focus:ring-primary/20"
                data-testid="input-search-docs"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                data-testid={`card-category-${index}`}
              >
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <a href="#" className="text-sm hover:text-primary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
