const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// const arrowLeft = document.querySelector(".arrow_left");

// arrowLeft.onclick = function() {window.alert('clic sur la fleche gauche')};

// const arrowRight = document.querySelector(".arrow_right");

// arrowRight.onclick = function() {window.alert('clic sur la fleche droite')};

// const affiche =slides.image;


// affichages des photo
let p =0;
	const divBanner = document.getElementById("banner");

	const imagePhoto = document.createElement("img");
	imagePhoto.src = slides[p].image;
	imagePhoto.classList.add("banner-img");

	const textPhoto = document.createElement("p");
	textPhoto.innerHTML = slides[p].tagLine;

	divBanner.appendChild(imagePhoto);
	divBanner.appendChild(textPhoto);

	const arrowRight = document.querySelector(".arrow_right");
	arrowRight.onclick = function () { 
		p++;
	};


// ajout des div dots

for (let i = 0; i < slides.length; i++) {

	const div = document.createElement("div");
	div.className = "dot";
	div.setAttribute('id',i);

	const divDots = document.querySelector(".dots");
	divDots.appendChild(div);
}

const div = document.querySelector(".dot");
const arrowLeft = document.querySelector(".arrow_left");

// arrowLeft.onclick = function () { 
	
// 	p--;
// };


// console.log(p);


// let a=0;
// function increment() {
// 	a++;
// }
// const ban = document.getElementById("banner");
// ban.onclick = increment();
// console.log(a);


var count = 0;
let dot_selected = document.getElementById(count);
dot_selected.classList.add("dot_selected");


// slidedroite
const handleIncrement = () => {
	let dot_unselected  = document.getElementById(count);
	count++;
	if(count > 3) {
		count = 0;
		dot_unselected = document.getElementById("3");
	  }
  console.log(count);
  imagePhoto.src = slides[count].image;
  textPhoto.innerHTML = slides[count].tagLine;
  dot_selected = document.getElementById(count);
  dot_selected.classList.add("dot_selected");
  dot_unselected.classList.remove("dot_selected");
};

// slide gauche
const handleDecrement = () => {
	let dot_unselected  = document.getElementById(count);
	count--;
	if(count < 0){
		count = 3;
		dot_unselected = document.getElementById("0");
	  };
	
  p = count;
  imagePhoto.src = slides[p].image;
  textPhoto.innerHTML = slides[count].tagLine;
  const dot_selected = document.getElementById(count);
  dot_selected.classList.add("dot_selected");
  dot_unselected.classList.remove("dot_selected");
  console.log(count);
};

// evenement au clique
arrowRight.addEventListener("click", handleIncrement);
arrowLeft.addEventListener("click", handleDecrement);

