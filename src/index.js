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
    let morse = '';
    let res = '';
    let arr = expr.split('');

    for(let i = 0; i<arr.length; i++) {
        if(arr[i] == ' ') {
            res += '**********';
            continue;
        }
        for(key in MORSE_TABLE) {
            if(MORSE_TABLE[key] == arr[i]){
                morse += key;

                let numArr = morse.split('').map(e => e === '-' ? '11' : e === '.' ? '10' : null).join('')

                if(numArr.length < 10){
                    let a = 10 - numArr.length;

                    for(let k = 0; k<a; k++){
                        numArr = '0' + numArr;
                    }
                
                }

                res += numArr;
                numArr = '';
                morse = '';
                
            }
        }
    }

    

    return res;
}

module.exports = {
    decode
}