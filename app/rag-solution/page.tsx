
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RAGSolutionPage() {
  const [activeDemo, setActiveDemo] = useState(0);

  const features = [
    {
      icon: "ri-database-2-line",
      title: "Intelligent Document Processing",
      description: "Advanced AI algorithms automatically extract, analyze, and index information from diverse document formats.",
      image: "https://readdy.ai/api/search-image?query=Professional%20office%20worker%20processing%20documents%20with%20AI%20technology%2C%20modern%20corporate%20workspace%2C%20intelligent%20document%20management%20interface%2C%20clean%20business%20environment&width=500&height=300&seq=rag_processing_1&orientation=landscape"
    },
    {
      icon: "ri-search-2-line",
      title: "Contextual Search & Retrieval",
      description: "Find relevant information instantly with AI-powered semantic search that understands context and intent.",
      image: "https://readdy.ai/api/search-image?query=Business%20professional%20using%20advanced%20search%20interface%2C%20AI-powered%20knowledge%20retrieval%20system%2C%20modern%20office%20setting%2C%20intelligent%20information%20discovery&width=500&height=300&seq=rag_search_1&orientation=landscape"
    },
    {
      icon: "ri-brain-line",
      title: "AI-Generated Insights",
      description: "Generate accurate, contextual responses and summaries based on your organization's knowledge base.",
      image: "https://readdy.ai/api/search-image?query=AI%20insights%20dashboard%20showing%20data%20analysis%20and%20knowledge%20generation%2C%20modern%20business%20intelligence%20interface%2C%20professional%20analytics%20workspace&width=500&height=300&seq=rag_insights_1&orientation=landscape"
    },
    {
      icon: "ri-shield-check-line",
      title: "Enterprise Security",
      description: "Bank-level security ensures your sensitive information remains protected while enabling intelligent access.",
      image: "https://readdy.ai/api/search-image?query=Secure%20enterprise%20data%20center%20with%20advanced%20security%20systems%2C%20protected%20knowledge%20management%20infrastructure%2C%20professional%20IT%20security%20environment&width=500&height=300&seq=rag_security_1&orientation=landscape"
    }
  ];

  const useCases = [
    {
      title: "Legal Document Analysis",
      description: "Quickly analyze contracts, regulations, and case law to support legal decision-making.",
      icon: "ri-scales-3-line",
      benefits: ["95% faster contract review", "Automated compliance checking", "Risk assessment automation"]
    },
    {
      title: "Healthcare Knowledge Management",
      description: "Access medical literature, patient records, and treatment protocols instantly.",
      icon: "ri-heart-pulse-line", 
      benefits: ["Instant medical reference", "Treatment recommendation", "Clinical decision support"]
    },
    {
      title: "Financial Research",
      description: "Analyze market reports, financial statements, and regulatory documents efficiently.",
      icon: "ri-line-chart-line",
      benefits: ["Real-time market insights", "Risk analysis automation", "Compliance monitoring"]
    },
    {
      title: "Technical Documentation",
      description: "Navigate complex technical manuals, specifications, and troubleshooting guides.",
      icon: "ri-tools-line",
      benefits: ["Instant technical support", "Automated troubleshooting", "Knowledge preservation"]
    }
  ];

  const integrations = [
    { name: "Microsoft 365", icon: "ri-microsoft-line" },
    { name: "Google Workspace", icon: "ri-google-line" },
    { name: "Slack", icon: "ri-slack-line" },
    { name: "Salesforce", icon: "ri-customer-service-2-line" },
    { name: "SharePoint", icon: "ri-folder-cloud-line" },
    { name: "Confluence", icon: "ri-book-open-line" }
  ];

  const stats = [
    { number: "10x", label: "Faster Information Retrieval", description: "compared to manual search" },
    { number: "95%", label: "Accuracy Rate", description: "in document analysis" },
    { number: "60%", label: "Time Savings", description: "in knowledge work" },
    { number: "99.9%", label: "Uptime Guarantee", description: "enterprise reliability" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20enterprise%20office%20with%20professionals%20using%20advanced%20AI%20knowledge%20management%20systems%2C%20intelligent%20document%20processing%20interface%2C%20clean%20corporate%20workspace%20with%20RAG%20technology%20integration&width=1920&height=600&seq=rag_hero_1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gray-100/85"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                Unlock Your Organization's Knowledge with 
                <span className="font-normal"> AI RAG Solutions</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                Transform how your team accesses and utilizes information with our Retrieval-Augmented Generation platform. Get instant, accurate answers from your documents, databases, and knowledge repositories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
                >
                  Get Started
                </Link>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6">
                  <div className="text-3xl md:text-4xl font-light text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-sm font-normal text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500 font-light">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Powerful RAG Features</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                Our AI-powered platform combines retrieval and generation capabilities to deliver intelligent, contextual responses.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      onClick={() => setActiveDemo(index)}
                      className={`bg-gray-100 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                        activeDemo === index 
                          ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]' 
                          : 'shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                          <i className={`${feature.icon} text-lg text-gray-700`}></i>
                        </div>
                        <div>
                          <h3 className="text-lg font-normal text-gray-800 mb-2">{feature.title}</h3>
                          <p className="text-gray-600 text-sm font-light leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-8">
                <img 
                  src={features[activeDemo].image}
                  alt={features[activeDemo].title}
                  className="w-full h-64 object-cover object-top rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Industry Applications</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                Discover how different industries leverage our RAG solutions to transform their knowledge management.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mb-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${useCase.icon} text-xl text-gray-700`}></i>
                  </div>
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                        <span className="font-light">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Seamless Integration</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                Connect with your existing tools and platforms for a unified knowledge management experience.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${integration.icon} text-xl text-gray-700`}></i>
                  </div>
                  <p className="text-xs font-light text-gray-600">{integration.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Transform Your Knowledge Management</h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                Ready to unlock the full potential of your organization's information? Start your AI RAG journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer inline-block"
                >
                  Get Started Today
                </Link>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}