export default function Business() {
  const businesses = [
    {
      title: "주택사업",
      description: "아파트, 오피스텔 등 최고의 주거공간을 제공합니다",
      icon: "🏢",
      features: ["프리미엄 설계", "친환경 자재", "스마트홈 시스템"]
    },
    {
      title: "건축사업", 
      description: "상업시설, 오피스 빌딩 등 다양한 건축 프로젝트",
      icon: "🏗️",
      features: ["최신 건축 기술", "안전 시공", "품질 보증"]
    },
    {
      title: "토목사업",
      description: "도로, 교량 등 사회 인프라 구축",
      icon: "🌉",
      features: ["정밀 시공", "환경 친화적", "내구성 보장"]
    }
  ]

  return (
    <section id="business" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">사업안내</h2>
          <p className="text-gray-600 text-lg">
            청광플러스원은 다양한 건설 분야에서 최고의 품질을 제공합니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-4">{business.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{business.title}</h3>
              <p className="text-gray-600 mb-6">{business.description}</p>
              <ul className="space-y-2">
                {business.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-secondary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-secondary font-semibold hover:text-primary transition-colors">
                자세히 보기 →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}