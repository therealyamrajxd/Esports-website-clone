import { Gamepad2, Shield, Wrench, Star, Calendar, Palette, Server, Users, Zap, Check, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";

export default function About() {
  const features = [
    {
      icon: Gamepad2,
      title: "Esports Management",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
      items: [
        "Scrims manager with registration",
        "Tournament creation & management",
        "Smart screenshot verification",
        "Auto IDP panel setup",
        "Advanced slot management",
      ],
    },
    {
      icon: Shield,
      title: "Advanced Moderation",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
      items: [
        "Message purging & cleanup",
        "Kick, ban, unban commands",
        "Role management system",
        "Channel lock/unlock",
        "Maintenance mode",
      ],
    },
    {
      icon: Wrench,
      title: "Utility & Tools",
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
      items: [
        "Custom embed creation",
        "Reminder system",
        "Custom tags & commands",
        "Message snipe feature",
        "Auto-purge channels",
      ],
    },
    {
      icon: Star,
      title: "Premium Features",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
      items: [
        "Premium status management",
        "Advanced customization",
        "Priority support",
        "Extended limits",
        "Exclusive features",
      ],
    },
    {
      icon: Calendar,
      title: "Events & Logging",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
      items: [
        "Command logging",
        "Scheduled tasks",
        "Activity tracking",
        "Event management",
        "Audit trails",
      ],
    },
    {
      icon: Palette,
      title: "Customization",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      items: [
        "Custom prefixes",
        "Unique embed designs",
        "Personalized responses",
        "Custom reactions",
        "Tailored bot behavior",
      ],
    },
  ];

  const coreValues = [
    {
      icon: Gamepad2,
      title: "Esports Excellence",
      description: "Advanced tournament management, scrims organization, and competitive gaming features for Discord communities.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building stronger Discord communities with powerful moderation, role management, and engagement tools.",
    },
    {
      icon: Shield,
      title: "Reliability & Uptime",
      description: "99.9% uptime with robust infrastructure ensuring your Discord bot is always available when needed.",
    },
    {
      icon: Zap,
      title: "Innovation & Features",
      description: "Constantly evolving with new features, custom commands, and cutting-edge Discord bot technology.",
    },
  ];

  const stats = [
    { value: "700+", label: "Active Servers", color: "text-chart-3" },
    { value: "200+", label: "Premium Servers", color: "text-chart-2" },
    { value: "99.9%", label: "Uptime", color: "text-chart-5" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-multi opacity-10 animate-gradient-shift bg-[length:200%_200%]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Advanced Discord Bot
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-purple bg-clip-text text-transparent" data-testid="text-page-title">
            Meet Gacky
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-description">
            A modular Discord bot with powerful esports management, advanced moderation, and comprehensive utility features
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border" data-testid="badge-always-online">
              <div className="w-2 h-2 rounded-full bg-chart-5 animate-pulse" />
              <span className="text-sm font-medium">Always Online</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border" data-testid="badge-24-7-support">
              <div className="w-2 h-2 rounded-full bg-chart-4 animate-pulse" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-card-border" data-testid="badge-regular-updates">
              <div className="w-2 h-2 rounded-full bg-chart-1 animate-pulse" />
              <span className="text-sm font-medium">Regular Updates</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                  data-testid={`card-feature-${index}`}
                >
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${feature.color}`}>{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The core principles that drive Gacky's Discord bot development and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 text-center"
                  data-testid={`card-value-${index}`}
                >
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-pink bg-clip-text text-transparent">
              Meet the Developer
            </h2>
          </div>

          <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-card-border text-center" data-testid="card-developer">
            <div className="w-24 h-24 rounded-full bg-gradient-purple mx-auto mb-6 flex items-center justify-center">
              <Check className="w-12 h-12 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2" data-testid="text-developer-name">duggu.143</h3>
            
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-developer-bio">
              Passionate developer dedicated to creating powerful Discord bots that enhance community experiences. 
              With years of experience in bot development and a deep understanding of Discord's ecosystem, Gacky 
              represents the culmination of expertise and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="gap-2 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                data-testid="button-contact-developer"
              >
                <Mail className="w-4 h-4" />
                Contact
                <span className="text-xs text-muted-foreground ml-1">Get in touch</span>
              </Button>
              <Button
                variant="outline"
                className="gap-2 bg-gradient-blue/10 border-chart-4/50 hover:bg-gradient-blue/20 transition-all duration-300 hover:scale-105"
                data-testid="button-join-developer-discord"
              >
                <SiDiscord className="w-4 h-4" />
                Discord
                <span className="text-xs text-muted-foreground ml-1">Join community</span>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-blue bg-clip-text text-transparent">
              Trusted by Communities Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className={`text-6xl font-bold mb-2 ${stat.color}`} data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-foreground font-semibold mb-1" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
                <div className="h-1 w-16 bg-gradient-purple mx-auto rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
