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

    let newExpr = [];
    let str = '';
    for(let i = 0; i < (expr.length / 10); i++)
        newExpr.push(expr.slice(i * 10, i * 10 + 10));
    console.log(newExpr);
    for (item of newExpr){
        let morzeStr = '';
        if(item[0] === '*')
            str += ' ';
        else{
            for(let i = 0; i < 5; i++){
                if(item[i*2] != '0')
                    if(item[i*2 + 1] == '0')
                        morzeStr += '.';
                    else    
                        morzeStr += '-';
            }
            for(key in MORSE_TABLE)
                if(morzeStr === key)
                    str += MORSE_TABLE[key];
        }
    }
    return str;
}
function coder(expr) {
  const dataPackageStr = '0000000000';
  const dataSpace = '**********';
  let str = expr.toLowerCase()
    .split('')
    .map(val => {
      if(val == ' ')
        return dataSpace;
      let newDataPackageStr = dataPackageStr.split('');
      for (let key in MORSE_TABLE)
        if(MORSE_TABLE[key] == val){
          let newKey = key.split('')
            .map(val => {
              if(val == '-')
                return 11;
              else if(val == '.')
                return 10;
            })
            .join('')
            .split('');
          let newKeyLength = newKey.length;
          for (let i = 9; newKeyLength > 0; i--){
            newDataPackageStr[i] = newKey[newKeyLength - 1];
            newKeyLength--;
          }  
        }
      return newDataPackageStr.join('');
    })
    .join('');
    return str;
}

module.exports = {
    decode
}
