
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-['Pacifico'] text-gray-800 mb-4">Brandsmore</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                Data-driven personalized innovation, creating the future with Brandsmore AI.
              </p>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-normal mb-4 text-sm">Services</h4>
              <div className="space-y-3">
                {['AI RAG', 'AI Education', 'AI K-Medical'].map((item, index) => {
                  const links = ['/rag-solution', '/ai-education', '/k-medical'];
                  return (
                    <Link 
                      key={index}
                      href={links[index]} 
                      className="block text-gray-600 hover:text-gray-800 text-sm transition-colors duration-300 font-light px-3 py-2 rounded-lg bg-gray-100 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] hover:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]"
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-normal mb-4 text-sm">Company</h4>
              <div className="space-y-3">
                {['About', 'Blog', 'Contact'].map((item, index) => {
                  const links = ['/about', '/blog', '/contact'];
                  return (
                    <Link 
                      key={index}
                      href={links[index]} 
                      className="block text-gray-600 hover:text-gray-800 text-sm transition-colors duration-300 font-light px-3 py-2 rounded-lg bg-gray-100 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] hover:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]"
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-normal mb-4 text-sm">Contact</h4>
              <div className="text-gray-600 text-sm space-y-2 font-light">
                <div className="bg-gray-100 rounded-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] p-3">
                  <p>Seoul, Gangnam-gu</p>
                  <p>contact@brandsmore.ai</p>
                  <p>+82-2-1234-5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm font-light">
            2025 Brandsmore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
