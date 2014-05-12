SC.initialize({
  client_id: '38260eb937ab3e39bd79b1344c8fee9c'
});

$(document).ready(function() {

$('form').on('submit', function(e){
	e.preventDefault();

	var userTrack = $('#find').val();
	console.log(userTrack);

	SC.get('/tracks', { genres: userTrack, bpm: { from: 120 } }, function(tracks) {
	  console.log(tracks);
	  console.log(loadTracks);
		
	  var listing = tracks.data;
	  console.log(listing);

	  SC.oEmbed(tracks.permalink_url,
    		document.getElementById('player')

		);
	});
});
});

	  // var tracker = {
	  // 		url: $('permalink_url').val(),
	  // };

	  // console.log(tracker);
// 	  var html = '';

// 	  for(var i=0, l=listing.length; i<l; i++) {
//         var obj = listing[i].data;

// 	  var genre = obj.genre;

// 	  alert(obj.genre);

// 	  // htm += '<ul '+genre+' class="songList" </ul>';

// SC.get('/tracks/293', function(track){
//     SC.oEmbed(track.permalink_url,
//     document.getElementById('player'));
//    });

