'use client'

import { useState } from 'react'
import styles from './CustomerForm.module.css'

export default function CustomerForm() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    privacy: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.privacy) {
      alert('개인정보 수집 및 이용에 동의해주세요.')
      return
    }
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData)
    alert('관심고객등록이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.')
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      privacy: false
    })
    setIsModalOpen(false)
  }

  return (
    <>
      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>CHUNGKWANG</span> SERVICE
          </h2>
          <p className={styles.subtitle}>
            청광플러스원은 입주자에게는 최고의 만족도를,<br />
            투자자에게는 최고의 수익률을 선물합니다.
          </p>
          
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceContent}>
                <h3>사업개요</h3>
                <p>
                  동탄신도시의 생활인프라와 수원<br />
                  생활까지 함께 누릴 수있는 더블입지!<br />
                  수도권 1호선, 1번국도 등 광역교통망!
                </p>
              </div>
              <div className={styles.serviceOverlay}>
                <h3>사업개요</h3>
                <p>
                  동탄신도시의 생활인프라와 수원<br />
                  생활까지 함께 누릴 수있는 더블입지!<br />
                  수도권 1호선, 1번국도 등 광역교통망!
                </p>
                <a href="#" className={styles.detailLink}>자세히 보기</a>
              </div>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceContent}>
                <h3>프리미엄</h3>
                <p>
                  청광의 특급 입지와 프리미엄 인프라는<br />
                  입주자에게는 최고의 만족도를,<br />
                  투자자에게는 최고의 수익률을 선물합니다.
                </p>
              </div>
              <div className={styles.serviceOverlay}>
                <h3>프리미엄</h3>
                <p>
                  청광의 특급 입지와 프리미엄 인프라는<br />
                  입주자에게는 최고의 만족도를,<br />
                  투자자에게는 최고의 수익률을 선물합니다.
                </p>
                <a href="#" className={styles.detailLink}>자세히 보기</a>
              </div>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceContent}>
                <h3>세대안내</h3>
                <p>
                  청광플러스원의 감각적인 디자인과<br />
                  나만의 힐링 스페이스 공간!<br />
                  그리고 다채로운 생활인프라까지!
                </p>
              </div>
              <div className={styles.serviceOverlay}>
                <h3>세대안내</h3>
                <p>
                  청광플러스원의 감각적인 디자인과<br />
                  나만의 힐링 스페이스 공간!<br />
                  그리고 다채로운 생활인프라까지!
                </p>
                <a href="#" className={styles.detailLink}>자세히 보기</a>
              </div>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.serviceContent}>
                <h3>e모델하우스</h3>
                <p>
                  360˚ VR을 통해 실제 내,외부를<br />
                  직접 보는 듯한 경험을 할 수 있는<br />
                  가상 공간입니다.
                </p>
              </div>
              <div className={styles.serviceOverlay}>
                <h3>e모델하우스</h3>
                <p>
                  360˚ VR을 통해 실제 내,외부를<br />
                  직접 보는 듯한 경험을 할 수 있는<br />
                  가상 공간입니다.
                </p>
                <a href="#" className={styles.detailLink}>자세히 보기</a>
              </div>
            </div>
          </div>
          
          <button 
            className={styles.registerButton}
            onClick={() => setIsModalOpen(true)}
          >
            관심고객등록
          </button>
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className={styles.modal} onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsModalOpen(false)
          }
        }}>
          <div className={styles.modalContent}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <h3 className={styles.modalTitle}>
              <span>관심고객등록</span>
            </h3>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    type="text"
                    name="name"
                    placeholder="이름*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className={styles.inputWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12" y2="18"></line>
                  </svg>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="연락처*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className={styles.inputWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="이메일*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className={styles.textareaWrapper}>
                <textarea
                  name="message"
                  placeholder="내용을 입력해주세요."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.privacyWrapper}>
                <label className={styles.checkbox}>
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                  />
                  <span className={styles.checkmark}></span>
                  <span>개인정보취급방침에 동의</span>
                </label>
                <a href="#" className={styles.privacyLink}>[자세히 보기]</a>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                관심고객등록하기
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}