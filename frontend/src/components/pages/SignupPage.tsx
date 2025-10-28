import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[380px]">
        <CardHeader>
          <h2 className="text-xl font-bold">Sign Up</h2>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button>Sign Up</Button>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
