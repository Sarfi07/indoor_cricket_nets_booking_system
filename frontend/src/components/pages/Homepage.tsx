import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

interface Booking {
  id: string;
  netName: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  status: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export default function Homepage() {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Get user from localStorage
    const stored = localStorage.getItem("user");

    if (!stored) {
      navigate("/login");
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      // Support both { user, token } and plain user object
      setUser(parsed.user || parsed);
    } catch {
      console.error("Invalid user format in localStorage");
      localStorage.removeItem("user");
      navigate("/login");
      return;
    }

    // ✅ Fetch user bookings
    const fetchBookings = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bookings/my`, {
          credentials: "include",
          headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
           },
        });

        if (!res.ok) throw new Error("Failed to fetch bookings");

        const data = await res.json();
        console.log("Fetched bookings:", data);
        // Show only 3 most recent bookings
        setBookings(data.slice(0, 3));
      } catch (err) {
        console.error("Failed to load bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [navigate]);

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="mt-12 min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">
          Welcome back, {user?.name || "Player"} 👋
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Manage your bookings, view schedules, and reserve nets instantly.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button onClick={() => navigate("/my-bookings")} variant="default">
            View All Bookings
          </Button>
          <Button onClick={() => navigate("/book")} variant="secondary">
            Book a Slot
          </Button>
        </div>
      </section>

      <Separator />

      {/* My Bookings */}
      <section className="container mx-auto px-6 py-10 flex-1">
        <h2 className="text-2xl font-semibold mb-6">My Recent Bookings</h2>

        {bookings.length === 0 ? (
          <p className="text-muted-foreground">
            You don’t have any bookings yet. Go ahead and book your first slot!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <Card key={booking.id} className="hover:shadow-md transition">
                <CardHeader>
                  <CardTitle>{booking.netName}</CardTitle>
                  <CardDescription>
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Time:</strong> {booking.startTime} - {booking.endTime}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`${
                        booking.status === "Confirmed"
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
