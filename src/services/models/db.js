var mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
// const GridFs = require('gri')

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


// discard
// const storage = new GridFsStorage({
//   url: AtlasURI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err)
//         }
//         const filename = file.originalname
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads',
//         }
//         resolve(fileInfo)
//       })
//     })
//   },
// })
//
// const upload = multer({ storage })
