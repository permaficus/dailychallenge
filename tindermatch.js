/**
 * ============
 * Tinder match
 * ============
 *
 *
 * Buatlah sebuah fungsi yang akan menerima input array of object sebagai berikut
 * [
 *  { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya']},
 *  { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
 *  { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
 *  { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] },
 *  { name: 'Derpina', gender: 'Women', traits: ['Cantik', 'Sederhana', 'Rajin'], expectation: ['Pintar', 'Jujur', 'Baik'] }
 * ]
 *
 * Dan fungsi ini akan mengeluarkan output sebuah object match yang didapatkan oleh setiap orang.
 *
 * {
 *  Andre: {
 *    match: []
 *  },
 *  Marsya: {
 *     match: [ 'Dimas' ]
 *  },
 *  Dimas: {
 *     match: [ 'Marsya', 'Bella', 'Derpina' ]
 *  },
 *  Bella: {
 *     match: [ 'Dimas' ]
 *  },
 *  Derpina: {
 *    match: [ 'Dimas' ]
 *  }
 * }
 *
 * Match didapatkan dengan mencocokan expectation dari setiap orangnya dengan trait orang lain
 * Contoh Marsya match dengan Dimas karena
 * Marsya memiliki Expectation Kaya dan Olahragawan
 * dan Dimas memiliki Traits Pintar dan kaya
 *
 * Karena Dimas memiliki traits Kaya dan Marsya Expectations nya juga kaya mereka adalah pasangan yang match
 *
 * Asumsi
 * =====
 *
 * Setiap orang dianggap match ketika setidaknya memilki satu kesamaan antara expectations dan trait
 *
 */
function tinderMatch(people) {
    let [men,women,user] = [[],[],[]];
    
    const isMatch = (wt,we,mt,me) => {
        let match_weigth = 0; // max 2
        for (let m in me) {
            // console.log(expects[m])
            if (wt.indexOf(me[m]) !== -1) {
                match_weigth++
                break;
            }
        }
        for (let t in we) {
            // console.log(traits[t])
            if (mt.indexOf(we[t]) !== -1) {
                match_weigth++;
                break;
            }
        }
        return (match_weigth < 2) ? false:true
    }

    for (let i in people) {
        let matched = {}
        people[i].gender == 'Men' ? men.push(people[i]): people[i].gender == 'Women' ? women.push(people[i]):'';
        if (people[i].gender == 'Men' || people[i].gender == 'Women'){
            matched[people[i].name] = matched[people[i].name] || {match: []};
            user.push(matched)
        }
    }

    for (let p in user) {
        if (people[p].gender == 'Men') {
            for (let w in women) {
                if (isMatch(women[w].traits,women[w].expectation,people[p].traits,people[p].expectation)) {
                    user[p][Object.keys(user[p])[0]].match.push(women[w].name)
                }
            }
            console.log(user[p])
        }
        if (people[p].gender == 'Women') {
            for (let m in men) {
                if (isMatch(people[p].traits,people[p].expectation,men[m].traits,men[m].expectation)) {
                    user[p][Object.keys(user[p])[0]].match.push(men[m].name)
                }
            }
            console.log(user[p])
        }
    }


    // return user;
   return '-----FINISH-----' 

}   
var people = [
    {name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya']},
    {name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan']},
    {name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar']},
    {name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur']},
    {name: 'Derpina', gender: 'Women', traits: ['Cantik', 'Sederhana', 'Rajin'], expectation: ['Pintar', 'Jujur', 'Baik']},
    {name: 'Hitler', gender: 'Man', traits: ['Tampan', 'Kaya'], expectation: ['Cantik']}
    ]
console.log(tinderMatch(people))
    /**
     * {
     *  Andre: {
     *    match: []
     *  },
     *  Marsya: {
     *     match: [ 'Dimas' ]
     *  },
     *  Dimas: {
     *     match: [ 'Marsya', 'Bella', 'Derpina' ]
     *  },
     *  Bella: {
     *     match: [ 'Dimas' ]
     *  },
     *  Derpina: {
     *    match: [ 'Dimas' ]
     *  }
     * }
     */