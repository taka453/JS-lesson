// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
// if文はなるべく使わないように後で混乱する。
//　一旦コピーして、クリアする

document.addEventListener('DOMContentLoaded', function() {

    const selectAll = document.getElementById('select-all');
    const items = Array.prototype.slice.call(document.getElementsByClassName('js-check'));
    const itemNames = document.getElementById('selected-items');

    function addItems(checkedItems) {
        itemNames.innerHTML = '';
        checkedItems.forEach(function(checkedItem) {
            const cloneItem = checkedItem.parentNode.querySelector('span').cloneNode(true);
            itemNames.appendChild(cloneItem);
        });
    }

    selectAll.addEventListener('click', function(event) {
        items.forEach(function(item){item.checked = event.target.checked});
        const checkedItems = items.filter(function(item) {return item.checked === true});
        addItems(checkedItems);
    }, false);

    items.forEach(function(item) {
        item.addEventListener('click', function() {
            const checkedItems = items.filter(function(item){return item.checked === true});
            addItems(checkedItems);

            if(items.length === checkedItems.length) {
                selectAll.checked = true;
                selectAll.indeterminate = false;
                return;
            }
            if(checkedItems.length === 0) {
                selectAll.checked = false;
                selectAll.indeterminate = false;
                return;
            }
            selectAll.checked = false;
            selectAll.indeterminate = true
        });
    });

}, false);