import { Mail, Phone } from "lucide-react";
import { SiDiscord } from "react-icons/si";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitMutation.mutate(data);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-multi opacity-10 animate-gradient-shift bg-[length:200%_200%]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Get in Touch
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-purple bg-clip-text text-transparent" data-testid="text-page-title">
            Contact Us
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-page-description">
            Have questions or need support? We're here to help you get the most out of Gacky
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20" data-testid="card-email-support">
              <div className="w-16 h-16 rounded-full bg-chart-1/10 flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-8 h-8 text-chart-1" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-chart-1">Email Support</h3>
              <p className="text-muted-foreground text-center mb-6">
                Send us an email and we'll get back to you within 24 hours
              </p>
              <Button
                className="w-full bg-gradient-pink text-white border-0 hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/30"
                data-testid="button-send-email"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </Card>

            <Card className="p-8 bg-card border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20" data-testid="card-discord-support">
              <div className="w-16 h-16 rounded-full bg-chart-4/10 flex items-center justify-center mb-6 mx-auto">
                <SiDiscord className="w-8 h-8 text-chart-4" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-chart-4">Discord Support</h3>
              <p className="text-muted-foreground text-center mb-6">
                Join our support server for instant help and community support
              </p>
              <Button
                className="w-full bg-gradient-blue text-white border-0 hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
                data-testid="button-join-server"
              >
                <SiDiscord className="w-4 h-4 mr-2" />
                Join Server
              </Button>
            </Card>
          </div>

          <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-card-border" data-testid="card-contact-form">
            <h2 className="text-3xl font-bold mb-2 text-center bg-gradient-blue bg-clip-text text-transparent">
              Send us a Message
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Fill out the form below and we'll respond as soon as possible
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            data-testid="input-name"
                            className="bg-background border-input focus:border-primary/50 focus:ring-primary/20 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                            data-testid="input-email"
                            className="bg-background border-input focus:border-primary/50 focus:ring-primary/20 transition-all"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's this about?"
                          {...field}
                          data-testid="input-subject"
                          className="bg-background border-input focus:border-primary/50 focus:ring-primary/20 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your question or issue..."
                          {...field}
                          data-testid="input-message"
                          className="min-h-[150px] resize-none bg-background border-input focus:border-primary/50 focus:ring-primary/20 transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-purple text-white border-0 hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 text-lg py-6"
                  disabled={submitMutation.isPending}
                  data-testid="button-send-message"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {submitMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </section>
    </div>
  );
}
