// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', () => {
  // 取得した要素を配列に一旦変換して処理を行った方が楽にできます
  // jQueryと違い要素一つ一つにイベントをセットしたり、値を変更したりしなければなりません
  // [JavaScript で forEach を使うのは最終手段](https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce)

  //=== 左 ===//
  //none-selected-items IDを取得 未選択セレクトボックス
  const noneSlelected = document.getElementById('none-selected-items');
  //.js-item-to-right クラスを取得 右に移動
  const jsitemToright = document.querySelector('.js-item-to-right');
  //.js-item-to-right-all クラスを取得 右に全部移動
  const jsitemTorightAll = document.querySelector('.js-item-to-right-all');

  //=== 右 ===/
  //selected-items IDを取得 選択済セレクトボックス
  const selected = document.getElementById('selected-items');
  //.js-item-to-left クラスを取得 左に移動
  const jsitemToleft = document.querySelector('.js-item-to-left');
  //.js-item-to-left-all クラスを取得 左に全部移動
  const jsitemToleftAll = document.querySelector('.js-item-to-left-all');

  //itemsに空の配列[]を代入
  let items = [];

  //jsitemTorightボタンがクリックされたらmoveItem関数を宣言
  jsitemToright.addEventListener('click', () => {
    moveItem(noneSlelected, selected);
  });

  //jsitemTorightAllボタンがクリックされたらmoveItemAll関数を宣言
  jsitemTorightAll.addEventListener('click', () => {
    moveItemAll(noneSlelected, selected);
  });
  //jsitemToleftされたらmoveItem関数を宣言
  jsitemToleft.addEventListener('click', ()  => {
    moveItem(selected, noneSlelected);
  });

  //jsitemToleftAllボタンがクリックされたらmoveItemAll関数を宣言
  jsitemToleftAll.addEventListener('click', () => {
    moveItemAll(selected, noneSlelected);
  });

  // //jsitemTorightがクリックされたら、from = noneSlelected,to = selected
  // //jsitemToleftがクリックされたら、from = selected,to = noneselected
  const moveItem = (from, to) => {
    //optionを配列に変換。
    const options = Array.from(from.querySelectorAll('option'));
    //ボックス内の配列の数を取得。
    for(let i = 0; i < options.length; i++) {
      //option要素をitemに格納。
      const item = options[i];
      //items配列に選択されたitemを追加する。
      if(item.selected === true) {
        items.push(item);
      }
      //配列に追加した要素をセレクトボックスにforEachメソッドにて移動させる。
      items.forEach(function(item) {
        //toセレクトボックスの末尾に要素を追加
        to.appendChild(item);
        //trueをfalseに変更。
        item.selected = false;
      });
      items = [];
    }
  }

  //jsitemTorightAllがクリックされたら、from = noneSlelected,to = selected
  //jsitemToleftALLがクリックされたら、from = selected,to = noneselected
  function moveItemAll (from, to) {
    //optionを配列に変換。
    const options = Array.from(from.querySelectorAll('option'));
    //ボックス内の配列の数を取得。
    for(let i = 0; i < options.length; i++) {
      //option要素を取得
      const item = options[i];
      //items配列にoption要素を追加。
      items.push(item);
    }

    //配列に追加した要素をセレクトボックスにforEachメソッドにて移動させる。
    items.forEach(function(item) {
      //toセレクトボックスの末尾に要素を追加
      to.appendChild(item);
      //trueをfalseに変更。
      item.selected = false;
    });
      items = [];
  }
}, false);
