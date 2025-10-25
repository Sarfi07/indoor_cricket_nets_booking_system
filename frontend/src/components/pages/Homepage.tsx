
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
Card,
CardContent,
CardHeader,
CardTitle,
CardDescription,
CardFooter,
} from "@/components/ui/card";

export default function Homepage(){
return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Hero */}
        <header className="container mx-auto px-6 py-12 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-4">
                <Avatar>
                    <AvatarImage src="/logo.png" alt="logo" />
                    <AvatarFallback>IC</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-2xl font-bold">Indoor Cricket Nets</h1>
                    <p className="text-sm text-muted-foreground">Book your practice nets in seconds</p>
                </div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Practice whenever you want
            </h2>
            <p className="max-w-2xl text-muted-foreground mb-6">
                Quickly find available slots, invite teammates, and manage bookings — all in one simple app.
            </p>

            <div className="flex gap-3">
                <Button variant="default">Get Started</Button>
                <Button variant="ghost">View Pricing</Button>
            </div>
        </header>

        <Separator />

        {/* Features */}
        <main className="container mx-auto px-6 py-10 grid gap-8 grid-cols-1 md:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle>Easy Booking</CardTitle>
                    <CardDescription>Reserve nets in a couple of clicks.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Choose date, time and net. Get instant confirmation and reminders.
                    </p>
                </CardContent>
                <CardFooter>
                    <Badge>Fast</Badge>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Team Management</CardTitle>
                    <CardDescription>Invite players and split payments.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Keep squads together, share bookings, and track attendance.
                    </p>
                </CardContent>
                <CardFooter>
                    <Badge>Collaborative</Badge>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Flexible Slots</CardTitle>
                    <CardDescription>Multiple time windows and plans.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Book short practice sessions or longer training blocks.
                    </p>
                </CardContent>
                <CardFooter>
                    <Badge>Flexible</Badge>
                </CardFooter>
            </Card>
        </main>

        <Separator />

        {/* Newsletter / Contact */}
        <section className="container mx-auto px-6 py-10">
            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle>Stay in the loop</CardTitle>
                    <CardDescription>Join our mailing list for updates and offers.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            // wire up submission later
                        }}
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

        <footer className="mt-auto py-6 bg-slate-100">
            <div className="container mx-auto px-6 text-sm text-muted-foreground flex items-center justify-between">
                <span>© {new Date().getFullYear()} Indoor Cricket Nets</span>
                <span>Built with shadcn/ui + Tailwind</span>
            </div>
        </footer>
    </div>
);
}