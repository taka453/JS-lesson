// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener('DOMContentLoaded', function () {

  const allItemSelect = document.getElementById('select-all');
  const items = document.querySelectorAll('.js-check');
  const show = document.getElementById('selected-items');

  let selectItems = [];

  // 全選択をクリックしたときのイベントをセットします
  allItemSelect.addEventListener('click', () => {
    //select-allの選択状態をcheckedに格納する。
    const checked = allItemSelect.checked;
    if (checked) {
      //js-checkクラスのエレメントを繰り返す。
      items.forEach(item => {
        //次のアイテム1からアイテム7までの要素を取得。ノードを複製して後にappnedChildにて表示させる。
        const spanEl = item.nextElementSibling.cloneNode(true);
        //input要素を選択状態にする。
        item.checked = true;
        //selectItemの空配列にjs-check要素を追加。
        selectItems.push(item);
        //selected-itemにアイテム1からアイテム7までを表示させる。
        show.appendChild(spanEl);
      });
    } else {
      //js-checkクラスのエレメントを繰り返す。
      items.forEach(item => {
        //未チェックの場合は、選択状態を解除。
        item.checked = false;
        //末尾の要素を削除する
        selectItems.pop(item);
      });
      //後にノードを削除するために0を代入。
      const spanItem = 0;
      //0よりもノードの数が多ければremoveChildeにて要素を取り除く。showから一覧が取り除かれる。
      while (spanItem < show.children.length) {
        show.removeChild(show.children[spanItem]);
      }
    }
  });

  // 各アイテムをクリックしたときのイベントをセットします
  // 各アイテムを繰り返すため、クリックイベントよりも前にforEach
  items.forEach(item => {
    //input要素を取得
    item.addEventListener('click', () => {
      //次のアイテム1からアイテム7までの要素を取得。ノードを複製して後にappendChildにて表示させる。
      const spanEl = item.nextElementSibling.cloneNode(true);
      //input要素をチェック状態にする。
      if(item.checked) {
        //selectItem配列にinput要素を追加。
        selectItems.push(item);
        //selectd-itemsに要素を表示。
        show.appendChild(spanEl);
      } else {
        //selectItem配列にinput要素追加
        selectItems.pop(item);
        let i = 0;
        while(i < show.children.length){
          //アイテム1からアイテム7までの要素を子ノードまとめて複製し、isEqualに代入。
          const isEqual = show.children[i].isEqualNode(spanEl);
          //複製したものが正しければ、selected−itemsから子ノード（アイテム1~7）を取り除く。
          if (isEqual) {
            show.removeChild(show.children[i]);
          }
          i++;
        }
      }

      //=== 全選択チェック状態を変更する処理 ===//

      //全選択をチェック状態にする。
      if (selectItems === items.length) {
        allItemSelect.indeterminate = false;
        allItemSelect.checked = true;
      //jscheck状態がチェックされていれば、オールセレクトを中間状態にする。
      } else if (selectItems.length && selectItems.length < items.length) {
        allItemSelect.indeterminate = true;
        allItemSelect.checked = false;
      //チェックされていなければ、未チェック状態にする。
      } else {
        allItemSelect.indeterminate = false;
        allItemSelect.checked = false;
      }
    });
  });
}, false);