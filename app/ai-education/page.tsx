
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AIEducationPage() {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      icon: "ri-user-star-line",
      title: "C-Level AI Strategy",
      description: "상장회사 최고경영진을 위한 AI 전략 수립 및 디지털 전환 리더십 교육",
      duration: "6주 프로그램",
      sessions: "주 2회, 2시간씩",
      image: "https://readdy.ai/api/search-image?query=Korean%20CEO%20receiving%20personalized%20AI%20strategy%20consultation%20in%20modern%20executive%20office%2C%20one-on-one%20business%20coaching%20session%2C%20professional%20corporate%20training%20environment&width=500&height=300&seq=edu_ceo_training_1&orientation=landscape"
    },
    {
      icon: "ri-brain-line",
      title: "AI Implementation Roadmap",
      description: "기업별 맞춤형 AI 도입 전략과 실행 계획 수립을 위한 실무 교육",
      duration: "맞춤형 스케줄",
      sessions: "임원 일정 맞춤",
      image: "https://readdy.ai/api/search-image?query=Executive%20team%20reviewing%20AI%20implementation%20strategy%20charts%20and%20roadmaps%2C%20corporate%20boardroom%20setting%2C%20business%20planning%20session%20with%20AI%20technology%20focus&width=500&height=300&seq=edu_roadmap_1&orientation=landscape"
    },
    {
      icon: "ri-team-line",
      title: "Enterprise AI Transformation",
      description: "전사적 AI 혁신을 이끌어갈 리더십 역량 강화 프로그램",
      duration: "연간 프로그램",
      sessions: "분기별 집중과정",
      image: "https://readdy.ai/api/search-image?query=Corporate%20executives%20discussing%20AI%20transformation%20strategies%20in%20modern%20conference%20room%2C%20business%20leadership%20training%2C%20enterprise%20innovation%20planning%20session&width=500&height=300&seq=edu_transformation_1&orientation=landscape"
    },
    {
      icon: "ri-line-chart-line",
      title: "ROI-Driven AI Adoption",
      description: "AI 투자 수익률 극대화를 위한 데이터 기반 의사결정 교육",
      duration: "집중 과정",
      sessions: "4주 완성",
      image: "https://readdy.ai/api/search-image?query=Business%20executives%20analyzing%20ROI%20charts%20and%20AI%20performance%20metrics%2C%20data-driven%20decision%20making%20training%2C%20corporate%20analytics%20meeting&width=500&height=300&seq=edu_roi_1&orientation=landscape"
    }
  ];

  const targetCompanies = [
    {
      category: "제조업",
      count: "680+",
      description: "스마트 팩토리, AI 품질관리, 예측 정비",
      examples: ["삼성전자", "현대자동차", "LG전자", "SK하이닉스"]
    },
    {
      category: "금융업",
      count: "240+",
      description: "AI 리스크 관리, 로보어드바이저, 디지털 뱅킹",
      examples: ["KB금융", "신한금융", "하나금융", "우리금융"]
    },
    {
      category: "유통/서비스",
      count: "520+",
      description: "개인화 추천, 고객 분석, 운영 최적화",
      examples: ["롯데", "신세계", "이마트", "GS리테일"]
    },
    {
      category: "IT/바이오",
      count: "380+",
      description: "AI 제품 개발, 신약 개발, 의료 진단",
      examples: ["네이버", "카카오", "셀트리온", "삼성바이오"]
    },
    {
      category: "건설/화학",
      count: "290+",
      description: "스마트 시티, AI 안전관리, 공정 최적화",
      examples: ["현대건설", "LG화학", "포스코", "한화케미칼"]
    },
    {
      category: "기타 산업",
      count: "490+",
      description: "에너지, 통신, 물류, 엔터테인먼트 등",
      examples: ["SK텔레콤", "한국전력", "CJ대한통운", "HYBE"]
    }
  ];

  const features = [
    {
      icon: "ri-calendar-schedule-line",
      title: "유연한 스케줄링",
      description: "임원님의 바쁜 일정에 맞춰 시간과 장소를 조정하여 교육 진행"
    },
    {
      icon: "ri-user-heart-line",
      title: "1:1 맞춤 교육",
      description: "기업별, 산업별 특성을 반영한 개인화된 AI 전략 교육"
    },
    {
      icon: "ri-trophy-line",
      title: "검증된 전문성",
      description: "글로벌 AI 기업 출신 전문가들의 실무 경험 기반 교육"
    },
    {
      icon: "ri-shield-check-line",
      title: "기밀 보장",
      description: "상장회사 수준의 보안과 기밀 유지로 안전한 교육 환경 제공"
    }
  ];

  const testimonials = [
    {
      name: "김동현",
      role: "CEO",
      company: "대한화학 (KOSPI 상장)",
      quote: "6주간의 집중 교육을 통해 우리 회사의 AI 전략 방향을 명확히 설정할 수 있었습니다. 실무진과의 소통도 훨씬 원활해졌어요.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20CEO%20in%20business%20suit%2C%20confident%20executive%20in%20modern%20office%20setting%2C%20corporate%20leadership%20portrait%20for%20testimonial&width=300&height=300&seq=edu_ceo_testimonial_1&orientation=squarish"
    },
    {
      name: "박서영",
      role: "전무이사",
      company: "글로벌테크 (KOSDAQ 상장)",
      quote: "시간에 구애받지 않는 유연한 교육 방식 덕분에 해외 출장이 많은 저도 완주할 수 있었습니다. ROI 측정 방법론이 특히 유용했어요.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20executive%20director%20in%20business%20attire%2C%20confident%20businesswoman%20in%20corporate%20setting%2C%20executive%20portrait%20for%20testimonial&width=300&height=300&seq=edu_director_testimonial_1&orientation=squarish"
    },
    {
      name: "이재용",
      role: "CTO",
      company: "스마트솔루션 (KOSPI 상장)",
      quote: "이론이 아닌 실제 적용 가능한 AI 전략을 배울 수 있어서 좋았습니다. 교육 후 3개월 만에 AI 프로젝트를 성공적으로 런칭했어요.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20CTO%20technology%20executive%2C%20tech%20leadership%20portrait%20in%20modern%20corporate%20environment%2C%20business%20executive%20testimonial%20photo&width=300&height=300&seq=edu_cto_testimonial_1&orientation=squarish"
    }
  ];

  const stats = [
    { number: "2,600+", label: "타겟 상장기업", description: "KOSPI & KOSDAQ 전체" },
    { number: "1:1", label: "맞춤형 교육", description: "개인별 특화 커리큘럼" },
    { number: "6주", label: "완성 프로그램", description: "주 2회, 2시간씩" },
    { number: "24/7", label: "유연한 스케줄", description: "임원 일정 맞춤" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20Korean%20corporate%20executive%20receiving%20AI%20strategy%20training%20in%20luxury%20business%20center%2C%20one-on-one%20executive%20coaching%20session%2C%20premium%20business%20education%20environment%20with%20Seoul%20skyline&width=1920&height=600&seq=edu_hero_executive_1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gray-100/85"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                대한민국 상장기업 
                <span className="font-normal"> C-레벨을 위한 AI 리더십</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                KOSPI & KOSDAQ 2,600여 상장기업 최고경영진을 위한 1:1 맞춤형 AI 전략 교육. 총 6주간 12회 교육중 라이브 온라인교육 10회, 오프라인 교육 2회를 진행하는 프리미엄 임원 교육 프로그램입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
                >
                  교육 상담 신청
                </Link>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer">
                  커리큘럼 요청하기
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

        {/* Programs Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">프리미엄 교육 프로그램</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                상장기업 최고경영진의 니즈에 맞춰 설계된 차별화된 AI 리더십 교육 과정
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  {programs.map((program, index) => (
                    <div 
                      key={index}
                      onClick={() => setActiveProgram(index)}
                      className={`bg-gray-100 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                        activeProgram === index 
                          ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]' 
                          : 'shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                          <i className={`${program.icon} text-lg text-gray-700`}></i>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-normal text-gray-800 mb-2">{program.title}</h3>
                          <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">{program.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <i className="ri-time-line mr-1"></i>
                              {program.duration}
                            </span>
                            <span className="flex items-center">
                              <i className="ri-calendar-line mr-1"></i>
                              {program.sessions}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-8">
                <Image 
                  src={programs[activeProgram].image}
                  alt={programs[activeProgram].title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover object-top rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Target Companies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">타겟 상장기업 현황</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                KOSPI & KOSDAQ 상장기업 2,600여개 업종별 맞춤형 AI 전략 교육 제공
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {targetCompanies.map((category, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-normal text-gray-800">{category.category}</h3>
                    <span className="text-xs text-gray-500 font-light bg-gray-100 px-2 py-1 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]">
                      {category.count} 기업
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">{category.description}</p>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 font-light mb-2">주요 기업:</div>
                    <div className="flex flex-wrap gap-1">
                      {category.examples.map((company, cIndex) => (
                        <span key={cIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] font-light">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">교육 특장점</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                상장기업 최고경영진을 위한 차별화된 프리미엄 교육 서비스
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${feature.icon} text-xl text-gray-700`}></i>
                  </div>
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">교육 수료생 후기</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                실제 교육을 수료한 상장기업 최고경영진들의 생생한 후기
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-normal text-gray-800">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500 font-light">{testimonial.role}</p>
                      <p className="text-xs text-gray-400 font-light">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed italic">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">AI 리더십의 시작</h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                대한민국을 대표하는 상장기업 C-레벨로서 AI 혁신을 이끌어갈 준비가 되셨나요? 지금 바로 맞춤형 상담을 신청해보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer inline-block"
                >
                  교육 상담 신청
                </Link>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer">
                  성공 사례 보기
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
