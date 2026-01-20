import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"
import { useNavigate } from "react-router-dom"

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="m-20 min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="flex-1 flex flex-col justify-center items-center text-center px-6 md:px-12 py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
          Book Your Cricket Net in Seconds 🏏
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
          Practice when you want, how you want. Choose your slot, pay online, and get instant confirmation.
        </p>
        <Button onClick={() => navigate("/book")} size="lg" className="bg-gray-600 hover:bg-gray-700 text-white text-base sm:text-lg px-6 py-3">
          Book Now
        </Button>
      </motion.section>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-12 bg-gray-100 dark:bg-gray-800" id="features">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
          Why Book With Us?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Easy Booking", desc: "Reserve your slot with just a few taps — simple, quick, and secure." },
            { title: "Flexible Timing", desc: "Book 30 or 60-minute sessions based on your convenience." },
            { title: "Affordable Pricing", desc: "Get the best rates for premium indoor cricket nets." },
          ].map((feature, i) => (
            <Card
              key={i}
              className="hover:shadow-lg transition-all border-gray-100 dark:border-gray-700"
            >
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-gray-700 dark:text-gray-400">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 md:px-12 py-12 bg-white dark:bg-gray-900">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
          Pricing Plans
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {[
            { time: "30 Minutes", price: "₹250", desc: "Quick warm-up or power session." },
            { time: "60 Minutes", price: "₹450", desc: "Perfect for longer practice sessions." },
          ].map((plan, i) => (
            <Card
              key={i}
              className="w-full sm:w-72 text-center hover:shadow-xl transition-all border-gray-200 dark:border-gray-700"
            >
              <CardHeader>
                <CardTitle className="text-xl text-gray-700 dark:text-gray-400">
                  {plan.time}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.desc}</p>
                <Button className="mt-4 bg-gray-600 hover:bg-gray-700 w-full text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
