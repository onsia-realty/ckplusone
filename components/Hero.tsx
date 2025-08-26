'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "오산 세교2지구",
      subtitle: "청광플러스원 오피스텔",
      description: "동탄신도시와 인접한 프리미엄 오피스텔",
      bg: "bg-gradient-to-r from-blue-900 to-blue-700"
    },
    {
      title: "30년 전통",
      subtitle: "믿음과 신뢰의 건설기업",
      description: "고객과 함께 성장하는 청광플러스원",
      bg: "bg-gradient-to-r from-gray-900 to-gray-700"
    },
    {
      title: "프리미엄 주거공간",
      subtitle: "삶의 가치를 높이는",
      description: "최고의 주거환경을 제공합니다",
      bg: "bg-gradient-to-r from-green-900 to-green-700"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`h-full ${slide.bg} flex items-center justify-center`}>
            <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-5xl md:text-7xl font-bold mb-4 font-montserrat">
                {slide.title}
              </h2>
              <h3 className="text-2xl md:text-4xl mb-6">
                {slide.subtitle}
              </h3>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  자세히 보기
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                  문의하기
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}