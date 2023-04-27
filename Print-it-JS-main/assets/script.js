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


for (let i = 0; i < slides.length; i++) {

	const div = document.createElement("div");
	div.className = "dot";

	const divDots = document.querySelector(".dots");
	divDots.appendChild(div);
}

const div = document.querySelector(".dot");
const arrowLeft = document.querySelector(".arrow_left");

arrowLeft.onclick = function () { 
	div.classList.add("dot_selected"); 
	p--;
};


console.log(p);


let a=0;
function increment() {
	a++;
}
const ban = document.getElementById("banner");
ban.onclick = increment();
console.log(a);




// Select total count

// Variable to track count
var count = 0;

// Display initial count value


// Function to increment count
const handleIncrement = () => {
	count++;
	if(count > 3) {
		count = 0;
	  }
  console.log(count);
  imagePhoto.src = slides[count].image;
};

// Function to decrement count
const handleDecrement = () => {
	count--;
	if(count < 0){
		count = 3;
	  };
	
  p = count;
  imagePhoto.src = slides[p].image;
  console.log(count);
};

// Add click event to buttons
arrowRight.addEventListener("click", handleIncrement);
arrowLeft.addEventListener("click", handleDecrement);

