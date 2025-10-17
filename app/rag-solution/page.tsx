'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function RAGSolutionPage() {
  const [activeDemo, setActiveDemo] = useState(0);

  const features = [
    {
      icon: "ri-database-2-line",
      title: "지능형 문서 처리",
      description: "고급 AI 알고리즘이 다양한 문서 형식에서 정보를 자동으로 추출, 분석 및 색인화합니다.",
      image: "https://readdy.ai/api/search-image?query=Professional%20office%20worker%20processing%20documents%20with%20AI%20technology%2C%20modern%20corporate%20workspace%2C%20intelligent%20document%20management%20interface%2C%20clean%20business%20environment&width=500&height=300&seq=rag_processing_1&orientation=landscape"
    },
    {
      icon: "ri-search-2-line",
      title: "맥락적 검색 및 검색",
      description: "맥락과 의도를 이해하는 AI 기반 의미 검색으로 관련 정보를 즉시 찾아보세요.",
      image: "https://readdy.ai/api/search-image?query=Business%20professional%20using%20advanced%20search%20interface%2C%20AI-powered%20knowledge%20retrieval%20system%2C%20modern%20office%20setting%2C%20intelligent%20information%20discovery&width=500&height=300&seq=rag_search_1&orientation=landscape"
    },
    {
      icon: "ri-brain-line",
      title: "AI 생성 인사이트",
      description: "조직의 지식 베이스를 기반으로 정확하고 맥락적인 응답과 요약을 생성합니다.",
      image: "https://readdy.ai/api/search-image?query=AI%20insights%20dashboard%20showing%20data%20analysis%20and%20knowledge%20generation%2C%20modern%20business%20intelligence%20interface%2C%20professional%20analytics%20workspace&width=500&height=300&seq=rag_insights_1&orientation=landscape"
    },
    {
      icon: "ri-shield-check-line",
      title: "기업급 보안",
      description: "은행 수준의 보안으로 민감한 정보를 보호하면서 지능적인 액세스를 가능하게 합니다.",
      image: "https://readdy.ai/api/search-image?query=Secure%20enterprise%20data%20center%20with%20advanced%20security%20systems%2C%20protected%20knowledge%20management%20infrastructure%2C%20professional%20IT%20security%20environment&width=500&height=300&seq=rag_security_1&orientation=landscape"
    }
  ];

  const useCases = [
    {
      title: "법률 문서 분석",
      description: "계약서, 규정, 판례법을 신속하게 분석하여 법적 의사결정을 지원합니다.",
      icon: "ri-scales-3-line",
      benefits: ["95% 빠른 계약 검토", "자동화된 컴플라이언스 확인", "위험 평가 자동화"]
    },
    {
      title: "의료 지식 관리",
      description: "의학 문헌, 환자 기록, 치료 프로토콜에 즉시 액세스할 수 있습니다.",
      icon: "ri-heart-pulse-line", 
      benefits: ["즉시 의료 참조", "치료 권장사항", "임상 의사결정 지원"]
    },
    {
      title: "금융 연구",
      description: "시장 보고서, 재무제표, 규제 문서를 효율적으로 분석합니다.",
      icon: "ri-line-chart-line",
      benefits: ["실시간 시장 인사이트", "위험 분석 자동화", "컴플라이언스 모니터링"]
    },
    {
      title: "기술 문서",
      description: "복잡한 기술 매뉴얼, 사양서, 문제 해결 가이드를 탐색합니다.",
      icon: "ri-tools-line",
      benefits: ["즉시 기술 지원", "자동화된 문제 해결", "지식 보존"]
    }
  ];

  const integrations = [
    { name: "Microsoft 365", icon: "ri-microsoft-line" },
    { name: "Google Workspace", icon: "ri-google-line" },
    { name: "Slack", icon: "ri-slack-line" },
    { name: "Salesforce", icon: "ri-customer-service-2-line" },
    { name: "SharePoint", icon: "ri-folder-cloud-line" },
    { name: "Confluence", icon: "ri-book-open-line" }
  ];

  const stats = [
    { number: "10x", label: "빠른 정보 검색", description: "수동 검색 대비" },
    { number: "95%", label: "정확도", description: "문서 분석에서" },
    { number: "60%", label: "시간 절약", description: "지식 업무에서" },
    { number: "99.9%", label: "가동 시간 보장", description: "기업급 안정성" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20enterprise%20office%20with%20professionals%20using%20advanced%20AI%20knowledge%20management%20systems%2C%20intelligent%20document%20processing%20interface%2C%20clean%20corporate%20workspace%20with%20RAG%20technology%20integration&width=1920&height=600&seq=rag_hero_1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gray-100/85"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                조직의 지식을 AI RAG 솔루션으로 
                <span className="font-normal">활용하세요</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                검색 증강 생성 플랫폼으로 팀이 정보에 접근하고 활용하는 방식을 혁신하세요. 문서, 데이터베이스, 지식 저장소에서 즉시 정확한 답변을 얻으세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
                >
                  시작하기
                </Link>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer">
                  데모 보기
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6">
                  <div className="text-3xl md:text-4xl font-light text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-sm font-normal text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500 font-light">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">강력한 RAG 기능</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                AI 기반 플랫폼이 검색과 생성 기능을 결합하여 지능적이고 맥락적인 응답을 제공합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      onClick={() => setActiveDemo(index)}
                      className={`bg-gray-100 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                        activeDemo === index 
                          ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]' 
                          : 'shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                          <i className={`${feature.icon} text-lg text-gray-700`}></i>
                        </div>
                        <div>
                          <h3 className="text-lg font-normal text-gray-800 mb-2">{feature.title}</h3>
                          <p className="text-gray-600 text-sm font-light leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-8">
                <Image 
                  src={features[activeDemo].image}
                  alt={features[activeDemo].title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover object-top rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">산업별 활용 사례</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                다양한 산업에서 RAG 솔루션을 활용하여 지식 관리를 혁신하는 방법을 알아보세요.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mb-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${useCase.icon} text-xl text-gray-700`}></i>
                  </div>
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                        <span className="font-light">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">원활한 통합</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                기존 도구 및 플랫폼과 연결하여 통합된 지식 관리 경험을 제공합니다.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${integration.icon} text-xl text-gray-700`}></i>
                  </div>
                  <p className="text-xs font-light text-gray-600">{integration.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">지식 관리를 혁신하세요</h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                조직 정보의 잠재력을 완전히 활용할 준비가 되셨나요? 지금 AI RAG 여정을 시작하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer inline-block"
                >
                  지금 시작하기
                </Link>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer">
                  상담 예약하기
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}