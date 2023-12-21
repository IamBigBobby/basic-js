const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

// const key = 'alphonse';
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(string, key) {
    
    if(string === undefined || key === undefined){
      throw new Error ('Incorrect arguments!')
    }

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numAlphabet = {};

    for (let i = 0; i < alphabet.length; i++) {
      numAlphabet[alphabet[i]] = i;
    }

    let encodeStr = '';

    for (let i = 0, j = 0; i < string.length; i++) {
      if (numAlphabet.hasOwnProperty(string[i].toUpperCase())) {
        let encodedIndex = numAlphabet[string[i].toUpperCase()];
        let keyIndex = numAlphabet[key[j % key.length].toUpperCase()];
        let encryptedIndex = (encodedIndex + keyIndex) % alphabet.length;

        encodeStr += alphabet[encryptedIndex];
        j++;
      } else {
        encodeStr += string[i];
      }
    }
    
    return this.reverse ? encodeStr : encodeStr.split('').reverse().join('');
  }

  decrypt(string, key) {

    if(string === undefined || key === undefined){
      throw new Error ('Incorrect arguments!')
    }

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numAlphabet = {};

    for (let i = 0; i < alphabet.length; i++) {
      numAlphabet[alphabet[i]] = i;
    }

    let decodeStr = '';

    for (let i = 0, j = 0; i < string.length; i++) {
      if (numAlphabet.hasOwnProperty(string[i].toUpperCase())) {
        let encodedIndex = numAlphabet[string[i].toUpperCase()];
        let keyIndex = numAlphabet[key[j % key.length].toUpperCase()];
        let decryptedIndex = (encodedIndex - keyIndex + alphabet.length) % alphabet.length;

        decodeStr += alphabet[decryptedIndex];
        j++;
      } else {
        decodeStr += string[i];
      }
    }
    
    return this.reverse ? decodeStr : decodeStr.split('').reverse().join('');
  }
}
// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);

// console.log(directMachine.encrypt(string = 'attack at dawn!', key));
// console.log(directMachine.decrypt(string = 'WQUPIKT', key))
module.exports = {
  VigenereCipheringMachine
};
