
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function KMedicalPage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: "ri-scissors-cut-line",
      title: "성형외과",
      description: "한국 최고 수준의 성형외과 병원과 해외환자를 연결하는 AI 매칭 서비스",
      specialties: ["쌍꺼풀 수술", "코 성형", "안면윤곽", "가슴 성형", "지방흡입", "리프팅"],
      hospitals: "180+",
      image: "https://readdy.ai/api/search-image?query=Modern%20Korean%20plastic%20surgery%20clinic%20interior%20with%20advanced%20medical%20equipment%2C%20luxury%20patient%20consultation%20room%2C%20professional%20cosmetic%20surgery%20center%20with%20international%20patient%20focus&width=500&height=300&seq=medical_plastic_1&orientation=landscape"
    },
    {
      icon: "ri-flashlight-line",
      title: "피부과",
      description: "K-뷰티의 본고장 한국 프리미엄 피부과 치료를 글로벌 고객에게 제공",
      specialties: ["레이저 치료", "보톡스", "필러", "스킨케어", "여드름 치료", "피부재생"],
      hospitals: "220+",
      image: "https://readdy.ai/api/search-image?query=Premium%20Korean%20dermatology%20clinic%20with%20advanced%20laser%20equipment%20and%20skincare%20technology%2C%20modern%20medical%20aesthetics%20center%2C%20K-beauty%20dermatology%20treatment%20room&width=500&height=300&seq=medical_derma_1&orientation=landscape"
    },
    {
      icon: "ri-tooth-line",
      title: "치과",
      description: "첨단 기술과 합리적 가격의 한국 치과 서비스를 해외환자에게 연결",
      specialties: ["임플란트", "교정", "심미치료", "라미네이트", "크라운", "화이트닝"],
      hospitals: "150+",
      image: "https://readdy.ai/api/search-image?query=State-of-the-art%20Korean%20dental%20clinic%20with%20modern%20equipment%2C%20digital%20dentistry%20technology%2C%20premium%20dental%20treatment%20center%20for%20international%20patients&width=500&height=300&seq=medical_dental_1&orientation=landscape"
    },
    {
      icon: "ri-heart-pulse-line",
      title: "종합 케어",
      description: "수술 전후 통합 케어부터 한국 관광까지 원스톱 의료 여행 서비스",
      specialties: ["수술 전 검진", "회복 케어", "통역 서비스", "숙박 안내", "관광 연계", "애프터케어"],
      hospitals: "500+",
      image: "https://readdy.ai/api/search-image?query=Comprehensive%20Korean%20medical%20tourism%20center%20with%20concierge%20services%2C%20international%20patient%20care%20coordination%2C%20luxury%20medical%20travel%20facilities&width=500&height=300&seq=medical_comprehensive_1&orientation=landscape"
    }
  ];

  const countries = [
    {
      name: "중국",
      flag: "🇨🇳",
      patients: "45%",
      topServices: ["성형외과", "피부과", "치과"],
      avgStay: "5-7일"
    },
    {
      name: "일본",
      flag: "🇯🇵", 
      patients: "20%",
      topServices: ["피부과", "성형외과", "치과"],
      avgStay: "3-5일"
    },
    {
      name: "동남아시아",
      flag: "🌏",
      patients: "15%",
      topServices: ["성형외과", "치과", "피부과"],
      avgStay: "7-10일"
    },
    {
      name: "미주",
      flag: "🌎",
      patients: "10%",
      topServices: ["성형외과", "피부과", "종합케어"],
      avgStay: "10-14일"
    },
    {
      name: "유럽/중동",
      flag: "🌍",
      patients: "7%",
      topServices: ["피부과", "성형외과", "치과"],
      avgStay: "7-12일"
    },
    {
      name: "기타",
      flag: "🗺️",
      patients: "3%",
      topServices: ["종합케어", "성형외과", "피부과"],
      avgStay: "5-10일"
    }
  ];

  const aiFeatures = [
    {
      icon: "ri-translate-line",
      title: "24시간 다국어 상담",
      description: "15개 언어로 24시간 실시간 상담 및 예약 지원",
      languages: ["한국어", "중국어", "영어", "일본어", "태국어", "베트남어"]
    },
    {
      icon: "ri-robot-line",
      title: "AI 병원 매칭",
      description: "환자 요구사항과 병원 전문성을 분석한 최적 매칭",
      accuracy: "95%+"
    },
    {
      icon: "ri-calendar-check-line",
      title: "스마트 예약 시스템",
      description: "실시간 병원 스케줄과 연동된 자동 예약 시스템",
      efficiency: "70% 단축"
    },
    {
      icon: "ri-customer-service-2-line",
      title: "전담 케어 매니저",
      description: "입국부터 출국까지 전 과정 전담 케어 매니저 배정",
      satisfaction: "98%"
    }
  ];

  const benefits = [
    {
      icon: "ri-money-dollar-circle-line",
      title: "합리적 가격",
      description: "동일 시술 기준 서구 대비 30-50% 절약",
      savings: "30-50%"
    },
    {
      icon: "ri-award-line",
      title: "최고 품질",
      description: "세계적 수준의 의료진과 첨단 장비",
      rating: "4.8/5"
    },
    {
      icon: "ri-time-line",
      title: "빠른 예약",
      description: "대기 시간 없는 신속한 예약과 시술",
      waitTime: "평균 3일"
    },
    {
      icon: "ri-shield-check-line",
      title: "안전 보장",
      description: "의료사고 보험과 철저한 안전 관리",
      insurance: "100% 보장"
    }
  ];

  const testimonials = [
    {
      name: "Lisa Wang",
      country: "중국",
      flag: "🇨🇳",
      treatment: "쌍꺼풀 수술 + 코 성형",
      quote: "AI 상담부터 수술까지 모든 과정이 완벽했어요. 특히 실시간 통역 서비스 덕분에 의사소통에 전혀 문제가 없었습니다.",
      image: "https://readdy.ai/api/search-image?query=Happy%20young%20Chinese%20woman%20after%20cosmetic%20surgery%20consultation%20in%20Korean%20medical%20center%2C%20satisfied%20international%20patient%2C%20medical%20tourism%20success%20story&width=300&height=300&seq=medical_patient_chinese_1&orientation=squarish"
    },
    {
      name: "Yuki Tanaka",
      country: "일본",
      flag: "🇯🇵",
      treatment: "피부 레이저 + 보톡스",
      quote: "한국의 피부과 기술은 정말 세계 최고 수준이에요. AI 매칭으로 제게 딱 맞는 병원을 찾을 수 있었어서 결과가 너무 만족스럽습니다.",
      image: "https://readdy.ai/api/search-image?query=Satisfied%20Japanese%20woman%20receiving%20skincare%20consultation%20at%20Korean%20dermatology%20clinic%2C%20happy%20medical%20tourism%20patient%2C%20premium%20beauty%20treatment%20experience&width=300&height=300&seq=medical_patient_japanese_1&orientation=squarish"
    },
    {
      name: "Sarah Johnson",
      country: "미국",
      flag: "🇺🇸",
      treatment: "치과 임플란트",
      quote: "미국에서는 비용이 너무 비싸서 망설였는데, 한국에서 절반 가격으로 더 좋은 치료를 받을 수 있었어요. 관광까지 함께 즐길 수 있어서 일석이조였습니다.",
      image: "https://readdy.ai/api/search-image?query=American%20woman%20smiling%20after%20dental%20treatment%20in%20Korean%20clinic%2C%20international%20patient%20testimonial%2C%20successful%20medical%20tourism%20experience&width=300&height=300&seq=medical_patient_american_1&orientation=squarish"
    }
  ];

  const stats = [
    { number: "550+", label: "파트너 병원", description: "전국 주요 의료기관" },
    { number: "50K+", label: "해외환자", description: "연간 유치 실적" },
    { number: "15+", label: "지원 언어", description: "24시간 상담 가능" },
    { number: "98%", label: "만족도", description: "환자 추천 의향" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Premium%20Korean%20medical%20tourism%20center%20with%20international%20patients%20consulting%20with%20AI%20agent%20system%2C%20modern%20luxury%20medical%20facility%20with%20K-beauty%20and%20cosmetic%20surgery%20focus%2C%20global%20healthcare%20destination&width=1920&height=600&seq=medical_hero_tourism_1&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-gray-100/85"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
                K-Medical AI Agent
                <span className="font-normal"> 해외환자 유치 플랫폼</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                한국의 세계 최고 수준 미용의료(성형외과, 피부과, 치과)를 전 세계 환자들에게 연결하는 AI 기반 의료 관광 플랫폼. 24시간 다국어 상담과 맞춤형 병원 매칭 서비스를 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer"
                >
                  무료 상담 받기
                </Link>
                <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer">
                  병원 찾기
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

        {/* Medical Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">주요 의료 서비스</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                한국 최고 수준의 미용의료 전문 분야별 맞춤 서비스
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div 
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`bg-gray-100 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                        activeService === index 
                          ? 'shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]' 
                          : 'shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                          <i className={`${service.icon} text-lg text-gray-700`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-normal text-gray-800">{service.title}</h3>
                            <span className="text-xs text-gray-500 font-light bg-gray-100 px-2 py-1 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.8)]">
                              {service.hospitals} 병원
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">{service.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {service.specialties.slice(0, 4).map((specialty, sIndex) => (
                              <span key={sIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] font-light">
                                {specialty}
                              </span>
                            ))}
                            {service.specialties.length > 4 && (
                              <span className="text-xs text-gray-500 px-2 py-1">
                                +{service.specialties.length - 4}개 더
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
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover object-top rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Patients Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">글로벌 환자 현황</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                전 세계에서 찾아오는 K-Medical 환자들의 국가별 분포
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countries.map((country, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{country.flag}</span>
                      <h3 className="text-lg font-normal text-gray-800">{country.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-light text-gray-800">{country.patients}</div>
                      <div className="text-xs text-gray-500 font-light">환자 비율</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-gray-500 font-light">인기 서비스:</div>
                    <div className="flex flex-wrap gap-1">
                      {country.topServices.map((service, sIndex) => (
                        <span key={sIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg shadow-[inset_1px_1px_2px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] font-light">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>평균 체류:</span>
                    <span className="font-light">{country.avgStay}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">AI 서비스 특장점</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                첨단 AI 기술로 제공하는 차별화된 의료 관광 서비스
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${feature.icon} text-xl text-gray-700`}></i>
                  </div>
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">{feature.description}</p>
                  {feature.languages && (
                    <div className="text-xs text-gray-500 font-light">
                      주요 언어: {feature.languages.slice(0, 3).join(', ')} 등
                    </div>
                  )}
                  {feature.accuracy && (
                    <div className="text-xs text-gray-500 font-light">매칭 정확도: {feature.accuracy}</div>
                  )}
                  {feature.efficiency && (
                    <div className="text-xs text-gray-500 font-light">시간 단축: {feature.efficiency}</div>
                  )}
                  {feature.satisfaction && (
                    <div className="text-xs text-gray-500 font-light">만족도: {feature.satisfaction}</div>
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
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">K-Medical 선택 이유</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                전 세계 환자들이 한국 의료를 선택하는 핵심 이유들
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                    <i className={`${benefit.icon} text-xl text-gray-700`}></i>
                  </div>
                  <div className="text-2xl font-light text-gray-800 mb-2">{benefit.savings || benefit.rating || benefit.waitTime || benefit.insurance}</div>
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">환자 후기</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                실제 K-Medical 서비스를 경험한 해외환자들의 생생한 후기
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
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-lg">{testimonial.flag}</span>
                        <h4 className="text-sm font-normal text-gray-800">{testimonial.name}</h4>
                      </div>
                      <p className="text-xs text-gray-500 font-light">{testimonial.country}</p>
                      <p className="text-xs text-gray-400 font-light">{testimonial.treatment}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm font-light leading-relaxed italic">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-gray-100 rounded-3xl shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] p-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">K-Medical 여정을 시작하세요</h2>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                세계 최고 수준의 한국 의료 서비스를 경험해보세요. AI 기반 맞춤 상담으로 당신에게 가장 적합한 병원과 치료 계획을 찾아드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 font-normal whitespace-nowrap cursor-pointer inline-block"
                >
                  무료 상담 시작
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
