
'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Kim",
      role: "CEO & Co-founder", 
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20businesswoman%20CEO%20in%20modern%20office%20setting%2C%20confident%20smile%2C%20business%20suit%2C%20clean%20minimal%20background%2C%20professional%20headshot%20style%2C%20soft%20lighting&width=300&height=300&seq=about_ceo_1&orientation=squarish",
      bio: "15+ years experience in AI and enterprise solutions"
    },
    {
      name: "David Park",
      role: "CTO & Co-founder",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20tech%20executive%20CTO%20in%20modern%20office%2C%20friendly%20expression%2C%20business%20casual%20attire%2C%20clean%20minimal%20background%2C%20professional%20headshot%20style%2C%20soft%20lighting&width=300&height=300&seq=about_cto_1&orientation=squarish",
      bio: "Former Google AI researcher with PhD in Machine Learning"
    },
    {
      name: "Emily Chen",
      role: "Head of AI Research",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20AI%20researcher%20in%20modern%20lab%20setting%2C%20confident%20smile%2C%20smart%20casual%20attire%2C%20clean%20minimal%20background%2C%20professional%20headshot%20style%2C%20soft%20lighting&width=300&height=300&seq=about_research_1&orientation=squarish",
      bio: "Leading expert in natural language processing and RAG systems"
    },
    {
      name: "Michael Lee",
      role: "Head of Product",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20product%20manager%20in%20modern%20office%2C%20approachable%20smile%2C%20business%20casual%20shirt%2C%20clean%20minimal%20background%2C%20professional%20headshot%20style%2C%20soft%20lighting&width=300&height=300&seq=about_product_1&orientation=squarish",
      bio: "Product strategy expert with focus on AI-driven solutions"
    }
  ];

  const values = [
    {
      icon: "ri-lightbulb-line",
      title: "Innovation",
      description: "We constantly push the boundaries of AI technology to solve real-world problems."
    },
    {
      icon: "ri-shield-check-line", 
      title: "Trust & Security",
      description: "Your data security and privacy are our top priorities in every solution we build."
    },
    {
      icon: "ri-team-line",
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and challenges."
    },
    {
      icon: "ri-trophy-line",
      title: "Excellence",
      description: "We strive for excellence in every aspect of our AI solutions and customer service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center bg-gray-100"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20AI%20technology%20office%20space%20with%20clean%20minimalist%20design%2C%20soft%20natural%20lighting%2C%20people%20collaborating%20on%20AI%20projects%2C%20futuristic%20workspace%2C%20light%20gray%20and%20white%20color%20scheme%2C%20professional%20corporate%20environment&width=1920&height=600&seq=about_hero_1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gray-100/80"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                Building the Future with 
                <span className="font-normal"> AI Innovation</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                At Brandsmore, we're pioneering the next generation of AI solutions that transform how businesses operate, learn, and grow. Our mission is to make advanced AI technology accessible and practical for organizations of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
                >
                  Get In Touch
                </Link>
                <Link 
                  href="/blog"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">Our Story</h2>
                <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                  <p>
                    Founded in 2020, Brandsmore emerged from a simple yet powerful vision: to democratize access to cutting-edge AI technology. Our founders, having worked at leading tech companies, recognized that many organizations struggled to implement AI solutions effectively.
                  </p>
                  <p>
                    Today, we specialize in three core areas: RAG (Retrieval-Augmented Generation) solutions for intelligent document processing, AI-powered education platforms that personalize learning experiences, and K-Medical AI systems that revolutionize healthcare delivery in Korea.
                  </p>
                  <p>
                    With a team of world-class researchers and engineers, we've successfully deployed AI solutions for over 200 organizations across various industries, helping them unlock new levels of efficiency and innovation.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-8">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20AI%20research%20team%20working%20together%20in%20bright%20office%20space%2C%20diverse%20professionals%20collaborating%20on%20computer%20screens%2C%20clean%20minimal%20workspace%2C%20natural%20lighting%2C%20professional%20corporate%20setting&width=600&height=400&seq=about_story_1&orientation=landscape"
                  alt="Our team working together"
                  className="w-full h-64 object-cover object-top rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Our Values</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                These core values guide everything we do and shape how we build AI solutions for the future.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mb-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${value.icon} text-xl text-gray-700`}></i>
                  </div>
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                Our diverse team of experts combines deep technical knowledge with real-world business experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 rounded-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3 className="text-lg font-normal text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 font-light">{member.role}</p>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                Join the growing number of organizations that trust Brandsmore to deliver innovative AI solutions.
              </p>
              <Link 
                href="/contact"
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer inline-block"
              >
                Start Your AI Journey
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
