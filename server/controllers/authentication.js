const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

const tokenForUser = user => {
	console.log('USER', user);
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user._id, iat: timestamp }, config.secret);
};

const signup = (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		return res
			.status(422)
			.send({ error: 'You must provide Email and Password ' });
	}

	User.findOne({ email: email }, (err, existingUser) => {
		if (err) {
			return next(err);
		}
		if (existingUser) {
			return res.status(422).send({ error: 'Email is already in use' });
		} else {
			const user = new User({
				email,
				password
			});
			user.save(err => {
				if (err) {
					return next(err);
				}

				res.json({ token: tokenForUser(user) });
			});
		}
	});
};

const signin = (req, res, next) => {
	res.send({ token: tokenForUser(req.user) });
};

module.exports = {
	signup,
	signin
};
