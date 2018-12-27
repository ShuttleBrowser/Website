const load = () => {
  const squares = document.querySelector('.squares');
  squares.innerHTML = ''
  for (var i = 1; i < 197; i++) {
    const level = Math.floor(Math.random() * 5);
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
  }
}

setInterval(() => {
    load()
}, 5000)

load()