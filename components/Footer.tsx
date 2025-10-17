
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
                데이터 기반 개인화 혁신으로 Brandsmore AI와 함께 미래를 창조합니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-gray-800 font-normal mb-4 text-sm">서비스</h4>
              <div className="space-y-3">
                {['AI RAG', 'AI Education', 'AI 온보딩'].map((item, index) => {
                  const links = ['/rag-solution', '/ai-education', '/onboarding-ai'];
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
              <h4 className="text-gray-800 font-normal mb-4 text-sm">회사</h4>
              <div className="space-y-3">
                {['회사소개', '블로그', '문의하기'].map((item, index) => {
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
              <h4 className="text-gray-800 font-normal mb-4 text-sm">연락처</h4>
              <div className="text-gray-600 text-sm space-y-2 font-light">
                <div className="bg-gray-100 rounded-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] p-3">
                  <p>경기도 군포시 군포첨단산업2로22번길 5(부곡동) 5층 501호</p>
                  <p>jin@brandsmore.co.kr</p>
                  <p>010-8373-3720</p>
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
