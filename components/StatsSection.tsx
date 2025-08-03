
'use client';

export default function StatsSection() {
  const stats = [
    {
      number: '500+',
      label: '글로벌 의료 파트너',
      icon: 'ri-hospital-line'
    },
    {
      number: '95%',
      label: '고객 만족도',
      icon: 'ri-star-line'
    },
    {
      number: '50+',
      label: '기업 RAG 구축',
      icon: 'ri-building-line'
    },
    {
      number: '1000+',
      label: '임원 교육 완료',
      icon: 'ri-user-line'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="bg-gray-100 rounded-3xl shadow-[inset_8px_8px_16px_rgba(0,0,0,0.1),inset_-8px_-8px_16px_rgba(255,255,255,0.8)] p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] mx-auto mb-4">
                  <i className={`${stat.icon} text-xl text-gray-600`}></i>
                </div>
                <div className="text-2xl font-light text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
