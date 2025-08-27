document.addEventListener('DOMContentLoaded', () => {
    // Объект texts остается без изменений, он огромен
    const texts = {
        en: {
            heroTypewriter: "Calibrators, Testers, Analyzers",
            title: "Calmet – Calibrators, Testers, Analyzers",
            slogan: "Over 30 years of innovation in measurement technology",
            navHome: "Home", navAbout: "About Us", navAdvantages: "Advantages", navProducts: "Products", navContact: "Contact",
            langFlag: "EN",
            aboutTitle: "About Us",
            aboutText: "With over 30 years of experience, Calmet has earned the trust of clients on all continents. Our products are used worldwide in thousands of units.",
            aboutMissionText: "Our mission is to provide cutting-edge measurement solutions, combining precision, reliability, and world-class customer support.",
            advantagesTitle: "Why Choose Calmet?",
            advantage1Title: "30+ Years of Experience", advantage1Desc: "Deep expertise in metrology and the development of measurement equipment.",
            advantage2Title: "Global Trust", advantage2Desc: "Our products are used in thousands of laboratories and enterprises worldwide.",
            advantage3Title: "Innovative Solutions", advantage3Desc: "We continuously invest in R&D to create the best instruments.",
            advantage4Title: "Customer Support", advantage4Desc: "We provide comprehensive technical support and consultation at all stages.",
            productsTitle: "Our Products",
            presentationLink: "Presentation",
            certificationTitle: "Certification & Standards",
            certificationText: "We are proud that our quality management system is certified according to the ISO 9001 standard. This is a guarantee of reliability, stability, and the highest quality of our products and services.",
            newsTitle: "News & Events",
            news1Title: "Participation in Energetab 2024", news1Desc: "We invite you to visit our booth at the leading energy exhibition in Europe. We will present our latest developments.",
            news2Title: "New Power Quality Analyzer TE35", news2Desc: "We have released a new flagship analyzer with advanced features and an improved interface.",
            news3Title: "Online Calibration Webinar", news3Desc: "We held a successful webinar for our partners on modern methods of meter calibration.",
            contactTitle: "Contact Us",
            contactInfoTitle: "Get in Touch",
            contactText: "Calmet sp. z o.o.<br>ul. Kukulcza 18<br>65-472 Zielona Góra<br>Poland",
            contactTelLabel: "Tel:",
            contactEmailLabel: "Email:",
            formTitle: "Send Us a Message", formName: "Your Name", formEmail: "Your Email", formMessage: "Your Message", formSubmit: "Send",
            formErrorEmail: "Please enter a valid email address.",
            formSuccess: "Message sent! (Simulation)",
            footerText: "© 2025 Calmet. All rights reserved.",
            footerNavAbout: "About Us", footerNavProducts: "Products", footerNavContact: "Contact",
            te30Title: "TE30", te30Desc: "Portable Three-Phase Working Standard and Power Quality Analyzer.",
            c300bTitle: "C300B", c300bDesc: "Three-phase power and energy calibrator/tester with accuracy class 0.02/0.05.",
            ts33Title: "TS33", ts33Desc: "Three-phase automatic test system with reference standard and integrated voltage/current source.",
            ts23Title: "TS23", ts23Desc: "Three-phase test system with reference standard and integrated current source up to 120A.",
            tb41Title: "TB41", tb41Desc: "Four-phase AC voltage and current source for testing electricity meters and relays.",
            ts41Title: "TS41", ts41Desc: "Four-phase test system with reference standard and integrated current/voltage source.",
        },
        pl: {
            heroTypewriter: "Kalibratory, testery, analizatory",
            title: "Calmet - Kalibratory, testery, analizatory",
            slogan: "Ponad 30 lat innowacji w technologii pomiarowej",
            navHome: "Start", navAbout: "O nas", navAdvantages: "Zalety", navProducts: "Produkty", navContact: "Kontakt",
            langFlag: "PL",
            aboutTitle: "O nas",
            aboutText: "Za ponad 30 lat działalności zdobyliśmy zaufanie naszych klientów na wszystkich kontynentach i obecnie nasze wyroby są używane w tysiącach sztuk na całym świecie.",
            aboutMissionText: "Naszą misją jest dostarczanie najnowocześniejszych rozwiązań pomiarowych, łączących precyzję, niezawodność i światowej klasy wsparcie dla klienta.",
            advantagesTitle: "Dlaczego Calmet?",
            advantage1Title: "30+ lat doświadczenia", advantage1Desc: "Głęboka wiedza w dziedzinie metrologii i rozwoju aparatury pomiarowej.",
            advantage2Title: "Globalne zaufanie", advantage2Desc: "Nasze produkty są używane w tysiącach laboratoriów i przedsiębiorstw na całym świecie.",
            advantage3Title: "Innowacyjne rozwiązania", advantage3Desc: "Nieustannie inwestujemy w badania i rozwój, aby tworzyć najlepsze instrumenty.",
            advantage4Title: "Wsparcie klienta", advantage4Desc: "Zapewniamy kompleksowe wsparcie techniczne i doradztwo na wszystkich etapach.",
            productsTitle: "Nasze produkty",
            presentationLink: "Prezentacja",
            certificationTitle: "Certyfikacja i Standardy",
            certificationText: "Jesteśmy dumni, że nasz system zarządzania jakością jest certyfikowany zgodnie z normą ISO 9001. To gwarancja niezawodności, stabilności i najwyższej jakości naszych produktów i usług.",
            newsTitle: "Aktualności i Wydarzenia",
            news1Title: "Udział w targach Energetab 2024", news1Desc: "Zapraszamy do odwiedzenia naszego stoiska na wiodących targach energetycznych w Europie. Zaprezentujemy nasze najnowsze osiągnięcia.",
            news2Title: "Nowy analizator jakości energii TE35", news2Desc: "Wprowadziliśmy na rynek nowy flagowy analizator z zaawansowanymi funkcjami i ulepszonym interfejsem.",
            news3Title: "Webinarium online o kalibracji", news3Desc: "Zorganizowaliśmy udane webinarium dla naszych partnerów poświęcone nowoczesnym metodom kalibracji liczników.",
            contactTitle: "Kontakt",
            contactInfoTitle: "Skontaktuj się z nami",
            contactText: "Calmet sp. z o.o.<br>ul. Kukułcza 18<br>65-472 Zielona Góra<br>Polska",
            contactTelLabel: "Tel:",
            contactEmailLabel: "Email:",
            formTitle: "Wyślij nam wiadomość", formName: "Twoje imię", formEmail: "Twój Email", formMessage: "Twoja wiadomość", formSubmit: "Wyślij",
            formErrorEmail: "Proszę podać prawidłowy adres e-mail.",
            formSuccess: "Wiadomość wysłana! (Symulacja)",
            footerText: "© 2025 Calmet. Wszelkie prawa zastrzeżone.",
            footerNavAbout: "O nas", footerNavProducts: "Produkty", footerNavContact: "Kontakt",
            te30Title: "TE30", te30Desc: "Przenośny trójfazowy licznik wzorcowy i analizator jakości energii.",
            c300bTitle: "C300B", c300bDesc: "Trójfazowy i jednofazowy kalibrator mocy i energii oraz tester, klasa 0,02 i 0,05.",
            ts33Title: "TS33", ts33Desc: "Trójfazowy automatyczny system testujący z licznikiem kontrolnym i źródłem prądu/napięcia.",
            ts23Title: "TS23", ts23Desc: "Trójfazowy system testowy z licznikiem wzorcowym i zintegrowanym źródłem prądu do 120A.",
            tb41Title: "TB41", tb41Desc: "Czterofazowe źródło napięcia i prądu AC do testowania liczników energii i przekaźników.",
            ts41Title: "TS41", ts41Desc: "Czterofazowy system testowy z licznikiem wzorcowym i zintegrowanym źródłem prądu/napięcia.",
        },
        ru: {
            heroTypewriter: "Калибраторы, тестеры, анализаторы",
            title: "Calmet – Калибраторы, тестеры, анализаторы",
            slogan: "Более 30 лет инноваций в измерительных технологиях",
            navHome: "Главная", navAbout: "О нас", navAdvantages: "Преимущества", navProducts: "Продукты", navContact: "Контакты",
            langFlag: "RU",
            aboutTitle: "О нас",
            aboutText: "За более чем 30 лет работы мы завоевали доверие наших клиентов на всех континентах, и в настоящее время наша продукция используется в тысячах единиц по всему миру.",
            aboutMissionText: "Наша миссия — предоставлять передовые измерительные решения, сочетая точность, надежность и первоклассную поддержку клиентов по всему миру.",
            advantagesTitle: "Почему выбирают Calmet?",
            advantage1Title: "30+ лет опыта", advantage1Desc: "Глубокая экспертиза в области метрологии и разработки измерительного оборудования.",
            advantage2Title: "Глобальное доверие", advantage2Desc: "Наша продукция используется в тысячах лабораторий и предприятий по всему миру.",
            advantage3Title: "Инновационные решения", advantage3Desc: "Мы постоянно инвестируем в исследования и разработки для создания лучших приборов.",
            advantage4Title: "Поддержка клиентов", advantage4Desc: "Предоставляем всестороннюю техническую поддержку и консультации на всех этапах.",
            productsTitle: "Наши продукты",
            presentationLink: "Презентация",
            certificationTitle: "Сертификация и Стандарты",
            certificationText: "Мы гордимся тем, что наша система менеджмента качества сертифицирована по стандарту ISO 9001. Это гарантия надежности, стабильности и высочайшего качества нашей продукции и услуг.",
            newsTitle: "Новости и События",
            news1Title: "Участие в выставке Energetab 2024", news1Desc: "Приглашаем посетить наш стенд на ведущей энергетической выставке Европы. Представим наши последние разработки.",
            news2Title: "Новый анализатор качества TE35", news2Desc: "Мы выпустили новый флагманский анализатор с расширенными возможностями и улучшенным интерфейсом.",
            news3Title: "Онлайн-вебинар по калибровке", news3Desc: "Провели успешный вебинар для наших партнеров, посвященный современным методам калибровки счетчиков.",
            contactTitle: "Контакты",
            contactInfoTitle: "Свяжитесь с нами",
            contactText: "Calmet sp. z o.o.<br>ul. Kukulcza 18<br>65-472 Zielona Góra<br>Польша",
            contactTelLabel: "Тел:",
            contactEmailLabel: "Email:",
            formTitle: "Отправьте нам сообщение", formName: "Ваше имя", formEmail: "Ваш Email", formMessage: "Ваше сообщение", formSubmit: "Отправить",
            formErrorEmail: "Пожалуйста, введите корректный email адрес.",
            formSuccess: "Сообщение отправлено! (Симуляция)",
            footerText: "© 2025 Calmet. Все права защищены.",
            footerNavAbout: "О нас", footerNavProducts: "Продукты", footerNavContact: "Контакты",
            te30Title: "TE30", te30Desc: "Портативный трехфазный эталонный счетчик и анализатор качества энергии.",
            c300bTitle: "C300B", c300bDesc: "Трехфазный калибратор мощности и энергии с классом точности 0.02/0.05.",
            ts33Title: "TS33", ts33Desc: "Трехфазная автоматическая тестовая система с эталонным стандартом и источником тока/напряжения.",
            ts23Title: "TS23", ts23Desc: "Трехфазная тестовая система с эталонным стандартом и источником тока до 120A.",
            tb41Title: "TB41", tb41Desc: "Четырехфазный источник напряжения и тока AC для тестирования счетчиков и реле.",
            ts41Title: "TS41", ts41Desc: "Четырехфазная тестовая система с эталонным стандартом и источником тока/напряжения.",
        }
    };

    const body = document.body;
    const langSwitcher = document.querySelector('.language-switcher');
    const langCurrentBtn = document.querySelector('.language-current');
    const langDropdown = document.querySelector('.language-dropdown');
    const currentLangFlag = document.getElementById('current-lang-flag');
    const burgerMenu = document.getElementById('burger-menu');
    // --- ИЗМЕНЕНИЕ: Убрал const closeMenuBtn ---
    const mainNav = document.getElementById('main-nav');
    const contactForm = document.getElementById('contact-form');
    const emailInput = document.getElementById('form-email');
    const typewriterTextElement = document.getElementById('typewriter-text');
    let currentLang = 'en';

    function typeWriter(text, i = 0) {
        if (i < text.length) {
            typewriterTextElement.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(text, i + 1), 80);
        }
    }

    langCurrentBtn.addEventListener('click', () => {
        langDropdown.style.display = langDropdown.style.display === 'block' ? 'none' : 'block';
    });

    langDropdown.addEventListener('click', (e) => {
        e.preventDefault();
        const langLink = e.target.closest('a');
        if (langLink) {
            const lang = langLink.dataset.lang;
            updateLanguage(lang);
            langDropdown.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langDropdown.style.display = 'none';
        }
    });

    function updateLanguage(lang) {
        currentLang = lang;
        const langTexts = texts[lang];
        document.documentElement.lang = lang;
        currentLangFlag.textContent = langTexts.langFlag;

        const elementsToUpdate = {
            'slogan': 'slogan', 'nav-home': 'navHome', 'nav-about': 'navAbout', 'nav-advantages': 'navAdvantages', 'nav-products': 'navProducts', 'nav-contact': 'navContact', 
            'about-title': 'aboutTitle', 'about-text': 'aboutText', 'about-mission-text': 'aboutMissionText',
            'advantages-title': 'advantagesTitle', 'advantage1-title': 'advantage1Title', 'advantage1-desc': 'advantage1Desc', 'advantage2-title': 'advantage2Title', 'advantage2-desc': 'advantage2Desc', 'advantage3-title': 'advantage3Title', 'advantage3-desc': 'advantage3Desc', 'advantage4-title': 'advantage4Title', 'advantage4-desc': 'advantage4Desc',
            'products-title': 'productsTitle', 'te30-link': 'presentationLink', 'c300b-link': 'presentationLink', 'ts33-link': 'presentationLink', 'ts23-link': 'presentationLink', 'tb41-link': 'presentationLink', 'ts41-link': 'presentationLink',
            'certification-title': 'certificationTitle', 'certification-text': 'certificationText',
            'news-title': 'newsTitle', 'news1-title': 'news1Title', 'news1-desc': 'news1Desc', 'news2-title': 'news2Title', 'news2-desc': 'news2Desc', 'news3-title': 'news3Title', 'news3-desc': 'news3Desc',
            'contact-title': 'contactTitle', 'contact-info-title': 'contactInfoTitle', 'contact-text': 'contactText', 'contact-tel-label': 'contactTelLabel', 'contact-email-label': 'contactEmailLabel', 'form-title': 'formTitle', 'form-submit': 'formSubmit', 
            'footer-text': 'footerText', 'footer-nav-about': 'footerNavAbout', 'footer-nav-products': 'footerNavProducts', 'footer-nav-contact': 'footerNavContact',
            'te30-title': 'te30Title', 'te30-desc': 'te30Desc', 'c300b-title': 'c300bTitle', 'c300b-desc': 'c300bDesc', 'ts33-title': 'ts33Title', 'ts33-desc': 'ts33Desc', 'ts23-title': 'ts23Title', 'ts23-desc': 'ts23Desc', 'tb41-title': 'tb41Title', 'tb41-desc': 'tb41Desc', 'ts41-title': 'ts41Title', 'ts41-desc': 'ts41Desc'
        };

        for (const id in elementsToUpdate) {
            const element = document.getElementById(id);
            if (element) {
                if (['contact-text'].includes(id)) {
                    element.innerHTML = langTexts[elementsToUpdate[id]];
                } else {
                    element.textContent = langTexts[elementsToUpdate[id]];
                }
            }
        }

        document.title = langTexts.title;
        document.getElementById('form-name').placeholder = langTexts.formName;
        emailInput.placeholder = langTexts.formEmail;
        document.getElementById('form-message').placeholder = langTexts.formMessage;
        
        typewriterTextElement.innerHTML = '';
        typeWriter(langTexts.heroTypewriter);
    }
    
    /* --- ИЗМЕНЕНИЕ: Объединил openMenu и closeMenu в одну функцию toggleMenu --- */
    function toggleMenu() {
        mainNav.classList.toggle('is-active');
        burgerMenu.classList.toggle('is-active');
        body.classList.toggle('menu-open');
    }

    burgerMenu.addEventListener('click', toggleMenu);

    // --- ИЗМЕНЕНИЕ: При клике на ссылку, если меню открыто, вызываем toggleMenu для закрытия ---
    mainNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            if (mainNav.classList.contains('is-active')) {
                toggleMenu();
            }
        }
    });

    const header = document.querySelector('header');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { header.classList.add('scrolled'); }
        else { header.classList.remove('scrolled'); }
        if (window.scrollY > 300) { scrollToTopBtn.classList.add('visible'); }
        else { scrollToTopBtn.classList.remove('visible'); }
    });

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => { observer.observe(section); });

    const navLinks = document.querySelectorAll('.nav-link');
    const sectionsForNav = document.querySelectorAll('section[id]');
    const observerNav = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });
    sectionsForNav.forEach(section => { observerNav.observe(section); });
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const lang = document.documentElement.lang || 'en';
        if (validateEmail(emailInput.value)) {
            emailInput.classList.remove('is-invalid');
            showNotification(texts[lang].formSuccess);
            contactForm.reset();
        } else {
            emailInput.classList.add('is-invalid');
            emailInput.placeholder = texts[lang].formErrorEmail;
        }
    });
    
    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('is-invalid')) {
            emailInput.classList.remove('is-invalid');
            const lang = document.documentElement.lang || 'en';
            emailInput.placeholder = texts[lang].formEmail;
        }
    });

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'form-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => { notification.classList.add('show'); }, 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => { document.body.removeChild(notification); }, 500);
        }, 3000);
    }

    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        interactivity: { events: { onHover: { enable: true, mode: "repulse" }, resize: true }, modes: { repulse: { distance: 100, duration: 0.4 } } },
        particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            collisions: { enable: true },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    });
    
    updateLanguage('en');
});
