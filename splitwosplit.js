splitting = string => {

    // MANUAL SOLUTIONS
    let cache = [], words = '';
    for (let char in string) {
        if (string[char] !== ' ') {
            words += string[char]
        } else {
            cache.push(words);
            words = '';
        }
    }

    cache.push(words);
    return cache;

    // SIMPLE SOLUTION
    return string.match(/\w+/g)

}

console.log(splitting('Aku Cinta Indonesia'),['Aku', 'Cinta', 'Indonesia'])
console.log(splitting('I Am Orion Fox'), ['I','Am','Orion','Fox'])