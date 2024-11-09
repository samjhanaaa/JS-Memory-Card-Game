const card = document.getElementsByClassName("cards");
const cardContainer = document.getElementById("main-container");

const cardPicture = [
    '../assets/dino.jpg',
    '../assets/dolphin.jpg',
    '../assets/duck.jpg',
    '../assets/elephant.jpg',
    '../assets/monkey.jpg',
    '../assets/penguin.jpg',
    '../assets/sheep.jpg',
    '../assets/turtle.jpg'
]

const doubleImages = [...cardPicture, ...cardPicture]

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function flipCard() {

        const image = document.createElement("img");
        const initialImage = doubleImages[i];

        image.src = initialImage;
        image.style.width = "100px";
        image.style.height = "100px";
        card[i].appendChild(image);

    })
};








