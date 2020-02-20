// make = (n, immutableN, desc = true) => {
make = (n, char_) => {
    let dict = '.abcdefghijklmnopqrstuvqxyz', char ='';

    // Credit to @padulkemid

    char_ = char_ || ''
    char += dict[n];
    char_ += char;
    n--;
    return (n == 0) ? `${char}-${char_.substr(0,char_.length-1).split('').reverse().join('-')}`
            :`${char}-${make(n,char_)}`

    // Credit to @CoachSemmi
    
    if (!immutableN) {
        immutableN = n
    } else if (n === immutableN) {
        return ''
    }

    if (n === 1 || !desc) {
        return dict[n] + make(n + 1, immutableN, false)
    } else {
        return dict[n] + make(n-1, immutableN)
    }

}

console.log(make(5))
return
console.log(make(10))
console.log(make(26))