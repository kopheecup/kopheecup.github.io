// reused code from a previous group project
// Git repo: YomigaeSu/info-30005-2019-pi

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');

var app = express();

// Initialise middlewares

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// DB SETUP

require('./src/services/models/db.js');

// Serve static files under root path

app.use('/', express.static('./'));

// Capture API calls

const routes = require('./src/services/routes/routes.js');
app.use('/api', routes)

// Capture invalid entrypoints

app.all('*', (req, res) => {
	//	res.sendStatus(403);

	res.redirect('/err.html');

})

// START

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('Express is up and runnin');
})
