import { useEffect, useState } from "react";
// import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { User } from "lucide-react";

interface Net {
  id: string;
  name: string;
  location: string;
  isAvailable: boolean;
  price30: number;
  price60: number;
}

export default function Homepage() {
  const [nets, setNets] = useState<Net[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNets = async () => {
      try {
        // const res = await axios.get("/api/nets");
        // setNets(res.data);
        const netInfo = [{
            id: "1",
            name: "Nexa X Indoor Cricket Net",
            location: "Downtown",
            isAvailable: true,
            price30: 150,
            price60: 250,
          },
          {
            id: "2",
            name: "Nexa X Pro Cricket Net",
            location: "Uptown",
            isAvailable: false,
            price30: 200,
            price60: 350,
        }]

        setNets(netInfo);
      } catch (error) {
        console.error("Failed to load nets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNets();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="container mx-auto px-6 py-12 flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Practice Whenever You Want <h2>{User.name}</h2>
        </h2>
        <p className="max-w-2xl text-muted-foreground mb-6">
          Quickly find available slots, invite teammates, and manage bookings — all in one simple app.
        </p>

            {/* if the user is logged in the this should be hidden */}
        <div className="flex gap-3">
          <Button variant="default">Get Started</Button>
        </div>
      </section>

      <Separator />

      {/* Available Nets Section */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center">Available Nets</h3>
        {loading ? (
          <p className="text-center text-muted-foreground">Loading nets...</p>
        ) : nets.length === 0 ? (
          <p className="text-center text-muted-foreground">No nets available right now.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {nets.map((net) => (
              <Card
                key={net.id}
                className="hover:shadow-lg transition-all border-gray-200 dark:border-gray-700"
              >
                <CardHeader>
                  <CardTitle>{net.name}</CardTitle>
                  <CardDescription>{net.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">
                    <strong>30 mins:</strong> ₹{net.price30}
                  </p>
                  <p className="text-sm">
                    <strong>60 mins:</strong> ₹{net.price60}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Badge variant={net.isAvailable ? "default" : "secondary"}>
                    {net.isAvailable ? "Available" : "Booked"}
                  </Badge>
                  <Button
                    size="sm"
                    disabled={!net.isAvailable}
                    className="bg-gray-700 hover:bg-gray-800"
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>

      <Separator />

      {/* Newsletter / Contact */}
      <section className="container mx-auto px-6 py-10 flex-1">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Stay in the Loop</CardTitle>
            <CardDescription>Join our mailing list for updates and offers.</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input placeholder="Your email" aria-label="Email" />
              <Button type="submit" className="sm:shrink-0">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
