removeLastVowel = string => {
    // alternate version
    string = string.split(' ')
    for (let i in string) {
        let str = string[i].match(/([aiueoAIUEO])/g);
        string[i] = string[i].substr(0,string[i].lastIndexOf(str[str.length-1])) +
             string[i].substr(string[i].lastIndexOf(str[str.length-1])+1,string[i].length)
    }
    // return string;
    return string.toString().split(',').join(' ')
}

// test case
console.log(removeLastVowel('Those who dare to fail miserably can achieve greatly.'),"Thos wh dar t fal miserbly cn achiev gretly.")
console.log(removeLastVowel('Love is a serious mental disease.'),"Lov s  serios mentl diseas")
console.log(removeLastVowel('Get busy living or get busy dying.'))
console.log(removeLastVowel("If you want to live a happy life tie it to a goal not to people."))