var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array.
songs.unshift("Thunder Road - by Bruce Springsteen on the album Born to Run");
songs[songs.length] = "Lonsome - by Dr. Dog on the album Be the Void";

// Loop over the array and remove any words or characters that obviously don't belong.
function charRemove(char, replacement) {
	for (var i = 0; i < songs.length; i++) {
		var charIndex = -1;
		var charIndex = songs[i].indexOf(char);
		if (charIndex !== -1) {
			songs[i] = songs[i].slice(0, charIndex) + replacement + songs[i].slice(charIndex + 1, songs[i].length);
		}
	}
}

charRemove("@")
charRemove("(")
charRemove("!")
charRemove(">", "-")


// Must add each string to the DOM in index.html in the main content area.
html = "";

for (var i = 0; i < songs.length; i++){
	html += '<div class="songInfo">' + songs[i] + "</div>";
}

document.getElementById("info").innerHTML = html;

// Experimenting with object song notation
function Song(name, artist, album) {
	this.name = name;
	this.artist = artist;
	this.album = album;
}

var dd = new Song("Lonesome", "Dr.Dog", "Be the Void");
console.log(dd.name)



