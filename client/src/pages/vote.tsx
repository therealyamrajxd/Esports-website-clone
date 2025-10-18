import { Trophy, ExternalLink, Gift, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Vote() {
  const votingPlatforms = [
    {
      name: "top.gg",
      description: "Vote on the most popular bot list",
      rewards: "Get 1 premium day free",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      name: "Discord Bot List",
      description: "Support us on DBL",
      rewards: "Exclusive voting badge",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
    {
      name: "Bots on Discord",
      description: "Help us grow on BoD",
      rewards: "Priority support access",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
  ];

  const benefits = [
    "Support Gacky's development",
    "Help us reach more communities",
    "Get exclusive rewards",
    "Join our top voters leaderboard",
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-multi opacity-10 animate-gradient-shift bg-[length:200%_200%]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Support Us
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-purple bg-clip-text text-transparent" data-testid="text-page-title">
            Vote for Gacky
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-description">
            Support Gacky by voting on bot lists and earn exclusive rewards!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {votingPlatforms.map((platform, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                data-testid={`card-platform-${index}`}
              >
                <div className={`w-12 h-12 rounded-lg ${platform.bgColor} flex items-center justify-center mb-4`}>
                  <Star className={`w-6 h-6 ${platform.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{platform.description}</p>
                <div className="flex items-center gap-2 text-sm mb-4">
                  <Gift className="w-4 h-4 text-chart-5" />
                  <span className="text-chart-5">{platform.rewards}</span>
                </div>
                <Button
                  className="w-full bg-gradient-purple text-white border-0 hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  data-testid={`button-vote-${index}`}
                >
                  Vote Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-card-border" data-testid="card-benefits">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-pink bg-clip-text text-transparent">
              Why Vote?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3" data-testid={`benefit-${index}`}>
                  <div className="w-6 h-6 rounded-full bg-chart-5/20 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-3 h-3 text-chart-5" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
