'use client'

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "CHUNGKWANG",
      subtitle: "오산 최고 복층형 오피스텔 총374세대",
      description1: "동탄신도시",
      description2: "와 가깝고 출퇴근이 편한",
      description3: "초역세권 전철역에서 10초!",
      image: "/images/visual01.jpg"
    },
    {
      title: "CHUNGKWANG",
      subtitle: "공실걱정 Zero! 풍부한 임대수요!",
      description1: "산업단지, 대학교",
      description2: "의 풍부한 배후수요와",
      description3: "미래가치",
      description4: "계획도시의 ",
      image: "/images/visual02.jpg"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className={styles.heroSection}>
      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <h2 className={styles.title}>{slide.title}</h2>
              <p className={styles.subtitle}>{slide.subtitle}</p>
              <div className={styles.description}>
                <strong>{slide.description1}</strong>
                {slide.description2}<br />
                <strong>{slide.description3}</strong>
                {slide.description4 && slide.description4}
              </div>
              <a href="#" className={styles.detailBtn}>자세히 보기</a>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
          />
        ))}
      </div>
      
      <div className={styles.scrollDown}>
        <span>SCROLL</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  )
}