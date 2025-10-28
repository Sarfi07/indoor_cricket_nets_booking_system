import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ResponsiveMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="w-18 h-8">
          <Menu className="w-12 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-6 space-y-4 text-white bg-gray-800">
        <nav className="flex flex-col gap-4 text-lg">
          <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/book" onClick={() => setOpen(false)}>Book Now</Link>
          <Link to="/my-bookings" onClick={() => setOpen(false)}>My Bookings</Link>
          <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>
        </nav>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" asChild>
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
