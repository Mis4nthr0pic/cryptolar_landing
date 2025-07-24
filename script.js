// Internationalization functionality
class I18n {
    constructor() {
        this.currentLanguage = 'pt';
        this.translations = {};
        this.loadTranslations();
    }

    async loadTranslations() {
        try {
            const languages = ['pt', 'en', 'es'];
            for (const lang of languages) {
                const response = await fetch(`./i18n/${lang}.json`);
                this.translations[lang] = await response.json();
            }
            this.updateContent();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        this.updateContent();
        document.documentElement.lang = lang;
    }

    getText(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }
        
        return value || key;
    }

    updateContent() {
        // Update hero content (logo doesn't need translation)
        const heroDate = document.getElementById('hero-date');
        const heroTagline = document.getElementById('hero-tagline');
        const heroSubtext = document.getElementById('hero-subtext');

        if (heroDate) heroDate.textContent = this.getText('hero.date');
        if (heroTagline) heroTagline.textContent = this.getText('hero.tagline');
        if (heroSubtext) heroSubtext.textContent = this.getText('hero.subtext');
    }
}

// Initialize i18n
const i18n = new I18n();

// Language switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (e) => {
            i18n.setLanguage(e.target.value);
        });
    }
});

// Enhanced floating animation with intersection observer for performance
document.addEventListener('DOMContentLoaded', () => {
    const floatingElements = document.querySelectorAll('.floating');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            } else {
                entry.target.style.animationPlayState = 'paused';
            }
        });
    }, observerOptions);

    floatingElements.forEach(element => {
        observer.observe(element);
    });
});

// Responsive logo scaling based on viewport
function adjustLogoSize() {
    const heroLogo = document.getElementById('hero-logo');
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    
    if (heroLogo) {
        if (vw < 480) {
            heroLogo.style.maxWidth = '240px';
        } else if (vw < 768) {
            heroLogo.style.maxWidth = '280px';
        } else {
            heroLogo.style.maxWidth = '400px';
        }
    }
}

// Initialize responsive adjustments
window.addEventListener('load', adjustLogoSize);
window.addEventListener('resize', adjustLogoSize);