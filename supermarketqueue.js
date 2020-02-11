/* From The Supermarket Queue on Codewards - https://www.codewars.com/kata/57b06f90e298a7b53d000a86 */

queueTimes = (queue,n) => {

    let time = 0, self = Array(n).fill(0), cache,queue_ , closed=false;

    while (closed || queue.length!==0) { cache = self.indexOf(0);
        while (cache >= 0) {queue_ = queue.shift(); self[cache] = queue_; cache = self.indexOf(0);}
      
      time ++;
      self.forEach((a, b) => {self[b] -= (a>0) ? 1:0});
      closed = self.find(el=>el>0)
    }
  
    return time;

}



console.log(queueTimes([], 1), 0);
console.log(queueTimes([1,2,3,4], 1), 10);
console.log(queueTimes([2,2,3,3,4,4], 2), 9);
console.log(queueTimes([1,2,3,4,5], 100), 5);