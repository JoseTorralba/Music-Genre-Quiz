// We will only have 5 questions. 
// If it was 6, the score wont be odd.
// For example, what if someone chose 3 genres and the score added up to 2?
// It would be harder for us to keep score and return something to the user.

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
    "img/justin-b.jpg"

];

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
    "Justin Bieber"
];

var genre = {
    rap: 0,
    alt: 0,
    metal: 0,
    pop: 0
};


// QUESTION 1

const container = document.getElementById("questionOne");

for (let i = 0; i < 4; i++) {

    images[i];

    const imgContainer = document.createElement('div');
    const img = new Image();
    img.src = images[i];
    img.id = "img" + i;
    img.classList.add("artist-image");

    imgContainer.appendChild(img);

    const artistName = document.createElement('p');
    artistName.classList.add("caption");
    artistName.textContent = artists[i];
    imgContainer.append(artistName);

    questionOne.appendChild(imgContainer);
};


// QUESTION 2

const container2 = document.getElementById("questionTwo");

for (let i = 4; i < 8; i++) {

    images[i];

    const imgContainer2 = document.createElement('div');
    const img = new Image();
    img.src = images[i];
    img.id = "img" + i;
    img.classList.add("artist-image-2");

    imgContainer2.appendChild(img);

    const artistName = document.createElement('p');
    artistName.classList.add("caption");
    artistName.textContent = artists[i];
    imgContainer2.append(artistName);

    questionTwo.appendChild(imgContainer2);
};

const container3 = document.getElementById("questionThree");

for (let i = 8; i < 12; i++) {

    images[i];

    const imgContainer3 = document.createElement('div');
    const img = new Image();
    img.src = images[i];
    img.id = "img" + i;
    img.classList.add("artist-image-3");

    imgContainer3.appendChild(img);

    const artistName = document.createElement('p');
    artistName.classList.add("caption");
    artistName.textContent = artists[i];
    imgContainer3.append(artistName);

    questionThree.appendChild(imgContainer3);
};





// Continues Quiz & Keeps Score

window.onload = function () {

    // FIRST SET OF IMAGES
    document.getElementById("img0").onclick = function () {
        genre.rap++;
        console.log(genre);

        document.getElementById('questionOne').style.display = "none";
        document.getElementById('questionTwo').style.display = "grid";
    };

    document.getElementById("img1").onclick = function () {
        genre.alt++;
        console.log(genre);

        document.getElementById('questionOne').style.display = "none";
        document.getElementById('questionTwo').style.display = "grid";
    };

    document.getElementById("img2").onclick = function () {
        genre.metal++;
        console.log(genre);

        document.getElementById('questionOne').style.display = "none";
        document.getElementById('questionTwo').style.display = "grid";
    };

    document.getElementById("img3").onclick = function () {
        genre.pop++;
        console.log(genre);

        document.getElementById('questionOne').style.display = "none";
        document.getElementById('questionTwo').style.display = "grid";
    };


    // SECOND SET OF IMAGES
    document.getElementById("img4").onclick = function () {
        genre.rap++;
        console.log(genre);

        document.getElementById('questionTwo').style.display = "none";
        document.getElementById('questionThree').style.display = "grid";
    };

    document.getElementById("img5").onclick = function () {
        genre.alt++;
        console.log(genre);

        document.getElementById('questionTwo').style.display = "none";
        document.getElementById('questionThree').style.display = "grid";
    };

    document.getElementById("img6").onclick = function () {
        genre.metal++;
        console.log(genre);

        document.getElementById('questionTwo').style.display = "none";
        document.getElementById('questionThree').style.display = "grid";
    };

    document.getElementById("img7").onclick = function () {
        genre.pop++;
        console.log(genre);

        document.getElementById('questionTwo').style.display = "none";
        document.getElementById('questionThree').style.display = "grid";
    };
};
