
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-['Pacifico'] text-gray-800 mb-0"
          >
            Brandsmore
          </Link>
          
          <nav className="hidden md:flex items-center space-x-2">
            {['회사소개', 'AI RAG', 'AI 교육', 'AI K-메디컬', '블로그', '문의하기'].map((item, index) => {
              const links = ['/about', '/rag-solution', '/ai-education', '/k-medical', '/blog', '/contact'];
              return (
                <Link 
                  key={index}
                  href={links[index]} 
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-normal px-4 py-2 rounded-xl bg-gray-100 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] hover:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8])"
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] hover:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-200"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-lg`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-100 rounded-2xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] p-4">
            <nav className="flex flex-col space-y-2">
              {['회사소개', 'AI RAG', 'AI 교육', 'AI K-메디컬', '블로그', '문의하기'].map((item, index) => {
                const links = ['/about', '/rag-solution', '/ai-education', '/k-medical', '/blog', '/contact'];
                return (
                  <Link 
                    key={index}
                    href={links[index]} 
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm font-normal px-4 py-3 rounded-xl bg-gray-100 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] hover:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]"
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
