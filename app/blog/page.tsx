
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'ai-insights', name: 'AI Insights', count: 8 },
    { id: 'technology', name: 'Technology', count: 6 },
    { id: 'healthcare', name: 'Healthcare', count: 5 },
    { id: 'education', name: 'Education', count: 5 }
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt: "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnosis to treatment, and what it means for patients and healthcare providers.",
    author: "Dr. Sarah Kim",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "healthcare",
    image: "https://readdy.ai/api/search-image?query=Modern%20AI%20healthcare%20technology%20in%20hospital%20setting%2C%20medical%20professionals%20using%20advanced%20AI%20systems%2C%20futuristic%20medical%20equipment%2C%20clean%20bright%20medical%20environment&width=800&height=400&seq=blog_featured_1&orientation=landscape",
    featured: true
  };

  const posts = [
    {
      id: 2,
      title: "RAG Systems: The Next Evolution in Enterprise Knowledge Management",
      excerpt: "Learn how Retrieval-Augmented Generation is transforming how organizations access and utilize their vast knowledge repositories.",
      author: "Michael Park",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "ai-insights",
      image: "https://readdy.ai/api/search-image?query=Professional%20office%20worker%20using%20RAG%20knowledge%20management%20system%2C%20modern%20corporate%20workspace%2C%20intelligent%20document%20retrieval%20interface%2C%20clean%20business%20environment&width=400&height=250&seq=blog_rag_1&orientation=landscape"
    },
    {
      id: 3,
      title: "Personalized Learning: How AI is Reshaping Education",
      excerpt: "Discover the impact of AI-powered personalized learning platforms on student engagement and educational outcomes.",
      author: "Emily Chen",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "education",
      image: "https://readdy.ai/api/search-image?query=Students%20using%20AI-powered%20personalized%20learning%20platform%20in%20modern%20classroom%2C%20educational%20technology%20interaction%2C%20engaged%20learning%20environment&width=400&height=250&seq=blog_education_1&orientation=landscape"
    },
    {
      id: 4,
      title: "Machine Learning Ethics: Building Responsible AI Systems",
      excerpt: "Exploring the ethical considerations and best practices for developing AI systems that are fair, transparent, and accountable.",
      author: "Dr. James Wilson",
      date: "January 8, 2025",
      readTime: "9 min read",
      category: "ai-insights",
      image: "https://readdy.ai/api/search-image?query=AI%20ethics%20and%20responsible%20machine%20learning%20concept%2C%20diverse%20team%20of%20researchers%20discussing%20AI%20guidelines%2C%20modern%20tech%20office%20setting&width=400&height=250&seq=blog_ethics_1&orientation=landscape"
    },
    {
      id: 5,
      title: "The Rise of No-Code AI: Democratizing Artificial Intelligence",
      excerpt: "How no-code AI platforms are making artificial intelligence accessible to businesses of all sizes and technical capabilities.",
      author: "Lisa Kim",
      date: "January 5, 2025",
      readTime: "5 min read",
      category: "technology",
      image: "https://readdy.ai/api/search-image?query=Business%20professionals%20using%20no-code%20AI%20platform%20interface%2C%20simple%20drag-and-drop%20AI%20tools%2C%20modern%20office%20workspace%2C%20user-friendly%20technology&width=400&height=250&seq=blog_nocode_1&orientation=landscape"
    },
    {
      id: 6,
      title: "AI in Medical Diagnosis: Accuracy and Innovation",
      excerpt: "Examining the latest breakthroughs in AI-powered medical diagnosis and their impact on healthcare accuracy and efficiency.",
      author: "Dr. Robert Lee",
      date: "January 3, 2025",
      readTime: "8 min read",
      category: "healthcare",
      image: "https://readdy.ai/api/search-image?query=Medical%20professional%20using%20AI%20diagnosis%20system%2C%20advanced%20medical%20imaging%20analysis%2C%20modern%20hospital%20radiology%20department%2C%20healthcare%20technology&width=400&height=250&seq=blog_diagnosis_1&orientation=landscape"
    },
    {
      id: 7,
      title: "Natural Language Processing: Understanding Human Communication",
      excerpt: "Deep dive into how NLP technologies are improving human-computer interaction and enabling more intuitive AI systems.",
      author: "Anna Park",
      date: "December 30, 2024",
      readTime: "6 min read",
      category: "technology",
      image: "https://readdy.ai/api/search-image?query=Natural%20language%20processing%20visualization%2C%20AI%20understanding%20human%20speech%20patterns%2C%20modern%20tech%20interface%20showing%20language%20analysis&width=400&height=250&seq=blog_nlp_1&orientation=landscape"
    },
    {
      id: 8,
      title: "Adaptive Learning Algorithms in Online Education",
      excerpt: "How adaptive learning algorithms are personalizing online education experiences and improving student outcomes.",
      author: "Kevin Wong",
      date: "December 28, 2024",
      readTime: "7 min read",
      category: "education",
      image: "https://readdy.ai/api/search-image?query=Online%20education%20platform%20with%20adaptive%20learning%20interface%2C%20student%20engaged%20with%20personalized%20learning%20content%2C%20modern%20digital%20classroom&width=400&height=250&seq=blog_adaptive_1&orientation=landscape"
    },
    {
      id: 9,
      title: "Data Privacy in AI: Protecting User Information",
      excerpt: "Essential strategies for maintaining data privacy and security while developing and deploying AI applications.",
      author: "Jennifer Chang",
      date: "December 25, 2024",
      readTime: "8 min read",
      category: "ai-insights",
      image: "https://readdy.ai/api/search-image?query=Data%20privacy%20and%20security%20concept%20in%20AI%20systems%2C%20secure%20digital%20vault%20with%20encrypted%20data%2C%20cybersecurity%20professional%20monitoring%20systems&width=400&height=250&seq=blog_privacy_1&orientation=landscape"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              AI Insights & 
              <span className="font-normal"> Innovation</span>
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and breakthroughs in artificial intelligence and technology.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-normal whitespace-nowrap cursor-pointer transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gray-100 text-gray-800 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]'
                      : 'bg-gray-100 text-gray-600 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] hover:shadow-[1px_1px_2px_rgba(0,0,0,0.1),-1px_-1px_2px_rgba(255,255,255,0.8)]'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-light text-gray-800 mb-4">Featured Article</h2>
            </div>
            <div className="bg-gray-100 rounded-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] overflow-hidden hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto bg-gray-100 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-xs font-light text-gray-500 bg-gray-100 px-3 py-1 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]">
                      {categories.find(c => c.id === featuredPost.category)?.name}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 font-light mb-6">
                    <div className="flex items-center space-x-4">
                      <span>{featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${featuredPost.id}`}
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] hover:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer inline-block"
                  >
                    Read Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-light text-gray-800 mb-4">
                {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] overflow-hidden hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="h-48 bg-gray-100 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-light text-gray-500 bg-gray-100 px-2 py-1 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-normal text-gray-800 mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 font-light mb-4">
                      <div className="flex items-center space-x-2">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-gray-700 text-sm font-normal hover:text-gray-800 transition-colors duration-300"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Stay Updated</h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest AI insights, technology trends, and innovation updates delivered to your inbox.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-2xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light"
                  />
                  <button 
                    type="submit"
                    className="bg-gray-100 text-gray-700 px-6 py-3 rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] hover:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
