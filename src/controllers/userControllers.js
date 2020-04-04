var mongoose = require('mongoose');
var uuid = require('uuid/v1');
var User = mongoose.model('users');
var Activity = mongoose.model('activity');


var guestLogin = (req, res) => {

	if (req.cookies.sid) {
		return res.status(400).send();
	}

	var sid = uuid();
	var ts = new Date();

	var newActivity = new Activity({
		sid: sid,
		heartbeat: ts
	});

	newActivity.save((err, newActivity) => {
		if (err) {
			return res.status(500).send();
		}
		return res.cookie("sid", sid).send();
	});
}


var heartbeat = (req, res) => {

	if (!req.cookies.sid) {
		return res.status(401).send();
	}

	Activity.findOne({sid: req.cookies.sid}, (err, activity) => {

		if (err) {
			return res.status(500).send();
		}

		if (!activity) {
			return res.status(404).send();
		}

		activity.heartbeat = new Date();
		activity.save((err, activity) => {
			if (err) {
				return res.status(500).send();
			}
			return res.send();
		});
	})
}

module.exports = {
	guestLogin,
	heartbeat
};
