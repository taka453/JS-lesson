let dragItem = null;

const dropItems = document.getElementById('drop-items');

const dragEventHandlers = item => {
  item.addEventListener('dragstart', event => {
    dragItem = event.target;
  }, false);

  item.addEventListener('dragend', () => {
    dragItem = null;
  }, false);
};

const dropEventHandlers = dropZone => {
  const className = 'drag-enter';

  dropZone.addEventListener('dragenter', event => {
    if(dragItem) {
      event.target.classList.add(className);
    }
  }, false);
  dropZone.addEventListener('dragover', event => {
    if(dragItem) {
      event.preventDefault();
    }
  }, false);
  dropZone.addEventListener('dragleave', event => {
      event.target.classList.remove(className);
  }, false);
  dropZone.addEventListener('drop', event => {
      event.target.classList.remove(className);

      if(dragItem) {
        event.preventDefault();
        event.target.appendChild(dragItem);
      }
  }, false);
};

document.addEventListener('DOMContentLoaded', () => {
  const dragItems = document.querySelectorAll('.drag-item');
  dragItems.forEach(dragItem => {
    dragEventHandlers(dragItem);
  });

  const dropZones = document.querySelectorAll('.drop-item');
  dropZones.forEach(dropItem => {
    dropEventHandlers(dropItem);
  });
  document.querySelector('.js-add-item').addEventListener('click', () => {
    const dragItem = dragItems[0].cloneNode(true);
    dragEventHandlers(dragItem);
    dropZones[0].appendChild(dragItem);
  });
  document.querySelector('.js-add-drop-item').addEventListener('click', () => {
    const dropZone = dropZones[0].cloneNode();
    dropEventHandlers(dropZone);
    dropItems.appendChild(dropZone);
  });
}, false);

// // ドラッグ中のアイテムを保持しておく変数
// let dragItem = null;

// const dropItems = document.getElementById('drop-items');

// // ドラッグするアイテムのイベントを縮めてセット==================
// const dragEventHandlers = item => {
//   // ドラッグを開始したとき========================
//   item.addEventListener('dragstart', event => {
//     //　ドラッグ中のアイテムセット
//     dragItem = event.target;
//   }, false);

//   // ドラッグを終了したとき========================
//   item.addEventListener('dragend', () => {
//     dragItem = null;
//   }, false);
// };

// //ドロップされるアイテム(ドロップゾーン)のイベントを縮めてセット
// const dropEventHandlers = dropZone => {
//   //ドロップゾーンの上にアイテムがドラッグされた時のクラス名
//   const className = 'drag-enter';

//   //ドロップゾーンの上にアイテムが入ってきたとき
//   dropZone.addEventListener('dragenter', event => {
//     if(dragItem) {
//       // クラス名を付与
//       event.target.classList.add(className);
//     }
//   }, false);

//   //ドロップゾーンの上にアイテムがあるとき ===================
//   dropZone.addEventListener('dragover', event => {
//     if(dragItem) {
//       // リンク先を表示されないようにする
//       // デフォルトのイベントをキャンセルする
//       event.preventDefault();
//     }
//   }, false);

//   //アイテムがドロップゾーンにドロップされたとき ===========
//   dropZone.addEventListener('dragleave', event => {
//     //クラス名を外す
//     event.target.classList.remove(className);
//   }, false);

//   //アイテムがドロップゾーンにドロップされたとき
//   dropZone.addEventListener('drop', event => {
//     //クラス名を外す
//     event.target.classList.remove(className);

//     if(dragItem) {
//       //デフォルトのイベントをキャンセルする
//       event.preventDefault();

//       //ドロップされたアイテムを追加する
//       event.target.appendChild(dragItem);
//     }
//   }, false);
// };

// //初期表示されているエレメントに処理をセット ======================
// document.addEventListener('DOMContentLoaded', () => {
//   // ドラッグ可能なアイテム ===================================
//   const dragItems = document.querySelectorAll('.drag-item');
//   // アイテムにイベントをセット
//   dragItems.forEach(dragItem => {
//     dragEventHandlers(dragItem);
//   });

//   //ドロップされるアイテム(ドロップゾーン)
//   const dropZones = document.querySelectorAll('.drop-item');
//   //アイテムにイベントをセット
//   dropZones.forEach(dropItem => {
//     dropEventHandlers(dropItem);
//   });

//   //ボタンにイベントをセット

//   //「アイテムを追加」ボタン
//   // アイテムにイベントをセット
//   document.querySelector('.js-add-item').addEventListener('click', () => {
//     //アイテムのクローンを作成
//     const dragItem = dragItems[0].cloneNode(true);
//     //イベントをセット
//     dragEventHandlers(dragItem);
//     //ドロップゾーンに追加
//     dropZones[0].appendChild(dragItem);
//   });
//   //「ドロップゾーンを追加」ボタン
//   document.querySelector('.js-add-drop-item').addEventListener('click', () => {
//     //ドロップゾーンのクローンを作成(中身はクローンしない)
//     const dropZone = dropZones[0].cloneNode();
//     //イベントをセット
//     dropEventHandlers(dropZone);
//     //ドロップゾーンの一覧の追加
//     dropItems.appendChild(dropZone);
//   });
// }, false);
