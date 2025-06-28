
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function TogetherHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 bg-white shadow p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">Together</h1>
        <div className="space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Funding</Button>
          <Button variant="ghost">Community</Button>
          <Button variant="ghost">Resources</Button>
          <Button variant="outline">Login</Button>
        </div>
      </nav>

      <div className="p-6 space-y-10">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Together: India’s Most Powerful Female Founder Network</h2>
          <p className="text-lg max-w-2xl mx-auto">
            From our roots in Goa to WhatsApp groups across the country, Together is your platform to connect, fund, grow, and thrive.
          </p>
          <div className="flex justify-center space-x-4">
            <Button>I’m Looking for Funding</Button>
            <Button variant="outline">Join the Community</Button>
          </div>
        </section>

        {/* Login Section */}
        <section className="bg-gray-100 p-6 rounded-lg text-center space-y-4">
          <h2 className="text-2xl font-semibold">Log In</h2>
          <p>Already a member? Log in to access the community dashboard.</p>
          <div className="space-y-2 max-w-md mx-auto">
            <Input placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Log In</Button>
            <div className="text-sm text-gray-500 underline">Forgot Password?</div>
            <div className="text-sm text-gray-700">or login with</div>
            <div className="flex justify-center gap-4">
              <Button variant="outline">Google</Button>
              <Button variant="outline">LinkedIn</Button>
            </div>
          </div>
        </section>

        {/* Join the Tribe - Linked to Typeform */}
        <section className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
          <h2 className="text-2xl font-semibold">Join the Tribe</h2>
          <p>Enter your startup into our founder database to get discovered and supported.</p>
          <a href="https://form.typeform.com/to/yZKv4xsc" target="_blank" rel="noopener noreferrer">
            <Button className="mt-2">Submit Your Startup on Typeform</Button>
          </a>
        </section>

        {/* Full Dashboard View */}
        <section className="bg-gray-50 p-6 rounded-lg space-y-6">
          <h2 className="text-2xl font-bold text-center">Your Together Dashboard</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Community Updates</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>3 new asks this week</li>
                  <li>5 new members joined your circle</li>
                  <li>New AMA session this Friday</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Funding Matches</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Matched with 2 active VCs</li>
                  <li>Follow-up request from Capital Ventures</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Grants & Perks</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>2 new grants available</li>
                  <li>Startup toolkit discount: AWS + Canva</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button variant="secondary">Explore Full Dashboard</Button>
          </div>
        </section>

        {/* Core Features */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Apply for Funding</h2>
              <p>Tell us about your startup, and we'll help connect you with relevant investors.</p>
              <Button variant="secondary">Start Application</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Ask the Community</h2>
              <p>Post a question and get help from fellow founders.</p>
              <Button variant="secondary">View Board</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Join WhatsApp Alerts</h2>
              <p>Sign up to receive grant alerts, opportunities, and event invites.</p>
              <Input placeholder="Your Phone Number" />
              <Button variant="secondary">Join Group</Button>
            </CardContent>
          </Card>
        </section>

        {/* Directory Preview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">Founder Directory (Coming Soon)</h2>
          <p className="text-center max-w-xl mx-auto">
            A searchable network of founders across sectors, cities, and stages.
          </p>
        </section>

        {/* Wall of Wins */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">Wall of Wins</h2>
          <p className="text-center">Read uplifting stories from your fellow founders.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Card><CardContent className="p-4">Just raised my seed round 🚀</CardContent></Card>
            <Card><CardContent className="p-4">Got into an international accelerator ✨</CardContent></Card>
            <Card><CardContent className="p-4">Launched my MVP! 💥</CardContent></Card>
          </div>
        </section>

        {/* Admin Panel Preview */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Admin Panel (Restricted Access)</h2>
          <p>Review submissions, approve member applications, and manage content.</p>
          <Button variant="outline">Go to Admin Dashboard</Button>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 pt-10 border-t mt-10">
          © 2025 Together | Built to champion female founders
        </footer>
      </div>
    </div>
  );
}
