const httpRequest = require('request');
const primesFactors = require('primes-and-factors');
const intObj = {};

exports.getInteger = (req, res) => {
	httpRequest.get('http://dashboard.savemysales.co/devtest/'+req.params.endpoint, (error, response, body) => {
		if (error) return res.status(500).send('HTTP request Error :' + error);

		res.status(200).send(body);

		console.log(body);

	})
}

exports.getPrimeFactors = (req, res) => {
	let result = primesFactors.getUniqueFactors(req.params.endpoint);

	if (result == '') {
		res.send("Sorry there was an issue");
		onsole.log(result);
	}
	else{
		res.send(result);
		console.log(result);
	}

}