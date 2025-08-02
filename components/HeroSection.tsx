
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-100 rounded-3xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] p-12">
            <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-6 leading-tight tracking-wide">
              Data-Driven Personalized Innovation
              <span className="block text-gray-600 font-normal mt-2">
                Brandsmore AI
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              Leading the future with practical AI leadership education for executives<br />
              and global K-Medical AI agents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/rag-solution" 
                className="px-8 py-4 bg-gray-100 text-gray-700 text-sm rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-200 font-normal whitespace-nowrap cursor-pointer"
              >
                Start AI RAG
              </Link>
              <Link 
                href="/k-medical" 
                className="px-8 py-4 bg-gray-100 text-gray-700 text-sm rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-200 font-normal whitespace-nowrap cursor-pointer"
              >
                Experience AI K-Medical
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
