'use client'

import { useState } from 'react'
import styles from './News.module.css'

interface NewsItem {
  id: number
  category: string
  title: string
  content: string
  date: string
}

const newsData: NewsItem[] = [
  {
    id: 1,
    category: '보도자료',
    title: '청광플러스원 오산 오피스텔 상업시설분양',
    content: '청광플러스원 오산 오피스텔 상업시설분양',
    date: '2023-09-04'
  },
  {
    id: 2,
    category: '보도자료',
    title: '지하철1호선 역세권, 오산 세마역 청광플러스원 눈길',
    content: 'AP신문 2022.05.03 08:55',
    date: '2022-06-08'
  },
  {
    id: 3,
    category: '보도자료',
    title: '"다다익선"…다(多)세권 오피스텔 \'오산 세마역 청광플러스원\'',
    content: '경상일보 2022.04.26 09:00',
    date: '2022-06-08'
  },
  {
    id: 4,
    category: '보도자료',
    title: '청광건설, 오피스텔 \'오산 세마역 청광플러스원\' 분양',
    content: '민주신문 2022.04.12 09:53',
    date: '2022-06-08'
  },
  {
    id: 5,
    category: '보도자료',
    title: '\'오산 세마역 청광플러스원\', 개방감은 높인 복층형오피스텔',
    content: '경상일보 2022.04.08 09:00',
    date: '2022-06-08'
  },
  {
    id: 6,
    category: '보도자료',
    title: '경기도 \'오산 세마역 청광플러스원\' 오피스텔, 잔여분 분양',
    content: '경상일보 2022.03.23 00:05',
    date: '2022-06-08'
  }
]

export default function News() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(newsData.length / itemsPerPage)
  
  const displayedNews = newsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            CHUNGKWANG<br />
            <span className={styles.highlight}>NEWS</span>
          </h2>
          <p className={styles.subtitle}>새로운 소식을 전해드립니다.</p>
        </div>
        
        <div className={styles.newsWrapper}>
          <div className={styles.newsGrid}>
            {displayedNews.map((item) => (
              <article key={item.id} className={styles.newsCard}>
                <a href="#" className={styles.newsLink}>
                  <div className={styles.newsCategory}>
                    <span className={styles.categoryBadge}>{item.category}</span>
                  </div>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  <p className={styles.newsContent}>{item.content}</p>
                  <div className={styles.newsDate}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{item.date}</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
          
          <div className={styles.navigation}>
            <button 
              className={styles.navButton} 
              onClick={handlePrev}
              aria-label="Previous page"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              className={styles.navButton} 
              onClick={handleNext}
              aria-label="Next page"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}