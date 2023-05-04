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

// declaration variables
	var count = 0;
	// selection de la div
	const divBanner = document.getElementById("banner");
	// creation de balises
	const imagePhoto = document.createElement("img");
	const textPhoto = document.createElement("p");
	// selection des fleches
	const arrowRight = document.querySelector(".arrow_right");
	const arrowLeft = document.querySelector(".arrow_left");
	// numero du dernier objet
	const nbrSLide = slides.length;
	const finCarrousel = nbrSLide - 1;

// fonction de selection de l'image et de la tagline
function setSlide () {
	imagePhoto.src = slides[count].image;
	textPhoto.innerHTML = slides[count].tagLine;
};

setSlide ();
imagePhoto.classList.add("banner-img");
imagePhoto.alt = "Banner Print-it";

// liaison a la balise
divBanner.appendChild(imagePhoto);
divBanner.appendChild(textPhoto);


// creation des div dot et id 
for (let i = 0; i < slides.length; i++) {

	const div = document.createElement("div");
	div.className = "dot";
	div.setAttribute('id', i);

	const divDots = document.querySelector(".dots");
	divDots.appendChild(div);
}

// selection des points
let dot_selected = document.getElementById(count);
let dot_unselected = document.getElementById(finCarrousel);

// fonction de mise en forme des points
function setDots () {
	dot_selected = document.getElementById(count);
	dot_selected.classList.add("dot_selected");
	dot_unselected.classList.remove("dot_selected");
}
setDots();

// slidedroite
function arrowIncrement () {
	dot_unselected = document.getElementById(count);
	count++;
	if (count > finCarrousel) {
		count = 0;
		dot_unselected = document.getElementById(finCarrousel);
	}
	// affichage de la photo et du texte
	setSlide ();
	// selection du point et deselection du precedent
	setDots ();
};

// slide gauche
function arrowDecrement () {
	dot_unselected = document.getElementById(count);
	count--;
	if (count < 0) {
		count = finCarrousel;
		dot_unselected = document.getElementById('0');
	};
	// affichage de la photo et du texte
	setSlide ();
	// selection du point et deselection du precedent
	setDots ();
};

// evenement au clique
arrowRight.addEventListener("click", arrowIncrement);
arrowLeft.addEventListener("click", arrowDecrement);

