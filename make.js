make = (n,char_) => {

    // Credit to @padulkemid

    char_ = char_ || ''
    let dict = '.abcdefghijklmnopqrstuvqxyz', char ='';
    char += `${dict[n]}`;
    n--;
    char_ += char;
    return (n == 0) ? `${char}-${char_.substr(0,char_.length-1).split('').reverse().join('-')}`
            :`${char}-${make(n,char_)}`

}

console.log(make(5))
console.log(make(10))