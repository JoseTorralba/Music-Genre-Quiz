// ARTIST IMAGES
const images = [
    "img/drake.jpg",
    "img/nirvana.jpg",
    "img/metallica.jpg",
    "img/taylor-swift.jpg",
    "img/kanye-west.jpg",
    "img/lady-gaga.jpg",
    "img/bullet-for-my-valentine.jpg",
    "img/katy-perry.jpg",
    "img/kendrick-lamar.jpg",
    "img/rhcp.jpg",
    "img/bvb.jpg",
    "img/justin-b.jpg",
    "img/eminem.jpg",
    "img/foo-fighters.jpg",
    "img/iron-maiden.jpg",
    "img/demi-lovato.jpg",
    "img/future.jpg",
    "img/the-killers.jpg",
    "img/slipknot.jpg",
    "img/adele.jpg"
];

// ARTIST NAMES
const artists = [
	"Drake",
	"Nirvana",
	"Metallica",
	"Taylor Swift",
	"Kanye West",
	"Lady Gaga",
	"Bullet For My Valentine",
	"Katy Perry",
    "Kendrick Lamar",
    "Red Hot Chili Peppers",
    "Black Veil Brides",
    "Justin Bieber",
    "Eminem",
    "Foo Fighters",
    "Iron Maiden",
    "Demi Lovato",
    "Future",
    "The Killers",
    "Slipknot",
    "Adele"
];

// KEEPS SCORE
var score = {
    rap: 0,
    alt: 0,
    metal: 0,
    pop: 0
};

// QUESTION 1
const container = document.getElementById("questionOne");

for (let i = 0; i < 4; i++) {

    const imgContainer = document.createElement('div');
    const img = new Image();
    img.src = images[i];
    img.id = "img" + i;

    imgContainer.appendChild(img);

    const artistName = document.createElement('p');
    artistName.textContent = artists[i];
    imgContainer.append(artistName);

    questionOne.appendChild(imgContainer);
};

// QUESTION 2
const container2 = document.getElementById("questionTwo");

for (let i = 4; i < 8; i++) {

    const imgContainer2 = document.createElement('div');
    const img = new Image();
    img.src = images[i];
    img.id = "img" + i;

    imgContainer2.appendChild(img);

    const artistName = document.createElement('p');
    artistName.textContent = artists[i];
    imgContainer2.append(artistName);

    questionTwo.appendChild(imgContainer2);
};

// QUESTION 3
const container3 = document.getElementById("questionThree");

for (let i = 8; i < 12; i++) {

    const imgContainer3 = document.createElement('div');
    const img = new Image();
    img.src = images[i];
    img.id = "img" + i;

    imgContainer3.appendChild(img);

    const artistName = document.createElement('p');
    artistName.textContent = artists[i];
    imgContainer3.append(artistName);

    questionThree.appendChild(imgContainer3);
};

// QUESTION 4
const container4 = document.getElementById("questionFour");

for (let i = 12; i < 16; i++) {

    const imgContainer4 = document.createElement('div');
    const img = new Image();
    img.src = images[i];
    img.id = "img" + i;

    imgContainer4.appendChild(img);

    const artistName = document.createElement('p');
    artistName.textContent = artists[i];
    imgContainer4.append(artistName);

    questionFour.appendChild(imgContainer4);
};

// QUESTION 5
const container5 = document.getElementById("questionFive");

for (let i = 16; i < 20; i++) {

    const imgContainer5 = document.createElement('div');
    const img = new Image();
    img.src = images[i];
    img.id = "img" + i;

    imgContainer5.appendChild(img);

    const artistName = document.createElement('p');
    artistName.textContent = artists[i];
    imgContainer5.append(artistName);

    questionFive.appendChild(imgContainer5);
};

// ANSWER DIV
const containerAns = document.getElementById('answer');
const message = document.createElement('article');
const message2 = document.createElement('article');
const message3 = document.createElement('article');
const message4 = document.createElement('article');

// KEEPS SCORE & MOVES ON TO NEXT QUESTIONS
// QUESTION 1 IMAGES
document.getElementById("img0").onclick = function () {
    score.rap++;
    console.log(score);

    document.getElementById('questionOne').style.display = "none";
    document.getElementById('questionTwo').style.display = "grid";
};

document.getElementById("img1").onclick = function () {
    score.alt++;
    console.log(score);

    document.getElementById('questionOne').style.display = "none";
    document.getElementById('questionTwo').style.display = "grid";
};

document.getElementById("img2").onclick = function () {
    score.metal++;
    console.log(score);

    document.getElementById('questionOne').style.display = "none";
    document.getElementById('questionTwo').style.display = "grid";
};

document.getElementById("img3").onclick = function () {
    score.pop++;
    console.log(score);

    document.getElementById('questionOne').style.display = "none";
    document.getElementById('questionTwo').style.display = "grid";
};

// QUESTION 2 IMAGES
document.getElementById("img4").onclick = function () {
    score.rap++;
    console.log(score);

    document.getElementById('questionTwo').style.display = "none";
    document.getElementById('questionThree').style.display = "grid";
};

document.getElementById("img5").onclick = function () {
    score.alt++;
    console.log(score);

    document.getElementById('questionTwo').style.display = "none";
    document.getElementById('questionThree').style.display = "grid";
};

document.getElementById("img6").onclick = function () {
    score.metal++;
    console.log(score);

    document.getElementById('questionTwo').style.display = "none";
    document.getElementById('questionThree').style.display = "grid";
};

document.getElementById("img7").onclick = function () {
    score.pop++;
    console.log(score);

    document.getElementById('questionTwo').style.display = "none";
    document.getElementById('questionThree').style.display = "grid";
};

// QUESTION 3 IMAGES
document.getElementById("img8").onclick = function () {
    score.rap++;
    console.log(score);

    document.getElementById('questionThree').style.display = "none";
    document.getElementById('questionFour').style.display = "grid";
};

document.getElementById("img9").onclick = function () {
    score.alt++;
    console.log(score);

    document.getElementById('questionThree').style.display = "none";
    document.getElementById('questionFour').style.display = "grid";
};

document.getElementById("img10").onclick = function () {
    score.metal++;
    console.log(score);

    document.getElementById('questionThree').style.display = "none";
    document.getElementById('questionFour').style.display = "grid";
};

document.getElementById("img11").onclick = function () {
    score.pop++;
    console.log(score);

    document.getElementById('questionThree').style.display = "none";
    document.getElementById('questionFour').style.display = "grid";
};

// QUESTION 4 IMAGES
document.getElementById("img12").onclick = function () {
    score.rap++;
    console.log(score);

    document.getElementById('questionFour').style.display = "none";
    document.getElementById('questionFive').style.display = "grid";
};

document.getElementById("img13").onclick = function () {
    score.alt++;
    console.log(score);

    document.getElementById('questionFour').style.display = "none";
    document.getElementById('questionFive').style.display = "grid";
};

document.getElementById("img14").onclick = function () {
    score.metal++;
    console.log(score);

    document.getElementById('questionFour').style.display = "none";
    document.getElementById('questionFive').style.display = "grid";
};

document.getElementById("img15").onclick = function () {
    score.pop++;
    console.log(score);

    document.getElementById('questionFour').style.display = "none";
    document.getElementById('questionFive').style.display = "grid";
};

// QUESTION 5 IMAGES WITH ANSWERS
document.getElementById("img16").onclick = function () {
    score.rap++;
    console.log(score);
    document.getElementById('questionFive').style.display = "none";
    document.getElementById('answer').style.display = "block";
    answer.appendChild(message);
    answer.appendChild(message2);
    answer.appendChild(message3);
    answer.appendChild(message4);

    if (score.rap >= 1) {
        message.textContent = "You enjoy listening to rap music";
    } 
    
    if (score.alt >= 1) {
        message2.textContent = "and a bit of alt";
    }

    if (score.metal >= 1) {
        message3.textContent = "and a bit of metal";
    }

    if (score.pop >= 1) {
        message4.textContent = "and a bit of pop";
    }
};

document.getElementById("img17").onclick = function () {
    score.alt++;
    console.log(score);

    document.getElementById('questionFive').style.display = "none";
    document.getElementById('answer').style.display = "block";
    answer.appendChild(message);
    answer.appendChild(message2);
    answer.appendChild(message3);
    answer.appendChild(message4);

    if (score.alt >= 1) {
        message.textContent = "You enjoy listening to alternative music.";
    }

    if (score.rap >= 1) {
        message2.textContent = "and a bit of rap";
    } 
    

    if (score.metal >= 1) {
        message3.textContent = "and a bit of metal";
    }

    if (score.pop >= 1) {
        message4.textContent = "and a bit of pop";
    }
};

document.getElementById("img18").onclick = function () {
    score.metal++;
    console.log(score);

    document.getElementById('questionFive').style.display = "none";
    document.getElementById('answer').style.display = "block";
    answer.appendChild(message);
    answer.appendChild(message2);
    answer.appendChild(message3);
    answer.appendChild(message4);

    if (score.metal >= 1) {
        message.textContent = "You enjoy listening to metal music.";
    }

    if (score.rap >= 1) {
        message2.textContent = "and a bit of rap";
    } 
    
    if (score.alt >= 1) {
        message3.textContent = "and a bit of alt";
    }

    if (score.pop >= 1) {
        message4.textContent = "and a bit of pop";
    }
};

document.getElementById("img19").onclick = function () {
    score.pop++;
    console.log(score);

    document.getElementById('questionFive').style.display = "none";
    document.getElementById('answer').style.display = "block";
    answer.appendChild(message);
    answer.appendChild(message2);
    answer.appendChild(message3);
    answer.appendChild(message4);

    if (score.pop >= 1) {
        message.textContent = "You enjoy listening to pop music.";
    } 

    if (score.rap >= 1) {
        message2.textContent = "and a bit of rap";
    } 
    
    if (score.alt >= 1) {
        message3.textContent = "and a bit of alt";
    }

    if (score.metal >= 1) {
        message4.textContent = "and a bit of metal";
    }
};