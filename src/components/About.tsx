import { Card, CardContent } from "@/components/ui/card";
import { Users, Handshake } from "lucide-react";

const About = () => {
  const cards = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Who we are",
      text: "As a husband and wife team, we take pride in our strong work ethic and ability to execute our clients' needs. We believe in attention to detail, punctuality, perfection, and above all client satisfaction.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "What we do",
      text: "We are a professional, transparent team with over a decade of experience creating and delivering pharmaceutical products. We work directly with you to ensure your expectations are met at the highest quality possible.",
    },
  ];

  const stats = [
    { num: "25+", label: "Years" },
    { num: "4+", label: "Cities" },
    { num: "20+", label: "Hospitals" },
    { num: "14", label: "Products" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Anjani</h2>
          <blockquote className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "Improving health, one pill at a time."
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {cards.map((c) => (
            <Card key={c.title} className="shadow-card border-border hover:shadow-medical transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  {c.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{c.title}</h3>
                <p className="text-muted-foreground">{c.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-xl bg-gradient-subtle border border-border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{s.num}</div>
              <div className="text-muted-foreground font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
