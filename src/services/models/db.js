var mongoose = require('mongoose');

const AtlasURI = 'mongodb+srv://kopheecup:@Clarinet@kopheecup-8mav2.mongodb.net/test?retryWrites=true&w=majority';

const options = {
	useNewUrlParser: true,
	dbName: 'KopheeGallery'
}

mongoose.connect(AtlasURI, options).then(
	() => {
		console.log('Atlas Connected');
	}, (err) => {
		console.log('Connection to Atlas failed');
	})

require('./schema.js')
