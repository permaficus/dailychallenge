//  First Game

createAsterisk = () => {
    let asterisk = '*****', cache=[], counter = asterisk.length;

    for (let x=0;x<asterisk.length;x++) {   
        cache.push([])
        for (let y=0;y<asterisk.length;y++) {
            cache[x].push((y < counter) ? 'x':' ')
        }
        counter--;
    }

    return cache;
}

console.log(createAsterisk());

asteriskOddEven = () => {
    let cache = [];
    for (let x=0;x<5;x++) {
        cache.push([])
        for (let y=0;y<5;y++) {
            cache[x].push((x%2==1 && y%2==1) ? '*': (x%2==0 && y%2==0) ? '*':' ')
        }
    }    

    return cache;
}

console.log(asteriskOddEven())