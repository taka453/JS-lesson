//　DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event){
            event.preventDefault();
            const href = link.getAttribute('href');
            const target = document.querySelector(href === '#' ? 'html' : href) || document.querySelector('html');
            const offsetTop = window.pageYOffset;
            const position = target.getBoundingClientRect().top;
            const defaultFontSize = parseInt(window.getComputedStyle(document.body).fontSize, 10);
            const offset = document.querySelector('.fixed-top').offsetHeight + defaultFontSize;

            window.scrollTo({
                top: position + offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
}, false);