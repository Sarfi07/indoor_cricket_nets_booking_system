// src/router.tsx
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "@/components/pages/LandingPage";
import Homepage from "@/components/pages/Homepage";
import BookingPage from "@/components/pages/BookingPage";
import MyBookings from "@/components/pages/MyBookingsPage";
import LoginPage from "@/components/pages/LoginPage";
import SignupPage from "@/components/pages/SignupPage";
// import ProtectedLayout from "@/layouts/ProtectedLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* Public Routes */}
      <Route index element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />

      {/* Protected Section */}
        <Route
          path="home"
          element={
            
              <Homepage />
      
          }
        />
        <Route
          path="book"
          element={
            
              <BookingPage />
            
          }
        />
        <Route
          path="my-bookings"
          element={
            
              <MyBookings />
            
          }
        />
        <Route
          path="profile"
          element={
            
              <div>Profile Page - To be implemented</div>
            
          }
        />
      
    </Route>
  )
);

export default router;
