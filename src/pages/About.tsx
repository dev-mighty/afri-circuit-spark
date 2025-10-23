import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Innovation",
    description: "Pushing boundaries in electronics design and manufacturing.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building together with communities, partners, and innovators.",
  },
  {
    icon: Target,
    title: "Accessibility",
    description: "Making electronics affordable and available across Africa.",
  },
  {
    icon: Eye,
    title: "African Pride",
    description: "Celebrating and amplifying African innovation globally.",
  },
];

const founders = [
  {
    name: "Dr. Kwame Nkrumah",
    role: "Co-Founder & CEO",
    bio: "Electronics engineer with 15 years experience in IoT development.",
  },
  {
    name: "Amara Okafor",
    role: "Co-Founder & CTO",
    bio: "Hardware innovator passionate about solving African challenges.",
  },
  {
    name: "Zainab Hassan",
    role: "Head of Academy",
    bio: "Educator dedicated to empowering the next generation of makers.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            AfriCircuit was born from a simple observation: Africa has incredible innovators, but lacks accessible tools and resources for electronics development. We're changing that.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/20 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower African innovators to design and build real hardware solutions by providing accessible tools, components, knowledge, and infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To make Africa a global hub for electronics innovation, where local solutions are designed, built, and scaled to solve continental challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 lg:px-8 bg-card circuit-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="border-primary/20 hover:border-primary/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The innovators building Africa's electronics future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card
                key={founder.name}
                className="border-primary/20 hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium mb-3">{founder.role}</p>
                  <p className="text-muted-foreground text-sm">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
