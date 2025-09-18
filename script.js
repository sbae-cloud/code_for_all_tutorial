// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// 부드러운 스크롤 기능
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 페이지 로드 시 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('fade-in');
});

// 섹션이 화면에 나타날 때 애니메이션 효과
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section-light, .section-dark').forEach((section) => {
    observer.observe(section);
});

// 모바일 메뉴 토글
const toggleMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const menuButton = document.querySelector('.menu-button');
    
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuButton.classList.remove('active');
    } else {
        navLinks.classList.add('active');
        menuButton.classList.add('active');
    }
};

// 언어 전환 기능
let currentLang = 'kr';

const toggleLanguage = () => {
    const krElements = document.querySelectorAll('.kr');
    const enElements = document.querySelectorAll('.en');
    
    if (currentLang === 'kr') {
        krElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
        currentLang = 'en';
    } else {
        krElements.forEach(el => el.style.display = 'block');
        enElements.forEach(el => el.style.display = 'none');
        currentLang = 'kr';
    }
};