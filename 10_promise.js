/**
 * Créez une fonction asynchrone qui attend 2 seconde
 *
 * utilisez new Promise
 */

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
console.log("j'attends 2 secondes", sleep(2000));

module.exports = { sleep };
