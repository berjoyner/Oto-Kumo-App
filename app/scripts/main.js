/////Pulling Client Authorized ID from SoundCloud

SC.initialize({
  client_id: '38260eb937ab3e39bd79b1344c8fee9c'
});

$(document).ready(function() {

/////Pulling userTrack input from form

$('form').on('submit', function(e){ 
	e.preventDefault();

	var userTrack = $('#find').val();
	console.log(userTrack);

///// SoundCloud's own SDK for JavaScript- GET from database 

	SC.get('/tracks', { genres: userTrack, bpm: { from: 120 } }, function(tracks) {
	  console.log(tracks);
	  console.log(loadTracks);
		
	  var listing = tracks;
	  var html ='';
	  
	  for(var i=0, l=listing.length; i<l; i++) {
        var obj = listing[i];

	  console.log(obj);

	  var genres = obj.genres;

///// SoundCloud's own SDK for JavaScript- Embedding the Video Player

	  SC.oEmbed(obj.permalink_url,
    		document.getElementById('player'));

	  	html += '<ul class="songList" </ul>';

		} //end for loop

		});

///// SoundCloud's own SDK for JavaScript- Pagination

	var page_size = 10;

			SC.get('/tracks', { limit: page_size }, function(tracks) {
			  // first page of tracks
			});

			SC.get('/tracks', { limit: page_size, offset: page_size }, function(tracks) {
			  // second page of tracks
	});
});

});
	

