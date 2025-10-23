import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, Cpu, Zap, Box } from "lucide-react";

const categories = ["All", "Sensors", "Circuits", "Kits", "Components"];

const products = [
  {
    id: 1,
    name: "Temperature Sensor Module",
    category: "Sensors",
    price: 12,
    stock: "In Stock",
    description: "High-precision digital temperature sensor",
  },
  {
    id: 2,
    name: "Arduino Starter Kit",
    category: "Kits",
    price: 45,
    stock: "In Stock",
    description: "Complete kit for beginners with tutorials",
  },
  {
    id: 3,
    name: "Motor Driver Circuit",
    category: "Circuits",
    price: 18,
    stock: "Limited",
    description: "H-bridge motor driver with overcurrent protection",
  },
  {
    id: 4,
    name: "Humidity Sensor DHT22",
    category: "Sensors",
    price: 15,
    stock: "In Stock",
    description: "Temperature and humidity sensor module",
  },
  {
    id: 5,
    name: "LED Matrix Display",
    category: "Components",
    price: 22,
    stock: "In Stock",
    description: "8x8 LED matrix with driver",
  },
  {
    id: 6,
    name: "IoT Development Kit",
    category: "Kits",
    price: 89,
    stock: "In Stock",
    description: "Complete IoT prototyping kit with WiFi",
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 lg:px-8 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AfriCircuit <span className="text-primary">Shop</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Pre-designed circuits, sensors, and electronic component kits for your projects.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 lg:px-8 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="animate-fade-in"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Box className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="border-primary/20 hover:border-primary/50 transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-full h-48 bg-secondary/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/50 transition-colors">
                      {product.category === "Sensors" && <Zap className="w-16 h-16 text-primary" />}
                      {product.category === "Circuits" && <Cpu className="w-16 h-16 text-primary" />}
                      {product.category === "Kits" && <Box className="w-16 h-16 text-primary" />}
                      {product.category === "Components" && <Cpu className="w-16 h-16 text-primary" />}
                    </div>
                    
                    <div className="mb-2">
                      <Badge
                        variant="outline"
                        className={
                          product.stock === "In Stock"
                            ? "bg-primary/10 text-primary border-primary/20"
                            : "bg-destructive/10 text-destructive border-destructive/20"
                        }
                      >
                        {product.stock}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                      <Button variant="hero" size="sm">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-20 px-4 lg:px-8 bg-card circuit-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <Cpu className="w-16 h-16 text-primary mx-auto mb-6 animate-glow-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Online Store <span className="text-primary">Coming Soon</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're preparing our e-commerce platform. For now, contact us directly to place orders.
          </p>
          <Button variant="hero" size="lg">
            Contact for Orders
          </Button>
        </div>
      </section>
    </div>
  );
}
