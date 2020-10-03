const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(act) {
   return typeof(act) !== 'string' || parseFloat(act) <= 0 || parseFloat(act) > 15 || isNaN(parseFloat(act)) || typeof(parseFloat(act)) === 'string' ? false : Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(act)))/(Math.LN2/HALF_LIFE_PERIOD));
};
