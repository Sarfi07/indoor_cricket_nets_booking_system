import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MyBookingsPage() {
  const bookings = [
    { date: "Oct 19", time: "4:00–5:00 PM", net: "Net 1" },
    { date: "Oct 20", time: "5:00–6:00 PM", net: "Net 2" },
  ]

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
      <div className="space-y-4">
        {bookings.map((b, i) => (
          <Card key={i}>
            <CardHeader>
              <p className="font-medium">{b.date}</p>
            </CardHeader>
            <CardContent className="flex justify-between">
              <span>{b.net}</span>
              <span>{b.time}</span>
              <Button variant="outline" size="sm">Cancel</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
