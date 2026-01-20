import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [net, setNet] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!date || !time || !duration || !net) {
      alert("Please fill out all fields before continuing.");
      return;
    }

    console.log(date, time, duration, net)

    navigate("/booking-summary", {
      state: { date, time, duration, net },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex flex-1 items-center justify-center py-10 px-4">
        <Card className="w-full max-w-md border border-gray-200 shadow-md">
          <CardHeader className="text-center">
            <h2 className="text-2xl font-bold">Book a Net</h2>
            <p className="text-gray-500 text-sm mt-1">
              Choose your date, time, and duration to reserve.
            </p>
          </CardHeader>

          <CardContent className="space-y-6 mt-4">
            {/* Date Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Select Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Time Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Select Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium mb-1">Select Duration</label>
              <Select onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30 Minutes">30 Minutes</SelectItem>
                  <SelectItem value="1 Hour">1 Hour</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Net */}
            <div>
              <label className="block text-sm font-medium mb-1">Select Net</label>
              <Select onValueChange={setNet}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a net" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Net 1">Net 1</SelectItem>
                  <SelectItem value="Net 2">Net 2</SelectItem>
                  <SelectItem value="Premium Net">Premium Net</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardFooter className="pt-4">
            <Button
              onClick={handleContinue}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Continue
            </Button>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
