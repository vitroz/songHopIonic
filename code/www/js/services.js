angular.module('songhop.services', [])

.factory('User', function(){

	var user = {
		favorites: []
	}



	user.addSongsToFavorites = function(song){
		// Se existir uma musica
		if(!song) return false;

		//adiciona ao array de favoritos
		user.favorites.unshift(song);
	}

	user.removeSongFromFavorites = function(song, index){
		if(!song) return false;

		user.favorites.splice(index, 1);
	}

	

	return user;

});