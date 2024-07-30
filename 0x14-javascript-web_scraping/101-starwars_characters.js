const request = require('request');

const movieId = process.argv[2];
if (!movieId) {
	    console.error('Please provide a Movie ID');
	    process.exit(1);
}

const filmUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(filmUrl, { json: true }, (err, res, body) => {
	    if (err) {
		            return console.error('Error:', err);
		        }

	    if (res.statusCode !== 200) {
		            return console.error(`Failed to fetch film with ID ${movieId}:`, res.statusCode);
		        }

	    const characters = body.characters;
	    characters.forEach(characterUrl => {
		            request(characterUrl, { json: true }, (charErr, charRes, charBody) => {
				                if (charErr) {
							                return console.error('Error:', charErr);
							            }

				                if (charRes.statusCode !== 200) {
							                return console.error(`Failed to fetch character:`, charRes.statusCode);
							            }

				                console.log(charBody.name);
				            });
		        });
});

