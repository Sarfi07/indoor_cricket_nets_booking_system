import { useState } from "react"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"

import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedNet, setSelectedNet] = useState<string>("")
  const [selectedSlot, setSelectedSlot] = useState<string>("")

  const handleBooking = () => {
    if (!selectedDate || !selectedNet || !selectedSlot) {
      alert("Please select all details before confirming your booking.")
      return
    }

    console.log({
      net: selectedNet,
      slot: selectedSlot,
      date: selectedDate.toDateString(),
    })
    alert(`Booking confirmed for ${selectedNet} on ${selectedDate.toDateString()} (${selectedSlot})`)
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 justify-center items-center py-12 px-4">
        <Card className="w-full max-w-lg shadow-lg border-gray-200">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">Book a Net</h2>
          </CardHeader>

          <Separator />

          <CardContent className="space-y-6 mt-6">
            {/* Select Net */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Net</label>
              <Select onValueChange={(val) => setSelectedNet(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a net" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="net1">Net 1</SelectItem>
                  <SelectItem value="net2">Net 2</SelectItem>
                  <SelectItem value="net3">Net 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Select Slot Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Slot Duration</label>
              <Select onValueChange={(val) => setSelectedSlot(val)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30min">30 Minutes</SelectItem>
                  <SelectItem value="60min">1 Hour</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Calendar Date Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
              <div className="rounded-md border p-2 bg-white">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md"
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center pt-4">
            <Button onClick={handleBooking} className="w-full bg-gray-700 hover:bg-gray-800 text-white">
              Confirm Booking
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
