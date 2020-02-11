leftRotation = (a,b) => {

    let cache = [], pop_ = a[a.length-1], idx = 0;
    for (let i=b;i<a.length+b;i++) {
        cache.push((i > pop_) ? idx++:a[i])
    }
    
    return cache;


    // ALTERNATE VERSION
    let cache = a.slice(0,b);
    a.splice(0,b); 
    a = a.concat(cache);
    return a;

}
// test case
console.log(leftRotation([0, 1, 2, 3, 4, 5], 1)) // [ 1, 2, 3, 4, 5, 0]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 2)) // [ 2, 3, 4, 5, 0, 1 ]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 3)) // [ 3, 4, 5, 0, 1, 2 ]