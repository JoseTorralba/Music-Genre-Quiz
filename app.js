const images = [
    "img/drake.jpg",
    "img/nirvana.jpg",
    "img/metallica.jpg",
    "img/taylor-swift.jpg"
];

const artists = [
	"Drake", 
	"Nirvana",
	"Metallica", 
	"Taylor Swift"
];

var genre = {
    rap: 0,
    metal: 0,
    alt: 0,
    pop: 0
};

const container = document.getElementById("questionOneImg");


for (let i = 0; i < images.length; i++) {
	
	const imgContainer = document.createElement('div');
	
	const img = new Image();
	img.src = images[i];
	img.id = "img"+i;
	img.classList.add("slide");


	img.onclick = function() {
		const index = this.id.split("img")[1];
		console.log(artists[index]);
	}
	

	imgContainer.appendChild(img);
	
	const artistName = document.createElement('p');
	artistName.classList.add("caption");
	artistName.textContent = artists[i];
    imgContainer.append(artistName);

	questionOneImg.appendChild(imgContainer);



}




























