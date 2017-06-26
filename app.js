$(document).ready(function () {
	$('#search-bar').on('input', function() {
		var searchInput = $('input[name=search]').val();
		var flickrAPI = 'https://api.flickr.com/services/rest/?jsoncallback=?';
		$.getJSON( flickrAPI, {
			method: 'flickr.photos.search',
			api_key: config.API_KEY,
			tags: searchInput,
			format: 'json',
			extras: 'url_s,views'
		})
		.done(function(data) {
			$('#images').empty();
			if (searchInput.length > 0) {		
				$.each(data.photos.photo, function(i, item) {
					$('<div></div>').addClass('image-container-'+i).appendTo('#images');
			       	$('<img/>').attr('src', item.url_s).addClass('image').appendTo('.image-container-'+i);
					$('<div class="views">' + item.views + '</div>').appendTo('.image-container-'+i);
				});
			};
		});
	});
});