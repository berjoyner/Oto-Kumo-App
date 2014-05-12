SC.initialize({
  client_id: '38260eb937ab3e39bd79b1344c8fee9c'
});

$(document).ready(function() {

// 	SC.get('/tracks', { q: 'genres', license: 'cc-by-sa' }, function(tracks) {
//   	console.log(tracks);
// });

SC.get('/tracks/293', function(track){
    SC.oEmbed(track.permalink_url,
    document.getElementById('player'));
   });


});

// function playSound (genre){
// 	SC.get('/tracks', {
// 		genres: genre,
// 		bpm: {
// 			from: 100
// 		}
// 	}, function(tracks) {
// 		var random = Math.floor(Math.random() * 49);
// 		SC.oEmbed(tracks[random].uri, { auto_play: true}, document.getElementById('target'));
// 	});
// }

// window.onload = function() {
// 	SC.initialize({
// 		client_id:'38260eb937ab3e39bd79b1344c8fee9c'
// 	});
// 	var menuLinks = document.getElementsByClassName('genre');
// 	for(var i =0; i < menuLinks.length; i++) {
// 		var menuLink = menuLinks[i];
// 		menuLink.onclick = function(e) {
// 			e.preventDefault();
// 			playSound(menuLink.innerHTML);
// 		};
// 	}
// };
