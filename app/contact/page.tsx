
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const services = [
    { value: 'ai-rag', label: 'AI RAG Solution' },
    { value: 'ai-education', label: 'AI Education Platform' },
    { value: 'k-medical', label: 'K-Medical AI' },
    { value: 'consultation', label: 'AI Consultation' },
    { value: 'other', label: 'Other Services' }
  ];

  const contactInfo = [
    {
      icon: 'ri-map-pin-line',
      title: 'Our Office',
      details: ['123 Gangnam-daero, Gangnam-gu', 'Seoul, South Korea 06236'],
      link: '#'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      details: ['contact@brandsmore.ai', 'support@brandsmore.ai'],
      link: 'mailto:contact@brandsmore.ai'
    },
    {
      icon: 'ri-phone-line',
      title: 'Call Us',
      details: ['+82-2-1234-5678', 'Mon-Fri 9AM-6PM KST'],
      link: 'tel:+82-2-1234-5678'
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Kim",
      role: "CEO & Co-founder",
      email: "sarah.kim@brandsmore.ai",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20businesswoman%20CEO%20in%20modern%20office%2C%20confident%20and%20approachable%2C%20business%20attire%2C%20professional%20headshot%20for%20contact%20page&width=200&height=200&seq=contact_ceo_1&orientation=squarish"
    },
    {
      name: "David Park",
      role: "CTO & Co-founder",
      email: "david.park@brandsmore.ai",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20tech%20executive%20CTO%2C%20friendly%20and%20technical%20expertise%2C%20business%20casual%2C%20professional%20headshot%20for%20contact%20page&width=200&height=200&seq=contact_cto_1&orientation=squarish"
    },
    {
      name: "Emily Chen",
      role: "Head of Sales",
      email: "emily.chen@brandsmore.ai",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20sales%20executive%2C%20warm%20and%20welcoming%20expression%2C%20business%20attire%2C%20professional%20headshot%20for%20contact%20page&width=200&height=200&seq=contact_sales_1&orientation=squarish"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Get In Touch with 
              <span className="font-normal"> Our Team</span>
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Ready to transform your business with AI? Contact us to discuss your needs and discover how our solutions can help you achieve your goals.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-100 rounded-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-8">
                <h2 className="text-2xl font-light text-gray-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-normal text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-normal text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-normal text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-normal text-gray-700 mb-2">Service Interest</label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-gray-100 text-gray-700 px-4 py-3 pr-8 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light appearance-none"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-500"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    />
                    <div className="text-xs text-gray-500 mt-1 font-light">
                      {formData.message.length}/500 characters
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || formData.message.length > 500}
                    className={`w-full py-4 rounded-2xl font-normal whitespace-nowrap cursor-pointer transition-all duration-300 ${
                      isSubmitting || formData.message.length > 500
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="text-center p-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                      <p className="text-gray-700 font-normal"> Thank you! Your message has been sent successfully.</p>
                      <p className="text-gray-600 text-sm font-light mt-1">We'll get back to you within 24 hours.</p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-light text-gray-800 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                          <i className={`${info.icon} text-lg text-gray-700`}></i>
                        </div>
                        <div>
                          <h3 className="text-lg font-normal text-gray-800 mb-2">{info.title}</h3>
                          {info.details.map((detail, dIndex) => (
                            <p key={dIndex} className="text-gray-600 text-sm font-light">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 mt-6">
                  <h3 className="text-lg font-normal text-gray-800 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm text-gray-600 font-light">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                Get to know the experts behind Brandsmore's innovative AI solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg font-normal text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 font-light">{member.role}</p>
                  <Link 
                    href={`mailto:${member.email}`}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300 font-light"
                  >
                    {member.email}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Visit Our Office</h2>
              <p className="text-gray-600 font-light">
                Located in the heart of Gangnam, Seoul's tech district
              </p>
            </div>
            <div className="bg-gray-100 rounded-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.0145935374234!2d127.0276316!3d37.4979462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1575e622d51%3A0x9b8a9e0a1d5c9a5e!2sGangnam-gu%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2skr!4v1642000000000!5m2!1sen!2skr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 font-light">
                Quick answers to common questions about our AI solutions
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[{
                question: "How long does it take to implement your AI solutions?",
                answer: "Implementation time varies depending on the complexity and scope of your project. Typically, our RAG solutions can be deployed within 2-4 weeks, while education platforms take 4-8 weeks, and medical AI solutions require 8-12 weeks for full deployment."
              },
              {
                question: "Do you provide training and support?",
                answer: "Yes, we provide comprehensive training for your team and ongoing support. This includes initial setup training, user documentation, and 24/7 technical support for critical systems."
              },
              {
                question: "Can your solutions integrate with existing systems?",
                answer: "Absolutely. Our AI solutions are designed to integrate seamlessly with existing enterprise systems through APIs and custom connectors. We work closely with your IT team to ensure smooth integration."
              },
              {
                question: "What about data security and privacy?",
                answer: "Data security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance with international standards like GDPR, HIPAA, and local Korean regulations."
              }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6">
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
