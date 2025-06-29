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

        {/* What You’ll Find at Together */}
        <section id="features" className="px-6 py-12 text-center">
          <h2 className="text-2xl font-bold mb-6">What You’ll Find at Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-2">Funding Resources</h3>
              <p>Grants, investors, and pitch opportunities curated for female founders.</p>
            </div>
            <div className="p-6 border rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-2">Founder Network</h3>
              <p>Join a trusted network of peers to share, learn, and grow together.</p>
            </div>
            <div className="p-6 border rounded-2xl shadow">
              <h3 className="font-semibold text-lg mb-2">Expert Access</h3>
              <p>Tap into mentors, advisors, and industry experts across domains.</p>
            </div>
          </div>
        </section>

        {/* Join the Tribe */}
        <section className="bg-white p-6 rounded-lg shadow-md text-center space-y-4">
          <h2 className="text-2xl font-semibold">Join the Tribe</h2>
          <p>Enter your startup into our founder database to get discovered and supported.</p>
          <a href="https://form.typeform.com/to/yZKv4xsc" target="_blank" rel="noopener noreferrer">
            <Button className="mt-2">Submit Your Startup on Typeform</Button>
          </a>
        </section>

        {/* Founder Spotlight */}
        <section id="spotlight" className="px-6 py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Founder Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-2xl shadow text-center">
              <img src="/images/founder1.jpg" alt="Founder" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <p className="italic">“Together gave me the courage to go bigger.”</p>
              <h4 className="mt-2 font-semibold">Rhea, EdTech Founder</h4>
            </div>
            <div className="p-6 border rounded-2xl shadow text-center">
              <img src="/images/founder2.jpg" alt="Founder" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <p className="italic">“It’s more than a network—it’s my startup tribe.”</p>
              <h4 className="mt-2 font-semibold">Nimrat, Consumer Brand Founder</h4>
            </div>
          </div>
        </section>

        {/* Podcast Feature */}
        <section id="podcast" className="px-6 py-12 text-center bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">🎧 Podcast Feature</h2>
          <p className="max-w-xl mx-auto mb-4">Meet our 98-year-old founder who started her entrepreneurial journey at 91. Proof that it’s never too late.</p>
          <a href="https://www.youtube.com/watch?v=PMRF2vT37YI" className="inline-block mt-2 text-blue-600 underline" target="_blank">Listen to the episode</a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t p-6 text-center mt-12">
        <p className="text-sm">&copy; 2025 Together. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-500">Instagram</a>
          <a href="#" className="text-blue-500">LinkedIn</a>
          <a href="#" className="text-blue-500">Newsletter</a>
        </div>
      </footer>
    </div>
  );
}
