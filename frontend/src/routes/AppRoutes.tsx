import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LandingPage from "@/components/pages/LandingPage";
import Homepage from "@/components/pages/Homepage";
import BookingPage from "@/components/pages/BookingPage";
import MyBookings from "@/components/pages/MyBookingsPage";
import LoginPage from "@/components/pages/LoginPage";
import SignupPage from "@/components/pages/SignupPage";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/">
        <Route index element={<LandingPage />} />
        <Route path="home" element={<Homepage />} />
        <Route path="book" element={<BookingPage />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="profile" element={<div>Profile Page - To be implemented</div>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />  
      </Route>
    )
);

export default router;