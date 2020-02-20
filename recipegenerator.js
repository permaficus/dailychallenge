/*
================
RECIPE GENERATOR
================
​
[INSTRUCTION]
Function recipe generator adalah function yang berfungsi untuk mengubah input object yang diberikan , dan menghasilkan output berupa array of object sesuai dengan contoh dibawah.
​
​
[EXAMPLES]
input : 
{
  '20minutes' : {
    mainIngredient: {
      egg: [
        'Omellete'
      ]
    }
  },
  '30minutes' : {
    mainIngredient: {
      flour: [
        'Pizza',
        'Noodles',
      ],
      egg: [
        'Takoyaki'
      ]
    }
  }
}
output: 
[
  {
    name: 'Omellete',
    mainIngredient: 'egg',
    cookingTime: 20minutes
  },
  {
    name: 'Pizza',
    mainIngredient: 'flour',
    cookingTime: '30minutes'
  },
  {
    name: 'Noodles',
    mainIngredient: 'flour',
    cookingTime: '30minutes'
  },
  {
    name: 'Takoyaki',
    mainIngredient: 'egg',
    cookingTime: 30minutes
  }
]
​
[RULES]
- dilarang menggunakan function map, filter, reduce

*/
var cookingTimeRecipe = {
    '20minutes': {
      mainIngredient: {
        egg: [
          'Omellete'
        ]
      }
    },
    '30minutes': {
      mainIngredient: {
        flour: [
          'Pizza',
          'Noodles',
        ],
        egg: [
          'Takoyaki'
        ]
      }
    }
  }
function recipeGenerator(obj) {
    //your code here
    let cache = [];

    for (let i in obj) {
        for (let h in obj[i].mainIngredient) {            
            for (let p=0;p<obj[i].mainIngredient[h].length;p++) {
                let objRes = {}
                objRes.name = obj[i].mainIngredient[h][p];
                objRes.Ingredient = h;
                objRes.CookingTime = i
                cache.push(objRes)
            }
        }
    }

    return cache;
}

console.log(recipeGenerator(cookingTimeRecipe));
  /*
  [
    {
      name: 'Omellete',
      mainIngredient: 'egg',
      cookingTime: 20minutes
    },
    {
      name: 'Pizza',
      mainIngredient: 'flour',
      cookingTime: '30minutes'
    },
    {
      name: 'Noodles',
      mainIngredient: 'flour',
      cookingTime: '30minutes'
    },
    {
      name: 'Takoyaki',
      mainIngredient: 'egg',
      cookingTime: 30minutes
    }
  ]
  */
  var cookingTimeRecipe2 = {
    '40minutes': {
      mainIngredient: {
        chocolate: [
          'Parfait',
          'Pudding'
        ]
      }
    },
    '30minutes': {
      mainIngredient: {
        milk: [
          'Yogurt',
          'Thai Tea',
        ]
      }
    }
  }

console.log(recipeGenerator(cookingTimeRecipe2));
  /*
    [
      { name: 'Parfait',
        mainIngredient: 'chocolate',
        cookingTime: '40minutes' },
      { name: 'Pudding',
        mainIngredient: 'chocolate',
        cookingTime: '40minutes' },
      { name: 'Yogurt',
        mainIngredient: 'milk',
        cookingTime: '30minutes' },
      { name: 'Thai Tea',
        mainIngredient: 'milk',
        cookingTime: '30minutes' }
    ]
  */