import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Cpu, Wrench, ShoppingBag, GraduationCap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-circuit.jpg";
import productImage from "@/assets/smart-monitor.jpg";
import { Newsletter } from "@/components/Newsletter";

const divisions = [
  {
    icon: Cpu,
    title: "Devices",
    description: "Smart IoT devices and electronic gadgets designed for African needs.",
    href: "/devices",
  },
  {
    icon: Wrench,
    title: "Lab",
    description: "Prototyping space for circuit design, PCB printing, and IoT development.",
    href: "/lab",
  },
  {
    icon: ShoppingBag,
    title: "Shop",
    description: "Pre-designed circuits, sensors, and electronic component kits.",
    href: "/shop",
  },
  {
    icon: GraduationCap,
    title: "Academy",
    description: "Learn electronics, IoT, and mechatronics through courses and workshops.",
    href: "/academy",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center py-20">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Proudly African</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Connecting Africa Through <span className="text-primary glow-text">Innovation</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empowering African innovators to design, build, and scale real hardware solutions for the continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" asChild>
                <Link to="/devices">
                  Explore Devices
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="glow" asChild>
                <Link to="/contact">Join the Movement</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 px-4 lg:px-8 circuit-bg">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Divisions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four integrated pillars working together to revolutionize electronics in Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <Card
                  key={division.title}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-fade-in bg-card/50 backdrop-blur"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{division.title}</h3>
                    <p className="text-muted-foreground mb-4">{division.description}</p>
                    <Link
                      to={division.href}
                      className="inline-flex items-center text-primary hover:underline font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* MVP Product Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium text-primary">First Product</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Smart Environment <span className="text-primary">Monitor</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our flagship IoT device monitors temperature, humidity, air quality, and more. Designed specifically for African environments with local connectivity solutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time environmental monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Low power consumption with solar capability</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Works with limited connectivity</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <Link to="/devices">View Specifications</Link>
                </Button>
                <Button variant="glow" asChild>
                  <Link to="/contact">Pre-order Now</Link>
                </Button>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
                <img
                  src={productImage}
                  alt="Smart Environment Monitor"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  );
}
