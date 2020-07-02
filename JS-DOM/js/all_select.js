// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
    const selectAll = document.getElementById('select-all');
    const items = document.querySelectorAll('.js-check');
    const show = document.getElementById('selected-items');

    let selectItems = [];

    selectAll.addEventListener('click', () =>{
        const checked = selectAll.checked;
        if(checked === true) {
            items.forEach(item => {
                const spanEl = item.nextElementSibling.cloneNode(true);
                item.checked = true;
                selectItems.push(item);
                show.appendChild(spanEl);
            });
        }
        if(checked === false) {
            items.forEach(item => {
                item.checked = false;
                selectItems.pop(item);
                let spanItem = 0;
                show.removeChild(show.children[spanItem]);
            });
        }
    });

    items.forEach(item => {
        item.addEventListener('click', ()=>{
            const spanEl = item.nextElementSibling.cloneNode(true);
            if(item.checked === true) {
                selectItems.push(item);
                show.appendChild(spanEl);
            }
            if(item.checked === false) {
                selectItems.pop(item);
                let i = 0;
                while(i < show.children.length) {
                    const isEqual = show.children[i].isEqualNode(spanEl);
                    if(isEqual) {
                        show.removeChild(show.children[i]);
                    }
                    i++;
                }
            }
            if(selectItems.length === items.length) {
                selectAll.indeterminate = false;
                selectAll.checked = true;
            }
            if(selectItems.length && selectItems.length < items.length) {
                selectAll.indeterminate = true;
                selectAll.checked = false;
            } else {
                selectAll.indeterminate = false;
                selectAll.checked = false;

            }
        })
    });

}, false);