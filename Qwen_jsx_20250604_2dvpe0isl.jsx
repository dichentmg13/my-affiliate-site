import { useState, useEffect } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  // Mock blog posts and trending offers
  const blogPosts = [
    {
      title: "How I Made $5K in My First Month with AI Side Hustles",
      excerpt: "Discover how Gen Z is using simple AI tools to build income streams without any coding or technical skills.",
      category: "AI Side Hustles",
      image: "https://picsum.photos/400/250?random=1",
    },
    {
      title: "Passive Income on Autopilot: YouTube Automation Secrets Revealed",
      excerpt: "Learn the step-by-step process to launch a faceless YouTube channel that earns while you sleep.",
      category: "YouTube Automation",
      image: "https://picsum.photos/400/250?random=2",
    },
    {
      title: "Top 5 Work-From-Home Jobs for Beginners in 2025",
      excerpt: "No experience needed. These entry-level online jobs can get you started earning fast.",
      category: "Remote Jobs",
      image: "https://picsum.photos/400/250?random=3",
    },
    {
      title: "Affiliate Marketing Mastery: How to Earn Commissions Without Followers",
      excerpt: "A beginner’s guide to promoting digital products and earning high-ticket commissions.",
      category: "Affiliate Marketing",
      image: "https://picsum.photos/400/250?random=4",
    },
  ];

  const trendingOffers = [
    {
      name: "AI Productivity Tool Suite",
      description: "Create content, manage tasks, and boost your income with smart automation.",
      cta: "Try Free",
      link: "#", 
      badge: "Popular"
    },
    {
      name: "Dropshipping Course for Beginners",
      description: "Step-by-step system to start an e-commerce store with zero inventory.",
      cta: "Start Now",
      link: "#",
      badge: "Trending"
    },
    {
      name: "Digital Product Creator Kit",
      description: "Templates, tools, and guides to sell info-products and courses online.",
      cta: "Get Access",
      link: "#",
      badge: "New"
    },
    {
      name: "Freelancing Blueprint",
      description: "Land high-paying clients on Upwork, Fiverr, and LinkedIn — no portfolio needed.",
      cta: "Join Today",
      link: "#",
      badge: "Top Rated"
    },
  ];

  const testimonials = [
    {
      name: "Alex R.",
      location: "Austin, TX",
      text: "I went from working a dead-end job to making over $3k/month online. This site changed my life!",
      rating: 5
    },
    {
      name: "Maya L.",
      location: "Toronto, CA",
      text: "The affiliate marketing tips helped me earn my first $1k online. Totally recommend this for beginners.",
      rating: 5
    },
    {
      name: "Jordan T.",
      location: "Manchester, UK",
      text: "Finally, real strategies that work. I built my first AI side hustle in under a week.",
      rating: 4
    },
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* SEO Meta Tags */}
      <meta charSet="UTF-8" />
      <title>Make Money Online 2025 | Remote Income Strategies for Gen Z & Millennials</title>
      <meta name="description" content="Learn proven remote income strategies like AI side hustles, YouTube automation, dropshipping, affiliate marketing, and freelancing. Ideal for unemployed or underpaid young adults seeking financial freedom." />
      <meta name="keywords" content="make money online, remote income 2025, AI business ideas, financial freedom for beginners, work-from-home jobs with no skills" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">IncomeNest</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#strategies" className="text-gray-700 hover:text-indigo-600 transition">Strategies</a>
            <a href="#blog" className="text-gray-700 hover:text-indigo-600 transition">Blog</a>
            <a href="#offers" className="text-gray-700 hover:text-indigo-600 transition">Trending Offers</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition">Testimonials</a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <a href="#strategies" className="text-gray-700 hover:text-indigo-600 transition py-1">Strategies</a>
              <a href="#blog" className="text-gray-700 hover:text-indigo-600 transition py-1">Blog</a>
              <a href="#offers" className="text-gray-700 hover:text-indigo-600 transition py-1">Trending Offers</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition py-1">Testimonials</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Financial Freedom Starts Here<br />for Gen Z & Millennials
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Discover low-barrier, high-income strategies like AI side hustles, YouTube automation, dropshipping, and more.
          </p>
          <a href="#offers" className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105 duration-300">
            Explore Top Offers →
          </a>
        </div>
      </section>

      {/* Strategies Section */}
      <section id="strategies" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            High-Demand Online Income Models
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StrategyCard
              title="AI Side Hustles"
              description="Leverage cutting-edge AI tools to automate content creation, customer service, and more."
              icon={<AiIcon />}
            />
            <StrategyCard
              title="Faceless YouTube Automation"
              description="Build passive income through automated YouTube channels without showing your face."
              icon={<YoutubeIcon />}
            />
            <StrategyCard
              title="Affiliate Marketing"
              description="Promote high-ticket digital products and earn generous commissions."
              icon={<AffiliateIcon />}
            />
            <StrategyCard
              title="Dropshipping"
              description="Start an e-commerce business with zero inventory or upfront costs."
              icon={<EcommerceIcon />}
            />
            <StrategyCard
              title="Digital Product Creation"
              description="Sell templates, courses, and downloadable resources to a global audience."
              icon={<ProductIcon />}
            />
            <StrategyCard
              title="Freelancing"
              description="Monetize your skills on platforms like Upwork, Fiverr, and Toptal."
              icon={<FreelanceIcon />}
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            Viral Blog Posts & Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-3">{post.category}</span>
                  <h4 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h4>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-indigo-600 font-medium hover:underline inline-flex items-center">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Join 200,000+ Readers Earning Online
          </h3>
          <p className="max-w-xl mx-auto mb-8 text-gray-600">
            Get exclusive strategies, case studies, and trending offers delivered straight to your inbox.
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Trending Offers */}
      <section id="offers" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            Trending Offers & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trendingOffers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
            Real Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Your Remote Income?
          </h3>
          <p className="max-w-xl mx-auto mb-6 opacity-90">
            Start today with our handpicked strategies and tools designed for Gen Z and Millennials.
          </p>
          <a href="#offers" className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105 duration-300">
            View All Offers →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">IncomeNest</h4>
              <p className="text-gray-400">Your roadmap to remote income and financial freedom.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#strategies" className="hover:text-white transition">Strategies</a></li>
                <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
                <li><a href="#offers" className="hover:text-white transition">Offers</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Beginner's Guide</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition">Tools & Templates</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook Group</a></li>
                <li><a href="#" className="hover:text-white transition">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} IncomeNest. All rights reserved. | Designed for Gen Z & Millennials seeking remote income.
          </div>
        </div>
      </footer>
    </div>
  );
}

// Strategy Card Component
function StrategyCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="mb-4 text-indigo-600">{icon}</div>
      <h4 className="text-xl font-bold mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Offer Card Component
function OfferCard({ name, description, cta, link, badge }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition relative">
      <div className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
        {badge}
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2 text-gray-800">{name}</h4>
        <p className="text-gray-600 mb-6">{description}</p>
        <a href={link} className="block text-center bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition">
          {cta}
        </a>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ name, location, text, rating }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      <p className="font-semibold text-gray-800">{name}, <span className="text-gray-500">{location}</span></p>
    </div>
  );
}

// SVG Icons
function AiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12" y2="17"></line>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
      <path d="M10 8v8l7-4z"></path>
    </svg>
  );
}

function AffiliateIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}

function EcommerceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  );
}

function ProductIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

function FreelanceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );
}