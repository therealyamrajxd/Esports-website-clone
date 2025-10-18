import { Star, Check, Gamepad2, Trophy, Clock, MessageSquare, Shield, Zap, CreditCard, Smartphone, Bitcoin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Premium() {
  const premiumFeatures = [
    {
      icon: Gamepad2,
      title: "Unlimited Scrims",
      description: "Host unlimited scrims and tournaments without restrictions",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      icon: Trophy,
      title: "Unlimited Tournaments",
      description: "Create and manage as many tournaments as you need",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      icon: Clock,
      title: "Custom Reactions for Regs",
      description: "Set up personalized reaction-based registration systems",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      icon: MessageSquare,
      title: "Custom Messages",
      description: "Fully customize bot messages and responses",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      icon: Shield,
      title: "Smart SS Verification",
      description: "Advanced screenshot verification for tournaments",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
    {
      icon: Zap,
      title: "Cancel-Claim Panel",
      description: "Efficient slot management with cancel and claim features",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      icon: Star,
      title: "Premium Role + more...",
      description: "Exclusive premium role and additional features",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
  ];

  const pricingPlans = [
    { duration: "1 Week", price: "₹29", popular: false },
    { duration: "1 Month", price: "₹79", popular: false },
    { duration: "3 Month", price: "₹199", popular: true },
    { duration: "6 Month", price: "₹349", popular: false },
    { duration: "1 Year", price: "₹679", popular: false },
  ];

  const paymentMethods = [
    {
      icon: Smartphone,
      title: "UPI",
      description: "Pay with any UPI app",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: CreditCard,
      title: "Card",
      description: "Visa, Mastercard, Rupay",
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
    },
    {
      icon: Bitcoin,
      title: "Crypto",
      description: "Bitcoin, Ethereum, USDT",
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-multi opacity-10 animate-gradient-shift bg-[length:200%_200%]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold flex items-center gap-2">
              <Star className="w-4 h-4" />
              Unlock Premium Features
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-purple bg-clip-text text-transparent" data-testid="text-page-title">
            Gacky Premium
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-description">
            Unlock the full potential of Gacky with premium features designed for serious Discord communities
          </p>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-pink bg-clip-text text-transparent">
              Perks of Gacky Premium
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 group"
                  data-testid={`card-perk-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-4 h-4 text-chart-5" />
                        <h3 className="font-bold">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-purple bg-clip-text text-transparent">
              Premium Plans
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-6 bg-card border-card-border relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular
                    ? "border-primary hover:shadow-primary/30"
                    : "hover:shadow-primary/20"
                }`}
                data-testid={`card-plan-${index}`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 -right-2">
                    <Badge className="bg-gradient-pink text-white border-0 px-3 py-1" data-testid="badge-most-popular">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4" data-testid={`text-plan-duration-${index}`}>
                    {plan.duration}
                  </h3>
                  <div className="text-4xl font-bold mb-6 bg-gradient-purple bg-clip-text text-transparent" data-testid={`text-plan-price-${index}`}>
                    {plan.price}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-pink hover:opacity-90 text-white border-0"
                        : "bg-gradient-blue hover:opacity-90 text-white border-0"
                    } transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                    data-testid={`button-choose-plan-${index}`}
                  >
                    Choose Plan
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-blue bg-clip-text text-transparent">
              Payment Methods
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose your preferred payment method for a seamless premium experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-card border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 text-center group"
                  data-testid={`card-payment-${index}`}
                >
                  <div className={`w-16 h-16 rounded-lg ${method.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
