"use strict"

// let a;
//     if (navigator.userAgent.search(/Safari/) > 0) {a = 'Safari'};
//     if (navigator.userAgent.search(/Firefox/) > 0) {a = 'MozillaFirefox'};
//     if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {a = 'Internet Explorer'};
//     if (navigator.userAgent.search(/Chrome/) > 0) {a = 'Google Chrome'};
//     if (navigator.userAgent.search(/YaBrowser/) > 0) {a = 'Яндекс браузер'};
//     if (navigator.userAgent.search(/OPR/) > 0) {a = 'Opera'};
//     if (navigator.userAgent.search(/Konqueror/) > 0) {a = 'Konqueror'};
//     if (navigator.userAgent.search(/Iceweasel/) > 0) {a = 'Debian Iceweasel'};
//     if (navigator.userAgent.search(/SeaMonkey/) > 0) {a = 'SeaMonkey'};
//     if (navigator.userAgent.search(/Edge/) > 0) {a = 'Microsoft Edge'};
//     alert.log(a);

    
    
//     if (a = 'Internet Explorer') {
//           document.div.classList.remove('anim-items');
//     }



const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');

    window.onload = function () {
        const parallax = document.querySelector('.hero');
    
        if (parallax) {
            const content = document.querySelector('.hero__container');
            const clouds = document.querySelector('.images-hero__clouds');
            const mountains = document.querySelector('.images-hero__mountains');
            const human = document.querySelector('.images-hero__human');
    
            // Коэффициенты
            const forClouds = 40;
            const forMountains = 20;
            const forHuman = 10;
    
            // Скорость анимации
            const speed = 0.005;
    
            // Объявление переменных 
            let positionX = 0, positionY = 0;
            let coordXprocent = 0, coordYprocent = 0;
    
            function setMouseParallaxStyle() {
                const distX = coordXprocent - positionX;
                const distY = coordYprocent - positionY;
    
                positionX = positionX + (distX * speed);
                positionY = positionY + (distY * speed);
    
                // Передаем стили
                clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
                mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
                human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;
    
                requestAnimationFrame(setMouseParallaxStyle);
    
            }
            setMouseParallaxStyle();
    
            parallax.addEventListener("mousemove", function (e) {
                // Получение ширины и высоты блока
                const parallaxWidth = parallax.offsetWidth;
                const parallaxHeight = parallax.offsetHeight;
    
                // Ноль по середине
                const coordX = e.pageX - parallaxWidth / 2;
                const coordY = e.pageY - parallaxHeight / 2;
    
                // Получаем проценты
                coordXprocent = coordX / parallaxWidth * 100;
                coordYprocent = coordY / parallaxHeight * 100;
    
            });
    
            // Parallax при скроле
    
            let thresholdSets = [];
            for (let i = 0; i <=1.0; i += 0.005) {
                thresholdSets.push(i);
            }
            const callback = function (entries, observer) {
                const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
                setParallaxItemsStyle(scrollTopProcent);
            };
            const observer = new IntersectionObserver(callback, {
                threshold: thresholdSets
            });
    
            observer.observe(document.querySelector('.description'));
    
            function setParallaxItemsStyle(scrollTopProcent) {
                content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
                // clouds.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 10}%);`;
                mountains.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;
                // human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
            }
        }
    }
}








var prices = {
	// RU: {
	// 	country: 'Россия',
	// 	country1: 'России',
	// 	country2: 'России',
	// 	old: '1499',
	// 	new: '168',
	// 	money: 'руб.',
	// 	tel: '+7',
	// },
	KZ: {
		country: 'Казахстан',
		country1: 'Казахстана',
		country2: 'Казахстане',
		old: '8550',
		new: '990',
		money: 'тенге',
		tel: '+7',
	},
	BY: {
		country: 'Беларусь',
		country1: 'Беларуси',
		country2: 'Беларуси',
		old: '55',
		new: '5',
		money: 'BYN',
		tel: '+375',
	},
};

var changePrice = function changePrice(elems, value) {
	elems.forEach(function (elem) {
		elem.textContent = value;
	});
};

var changePlaceholder = function changePlaceholder(elems, value) {
	elems.forEach(function (elem) {
		elem.placeholder = value;
	});
};

var listenner = function listenner(e) {
	changePrice(old_prices, prices[e.target.value].old);
	changePrice(new_prices, prices[e.target.value]['new']);
	changePrice(currencys, prices[e.target.value].money);
	changePrice(country1, prices[e.target.value].country1);
	changePrice(country2, prices[e.target.value].country2);
	changePrice(country, prices[e.target.value].country);
	changePlaceholder(phoneInputs, prices[e.target.value].tel);
	selectors.forEach(function (elem) {
		elem.value = e.target.value;
	});
};

var append = function append() {
	selectors.forEach(function (elem) {
		elem.addEventListener('change', function (e) {
			listenner(e);
		});
		elem.childNodes.forEach(function () {
			var firstElementChild = elem.firstElementChild;
			if (firstElementChild) elem.removeChild(firstElementChild);
		});

		for (var countr in prices) {
			var option = document.createElement('option');
			option.value = countr;
			option.innerHTML = prices[countr].country;
			elem.append(option);
		}
	});
};

var contrySelect = function contrySelect() {
	var query_str = document.location.search.replace('?', '').split('&'),
		countryName = '';
	query_str.forEach(function (elem) {
		if (elem.split('=')[1] && elem.split('=')[0] === 'country_code') {
			countryName = elem.split('=')[1];
		}
	});
	if (!Object.keys(prices).includes(countryName))
		countryName = Object.keys(prices)[0];
	changePrice(old_prices, prices[countryName].old);
	changePrice(new_prices, prices[countryName]['new']);
	changePrice(currencys, prices[countryName].money);
	changePrice(country1, prices[countryName].country1);
	changePrice(country2, prices[countryName].country2);
	changePrice(country, prices[countryName].country);
	changePlaceholder(phoneInputs, prices[countryName].tel);
	selectors.forEach(function (elem) {
		elem.value = countryName;
	});
};

var selectors = document.querySelectorAll('.country__selecor'),
	old_prices = document.querySelectorAll('.old_price'),
	new_prices = document.querySelectorAll('.new_price'),
	currencys = document.querySelectorAll('.currency_price'),
	country = document.querySelectorAll('.country_name'),
	country1 = document.querySelectorAll('.country_name1'),
	country2 = document.querySelectorAll('.country_name2'),
	phoneInputs = document.querySelectorAll('.phone-black');
append();
contrySelect();


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
        if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
        }
    });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

    if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('_lock');
    
    unlock = false;
    setTimeout(function () {
        unlock = true;
        }, timeout);
    }

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
    }
        body.style.paddingRight = '0px';
        body.classList.remove('_lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});




// function initAll() {
//     document.addEventListener("DOMContentLoaded", function () {
//         drawLine();
//         function addEventToBtn() {
//             let buttons = document.querySelectorAll('.ever-popup-btn');
//             for (let i = 0; i < buttons.length; i++) {
//                 buttons[i].addEventListener('click', function () {
//                     drawLine();
//                 });
//                 drawLine();
//             }
//         }

//         setTimeout(addEventToBtn, 500);
//         document.body.addEventListener('mouseleave', function () {
//             drawWithTimeout(100);
//         });
//     });
// }

// initAll();




    $('.pharmacies__item-title').on('click', function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.pharmacies__item-title').not(this).removeClass('in').next().slideUp();
    });

    
    
    let animItems = document.querySelectorAll('.anim-items');
    

    if (animItems.length > 0 ) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active');                    
                } else {
                    if (!animItem.classList.contains('anim-hide')) {
                        animItem.classList.remove('active');
                    } else {
                        if (isMobile.any()) {
                            animItem.classList.remove('anim-items');
                        } 
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        setTimeout(() => {
            animOnScroll();
        }, 300);
    }




    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.931679, 30.402996],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15,
            behaviors: ['drag']
        });
    }

    


