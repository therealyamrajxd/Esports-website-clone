import { Gamepad2, Shield, Wrench, Star, Calendar, Palette, Check, Users, TrendingUp, Zap } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { Card } from "@/components/ui/card";

export default function Home() {
  const stats = [
    { label: "Active Servers", value: "700+", color: "text-chart-3" },
    { label: "Premium Servers Served", value: "200+", color: "text-chart-2" },
    { label: "Uptime", value: "99.9%", color: "text-chart-5" },
  ];

  const features = [
    {
      icon: Gamepad2,
      title: "Esports Management",
      description: "Advanced tournament management, scrims organization, and competitive gaming features for Discord communities.",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      icon: Shield,
      title: "Advanced Moderation",
      description: "Message purging & cleanup, kick, ban, unban commands, role management system, and maintenance mode.",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
    {
      icon: Wrench,
      title: "Utility & Tools",
      description: "Custom embed creation, reminder system, custom tags & commands, message snipe feature, and auto-purge channels.",
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
    },
    {
      icon: Star,
      title: "Premium Features",
      description: "Premium status management, advanced customization, priority support, extended limits, and exclusive features.",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      icon: Calendar,
      title: "Events & Logging",
      description: "Command logging, scheduled tasks, activity tracking, event management, and comprehensive audit trails.",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      icon: Palette,
      title: "Customization",
      description: "Custom prefixes, unique embed designs, personalized responses, custom reactions, and tailored bot behavior.",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
  ];

  const communityFeatures = [
    { icon: Users, text: "700+ Active Members" },
    { icon: Zap, text: "24/7 Support Available" },
    { icon: TrendingUp, text: "Regular Updates & News" },
    { icon: Calendar, text: "Community Events" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
        <div className="absolute inset-0 bg-gradient-multi opacity-20 animate-gradient-shift bg-[length:200%_200%]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Advanced Discord Bot
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-multi bg-clip-text text-transparent" data-testid="text-hero-title">
            Gacky
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            The ultimate Discord bot for esports tournaments and server management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-hero-join-discord"
              className="px-8 py-4 rounded-full bg-gradient-blue text-white font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 active-elevate-2"
            >
              <SiDiscord className="w-6 h-6" />
              Join Discord
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-hero-invite-bot"
              className="px-8 py-4 rounded-full border-2 border-primary bg-primary/10 text-foreground font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary/20 hover:scale-105 hover-elevate active-elevate-2"
            >
              <SiDiscord className="w-6 h-6" />
              Invite Gacky v2
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                data-testid={`card-stat-${index}`}
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`} data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-purple bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to manage your Discord server and esports community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group"
                  data-testid={`card-feature-${index}`}
                >
                  <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
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
              Join Our Community
            </h2>
            <p className="text-muted-foreground text-lg">
              Connect with thousands of users, get support, and stay updated with the latest features.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-card-border max-w-4xl mx-auto" data-testid="card-community">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center justify-center md:justify-start mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-blue flex items-center justify-center">
                    <SiDiscord className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Discord Server</h3>
                <div className="space-y-3 mb-6">
                  {communityFeatures.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3" data-testid={`feature-${index}`}>
                        <div className="w-5 h-5 rounded-full bg-chart-5/20 flex items-center justify-center">
                          <Icon className="w-3 h-3 text-chart-5" />
                        </div>
                        <span className="text-sm">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-card/50 rounded-lg p-6 flex flex-col items-center justify-center text-center border border-card-border">
                <h4 className="text-xl font-bold mb-2 text-chart-4">Join Now</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Get instant access to our community
                </p>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-join-community"
                  className="px-6 py-3 rounded-full bg-gradient-blue text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 active-elevate-2"
                >
                  <SiDiscord className="w-5 h-5" />
                  Join Discord
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
