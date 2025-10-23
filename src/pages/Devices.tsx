import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Thermometer, Droplets, Wind, Clock } from "lucide-react";
import productImage from "@/assets/smart-monitor.jpg";

const features = [
  {
    icon: Thermometer,
    title: "Temperature Monitoring",
    description: "Accurate temperature tracking from -20°C to 60°C",
  },
  {
    icon: Droplets,
    title: "Humidity Sensing",
    description: "Relative humidity measurement from 0-100%",
  },
  {
    icon: Wind,
    title: "Air Quality",
    description: "VOC and CO2 detection for indoor environments",
  },
  {
    icon: Clock,
    title: "Real-time Data",
    description: "Instant readings with cloud sync capability",
  },
];

const specifications = [
  { label: "Power Supply", value: "Solar/USB-C (5V)" },
  { label: "Connectivity", value: "WiFi, Bluetooth, GSM" },
  { label: "Battery Life", value: "Up to 7 days" },
  { label: "Display", value: "2.4\" LCD with backlight" },
  { label: "Dimensions", value: "85 x 85 x 30mm" },
  { label: "Weight", value: "150g" },
];

export default function Devices() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Available for Pre-order
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart <span className="text-primary">Devices</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            IoT devices designed for African needs, built with African innovation.
          </p>
        </div>
      </section>

      {/* Main Product */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
                <img
                  src={productImage}
                  alt="Smart Environment Monitor"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>

            <div className="animate-slide-up order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Smart Environment Monitor
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Monitor your environment with precision. Our flagship device tracks temperature, humidity, air quality, and more in real-time.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-primary">$149</span>
                <span className="text-muted-foreground line-through">$199</span>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Pre-order Discount
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="hero" asChild>
                  <Link to="/contact">Pre-order Now</Link>
                </Button>
                <Button size="lg" variant="glow" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Key <span className="text-primary">Features</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    className="border-primary/20 hover:border-primary/50 transition-all animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Specifications */}
          <Card className="border-primary/20 animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-3 border-b border-border/50">
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-4 lg:px-8 bg-card circuit-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <Zap className="w-16 h-16 text-primary mx-auto mb-6 animate-glow-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Devices <span className="text-primary">Coming Soon</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're developing smart irrigation controllers, energy monitors, and security systems designed for African conditions.
          </p>
          <Button variant="glow" asChild>
            <Link to="/contact">Join Our Waitlist</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
