document.addEventListener('DOMContentLoaded', function(){
    function move (from, to, optionKey) {
        const options = from.querySelectorAll(optionKey);
        options.forEach(function(option){
            option.selected = false;
            to.appendChild(option);
        });
    };

    const noneSelected = document.getElementById('none-selected-items');
    const selected = document.getElementById('selected-items');

    document.querySelector('.js-item-to-right').addEventListener('click', function() {
        move(noneSelected, selected, 'option:checked');
    }, false);

    document.querySelector('.js-item-to-right-all').addEventListener('click', function() {
        move(noneSelected, selected, 'option');
    }, false);

    document.querySelector('.js-item-to-left').addEventListener('click', function() {
        move(selected, noneSelected, 'option:checked');
    }, false);

    document.querySelector('.js-item-to-left-all').addEventListener('click', function() {
        move(selected, noneSelected, 'option');
    }, false);
}, false);