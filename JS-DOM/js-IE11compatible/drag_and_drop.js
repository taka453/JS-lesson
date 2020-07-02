let dragItem = null;

const dropItems = document.getElementById('drop-items');

function dragEventHandlers (item) {
  item.addEventListener('dragstart', function(event){
    dragItem = event.target;
  }, false);

  item.addEventListener('dragend', function(){
    dragItem = null;
  }, false);
};

function dropEventHandlers (dropZone) {
  const className = 'drag-enter';

  dropZone.addEventListener('dragenter', function(event) {
    if(dragItem) {
      event.target.classList.add(className);
    }
  }, false);
  dropZone.addEventListener('dragover', function(event) {
    if(dragItem) {
      event.preventDefault();
    }
  }, false);
  dropZone.addEventListener('dragleave', function(event) {
      event.target.classList.remove(className);
  }, false);
  dropZone.addEventListener('drop', function(event) {
      event.target.classList.remove(className);

      if(dragItem) {
        event.preventDefault();
        event.target.appendChild(dragItem);
      }
  }, false);
};

document.addEventListener('DOMContentLoaded', function() {
  const dragItems = document.querySelectorAll('.drag-item');
  dragItems.forEach(function(dragItem) {
    dragEventHandlers(dragItem);
  });

  const dropZones = document.querySelectorAll('.drop-item');
  dropZones.forEach(function(dropItem) {
    dropEventHandlers(dropItem);
  });
  document.querySelector('.js-add-item').addEventListener('click', function() {
    const dragItem = dragItems[0].cloneNode(true);
    dragEventHandlers(dragItem);
    dropZones[0].appendChild(dragItem);
  });
  document.querySelector('.js-add-drop-item').addEventListener('click', function() {
    const dropZone = dropZones[0].cloneNode();
    dropEventHandlers(dropZone);
    dropItems.appendChild(dropZone);
  });
}, false);

