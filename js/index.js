//Turn Fun Bus negative on mouseover
const bus = document.querySelector('.intro>img')
bus.addEventListener('mouseover', (event) => {event.target.style.filter = 'invert(100%)'});
bus.addEventListener('mouseout', (event) => {event.target.style.filter = 'none'});


//Displays 'FUN' on keydowns
const funContainer = document.createElement('div');
funContainer.style.display = 'flex';
funContainer.style.justifyContent = 'space-around'
const f = document.createElement('h1');
f.textContent = 'F';
f.style.display = 'none';
const u = document.createElement('h1');
u.textContent = 'U';
u.style.display = 'none';
const n = document.createElement('h1');
n.textContent = 'N';
n.style.display = 'none';

funContainer.appendChild(f);
funContainer.appendChild(u);
funContainer.appendChild(n);
document.querySelector('div.home').prepend(funContainer);

document.addEventListener('keypress', (event) => {
	if (event.key == "f") {
		f.style.display = 'block';
	} else if (event.key == "u") {
		u.style.display = 'block';
	} else if (event.key == "n") {
		n.style.display = 'block';
	}
});


//Cancel click-through on nav items
document.querySelectorAll('a').forEach(tag =>
	tag.addEventListener('click', function(event){
		event.preventDefault();
}));


//Change color of 'Fun Bus' on double click
const welcomeLine = document.querySelector('header>h2');
welcomeLine.style.cursor = 'pointer';
welcomeLine.style.userSelect = 'none';

const funBus = "Fun Bus!";
const words = funBus.split('');


welcomeLine.addEventListener('dblclick', function(){
	const header2 = document.createElement('div');
	header2.textContent = "Welcome To "
	words.map(function(char){
		let span = document.createElement('span')
		span.textContent = char;
		span.style.color = getRandomColor();
		header2.appendChild(span);
	});
	welcomeLine.textContent = "";
	welcomeLine.appendChild(header2);
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


//Annoying alert when copying paraphraph text
const pTags = document.querySelectorAll('p')
pTags.forEach(e => e.addEventListener('copy', () => alert("You copied some text!")));


