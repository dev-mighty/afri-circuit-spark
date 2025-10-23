import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Zap, Layout, Microscope } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Circuit Design",
    description: "Professional PCB design services from concept to production-ready files.",
  },
  {
    icon: Cpu,
    title: "PCB Manufacturing",
    description: "In-house PCB printing and assembly with quick turnaround times.",
  },
  {
    icon: Zap,
    title: "IoT Prototyping",
    description: "End-to-end IoT development including firmware and connectivity solutions.",
  },
  {
    icon: Microscope,
    title: "Testing & Validation",
    description: "Comprehensive testing facilities to ensure your designs work perfectly.",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "Share your idea or problem - we'll help define the solution.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our engineers create detailed schematics and PCB layouts.",
  },
  {
    step: "03",
    title: "Prototype",
    description: "We build and test initial prototypes in our lab.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Receive your working prototype or production files.",
  },
];

export default function Lab() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AfriCircuit <span className="text-primary">Lab</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A creative space where ideas become reality. We provide circuit design, PCB manufacturing, and IoT prototyping services to bring your innovations to life.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to go from idea to working hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="border-primary/20 hover:border-primary/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 lg:px-8 bg-card circuit-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Four simple steps from concept to creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <Card
                key={item.step}
                className="border-primary/20 relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-card to-card/50 overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <div className="absolute inset-0 circuit-bg opacity-20"></div>
              <div className="relative z-10">
                <Zap className="w-16 h-16 text-primary mx-auto mb-6 animate-glow-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Build Your <span className="text-primary">Innovation</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Partner with AfriCircuit Lab to turn your electronics ideas into reality. Let's create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="hero" asChild>
                    <Link to="/contact">Request a Design</Link>
                  </Button>
                  <Button size="lg" variant="glow" asChild>
                    <Link to="/contact">Schedule Visit</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
