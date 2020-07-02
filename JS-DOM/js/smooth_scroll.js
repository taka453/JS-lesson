// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {
  // 「window.scroll」を使ってスクロールさせましょう
  // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません
  // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)
  // #から始まるリンク(内部リンク)を取得
  const smooth = document.querySelectorAll('[href^="#"]');
  for(let i = 0; i < smooth.length; i++){
    //デフォルトの動作をキャンセルし、ブラウザ機能を実行しないようにする。
    smooth[i].addEventListener('click', (e)=>{
      e.preventDefault();
      //属性値アンカー(href)の値を取得。
      const href = smooth[i].getAttribute('href');
      // console.log(href);
      if(document.querySelector('href') !== null) {
        window.scroll({
          top: 0
        });
      }
      //href要素を取得。
      const link = document.querySelector(href);
      // console.log(link);
      //要素の上端のクライアント座標を取得。
      const top = link.getBoundingClientRect().top;
      // console.log(top);
      //headerの高さを取得(隙間を一文字文足しておく)
      const offset = document.querySelector('.navbar').offsetHeight;
      // console.log(offset);
      //現在のスクロール値を取得。Y方向にスクロール。
      const currentTop = window.pageYOffset;
      // console.log(currentTop);
      const defaultFontSize = parseInt(window.getComputedStyle(document.body).fontSize, 16);
      //現在のスクロール値に座標を足して、高さを引いたものを取得。
      const execution = ((currentTop + top) - (offset + defaultFontSize));
      //スクロール実行。
      window.scroll ({
        top: execution,
        behavior: 'smooth'
      });
    });
  }
}, false);
