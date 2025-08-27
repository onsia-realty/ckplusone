// Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileClose = document.querySelector('.mobile-close');
    const body = document.body;
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            body.classList.add('menu-open');
        });
    }
    
    if (mobileClose) {
        mobileClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    }
    
    // Visual Slider
    const slides = document.querySelectorAll('.visual-slide');
    const prevBtn = document.querySelector('.visual-control .prev');
    const nextBtn = document.querySelector('.visual-control .next');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Initialize first slide
    if (slides.length > 0) {
        showSlide(0);
        
        // Auto slide
        setInterval(nextSlide, 5000);
        
        // Manual controls
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    }
    
    // Modal Functions
    const modal = document.getElementById('registerModal');
    const registerBtns = document.querySelectorAll('.register-btn a, .bell_btn_new a');
    
    window.openModal = function() {
        if (modal) {
            modal.classList.add('active');
            body.classList.add('modal-open');
        }
    }
    
    window.closeModal = function() {
        if (modal) {
            modal.classList.remove('active');
            body.classList.remove('modal-open');
        }
    }
    
    // Register button click events
    registerBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });
    
    // Close modal on outside click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Form Submit
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(registerForm);
            const data = Object.fromEntries(formData);
            
            // Here you would normally send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('관심고객등록이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.');
            
            // Reset form and close modal
            registerForm.reset();
            closeModal();
        });
    }
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // History Slider (if exists)
    const historySlider = document.querySelector('.history-slider');
    if (historySlider) {
        // Sample history data
        const historyData = [
            {
                type: '물류센터',
                title: '경기도 용인시 갈담리 물류센터 신축공사',
                period: '21.11~22.11',
                scale: '지하 2층 ~ 지상 4층',
                location: '경기도 용인시 처인구 모현읍 갈담리 419번지외 10필지'
            },
            {
                type: '오피스텔',
                title: '독산동 오피스텔 신축공사',
                period: '21.09~23.05',
                scale: '지하 1층 ~ 지상 14층',
                units: '195세대',
                location: '서울특별시 금천구 독산동 302-9번지'
            },
            {
                type: '아파트',
                title: '경기도 남양주시 퇴계원 공동주택 아파트 신축공사',
                period: '21.10~23.07',
                scale: '지하2층 / 지상15층',
                units: '아파트: 39세대 / 근린생활시설:12세대',
                location: '경기도 남양주시 퇴계원'
            }
        ];
        
        // Create slider items
        historyData.forEach(item => {
            const slideItem = document.createElement('div');
            slideItem.className = 'history-item';
            slideItem.innerHTML = `
                <div class="history-image" style="background-image: url('images/history-placeholder.jpg')"></div>
                <div class="history-text">
                    <span class="history-type">${item.type}</span>
                    <h4>${item.title}</h4>
                    <dl>
                        <dt>공사기간</dt><dd>${item.period}</dd>
                        <dt>규모</dt><dd>${item.scale}</dd>
                        ${item.units ? `<dt>총 세대수</dt><dd>${item.units}</dd>` : ''}
                        <dt>위치</dt><dd>${item.location}</dd>
                    </dl>
                    <a href="#" class="btn-detail">자세히 보기</a>
                </div>
            `;
            historySlider.appendChild(slideItem);
        });
    }
    
    // News Grid (if exists)
    const newsGrid = document.querySelector('.news-grid');
    if (newsGrid) {
        // Sample news data
        const newsData = [
            {
                category: '보도자료',
                title: '청광플러스원 오산 오피스텔 상업시설분양',
                content: '청광플러스원 오산 오피스텔 상업시설분양',
                date: '2023-09-04'
            },
            {
                category: '보도자료',
                title: '지하철1호선 역세권, 오산 세마역 청광플러스원 눈길',
                content: 'AP신문 2022.05.03 08:55',
                date: '2022-06-08'
            },
            {
                category: '보도자료',
                title: '"다다익선"…다(多)세권 오피스텔 \'오산 세마역 청광플러스원\'',
                content: '경상일보 2022.04.26 09:00',
                date: '2022-06-08'
            }
        ];
        
        // Create news items
        newsData.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <a href="#">
                    <span class="news-category">${item.category}</span>
                    <h4 class="news-title">${item.title}</h4>
                    <p class="news-content">${item.content}</p>
                    <span class="news-date"><i class="far fa-clock"></i> ${item.date}</span>
                </a>
            `;
            newsGrid.appendChild(newsItem);
        });
    }
});

// Add CSS for news and history items
const style = document.createElement('style');
style.textContent = `
    /* History Slider */
    .history-slider-wrap {
        position: relative;
        overflow: hidden;
    }
    
    .history-slider {
        display: flex;
        gap: 30px;
        overflow-x: auto;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
    }
    
    .history-slider::-webkit-scrollbar {
        display: none;
    }
    
    .history-item {
        min-width: 350px;
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    }
    
    .history-image {
        height: 200px;
        background-size: cover;
        background-position: center;
    }
    
    .history-text {
        padding: 30px;
    }
    
    .history-type {
        display: inline-block;
        padding: 5px 15px;
        background: var(--primary-color);
        color: white;
        border-radius: 20px;
        font-size: 12px;
        margin-bottom: 15px;
    }
    
    .history-text h4 {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 20px;
        line-height: 1.4;
    }
    
    .history-text dl {
        margin-bottom: 20px;
    }
    
    .history-text dt {
        display: inline-block;
        width: 80px;
        font-weight: 700;
        color: #666;
        font-size: 14px;
    }
    
    .history-text dd {
        display: inline;
        font-size: 14px;
        color: #999;
    }
    
    .history-text dd::after {
        content: '\\A';
        white-space: pre;
    }
    
    .slider-controls {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        pointer-events: none;
    }
    
    .slider-controls button {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: all;
        transition: var(--transition);
    }
    
    .slider-controls button:hover {
        transform: scale(1.1);
    }
    
    /* News Grid */
    .news-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin-bottom: 40px;
    }
    
    .news-item {
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        transition: var(--transition);
    }
    
    .news-item:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }
    
    .news-item a {
        display: block;
        padding: 30px;
    }
    
    .news-category {
        display: inline-block;
        padding: 5px 15px;
        background: var(--primary-color);
        color: white;
        border-radius: 20px;
        font-size: 12px;
        margin-bottom: 15px;
    }
    
    .news-title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 15px;
        line-height: 1.4;
        color: #333;
    }
    
    .news-content {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
        margin-bottom: 15px;
    }
    
    .news-date {
        font-size: 12px;
        color: #999;
    }
    
    .btn-more-news {
        display: inline-block;
        padding: 12px 40px;
        background: var(--primary-color);
        color: white;
        border-radius: 5px;
        font-weight: bold;
        transition: var(--transition);
        margin: 0 auto;
        display: table;
    }
    
    .btn-more-news:hover {
        background: var(--secondary-color);
    }
    
    /* Animation */
    .section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .section.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (max-width: 768px) {
        .news-grid {
            grid-template-columns: 1fr;
        }
        
        .history-item {
            min-width: 280px;
        }
    }
`;
document.head.appendChild(style);