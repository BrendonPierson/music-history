var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// Each student must add one song to the beginning and the end of the array.
songs.unshift("Thunder Road by Bruce Springsteen on the album Born to Run");
songs[songs.length] = "Lonsome by Dr. Dog on the album Be the Void";

console.log(songs)

// Loop over the array and remove any words or characters that obviously don't belong.
for (var i = 0; i < songs.length; i++) {
	songs[i].replace(/@/g, "");
	songs[i].replace(/(/g, "");
	songs[i].replace(/!/g, "");
	songs[i].replace(/>/g, "-")
}

console.log(songs)

// Students must find and replace the > character in each item with a - character.
html = "";

for (var i = 0; i < songs.length; i++){
	html += "<div>" + songs[i] + "</div>";
}

document.getElementById("info").innerHTML = html;

// Must add each string to the DOM in index.html in the main content area.