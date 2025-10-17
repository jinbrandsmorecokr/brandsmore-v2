
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/BL-SVG-hor-blue-01.png"
              alt="브랜즈모어"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
              회사소개
            </Link>
            <Link href="/rag-solution" className="text-gray-600 hover:text-gray-800 transition-colors">
              AI RAG
            </Link>
            <Link href="/ai-education" className="text-gray-600 hover:text-gray-800 transition-colors">
              AI 교육
            </Link>
            <Link href="/onboarding-ai" className="text-gray-600 hover:text-gray-800 transition-colors">
              온보딩 AI
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-800 transition-colors">
              블로그
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
              문의하기
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
                회사소개
              </Link>
              <Link href="/rag-solution" className="text-gray-600 hover:text-gray-800 transition-colors">
                AI RAG
              </Link>
              <Link href="/ai-education" className="text-gray-600 hover:text-gray-800 transition-colors">
                AI 교육
              </Link>
              <Link href="/onboarding-ai" className="text-gray-600 hover:text-gray-800 transition-colors">
                온보딩 AI
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-800 transition-colors">
                블로그
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                문의하기
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
