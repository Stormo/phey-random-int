const axios = require('axios');
/**
 * Generates a random integer between min (inclusive) and max (inclusive).
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {number} - Random integer.
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = getRandomInt;
