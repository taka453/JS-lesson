// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('js-modal');
    const mask = document.getElementById('js-mask');
    const button = document.getElementById('js-btn');
    const body = document.body;
    let clientWidth = body.clientWidth;
    let noScrollBarWidth = clientWidth;
    let diff = 0;

    // modalを開ける
    document.querySelector('.js-modal-open').addEventListener('click', () => {
        // activeクラスを追加
        modal.classList.add('active');
        mask.classList.add('active');
        //スクロールバーを無くす前
        clientWidth = body.clientWidth;
        body.style.overflow = 'hidden';
        //スクロールバーを無くした後
        noScrollBarWidth = body.clientWidth;
        // スクロールバーの長さを計算
        diff = noScrollBarWidth - clientWidth;
        if(diff > 0) {
            body.style.paddingRight = diff + 'px';
        }
        modal.style.display = 'block';
    });

    // modalを閉じる
    document.getElementById('js-modal-close').addEventListener('click', () => {
        // activeクラスを削除
        modal.classList.remove('active');
        mask.classList.remove('active');
        // overflow初期化
        body.style.overflow = 'auto';
        body.style.padding = null;
        modal.style.display = 'none';
    });

     // 背景を押すとモーダルを閉じる
    window.addEventListener('click', event => {
        if(event.target === modal) {
            modal.classList.remove('active');
            mask.classList.remove('active');
        };
    });

    // modal内部画面
    button.addEventListener('click', event => {
        const textForm = document.getElementById('text-form').value;
        if(textForm === '') {
            window.alert('何か入力してください');
        } else {
            window.alert(textForm);
            close();
        }
    });
}, false);


