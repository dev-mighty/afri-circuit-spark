import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to AfriCircuit!");
      setEmail("");
    }
  };

  return (
    <section className="py-16 px-4 lg:px-8 bg-card">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the AfriCircuit Community
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Get updates on new products, innovations, and learning resources.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" variant="hero">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
