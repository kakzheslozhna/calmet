document.addEventListener('DOMContentLoaded', () => {

    const texts = {
        en: {
            title: "Calmet – Calibrators, Testers, Analyzers",
            slogan: "Over 30 years of innovation in measurement technology",
            navHome: "Home", navAbout: "About", navProducts: "Products", navContact: "Contact",
            langFlag: "🇺🇸", // ИЗМЕНЕНО: Флаг США для английского языка
            aboutTitle: "About Us",
            aboutText: "Calmet has over 30 years of experience and has earned the trust of clients on all continents. Our products are used worldwide in thousands of units. We are open to our customers' needs, and our main goal is to provide specialized devices and measuring systems at affordable prices with the widest possible customer support.",
            productsTitle: "Our Products",
            presentationLink: "Presentation",
            contactTitle: "Contact Us",
            contactText: "Calmet sp. z o.o.<br>ul. Kukulcza 18<br>65-472 Zielona Góra<br>Poland",
            contactTelLabel: "Tel:",
            contactEmailLabel: "Email:",
            formName: "Your Name", formEmail: "Your Email", formMessage: "Your Message", formSubmit: "Send",
            formSuccess: "Message sent! (Simulation)",
            footerText: "&copy; 2025 Calmet. All rights reserved.",
            te30Title: "TE30", te30Desc: "Portable Three-Phase Working Standard and Power Quality Analyzer. Features a 7\" color touch screen, data storage up to 32GB, USB, Ethernet, Bluetooth connectivity.",
            c300bTitle: "C300B", c300bDesc: "Three-phase power and energy calibrator/tester with accuracy class 0.02/0.05, voltage up to 560V, current up to 120A (three-phase) or 360A (single-phase).",
            ts33Title: "TS33", ts33Desc: "Three-phase automatic test system with reference standard and integrated voltage/current source. Autonomous operation, precise load adjustment.",
            ts23Title: "TS23", ts23Desc: "Three-phase test system with reference standard and integrated current source up to 120A. Designed for testing electricity meters on-site or in labs.",
            tb41Title: "TB41", tb41Desc: "Four-phase AC voltage and current source for testing electricity meters, relays, and more. Up to 4x500V and 4x120A with high accuracy.",
            ts41Title: "TS41", ts41Desc: "Four-phase test system with reference standard and integrated current/voltage source. Ideal for advanced testing setups.",
        },
        pl: {
            title: "Calmet - Kalibratory, testery, analizatory",
            slogan: "Ponad 30 lat innowacji w technologii pomiarowej",
            navHome: "Start", navAbout: "O nas", navProducts: "Produkty", navContact: "Kontakt",
            langFlag: "🇵🇱",
            aboutTitle: "O nas",
            aboutText: "Za ponad 30 lat działalności zdobyliśmy zaufanie naszych klientów na wszystkich kontynentach i obecnie nasze wyroby są używane w tysiącach sztuk na całym świecie. Jesteśmy otwarci na potrzeby naszych klientów, a naszym głównym celem jest dostarczenie wyspecjalizowanych urządzeń i systemów pomiarowych w przystępnych cenach z jak najszerszym wsparciem dla klientów.",
            productsTitle: "Nasze produkty",
            presentationLink: "Prezentacja",
            contactTitle: "Kontakt",
            contactText: "Calmet sp. z o.o.<br>ul. Kukułcza 18<br>65-472 Zielona Góra<br>Polska",
            contactTelLabel: "Tel:",
            contactEmailLabel: "Email:",
            formName: "Twoje imię", formEmail: "Twój Email", formMessage: "Twoja wiadomość", formSubmit: "Wyślij",
            formSuccess: "Wiadomość wysłana! (Symulacja)",
            footerText: "&copy; 2025 Calmet. Wszelkie prawa zastrzeżone.",
            te30Title: "TE30", te30Desc: "Przenośny trójfazowy licznik wzorcowy i analizator jakości energii. Wyposażony w 7-calowy ekran dotykowy, obsługę przez USB, Ethernet i Bluetooth, zapis danych na karcie SD Flash do 32GB.",
            c300bTitle: "C300B", c300bDesc: "Trójfazowy i jednofazowy kalibrator mocy i energii oraz tester. Klasa dokładności 0,02 i 0,05, źródło napięcia do 560V, prądu do 120A (trójfazowe) i 360A (jednofazowe).",
            ts33Title: "TS33", ts33Desc: "Trójfazowy automatyczny system testujący z licznikiem kontrolnym i zintegrowanym źródłem prądu i napięcia. Umożliwia precyzyjne testowanie liczników, automatyczną pracę bez komputera.",
            ts23Title: "TS23", ts23Desc: "Trójfazowy system testowy z licznikiem wzorcowym i zintegrowanym źródłem prądu do 120A. Przeznaczony do testowania liczników energii na miejscu lub w laboratoriach.",
            tb41Title: "TB41", tb41Desc: "Czterofazowe źródło napięcia i prądu AC do testowania liczników energii, przekaźników itp. Do 4x500V i 4x120A z wysoką dokładnością.",
            ts41Title: "TS41", ts41Desc: "Czterofazowy system testowy z licznikiem wzorcowym i zintegrowanym źródłem prądu/napięcia. Idealny do zaawansowanych konfiguracji testowych.",
        },
        ru: {
            title: "Calmet – Калибраторы, тестеры, анализаторы",
            slogan: "Более 30 лет инноваций в измерительных технологиях",
            navHome: "Главная", navAbout: "О нас", navProducts: "Продукты", navContact: "Контакты",
            langFlag: "🇷🇺",
            aboutTitle: "О нас",
            aboutText: "За более чем 30 лет работы мы завоевали доверие наших клиентов на всех континентах, и в настоящее время наша продукция используется в тысячах единиц по всему миру. Мы открыты для потребностей наших клиентов, а наша основная цель это предоставить узкоспециализированные устройства и измерительные системы по доступным ценам с максимально широкой поддержкой для клиентов.",
            productsTitle: "Наши продукты",
            presentationLink: "Презентация",
            contactTitle: "Контакты",
            contactText: "Calmet sp. z o.o.<br>ul. Kukulcza 18<br>65-472 Zielona Góra<br>Польша",
            contactTelLabel: "Тел:",
            contactEmailLabel: "Email:",
            formName: "Ваше имя", formEmail: "Ваш Email", formMessage: "Ваше сообщение", formSubmit: "Отправить",
            formSuccess: "Сообщение отправлено! (Симуляция)",
            footerText: "&copy; 2025 Calmet. Все права защищены.",
            te30Title: "TE30", te30Desc: "Портативный трехфазный эталонный счетчик и анализатор качества энергии. Оснащен 7-дюймовым цветным сенсорным экраном, хранением данных до 32 ГБ, подключением USB, Ethernet, Bluetooth.",
            c300bTitle: "C300B", c300bDesc: "Трехфазный калибратор мощности и энергии, тестер с классом точности 0.02/0.05, напряжение до 560В, ток до 120A (трехфазный) или 360A (однофазный).",
            ts33Title: "TS33", ts33Desc: "Трехфазная автоматическая тестовая система с эталонным стандартом и интегрированным источником тока/напряжения. Автономная работа, точная регулировка нагрузки.",
            ts23Title: "TS23", ts23Desc: "Трехфазная тестовая система с эталонным стандартом и интегрированным источником тока до 120A. Для тестирования счетчиков энергии на месте или в labs.",
            tb41Title: "TB41", tb41Desc: "Четырехфазный источник напряжения и тока AC для тестирования счетчиков энергии, реле и т.д. До 4x500V и 4x120A с высокой точностью.",
            ts41Title: "TS41", ts41Desc: "Четырехфазная тестовая система с эталонным стандартом и интегрированным источником тока/напряжения. Идеально для продвинутых тестов.",
        }
    };

    // --- ЭЛЕМЕНТЫ DOM ---
    const langSwitcher = document.querySelector('.language-switcher');
    const langCurrentBtn = document.querySelector('.language-current');
    const langDropdown = document.querySelector('.language-dropdown');
    const currentLangFlag = document.getElementById('current-lang-flag');
    
    // --- ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА ---
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
        const langTexts = texts[lang];
        document.documentElement.lang = lang;
        currentLangFlag.textContent = langTexts.langFlag;

        const elementsToUpdate = {
            'title': 'title', 'slogan': 'slogan', 'nav-home': 'navHome', 'nav-about': 'navAbout', 'nav-products': 'navProducts', 'nav-contact': 'navContact', 'about-title': 'aboutTitle', 'about-text': 'aboutText', 'products-title': 'productsTitle', 'te30-title': 'te30Title', 'te30-desc': 'te30Desc', 'te30-link': 'presentationLink', 'c300b-title': 'c300bTitle', 'c300b-desc': 'c300bDesc', 'c300b-link': 'presentationLink', 'ts33-title': 'ts33Title', 'ts33-desc': 'ts33Desc', 'ts33-link': 'presentationLink', 'ts23-title': 'ts23Title', 'ts23-desc': 'ts23Desc', 'ts23-link': 'presentationLink', 'tb41-title': 'tb41Title', 'tb41-desc': 'tb41Desc', 'tb41-link': 'presentationLink', 'ts41-title': 'ts41Title', 'ts41-desc': 'ts41Desc', 'ts41-link': 'presentationLink', 'contact-title': 'contactTitle', 'contact-text': 'contactText', 'contact-tel-label': 'contactTelLabel', 'contact-email-label': 'contactEmailLabel', 'form-submit': 'formSubmit', 'footer-text': 'footerText',
        };

        for (const id in elementsToUpdate) {
            const element = document.getElementById(id);
            if (element) {
                if (['about-text', 'contact-text', 'footer-text'].includes(id)) {
                    element.innerHTML = langTexts[elementsToUpdate[id]];
                } else {
                    element.textContent = langTexts[elementsToUpdate[id]];
                }
            }
        }
        
        document.title = langTexts.title;
        document.getElementById('form-name').placeholder = langTexts.formName;
        document.getElementById('form-email').placeholder = langTexts.formEmail;
        document.getElementById('form-message').placeholder = langTexts.formMessage;
    }

    // --- ДИНАМИЧЕСКИЙ HEADER И КНОПКА НАВЕРХ ---
    const header = document.querySelector('header');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { header.classList.add('scrolled'); } 
        else { header.classList.remove('scrolled'); }
        if (window.scrollY > 300) { scrollToTopBtn.classList.add('visible'); } 
        else { scrollToTopBtn.classList.remove('visible'); }
    });

    // --- АНИМАЦИИ НА СКРОЛЛ ---
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => { observer.observe(section); });

    // --- ЛОГИКА АКТИВНОГО ПУНКТА МЕНЮ ПРИ СКРОЛЛЕ ---
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

    // --- УЛУЧШЕННАЯ ОБРАБОТКА ФОРМЫ ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentLang = document.documentElement.lang || 'en';
        showNotification(texts[currentLang].formSuccess);
        contactForm.reset();
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

    // --- ИНИЦИАЛИЗАЦИЯ ЯЗЫКА ---
    // ИЗМЕНЕНО: Язык по умолчанию теперь всегда 'en'
    updateLanguage('en');
});