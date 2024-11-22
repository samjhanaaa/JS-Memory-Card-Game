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

const selectedImage = [];
const matchedImages = [];

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function flipCard() {

        const image = document.createElement("img");
        const initialImage = doubleImages[i];

        image.src = initialImage;
        image.style.width = "100px";
        image.style.height = "100px";
        card[i].appendChild(image);

        selectedImage.push({ src: initialImage, index: i });

        if (selectedImage.length == 2) {
            matchCards();
        }
    })

};

function matchCards() {
    if (selectedImage.length == 2) {
        if (selectedImage[0].src === selectedImage[1].src) {
            alert("its a match");
            matchedImages.push(...selectedImage);
            selectedImage.splice(0, 2)
        } else {
            alert("its not a match")
            setTimeout(() => {
                resetCards(selectedImage[0].index, selectedImage[1].index);
            }, 2000);
        }
    }
}

function resetCards(first, second) {
    let card1 = card[first];
    let card2 = card[second];

    card1.removeChild(card1.lastChild);
    card2.removeChild(card2.lastChild);
    selectedImage.splice(0, 2);
}






