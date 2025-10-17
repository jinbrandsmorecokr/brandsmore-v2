
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function OnboardingAIPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "ri-user-add-line",
      title: "스마트 신입사원 온보딩",
      description: "AI가 개인별 맞춤형 온보딩 프로그램을 설계하고 진행 상황을 실시간 모니터링",
      capabilities: ["개인화 학습 경로", "진도 추적", "자동 피드백", "멘토 매칭", "문서 자동화", "일정 관리"],
      efficiency: "80%",
      image: "https://readdy.ai/api/search-image?query=Modern%20corporate%20onboarding%20AI%20system%20interface%20with%20new%20employee%20training%20dashboard%2C%20digital%20workplace%20orientation%20technology%2C%20smart%20HR%20automation&width=500&height=300&seq=onboarding_smart_1&orientation=landscape"
    },
    {
      icon: "ri-team-line",
      title: "팀 통합 가속화",
      description: "새로운 팀원이 기존 팀과 빠르게 융화될 수 있도록 AI가 최적의 협업 환경을 조성",
      capabilities: ["팀 문화 분석", "소통 스타일 매칭", "프로젝트 배정", "네트워킹 지원", "갈등 예방", "성과 측정"],
      efficiency: "65%",
      image: "https://readdy.ai/api/search-image?query=AI-powered%20team%20integration%20platform%20showing%20collaborative%20workspace%20with%20new%20employee%20networking%20and%20team%20building%20analytics%2C%20modern%20office%20environment&width=500&height=300&seq=onboarding_team_1&orientation=landscape"
    },
    {
      icon: "ri-graduation-cap-line",
      title: "지능형 교육 시스템",
      description: "직무별 필수 역량을 AI가 분석하여 개인 맞춤형 교육 커리큘럼을 자동 생성",
      capabilities: ["역량 진단", "맞춤 교육", "실습 시뮬레이션", "지식 테스트", "인증 관리", "지속 학습"],
      efficiency: "90%",
      image: "https://readdy.ai/api/search-image?query=Intelligent%20corporate%20training%20system%20with%20AI%20personalized%20learning%20paths%2C%20digital%20education%20platform%20for%20employee%20skill%20development%2C%20modern%20e-learning%20interface&width=500&height=300&seq=onboarding_education_1&orientation=landscape"
    },
    {
      icon: "ri-line-chart-line",
      title: "성과 분석 및 최적화",
      description: "온보딩 과정의 모든 데이터를 분석하여 지속적인 프로세스 개선과 성과 향상을 지원",
      capabilities: ["성과 지표 추적", "예측 분석", "개선 제안", "벤치마킹", "ROI 측정", "리포팅"],
      efficiency: "75%",
      image: "https://readdy.ai/api/search-image?query=Advanced%20HR%20analytics%20dashboard%20showing%20employee%20onboarding%20performance%20metrics%2C%20AI-driven%20workforce%20optimization%20charts%20and%20predictive%20analytics%20visualization&width=500&height=300&seq=onboarding_analytics_1&orientation=landscape"
    }
  ];

  const industries = [
    {
      name: "IT/테크",
      icon: "💻",
      adoption: "85%",
      topFeatures: ["스마트 온보딩", "지능형 교육", "팀 통합"],
      avgTime: "2-3주"
    },
    {
      name: "금융/보험",
      icon: "🏦", 
      adoption: "78%",
      topFeatures: ["지능형 교육", "성과 분석", "스마트 온보딩"],
      avgTime: "3-4주"
    },
    {
      name: "제조업",
      icon: "🏭",
      adoption: "65%",
      topFeatures: ["팀 통합", "스마트 온보딩", "성과 분석"],
      avgTime: "4-6주"
    },
    {
      name: "유통/서비스",
      icon: "🛍️",
      adoption: "72%",
      topFeatures: ["스마트 온보딩", "팀 통합", "지능형 교육"],
      avgTime: "2-4주"
    },
    {
      name: "헬스케어",
      icon: "🏥",
      adoption: "68%",
      topFeatures: ["지능형 교육", "성과 분석", "팀 통합"],
      avgTime: "4-8주"
    },
    {
      name: "교육/연구",
      icon: "🎓",
      adoption: "75%",
      topFeatures: ["지능형 교육", "스마트 온보딩", "성과 분석"],
      avgTime: "3-5주"
    }
  ];

  const aiCapabilities = [
    {
      icon: "ri-brain-line",
      title: "자연어 처리 (NLP)",
      description: "직원 질문을 이해하고 맞춤형 답변을 제공하는 24시간 AI 어시스턴트",
      accuracy: "96%+"
    },
    {
      icon: "ri-eye-line",
      title: "컴퓨터 비전",
      description: "문서 자동 인식 및 처리로 온보딩 서류 작업을 간소화",
      efficiency: "85% 단축"
    },
    {
      icon: "ri-bar-chart-box-line",
      title: "예측 분석",
      description: "개인별 학습 패턴 분석으로 최적의 온보딩 경로 예측",
      accuracy: "92%"
    },
    {
      icon: "ri-robot-line",
      title: "프로세스 자동화",
      description: "반복적인 온보딩 업무를 자동화하여 HR 담당자 업무 효율성 극대화",
      automation: "90%"
    }
  ];

  const benefits = [
    {
      icon: "ri-time-line",
      title: "온보딩 시간 단축",
      description: "기존 대비 평균 60% 시간 단축으로 빠른 업무 투입",
      improvement: "60% 단축"
    },
    {
      icon: "ri-user-heart-line",
      title: "직원 만족도 향상",
      description: "개인화된 온보딩 경험으로 신입사원 만족도 대폭 개선",
      score: "4.8/5.0"
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "비용 절감",
      description: "자동화된 프로세스로 온보딩 관련 비용 대폭 절감",
      savings: "40% 절약"
    },
    {
      icon: "ri-user-follow-line",
      title: "이직률 감소",
      description: "체계적인 온보딩으로 신입사원 조기 이직률 현저히 감소",
      retention: "85% 향상"
    }
  ];

  const testimonials = [
    {
      company: "테크이노베이션",
      industry: "IT/소프트웨어",
      logo: "🚀",
      position: "HR 디렉터",
      name: "김혜진",
      quote: "AI 온보딩 시스템 도입 후 신입사원들의 적응 속도가 눈에 띄게 빨라졌습니다. 개인화된 학습 경로 덕분에 모든 직원이 자신만의 속도로 성장할 수 있어요.",
      results: "온보딩 기간 50% 단축, 만족도 4.9/5.0"
    },
    {
      company: "글로벌파이낸스",
      industry: "금융서비스",
      logo: "🏦",
      position: "인사팀장",
      name: "박준호",
      quote: "복잡한 금융 업무 교육이 AI 시스템으로 체계화되면서 신입사원들이 훨씬 자신감 있게 업무에 임하고 있습니다. 멘토링 매칭 기능도 정말 효과적이에요.",
      results: "교육 효율성 80% 향상, 이직률 30% 감소"
    },
    {
      company: "스마트매뉴팩처링",
      industry: "제조업",
      logo: "🏭",
      position: "인재개발 담당",
      name: "이수연",
      quote: "제조업 특성상 안전교육이 중요한데, AI가 개인별 이해도를 파악해서 맞춤형 교육을 제공하니 안전사고가 현저히 줄었습니다. 정말 혁신적인 변화예요.",
      results: "안전사고 70% 감소, 생산성 25% 향상"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/unnamed.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-gray-100/85"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-normal text-gray-800 mb-6 leading-tight tracking-tight">
                기업용 AI 온보딩
                <span className="font-light"> 솔루션-출시 예정</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                인공지능 기술로 신입사원 온보딩 과정을 혁신하는 차세대 HR 솔루션. 개인화된 학습 경로, 자동화된 프로세스, 실시간 성과 분석으로 기업의 인재 육성을 가속화합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
                >
                  무료 데모 체험
                </Link>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer">
                  도입 사례 보기
                </button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">핵심 기능</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                AI 기술로 구현하는 차세대 온보딩 솔루션의 주요 기능들
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`bg-gray-100 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                        activeFeature === index 
                          ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]' 
                          : 'shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                          <i className={`${feature.icon} text-lg text-gray-700`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-normal text-gray-800">{feature.title}</h3>
                            <span className="text-xs text-gray-500 font-light bg-gray-100 px-2 py-1 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]">
                              효율성 {feature.efficiency}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">{feature.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {feature.capabilities.slice(0, 4).map((capability, cIndex) => (
                              <span key={cIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] font-light">
                                {capability}
                              </span>
                            ))}
                            {feature.capabilities.length > 4 && (
                              <span className="text-xs text-gray-500 px-2 py-1">
                                +{feature.capabilities.length - 4}개 더
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-8">
                <Image 
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover object-top rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">업종별 적용 현황</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                다양한 산업 분야에서 검증된 AI 온보딩 솔루션의 성과
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{industry.icon}</span>
                      <h3 className="text-lg font-normal text-gray-800">{industry.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-light text-gray-800">{industry.adoption}</div>
                      <div className="text-xs text-gray-500 font-light">도입률</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-gray-500 font-light">주요 활용 기능:</div>
                    <div className="flex flex-wrap gap-1">
                      {industry.topFeatures.map((feature, fIndex) => (
                        <span key={fIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] font-light">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>평균 온보딩 기간:</span>
                    <span className="font-light">{industry.avgTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">AI 핵심 기술</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                최첨단 인공지능 기술로 구현하는 지능형 온보딩 시스템
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${capability.icon} text-xl text-gray-700`}></i>
                  </div>
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">{capability.description}</p>
                  {capability.accuracy && (
                    <div className="text-xs text-gray-500 font-light">정확도: {capability.accuracy}</div>
                  )}
                  {capability.efficiency && (
                    <div className="text-xs text-gray-500 font-light">효율성: {capability.efficiency}</div>
                  )}
                  {capability.automation && (
                    <div className="text-xs text-gray-500 font-light">자동화율: {capability.automation}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">도입 효과</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                AI 온보딩 솔루션 도입으로 얻을 수 있는 핵심 성과들
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${benefit.icon} text-xl text-gray-700`}></i>
                  </div>
                  <div className="text-2xl font-light text-gray-800 mb-2">{benefit.improvement || benefit.score || benefit.savings || benefit.retention}</div>
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">고객 성공 사례</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                실제 AI 온보딩 솔루션을 도입한 기업들의 생생한 후기와 성과
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] mr-4 text-xl">
                      {testimonial.logo}
                    </div>
                    <div>
                      <h4 className="font-normal text-gray-800">{testimonial.company}</h4>
                      <p className="text-xs text-gray-500 font-light">{testimonial.industry}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 text-sm font-light leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-normal text-gray-800 text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-500 font-light">{testimonial.position}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-light bg-gray-100 p-2 rounded-lg shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]">
                      <strong>성과:</strong> {testimonial.results}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
              지금 시작하세요
            </h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              AI 온보딩 솔루션으로 귀하의 기업 인재 육성을 혁신하고, 
              경쟁력 있는 조직 문화를 구축해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
              >
                무료 상담 신청
              </Link>
              {/* <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer">
                제품 데모 보기
              </button> */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
