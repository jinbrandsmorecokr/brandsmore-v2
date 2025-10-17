
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-brain-line',
      title: 'AI RAG',
      description: '기업 내부 데이터를 활용한 맞춤형 지식 어시스턴트 구축, 지능형 챗봇 및 컴플라이언스 Q&A 시스템을 제공합니다.',
      features: ['맞춤형 지식베이스', 'FAQ 챗봇', '컴플라이언스 지원'],
      link: '/rag-solution'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'AI 교육',
      description: '상장기업 및 대기업 임원진을 위한 독점적 AI 실무 교육, 최신 생성형 AI와 RAG 아키텍처 실습을 통한 기업 전반의 AI 활용 전략을 학습합니다.',
      features: ['C-레벨 맞춤 교육', '실무 사례 연구', 'AI 전략 로드맵'],
      link: '/ai-education'
    },
    {
      icon: 'ri-user-add-line',
      title: 'AI 온보딩',
      description: '기업용 AI 온보딩 솔루션으로 신입사원의 빠른 적응과 성장을 지원하는 지능형 인재 육성 플랫폼을 제공합니다.',
      features: ['스마트 온보딩', '개인화 교육', '성과 분석'],
      link: '/onboarding-ai'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-8 inline-block">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-3">
              핵심 서비스
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto font-light">
              AI 혁신을 통해 비즈니스의 새로운 가능성을 발견하세요
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
                    자세히 보기
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
