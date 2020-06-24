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
  jsitemToright.addEventListener('click', function () {
    moveItem(noneSlelected, selected);
  });

  //jsitemTorightAllボタンがクリックされたらmoveItemAll関数を宣言
  jsitemTorightAll.addEventListener('click', function () {
    moveItemAll(noneSlelected, selected);
  });

  //jsitemToleftされたらmoveItem関数を宣言
  jsitemToleft.addEventListener('click', function () {
    moveItem(selected, noneSlelected);
  });

  //jsitemToleftAllボタンがクリックされたらmoveItemAll関数を宣言
  jsitemToleftAll.addEventListener('click', function () {
    moveItemAll(selected, noneSlelected);
  });

  //jsitemTorightがクリックされたら、from = noneSlelected,to = selected
  //jsitemToleftがクリックされたら、from = selected,to = noneselected
  function moveItem(from, to) {
    //fromの配列の長さを取得。違うボックスに移動すると、配列の数が変動する
    const length = from.length;
    //ボックス内の数を全部繰り返す
    for(let i = 0; i < length; i++) {
      //ボックス内のoption要素を取得
      const item = from[i];
      //option要素が選択されていれば、items配列にoption要素を追加し、選択を解除。
      if(from[i].selected === true) {
        items.push(item);
        from[i].selected = false;
      }
    }

    //配列に追加した要素をセレクトボックスにmapメソッドにて追加
    items.map(function(item) {
      //toセレクトボックスの末尾に要素を追加
      to.appendChild(item);
    });
    items = [];
    console.log(items);
  }

  //jsitemTorightAllがクリックされたら、from = noneSlelected,to = selected
  //jsitemToleftALLがクリックされたら、from = selected,to = noneselected
  function moveItemAll (from, to) {
    //fromの配列の長さを取得。違うボックスに移動すると、配列の数が変動する
    const length = from.length;
    //ボックス内の数を全部繰り返す
    for(let i = 0; i < length; i++) {
      //ボックス内のoption要素を取得
      const item = from[i];
      //items配列にoption要素を追加。
      items.push(item);
      from[i].selected = false;
    }

    //配列に追加した要素をセレクトボックスにmapメソッドにて追加
    items.map(function(item) {
      //toセレクトボックスの末尾に要素を追加
      to.appendChild(item);
    })
    items = [];
    console.log(items);
  }

}, false);
