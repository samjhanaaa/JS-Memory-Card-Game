const card = document.getElementsByClassName("cards");
const cardPicture = [
    '../ assets / dino.jpg',
    '../ assets / dolphin.jpg',
    '../ assets / duck.jpg',
    '../ assets / elephant.jpg',
    '../ assets / monkey.jpg',
    '../ assets / penguin.jpg',
    '../ assets / sheep.jpg',
    '../ assets / turtle.jpg'
]

for (i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
        this.style.backgroundColor = "red"
    })
}




