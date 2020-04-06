var mongoose = require('mongoose');
var Asset = mongoose.model('assets');
var Activity = mongoose.model('activity');

var getAsset = (req, res) => {

	if (!req.cookies.sid) {
		return res.status(401).send();
	}
	Asset.find({}, (err, assets) => {

		if (err) {
			return res.status(500).send();
		}
		if (assets.length == 0) {
			return res.status(404).send();
		}

		return res.send(assets);
	})
}

var getAssetById = (req, res) => {

	if (!req.cookies.sid) {
		return res.status(401).send();
	}

	var id = req.params.id;
	Asset.findById(id, (err, asset) => {
		if (err) {
			return res.status(500).send();
		}
		if (!asset) {
			return res.status(404).send();
		}
		return res.send(asset);
	});
}

var createAsset = (req, res) => {

	if (!req.cookies.sid) {
		return res.status(401).send();
	}

	if (!checkIfQualified(req.cookies.sid)) {
		return res.status(403).send();
	}

	var newAsset = new Asset(req.body);

	newAsset.save((err, newAsset) => {
		if (err) {
			return res.status(500).send();
		}
		return res.send(newAsset);
	})
}

var updateAssetById = (req, res) => {

	if (!req.cookies.sid) {
		return res.status(401).send();
	}

	if (!checkIfQualified(req.cookies.sid)) {
		return res.status(403).send();
	}

	Asset.findById(req.params.id, (err, asset) => {
		if (err) {
			return res.status(500).send();
		}
		if (!asset) {
			return res.status(404).send();
		}

		asset = veryUglyImplementationOfUpdatingAsset(asset, req.body);
		asset.save((err, asset) => {
			if (err) {
				return res.status(500).send();
			}
			return res.send(asset);
		})
	})
}

var checkIfQualified = (sid) => {
	// Everyone is qualified for now
	return true;
}

var veryUglyImplementationOfUpdatingAsset = (o, n) => {
	Object.keys(n).forEach((key) => {
		o[key] = n[key];
	})
	return o;
}

module.exports.getAsset = getAsset;
module.exports.getAssetById = getAssetById;
module.exports.createAsset = createAsset;
module.exports.updateAssetById = updateAssetById;
