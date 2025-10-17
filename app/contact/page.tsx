
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import LetterGlitch from '@/components/letterglitch';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const services = [
    { value: 'ai-rag', label: 'AI RAG 솔루션' },
    { value: 'ai-education', label: 'AI 교육 플랫폼' },
    { value: 'onboarding-ai', label: 'AI 온보딩' },
    { value: 'consultation', label: 'AI 컨설팅' },
    { value: 'custom', label: '맞춤형 AI 개발' },
    { value: 'other', label: '기타' }
  ];

  const contactInfo = [
    {
      icon: 'ri-map-pin-line',
      title: '사무실',
      details: ['경기도 군포시 군포첨단산업2로22번길 5(부곡동)', '5층 501호'],
      link: '#'
    },
    {
      icon: 'ri-mail-line',
      title: '이메일',
      details: ['jin@brandsmore.co.kr'],
      link: 'mailto:jin@brandsmore.co.kr'
    },
    {
      icon: 'ri-phone-line',
      title: '전화',
      details: ['+82 10-8373-3720'],
      link: 'tel:+82-2-8373-3720'
    }
  ];

  const teamMembers = [
    {
      name: "김성진",
      role: "CEO & Founder",
      email: "jin@brandsmore.co.kr",
      image: "/images/jin.jpg"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gray-50">
          <div className="absolute inset-0 opacity-15">
            <LetterGlitch
              glitchColors={['#0891b2', '#06b6d4', '#22d3ee']}
              glitchSpeed={50}
              centerVignette={false}
              outerVignette={false}
              smooth={true}
              characters="∑∏∆∇∂∫∞≈≠≤≥±×÷√∈∉∪∩⊂⊃∧∨¬→←↑↓⟨⟩‖∥⊥∝λμσπθφψωαβγδεζηικνξοπρστυχ0123456789+-*/"
            />
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-800 mb-4 tracking-tight">
              문의 
              <span className="font-light"> 하기</span>
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              AI로 비즈니스를 혁신할 준비가 되셨나요? 우리의 혁신적인 솔루션이 어떻게 목표 달성에 도움이 될 수 있는지 논의해보세요.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-100 rounded-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-8">
                <h2 className="text-2xl font-light text-gray-800 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-normal text-gray-700 mb-2">이름 *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-normal text-gray-700 mb-2">이메일 *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-normal text-gray-700 mb-2">회사명</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-normal text-gray-700 mb-2">관심 서비스</label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-gray-100 text-gray-700 px-4 py-3 pr-8 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light appearance-none"
                        >
                          <option value="">서비스를 선택하세요</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <i className="ri-arrow-down-s-line text-gray-500"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-normal text-gray-700 mb-2">메시지 *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none focus:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all duration-300 font-light resize-none"
                      placeholder="프로젝트에 대해 알려주시고 어떻게 도움을 드릴 수 있는지 설명해주세요..."
                    />
                    <div className="text-xs text-gray-500 mt-1 font-light">
                      {formData.message.length}/500 글자
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || formData.message.length > 500}
                    className={`w-full py-4 rounded-2xl font-normal whitespace-nowrap cursor-pointer transition-all duration-300 ${
                      isSubmitting || formData.message.length > 500
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]'
                    }`}
                  >
                    {isSubmitting ? '전송 중...' : '메시지 보내기'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="text-center p-4 bg-gray-100 rounded-xl shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                      <p className="text-gray-700 font-normal">감사합니다! 메시지가 성공적으로 전송되었습니다.</p>
                      <p className="text-gray-600 text-sm font-light mt-1">24시간 이내에 답변드리겠습니다.</p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-light text-gray-800 mb-8">연락처 정보</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
                          <i className={`${info.icon} text-lg text-gray-700`}></i>
                        </div>
                        <div>
                          <h3 className="text-lg font-normal text-gray-800 mb-2">{info.title}</h3>
                          {info.details.map((detail, dIndex) => (
                            <p key={dIndex} className="text-gray-600 text-sm font-light">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 mt-6">
                  <h3 className="text-lg font-normal text-gray-800 mb-4">운영 시간</h3>
                  <div className="space-y-2 text-sm text-gray-600 font-light">
                    <div className="flex justify-between">
                      <span>월요일 - 금요일</span>
                      <span>오전 9:00 - 오후 6:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>토요일</span>
                      <span>오전 10:00 - 오후 2:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>일요일</span>
                      <span>휴무</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">우리 팀을 만나보세요</h2>
              <p className="text-gray-600 font-light max-w-2xl mx-auto">
                Brandsmore의 혁신적인 AI 솔루션을 만드는 전문가들을 소개합니다.
              </p>
            </div>
            <div className="flex justify-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6 hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] transition-all duration-300 max-w-xs">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] overflow-hidden">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg font-normal text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 font-light">{member.role}</p>
                  <Link 
                    href={`mailto:${member.email}`}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300 font-light"
                  >
                    {member.email}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">사무실 방문</h2>
              <p className="text-gray-600 font-light">
                경기도 군포시 첨단산업단지에 위치
              </p>
            </div>
            <div className="bg-gray-100 rounded-3xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO4Xz4PiPiXlQ0&q=경기도+군포시+군포첨단산업2로22번길+5+부곡동"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">자주 묻는 질문</h2>
              <p className="text-gray-600 font-light">
                AI 솔루션에 대한 일반적인 질문들에 대한 빠른 답변
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[{
                question: "AI 솔루션 구현에 얼마나 걸리나요?",
                answer: "구현 시간은 프로젝트의 복잡성과 범위에 따라 달라집니다. 일반적으로 RAG 솔루션은 2-4주 내에 배포 가능하며, 교육 플랫폼은 4-8주, 의료 AI 솔루션은 완전한 배포까지 8-12주가 소요됩니다."
              },
              {
                question: "교육과 지원을 제공하나요?",
                answer: "네, 팀을 위한 포괄적인 교육과 지속적인 지원을 제공합니다. 초기 설정 교육, 사용자 문서, 중요 시스템에 대한 24/7 기술 지원이 포함됩니다."
              },
              {
                question: "기존 시스템과 통합이 가능한가요?",
                answer: "물론입니다. 우리의 AI 솔루션은 API와 맞춤형 커넥터를 통해 기존 기업 시스템과 원활하게 통합되도록 설계되었습니다. IT 팀과 긴밀히 협력하여 원활한 통합을 보장합니다."
              },
              {
                question: "데이터 보안과 개인정보 보호는 어떻게 되나요?",
                answer: "데이터 보안이 최우선입니다. 암호화, 접근 제어, GDPR, HIPAA 및 한국 현지 규정과 같은 국제 표준 준수를 포함한 기업급 보안 조치를 구현합니다."
              }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] p-6">
                  <h3 className="text-lg font-normal text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
