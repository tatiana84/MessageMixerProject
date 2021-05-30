// Import the encryptors functions here.
//Can you create one variable that would containe all three function?
//Why is it necesary to be imported separate?

const caesarCipher = require('./encryptors').caesarCipher;
const reverseCipher = require('./encryptors').reverseCipher;
const symbolCipher = require('./encryptors').symbolCipher;

const encodeMessage = (str) => {
    // Use the encryptor functions here.
};
  
const decodeMessage = (str) => {
    // Use the encryptor functions here.
};
  
// User input / output.
  
const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === "encode") {
      output = encodeMessage(str);
    }
    if (process.argv[2] === "decode") {
      output = decodeMessage(str);
    }
  
    process.stdout.write(output + "\n");
    process.exit();
};
  
// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);