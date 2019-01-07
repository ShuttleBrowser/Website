const rows = 7;
const columns = 28;

let s = '';

for(let i = 0; i < rows; i++) {
	s += '<tr>'
	for(let a = 0; a < columns; a++) {
		s += '<td><img src="https://via.placeholder.com/320" alt=" " /></td>'
	}
	s += '</tr>'
}
squares.innerHTML += s;

const update = () => {
	let squares = document.querySelectorAll('#squares td')
	for(let i = 0; i < squares.length; i++) {
		squares[i].setAttribute('class', 'level-' + Math.round(Math.random()*5))
	}
}
update()

setInterval(update, 5000)