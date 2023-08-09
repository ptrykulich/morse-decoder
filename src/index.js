const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const decoded = [];

    for (let i = 0; i < expr.length; i += 10) {
        const encodedLetters = expr.substr(i, 10);
        if (encodedLetters === '**********') {
            decoded.push(' ');
        } else {
            const decodedMorseKey = [];

            for (let j = 0; j < encodedLetters.length; j += 2) {
                const encodedMorseKey = encodedLetters.substr(j, 2);
                if (encodedMorseKey === '10') {
                    decodedMorseKey.push('.');
                }
                if (encodedMorseKey === '11') {
                    decodedMorseKey.push('-');
                }
            }

            const morseKey = decodedMorseKey.join('');
            decoded.push(MORSE_TABLE[morseKey]);
        }
    }

    return decoded.join('');
}

module.exports = {
    decode
}