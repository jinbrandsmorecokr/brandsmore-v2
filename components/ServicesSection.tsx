
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-brain-line',
      title: 'AI RAG',
      description: 'Build customized knowledge assistants for enterprises, providing intelligent chatbots and compliance Q&A systems using internal data.',
      features: ['Custom Knowledge Base', 'FAQ Chatbot', 'Compliance Support'],
      link: '/rag-solution'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'AI Education',
      description: 'Exclusive AI practical training for executives of listed companies and large corporations, learning enterprise-wide AI utilization strategies through the latest generative AI and RAG architecture practices.',
      features: ['C-Level Custom Training', 'Practical Case Studies', 'AI Strategy Roadmap'],
      link: '/ai-education'
    },
    {
      icon: 'ri-health-book-line',
      title: 'AI K-Medical',
      description: 'AI matching service for Korea\'s top-tier beauty and medical services for global customers, providing 24-hour multilingual consultation and reservation services.',
      features: ['AI Hospital Matching', 'Multilingual Consultation', 'Integrated Booking'],
      link: '/k-medical'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-8 inline-block">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-3">
              Core Services
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto font-light">
              Discover new possibilities for your business through AI innovation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-100 rounded-3xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-8 h-full transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-2xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] mb-6 mx-auto">
                  <i className={`${service.icon} text-2xl text-gray-600`}></i>
                </div>

                <h3 className="text-lg font-normal text-gray-800 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm font-light text-center">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-gray-600 text-sm">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.2)]"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-gray-700 text-sm font-normal group-hover:text-gray-900 transition-colors duration-300 whitespace-nowrap cursor-pointer px-6 py-3 bg-gray-100 rounded-xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] hover:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]"
                  >
                    Learn More
                    <i className="ri-arrow-right-line ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
