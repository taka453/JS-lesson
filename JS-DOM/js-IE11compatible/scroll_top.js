// DOMツリーが構築されたときに実行(他のJavascriptの読込が完了した後に実行)
document.addEventListener('DOMContentLoaded',function(){
    const scrollTop = document.querySelector('.js-scroll-top');
    scrollTop.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, false);
    window.addEventListener('scroll', function(event) {
        if(event.currentTarget.pageYOffset > 30) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    }, false);
}, false);