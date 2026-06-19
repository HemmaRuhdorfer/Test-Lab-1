// SpaceshipFinder.js
function SpaceshipFinder() {}
SpaceshipFinder.prototype.findSpaceship = function(map) {

		if(!map || map.indexOf('X') === -1) {
			return "forever lost";
		}
		
		var rows = map.split('\n');

		for (var y = 0; y < rows.length; y++) {
			var x = rows[y].indexOf('X');

			if (x !== -1) {
				return [x, y];
			}
		}


};
