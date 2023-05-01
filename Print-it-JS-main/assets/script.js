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

// affichages des photo
var count = 0;
const divBanner = document.getElementById("banner");

const imagePhoto = document.createElement("img");
imagePhoto.src = slides[count].image;
imagePhoto.classList.add("banner-img");

const textPhoto = document.createElement("p");
textPhoto.innerHTML = slides[count].tagLine;

divBanner.appendChild(imagePhoto);
divBanner.appendChild(textPhoto);

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

// ajout des div dots

for (let i = 0; i < slides.length; i++) {

	const div = document.createElement("div");
	div.className = "dot";
	div.setAttribute('id', i);

	const divDots = document.querySelector(".dots");
	divDots.appendChild(div);
}

// selection des points et declaration de variable
const div = document.querySelector(".dot");
let dot_selected = document.getElementById(count);
dot_selected.classList.add("dot_selected");
const nbrSLide = slides.length;
const finCarrousel = nbrSLide - 1;


// slidedroite
const arrowIncrement = () => {
	let dot_unselected = document.getElementById(count);
	count++;
	if (count > finCarrousel) {
		count = 0;
		dot_unselected = document.getElementById(finCarrousel);
	}
	// affichage de la photo et du texte
	imagePhoto.src = slides[count].image;
	textPhoto.innerHTML = slides[count].tagLine;
	dot_selected = document.getElementById(count);

	// selection du point et deselection du precedent
	dot_selected.classList.add("dot_selected");
	dot_unselected.classList.remove("dot_selected");
};

// slide gauche
const arrowDecrement = () => {
	let dot_unselected = document.getElementById(count);
	count--;
	if (count < 0) {
		count = finCarrousel;
		dot_unselected = document.getElementById('0');
	};
	// affichage de la photo et du texte
	imagePhoto.src = slides[count].image;
	textPhoto.innerHTML = slides[count].tagLine;

	// selection du point et deselection du precedent
	const dot_selected = document.getElementById(count);
	dot_selected.classList.add("dot_selected");
	dot_unselected.classList.remove("dot_selected");
};

// evenement au clique
arrowRight.addEventListener("click", arrowIncrement);
arrowLeft.addEventListener("click", arrowDecrement);

