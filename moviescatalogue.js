/**
 * ==============
 * Movie Database
 * ==============
 * 
 * Instruction
 * -----------
 * findMovie adalah sebuah function yang mengelompokkan data film dari input yang diberikan
 * berdasarkan tahun film itu dibuat.
 * 
 * Restrictions
 * ------------
 * 1. input berupa array multidimensional yang setiap entri-nya merupakan sebuah array
 *    dengan format [<nama film>, <Tanggal rilis>, <genre>]
 * 2. Output berupa object dengan key tahun rilis dari masing-masing film
 *    dengan value berupa array of objects dengan format:
 *    { <date (tanggal dan bulan)>, <title>, <genre> }
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function split, slice, splice
 */
function findMovie(arrMovie) {

    let cache = [];
    
    /* naive solution ... pftttt !@#!#ESADF */
    for (let i in arrMovie) {
      let obj = {};
      obj.Date = arrMovie[i][1];
      obj.Title = arrMovie[i][0];
      obj.Genre = arrMovie[i][2]
      cache.push(obj)
    }

    return arrMovie.reduce((catalogue,_,a)=> {
        let date = arrMovie[a][1].match(/\w+/g), releasedYear = date[2];

        catalogue[releasedYear] = catalogue[releasedYear] || 
            cache.filter(el=> el.Date.match(/\w+/g)[2]==releasedYear)
        
        return catalogue;
        
    },{})

    // return moviesCatalogue;


}
var movie1 = [
  ["Suicide Squad", "3 May 2016", "Action"],
  ["Interstellar", "6 June 2018", "Sci-Fi"],
  ["La La Land", "24 June 2018", "Romatic"],
  ["Fast Furious", "2 January 2019", "Action"],
  ["IT", "7 January 2019", "Horror"],
  ["Justice League", "14 April 2019", "Action"],
  ["Lion King", "20 July 2019", "Animation"]
]
console.log(findMovie(movie1));
/*
{
  2016: [
    { date: "3 May", title: "Suicide Squad", genre: "Action" }
  ],
  2018: [
    { date: "6 June", title: "Interstellar", genre: "Sci-Fi" },
    { date: "24 June", title: "La La Land", genre: "Romantic" }
  ],
  2019: [
    { date: "2 January", title: "Fast Furious", genre: "Action" },
    { date: "7 January", title: "IT", genre: "Horror" },
    { date: "14 April", title: "Justice League", genre: "Action" },
    { date: "20 July", title: "Lion King", genre: "Animation" }
  ]
}
*/
var movie2 = [
  ["Joker", "4 October 2019", "Thriller"],
  ["Parasite", "24 June 2019", "Drama"],
  ["Into the Spider-verse", "14 December 2018", "Animation"],
  ["Avengers: Infinity War", "27 April 2018", "Action"],
  ["Avengers: Endgame", "26 April 2019 ", "Action"],
  ["Coco", "22 November 2017", "Animation"],
  ["Your Name", "7 April 2017", "Animation"]
]
console.log(findMovie(movie2))
// {
//   '2017': [
//     { date: '22 November', title: 'Coco', genre: 'Animation' },
//     { date: '7 April', title: 'Your Name', genre: 'Animation' }
//   ],
//   '2018': [
//     { date: '14 December', title: 'Into the Spider-verse', genre: 'Animation' },
//     { date: '27 April', title: 'Avengers: Infinity War', genre: 'Action' }
//   ],
//   '2019': [
//     { date: '4 October', title: 'Joker', genre: 'Thriller' },
//     { date: '24 June', title: 'Parasite', genre: 'Drama' },
//     { date: '26 April', title: 'Avengers: Endgame', genre: 'Action' }
//   ]
// }