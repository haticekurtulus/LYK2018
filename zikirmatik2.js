const state = {
  current: 0,
}

 function increment(){
   state.current++;
 }

 function reset() {
   state.current = 0;
 }

function render () {
  const screen = document.getElementById('screen');
  screen.innerText=state.current;
}


document.getElementById('incBut').addEventListener('click',
  function () {
    increment();
    render();
  }
);

document.getElementById('resBut').addEventListener('click',
  function() {
    reset();
    render();
}
);
