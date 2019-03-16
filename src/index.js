/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var i;
	var k;
	var j;
	var s = 0;
	for( i=0 ; i < preferences.length ; i++ ){
		for( j=0 ; j < preferences.length ; j++ ){
			if( preferences[i] === j+1 ){
				for ( k=0 ; k < preferences.length ; k++){
					if ( preferences[j] === k+1 ){
						if ( preferences[k] === i+1 )
							if ( k != j ){
								s++;
						}
					}
				}
			}
		}
	}
	return s/3;
};
