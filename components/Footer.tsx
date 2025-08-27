import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <img src="/images/foot_logo.png" alt="청광플러스원" />
          </div>
          <div className={styles.footerMenu}>
            <a href="/privacy" className={styles.footerLink}>개인정보보호정책</a>
            <a href="/terms" className={styles.footerLink}>이용약관</a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.footerInfo}>
            <p className={styles.footerTel}>
              청광플러스원 오피스텔 분양 문의 <strong>1544-0396</strong>
            </p>
            <p className={styles.footerNotice}>
              ※본 사이트에 사용된 이미지 및 내용, 문구 등은<br className={styles.mobile} />
              소비자의 이해를 돕기위해 제작 또는 표기된 것으로 실제와<br className={styles.mobile} />
              차이가 있을 수 있습니다.
            </p>
            <p className={styles.copyright}>
              ⓒ 2024 CHUNGKWANG CONSTRUCTION. All Rights Reserved
            </p>
          </div>
          
          <div className={styles.footerLogos}>
            <div className={styles.logoItem}>
              <span>시행·시공</span>
              <img src="/images/foot_icon1.png" alt="청광건설" />
            </div>
            <div className={styles.logoItem}>
              <span>신탁사</span>
              <img src="/images/foot_icon2.png" alt="신탁사" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}