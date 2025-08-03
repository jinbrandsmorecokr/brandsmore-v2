
'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "김사라",
      role: "CEO & 공동창립자", 
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20businesswoman%20CEO%20in%20modern%20office%20setting%2C%20confident%20smile%2C%20business%20suit%2C%20clean%20minimal%20background%2C%20professional%20headshot%20style%2C%20soft%20lighting&width=300&height=300&seq=about_ceo_1&orientation=squarish",
      bio: "AI 및 기업 솔루션 분야 15년 이상의 경험"
    },
    {
      name: "박데이비드",
      role: "CTO & 공동창립자",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20tech%20executive%20CTO%20in%20modern%20office%2C%20friendly%20expression%2C%20business%20casual%20attire%2C%20clean%20minimal%20background%2C%20professional%20headshot%20style%2C%20soft%20lighting&width=300&height=300&seq=about_cto_1&orientation=squarish",
      bio: "머신러닝 박사 학위를 보유한 전 구글 AI 연구원"
    },
    {
      name: "에밀리 첸",
      role: "AI 연구 책임자",
      image: "https://readdy.ai/api/search-image?query=Professional%20Asian%20female%20AI%20researcher%20in%20modern%20lab%20setting%2C%20confident%20smile%2C%20smart%20casual%20attire%2C%20clean%20minimal%20background%2C%20professional%20headshot%20style%2C%20soft%20lighting&width=300&height=300&seq=about_research_1&orientation=squarish",
      bio: "자연어 처리 및 RAG 시스템 분야의 선도적 전문가"
    },
    {
      name: "이마이클",
      role: "제품 책임자",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20product%20manager%20in%20modern%20office%2C%20approachable%20smile%2C%20business%20casual%20shirt%2C%20clean%20minimal%20background%2C%20professional%20headshot%20style%2C%20soft%20lighting&width=300&height=300&seq=about_product_1&orientation=squarish",
      bio: "AI 기반 솔루션에 중점을 둔 제품 전략 전문가"
    }
  ];

  const values = [
    {
      icon: "ri-lightbulb-line",
      title: "혁신",
      description: "실제 문제를 해결하기 위해 AI 기술의 경계를 지속적으로 확장합니다."
    },
    {
      icon: "ri-shield-check-line", 
      title: "신뢰와 보안",
      description: "우리가 구축하는 모든 솔루션에서 데이터 보안과 개인정보 보호가 최우선입니다."
    },
    {
      icon: "ri-team-line",
      title: "협력",
      description: "고객의 고유한 요구사항과 과제를 이해하기 위해 긴밀히 협력합니다."
    },
    {
      icon: "ri-trophy-line",
      title: "우수성",
      description: "AI 솔루션과 고객 서비스의 모든 측면에서 우수성을 추구합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center bg-gray-100"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20AI%20technology%20office%20space%20with%20clean%20minimalist%20design%2C%20soft%20natural%20lighting%2C%20people%20collaborating%20on%20AI%20projects%2C%20futuristic%20workspace%2C%20light%20gray%20and%20white%20color%20scheme%2C%20professional%20corporate%20environment&width=1920&height=600&seq=about_hero_1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gray-100/80"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                실전형 AI 파트너로 
                <span className="font-normal">혁신을 현실로</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                브랜즈모어(Brandsmore)는 "누구나 쉽게, 실제 업무에 바로 쓸 수 있는 AI"를 만들겠다는 목표 아래, 현장 중심의 RAG 기반 지식검색 시스템과 개인 맞춤형 추천 플랫폼을 자체 개발·상용화하고 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
                >
                  문의하기
                </Link>
                <Link 
                  href="/blog"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
                >
                  블로그 보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">브랜즈모어 소개</h2>
                <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                  <p>
                    브랜즈모어(Brandsmore)는 2024년 설립된 AI 스타트업입니다.
                  </p>
                  <p>
                    최근에는 로컬 LLM과 벡터DB를 활용한 엔터프라이즈 RAG 솔루션, 상장기업 임원 대상 1:1 AI 실전 교육 프로그램, AI에이전트 기반 K-Medical 서비스 개발 등, 기술력과 시장의 수요가 만나는 새로운 비즈니스도 확장하고 있습니다.
                  </p>
                  <p>
                    브랜즈모어는 벤처기업 인증, 기술보증기금 IP기술보증 등 공식 인증과 실제 고객사 PoC/현장 적용 경험을 바탕으로, "실제로 쓰이는 AI, 문제 해결에 집중하는 AI"를 추구합니다.
                  </p>
                  <p>
                    앞으로도 브랜즈모어는 <strong>'실전형 AI 파트너'</strong>로, 혁신을 현실로 만들어가겠습니다.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-8">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20AI%20research%20team%20working%20together%20in%20bright%20office%20space%2C%20diverse%20professionals%20collaborating%20on%20computer%20screens%2C%20clean%20minimal%20workspace%2C%20natural%20lighting%2C%20professional%20corporate%20setting&width=600&height=400&seq=about_story_1&orientation=landscape"
                  alt="Our team working together"
                  className="w-full h-64 object-cover object-top rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">우리의 가치</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                이러한 핵심 가치는 우리가 하는 모든 일을 안내하고 미래를 위한 AI 솔루션을 구축하는 방식을 형성합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mb-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${value.icon} text-xl text-gray-700`}></i>
                  </div>
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">우리 팀을 만나보세요</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                다양한 전문가로 구성된 우리 팀은 깊은 기술적 지식과 실제 비즈니스 경험을 결합합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 rounded-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <h3 className="text-lg font-normal text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 font-light">{member.role}</p>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">비즈니스를 혁신할 준비가 되셨나요?</h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                혁신적인 AI 솔루션을 제공하는 Brandsmore를 신뢰하는 점점 더 많은 조직에 합류하세요.
              </p>
              <Link 
                href="/contact"
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer inline-block"
              >
                AI 여정을 시작하세요
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
