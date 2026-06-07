import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const info = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      detail: "Ahmedabad, Gujarat, India",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      detail: "+91 98255 29046",
      href: "tel:+919825529046",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      detail: "anjanilifecuresciences@gmail.com",
      href: "mailto:anjanilifecuresciences@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you'd like to place an order, learn more about our products, discuss prices, or
            any other inquiries please feel free to contact us via phone or email. We will get
            back to you within 1–2 business days. Thank you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {info.map((i) => (
            <Card key={i.title} className="shadow-card border-border hover:shadow-medical transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  {i.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{i.title}</h3>
                {i.href ? (
                  <a href={i.href} className="text-muted-foreground hover:text-primary transition-colors break-words">
                    {i.detail}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{i.detail}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
