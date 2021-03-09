var swiper = new Swiper('.games .swiper-container', {
    slidesPerView: 4,
    breakpoints: {
        '1800' : {
            width: '1480',
        },
        '1500' : {
            width: '1570',
        },
        '1440' : {
            width: '1520',
        },
        '1390' : {
            slidesPerView: 3,
            width: '1075',
        },
        '1200' : {
            width: '1115',
        },
        '1000' : {
            width: '1650',
        },
        '700' : {
            slidesPerView: 2,
            width: '675',
        },
        '500' : {
            slidesPerView: 2,
            width: '705',
        },
        '320' : {
            slidesPerView: 1,
            width: '310',
        }
    },
    navigation: {
        nextEl: '.games .swiper-button-next',
        prevEl: '.games .swiper-button-prev',
    },
});

function addSlider() {
    document.querySelector('.our__wrapper-right').classList.add('swiper-container');
    document.querySelector('.our__wrapper-block').classList.add('swiper-wrapper');
    document.querySelectorAll('.our__wrapper-card').forEach(item => {
        item.classList.add('swiper-slide');
    });
    var swiper = new Swiper('.our .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.our .swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.our .swiper-button-next',
            prevEl: '.our .swiper-button-prev',
        },
    });
}

if (document.querySelector('body').clientWidth <= 1100) addSlider();

window.addEventListener('resize', () => {
    const windowWidth = document.querySelector('body').clientWidth;
    if (windowWidth <= 1100) addSlider();
});

const bar = document.querySelector('.header__top-bar'),
    close = document.querySelector('.header__top-close'),
    menu = document.querySelector('.header__top-right'),
    social = document.querySelectorAll('.header__bottom-social'),
    container = document.querySelector('.header .container'),
    body = document.querySelector('body'),
    header = document.querySelector('.header'),
    headerTop = document.querySelector('.header__top'),
    headerBottom = document.querySelector('.header__bottom');

bar.addEventListener('click', () => {
    body.style.overflow = 'hidden';
    header.style.overflow = 'hidden';
    container.style.overflow = 'hidden';
    headerTop.style.overflow = 'hidden';
    headerBottom.style.overflow = 'hidden';
    setTimeout(() => {
        menu.classList.add('header__menu-active');
        social[1].style.display = 'none';
        container.style.background = 'linear-gradient(257.63deg, #342183 2.35%, #8228dc 98.49%)';
    }, 30)
});

close.addEventListener('click', () => {
    body.style.overflow = 'auto';
    header.style.overflow = 'auto';
    container.style.overflow = 'auto';
    headerTop.style.overflow = 'auto';
    headerBottom.style.overflow = 'auto';
    setTimeout(() => {
        menu.classList.remove('header__menu-active');
        social[1].style.display = 'flex';
        container.style.background = 'none';
    }, 30)
});

const ourCard = document.querySelectorAll('.our__wrapper-card');

ourCard.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('our__wrapper-card_active')) item.classList.remove('our__wrapper-card_active')
        else item.classList.add('our__wrapper-card_active');
    });
})