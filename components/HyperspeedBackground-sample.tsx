
'use client';

import Link from 'next/link';
import HyperspeedBackground from './HyperspeedBackground';

export default function HeroSectionSample() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black pt-20 overflow-hidden">
      <HyperspeedBackground />
      <div className="relative z-10 container mx-auto px-6 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-3xl border border-blue-500/20 p-12">
            <h1 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight tracking-wide">
              데이터 기반 맞춤형 혁신
              <span className="block text-blue-400 font-normal mt-2">
                브랜즈모어 AI
              </span>
            </h1>
            <p className="text-sm md:text-lg text-gray-300 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              임원진을 위한 실무형 AI 리더십 교육과<br />
              기업 맞춤형 RAG 솔루션으로 미래를 선도합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/rag-solution" 
                className="px-8 py-4 bg-blue-600/80 hover:bg-blue-600 text-white text-sm rounded-2xl border border-blue-500/50 backdrop-blur-sm transition-all duration-300 font-normal whitespace-nowrap cursor-pointer transform hover:scale-105 pointer-events-auto"
              >
                AI RAG 시작하기
              </Link>
              <Link 
                href="/onboarding-ai" 
                className="px-8 py-4 bg-transparent hover:bg-white/10 text-white text-sm rounded-2xl border border-white/30 backdrop-blur-sm transition-all duration-300 font-normal whitespace-nowrap cursor-pointer transform hover:scale-105 pointer-events-auto"
              >
                AI 온보딩 체험하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
