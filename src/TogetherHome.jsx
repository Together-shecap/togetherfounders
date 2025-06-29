import React from "react";

export default function TogetherHome() {
  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 flex justify-between items-center p-4">
        <div className="text-xl font-bold">Together</div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#about">About</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="https://form.typeform.com/to/yZKv4xsc" target="_blank" rel="noopener noreferrer">Apply</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="pt-24 space-y-24">
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

        {/* Build Your Brand */}
        <section id="brand" className="px-6 py-12 text-center bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Build Your Brand</h2>
          <p className="max-w-2xl mx-auto">From personal storytelling to pitch readiness, Together helps you shape a brand that speaks loud and proud.</p>
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
      </main>

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
