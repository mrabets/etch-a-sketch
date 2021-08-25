const container=document.getElementById('container');

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows' ,rows);
    container.style.setProperty('--grid-cols', cols);
    
    for(let c = 0; c < (rows*cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

let mode = 'mouseover'
let drawing_color = 'black'

const click_mode = document.getElementById("click-mode")
click_mode.addEventListener('click', () => {
  if (mode === 'mouseover') {
    mode = 'click';
  } else {
    mode = 'mouseover';
  }
  items.forEach((item)=>{
    item.remove();
  })
  makeRows(16, 16);
  items = document.querySelectorAll(".grid-item");
  draw(items)   
})

function draw(items) {
  items.forEach((item)=>{
    item.addEventListener(mode, (elem) => {
      elem.target.style.background = drawing_color;
    });
  });
}

const reset = document.getElementById("reset")
reset.addEventListener('click', () => {
    items.forEach((item)=>{
      item.remove();
    })
    makeRows(16, 16);
    items = document.querySelectorAll(".grid-item");
    draw(items)   
})

const change_color = document.getElementById("change-color")
change_color.addEventListener('input', () => {
  drawing_color = change_color.value
})

makeRows(16, 16);

let items = document.querySelectorAll(".grid-item");
draw(items)
