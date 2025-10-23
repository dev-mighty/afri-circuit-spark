import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Video, Users, Award, Clock } from "lucide-react";

const courses = [
  {
    title: "Electronics Fundamentals",
    level: "Beginner",
    duration: "6 weeks",
    type: "Free",
    description: "Learn the basics of circuits, components, and measurements.",
    icon: BookOpen,
  },
  {
    title: "IoT Development",
    level: "Intermediate",
    duration: "8 weeks",
    type: "Paid",
    description: "Build connected devices with sensors and cloud integration.",
    icon: Video,
  },
  {
    title: "PCB Design Mastery",
    level: "Advanced",
    duration: "10 weeks",
    type: "Paid",
    description: "Professional PCB design from schematic to manufacturing.",
    icon: Award,
  },
  {
    title: "Arduino Projects",
    level: "Beginner",
    duration: "4 weeks",
    type: "Free",
    description: "Hands-on Arduino programming with real-world projects.",
    icon: BookOpen,
  },
];

const features = [
  {
    icon: Video,
    title: "Video Tutorials",
    description: "High-quality video lessons you can watch anytime",
  },
  {
    icon: Users,
    title: "Live Workshops",
    description: "Interactive sessions with experienced engineers",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Earn certificates upon course completion",
  },
  {
    icon: Clock,
    title: "Self-paced",
    description: "Learn at your own speed and schedule",
  },
];

export default function Academy() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AfriCircuit <span className="text-primary">Academy</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Learn electronics, IoT, and mechatronics through practical courses, workshops, and tutorials designed for African innovators.
          </p>
          <Button size="lg" variant="hero" asChild>
            <Link to="/contact">Join the Waitlist</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Learn With <span className="text-primary">Us</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive learning experience designed for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="border-primary/20 hover:border-primary/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-4 lg:px-8 bg-card circuit-bg">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Courses</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From beginner to advanced - we have courses for every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card
                  key={course.title}
                  className="border-primary/20 hover:border-primary/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          course.type === "Free"
                            ? "bg-primary/10 text-primary border-primary/20"
                            : "bg-secondary/50 text-foreground border-border"
                        }
                      >
                        {course.type}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <p className="text-muted-foreground mb-4">{course.description}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {course.level}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                    </div>

                    <Button variant="glow" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
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
                <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6 animate-glow-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to <span className="text-primary">Start Learning</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join AfriCircuit Academy and become part of Africa's electronics revolution. Learn from experts, build real projects, and connect with innovators.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="hero" asChild>
                    <Link to="/contact">Join the Waitlist</Link>
                  </Button>
                  <Button size="lg" variant="glow" asChild>
                    <Link to="/contact">Request Info</Link>
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
