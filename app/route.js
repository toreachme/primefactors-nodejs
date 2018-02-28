module.exports = function(app) {
	const calculate = require('./controller');

  //Routes
  app.route('/calculate/:endpoint(\\d+)')
  .get(calculate.getInteger);

    //Routes
  app.route('/primefactors/:endpoint(\\d+)')
  .get(calculate.getPrimeFactors);

};