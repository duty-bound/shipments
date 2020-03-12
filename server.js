const express = require('express')

const app = express()

app.use(express.static(__dirname + '/dist'))

app.listen(5000, function () {
	console.log('Listening on port 5000...')
});
