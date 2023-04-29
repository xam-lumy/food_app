import {images} from './constants'
export const Categories = [
  {
    title: 'Pizza',
    image: images.pizza,
    category: 'pizza',
    key: 1
  },
  
  {
    title: 'Protein',
    image: images.protein,
    category: 'protein',
    key: 2
  },
  {
    title: 'Local dishes',
    image: images.local,
    category: 'local',
    key: 3
  },
  {title: 'hamburger',
    image: images.hamburger,
    category: 'hamburger',
    key: 4
  },
  {
    title: 'rice',
    image: images.rice,
    key: 5,
    category: 'rice',
  },
  {
    title: 'creame',
    image: images.cream,
    key: 6,
    category: 'creame'
  }

]

export const products= [
  {
    "id": 1,
    "name": "Margherita",
   
    "price": 3,
    "description": "Cheese",
    "quantity": 1,
    "image": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550",
    "category": ["pizza", "dinner"]
   
  },
  {
    "id": 2,
    "name": "Veggie Supreme",
   
    "price": 8,
    "description": "Black Olives,Green Capsicum, Mushroom, Onion,Red Paprika, Sweet Corn",
    "quantity": 1,
    "image": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=550",
    'category': ['pizza']
  },
  
  
  {
    "id": 3,
    "name": "Veggie Kebab Surprise",
    
    "price": 4,
    "description": "Veg Kebab,Onion,Green Capsicum,Tomato & Sweet Corn in Tandoori Sauce",
    "quantity": 1,
    "image": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veg-kebab-surprise.abab1dff179ab8cf95a59f30d6352297.1.jpg?width=550",
    'category': ['pizza']
  },
  {
    id:4,
  name:"Peri Peri 10 Strips with Dynamite",
  description:"10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.41",
  price:7,
  quantity:1,
  category: ['protein']
  },
  {
  id:5,
  name:"Peri Peri 10 Strips with Nashville",
  description:"10 Spicy Peri Peri chicken strips & our Nashville Hot Sauce Bottle",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002154.jpg?ver=21.41",
  price:6,
  quantity:1,
  category: ['protein']
  
  
  },
  {
    id:6,
  name:"Peri Peri 10 Leg pc & 4 dips",
  description:"10 Spicy Peri Peri Leg Pieces & 4 dips",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002155.jpg?ver=21.41",
  price:10,
  quantity:1,
  category: ['protein', 'desert',  'dinner']
  
  },
  {
    id:7,
  name:"Peri Peri 5 Leg Pc Meal",
  description:"5 Spicy Peri Peri Leg Pieces, 2 Dips, 1 Med Fries & a Pepsi PET",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
  price:7,
  quantity:1,
  category: ['protein']
  
  },
  {
    id:8,
  name:"jollof rice and chicken",
  description:"Tasty jollof with chicken and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
  price:7,
  quantity:1,
  category: ['rice']
  },
  {
  id: 9,
  name:"jollof rice and chicken",
  description:"Tasty jollof with chicken and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
  price:7,
  quantity:1,
  category: ['rice']
  },
  {
    id:10,
  name:"fried rice and chicken",
  description:"Tasty fried with chicken and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
  image: 'https://media.istockphoto.com/id/1265268905/photo/barbecue-chicken-jollof-rice.jpg?b=1&s=612x612&w=0&k=20&c=nY0Y_XiMWE6ZRnihmoCUGq2NH_mHnpE5D1keiBUUVz0=',
  price:10,
  quantity:1,
  category: ['rice']
  },
 
  
]


//  export const products= [

// {
//   id: 999,
// name:"Peri Peri 5 Leg Pc & 2 Dips",
// description:"5 Spicy Peri Peri Leg Pieces, paired with 2 delicious dips",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002157.jpg?ver=21.41",
// price:5,
// quantity:1,
// category: ['protein', 'desert',  'dinner', ]

// },

// {
//   id:6,
// name:"Big 12",
// description:"Crispy Chicken, 6 Hot Wings & 2 dips",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000854.jpg?ver=21.41",
// price:8,
// quantity:1,
// category: ['protein', 'desert',  'dinner', ]

// },
// {
//   id:7,
// name:"Ultimate Savings Bucket",
// description:"Bucket of 4pc Hot & crispy, 6 wings, 4 strips, 2 dips & Pepsi PET ",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000638.jpg?ver=21.41",
// price:6,
// quantity:1,
// category: ['protein', 'dinner', 'get-together']

// },
// {
//   id:8,
// name:"Big 8",
// description:"Bucket of 4pc Hot & Crispy chicken & 4pc Smoky Red Chicken",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000891.jpg?ver=21.41",
// price:6,
// quantity:1,
// category: ['protein',   'dinner', ]

// },
// {
//   id:9,
// name:"5pc Smoky Red Chicken",
// description:"5pc Smoky red grilled chicken",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K445.jpg?ver=21.41",
// price:4,
// quantity:1,
// category: ['protein', 'dinner', ]

// },
// {
//   id:10,
// name:"Mingles Bucket Meal",
// description:"4 Hot Wings, 2 Chicken Strips, Reg Popcorn, medium fires & Pepsi PET",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002162.jpg?ver=21.41",
// price: 4,
// quantity:1,
// category: ['protein', 'desert',]

// },
// {
//   id:11,
// name:"8 pc Hot & Crispy Chicken",
// description:"8 pc signature & crispy chicken",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K009.jpg?ver=21.41",
// price:6,
// quantity:1,
// category: ['protein', 'desert',   'get-together']
// },
// {
//   id:12,
// name:"6 pc hot & Crispy Chicken",
// description:"6 pc signature & crispy chicken",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K012.jpg?ver=21.41",
// price:6,
// quantity:1,
// category: ['protein', 'desert',  'dinner', 'get-together']

// },
// {
//   id:13,
// name:"Solo Feast",
// description:"Treat yourself with 1 Hot & crispy, 2 Strips, 2 Wings, 1 Buttered Bun, 1 Dip & Pepsi PET",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002164.jpg?ver=21.41",
// price:3,
// quantity:1,
// category: ['protein', 'desert']

// },

// {
//   id:14,
// name:"Strips & Rice Combo",
// description:"4 Strips, 1 Dips, flavorful Rice & Gravy at a deal price",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002165.jpg?ver=21.41",
// price:4,
// quantity:1,
// category: ['protein', 'dinner',]

// },
// {
//   id:15,
// name:"Friendship Bucket with Dynamite Sauce",
// description:"3pc Hot & Cripsy, 3 Wings, 3 Strips, Large Popcorn & our new Dynamite Mayo Bottle",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002172.jpg?ver=21.41",
// price:8,
// quantity:1,
// category: ['protein', 'dinner', 'desert', 'get-together']


// },
// {
//   id:16,
// name:"Classic Biryani Combo",
// description:"Large portions of Biryani rice with 2 pc Hot & Crispy, 2 Gravies, 4 Strips & Pepsi PET",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002166.jpg?ver=21.41",
// price:7,
// quantity:1,
// category: ['protein', 'desert',  'rice', 'get-together']

// },
// {
//   id:17,
// name:"Smoky Grilled Biryani Combo",
// description:"Large portions of Biryani rice with 2 pc Smoky Red, 2 Gravies, Med Popcorn & Pepsi PET",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002017.jpg?ver=21.41",
// price:8,
// quantity:1,
// category: ['protein', 'desert',  'rice', 'get-together']



// },
// {
//   id:18,
// name:"Popcorn Biryani Combo",
// description:"Large portions of Biryani & Chicken Popcorn, 2 Spicy Gravies, 4pc Wings & Pepsi PET",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002052.jpg?ver=21.41",
// price:6,
// quantity:1,
// category: ['protein',  'dinner', 'get-together']

// },
// {
//   id:19,
// name:"Classic Chicken Biryani Bucket",
// description:"Large portions of Biryani & Chicken Popcorn, 2 Spicy Gravies",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K626.jpg?ver=21.41",
// price:4,
// quantity:1,
// category:['protein',  'dinner', 'get-together']

// },
// {
//   id:20,
// name:"Popcorn Chicken Biryani Bucket",
// description:"Large portions of Biryani rice served with Chicken Popcorn, 2 Spicy Gravies",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K627.jpg?ver=21.41",
// price:3,
// quantity:1,
// category: ['protein',   'dinner', 'get-together']
// },
// {
//   id:21,
// name:"Veg Biryani Bucket",
// description:"Hyderabadi style Biryani rice served with Veg Patty & Spicy Gravy",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K622.jpg?ver=21.41",
// price:2,
// quantity:1,
// category: ['protein', 'dinner',]

// },
// {
//   id:22,
// name:"All Chicken Box",
// description:"A Box with your favourites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price",
// image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002167.jpg?ver=21.41",
// price:3,
// quantity:1,
// category: ['protein', 'dinner',  ]
// },

//   {
//       id: 23,
//       name: "Choco Sundae",
//       price: 2,
//       description: "Choco Sundae Cup (100 ml)",
//       image: "https://www.havmor.com/sites/default/files/styles/502x375/public/gallery/Choco%20Sundae__0.webp?itok=Md5Ameuw",
//       quantity: 1,
//       category: ['desert', 'creame']
//   },
//     {
//       id: 24,
//       name: "Cornetto Double Chocolate",
//       price: 2,
//     description: "Cornetto Double Chocolate Cone (105 ml)",
//     image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/cornetto-double-chocolate.acc21849ac732f2f85998ad73e532d40.1.jpg?width=522",
//       quantity: 1,
//       category: ['desert', 'creame']
//     },
//     {
//       id: 25,
//       name: "Magnum Truffle",
//       price: 4,
//       description: "Magnum Truffle (80 ml)",
//       image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/450560a.jpg",
//       quantity: 1,
//       category: ['desert', ]
//     },
//     {
//       id: 26,
//       name: "Divine Chocolate(Tub)",
//       price: 6,
//       description: "Divine Chocolate (700 ml)",
//       image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/divine-chocolate-tub.1df6b11e6e5d510cd11ae0d6e475686d.1.jpg?width=522",
//       quantity: 1,
//       category: ['desert', 'creame', 'chocolate']
//     },
//     {
//         id: 27,
//       name: "Choco Volcano Cake",
//       price: 6,
//       description: "Choco Delight With A Gooey Chocolate Volcano Centre",
//       image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.f829dc6e30a07b83f232b4880395162f.1.jpg",
//       quantity: 1,
//       category: ['desert', 'creame']
//     },
  



    
//     {
//       "id": 33,
//       "name": "Chicken Supreme",
//       "veg": false,
//       "price": 7,
//       "description": "Herbed Chicken,Schezwan Chicken Meatball,Chicken Tikka",
//       "quantity": 1,
//       "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.6d53f104f071d304a47440f2fffa7378.1.jpg?width=550",
//       'category': ['desert', 'dinner', 'protein']
//     },
//     {
//       "id": 34,
//       "name": "Triple Chicken Feast",
//       "veg": false,
//       "price": 8,
//       "description": "Schezwan Chicken Meatball Herbed Chicken,Chicken Sausage,Geen Capsicum, Onion,Red Paprika",
//       "quantity": 1,
//       "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.e4a546e7a8581a60952b99e3fe22987e.1.jpg?width=550",
//       'category': ['desert', 'dinner', 'protein']
//     },
//     {
//       "id": 35,
//       "name": "Chicken Tikka",
//       "veg": false,
//       "price": 7,
//       "description": "Chicken Tikka, Onion, Tomato",
//       "quantity": 1,
//       "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-tikka.6d441a65371e941db36c2754586119a8.1.jpg?width=550",
//       'category': ['desert', 'dinner', 'protein']
//     },
//     {
//       "id": 36,
//       "name": "Double Chicken Sausage",
//       "veg": false,
//       "price": 5,
//       "description": "Chicken Sausage",
//       "quantity": 1,
//       "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-chicken-sausage.f172dd6a365e90e655258b17555e74ad.1.jpg?width=550",
//       'category': [ 'dinner', 'protein']
//     },
//     {
//       "id": 37,
//       "name": "Spiced Chicken Meatballs",
//       "veg": false,
//       "price": 4,
//       "description": "Schezwan Chicken Meatball Onion",
//       "quantity": 1,
//       "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/spiced-chicken-meatballs.abd238e81080106d181567a9b52844ae.1.jpg?width=550",
//       'category': ['desert', 'dinner', 'protein']
//     },
//     {
//       "id": 38,
//       "name": "Crispy Chicken Sandwich",
//       "veg": false,
//       "price": 4,
//       "description": "McDonald's Crispy Chicken Sandwich is a southern style fried chicken sandwich that's crispy, juicy and tender perfection. It’s topped with crinkle-cut pickles and served on a toasted, buttered potato roll. The Crispy Chicken sandwich has 470 calories.",
//       "quantity": 1,
//       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-crispy-chicken-sandwich:product-header-mobile?wid=768&hei=443&dpr=off",
//       'category': ['desert', 'dinner', 'protein']
     
//     },
//     {
//       "id": 39,
//       "name": "Bacon, Egg & Cheese McGriddles",
//       "veg": false,
//       "price": 4,
//       "description": "Sausage, Egg & Cheese McGriddles® feature soft, warm griddle cakes—with the sweet taste of maple—that hold a fluffy folded egg, savory sausage, and melty American cheese. McGriddles® cakes have no artificial preservatives or flavors and no colors from artificial sources. There are 550 calories in a Sausage, Egg, and Cheese McGriddles®.",
//       "quantity": 1,
//       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Egg-Cheese-McGriddles:product-header-mobile?wid=768&hei=441&dpr=off",
//       'category': [ 'desert', 'hamburger', 'get-together']
//     },
//     {
//       "id": 40,
//       "name": "Sausage Biscuit",
//       "veg": false,
//       "price": 4,
//       "description": "McDonald’s Sausage Biscuit is the perfect sausage breakfast sandwich, made with sizzling hot sausage on a warm buttermilk biscuit that’s topped with real butter and baked to perfection. There are 460 calories in a McDonald's Sausage Biscuit.",
//       "quantity": 1,
//       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-Regular-Size-Biscuit-1:product-header-mobile?wid=768&hei=443&dpr=off",
//       'category': [ 'desert', 'hamburger', 'get-together'] 
//     },
//     {
//       "id": 41,
//       "name": "Sausage McMuffin® with Egg",
//       "veg": false,
//       "price": 4,
//       "description": "McDonald’s Sausage McMuffin® with Egg features a savory hot sausage, a slice of melty American cheese, and a delicious freshly cracked egg all on a freshly toasted English muffin. There are 480 calories in Sausage McMuffin® with Egg at McDonald's.",
//       "quantity": 1,
//       'image': 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin-with-Egg:product-header-mobile?wid=768&hei=443&dpr=off',
//       'category': [ 'desert', 'hamburger', 'get-together', 'breakfast']
      
      
//     },
//     {
//       "id": 42,
//       "name": "Sausage McMuffin",
//       "veg": false,
//       "price": 4,
//       "description": "McDonald’s Sausage McMuffinfeatures a savory hot sausage, a slice of melty American cheese, and a delicious freshly cracked egg all on a freshly toasted English muffin. There are 480 calories in Sausage McMuffin at McDonald's.",
//       "quantity": 1,
//       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin:product-header-mobile?wid=768&hei=441&dpr=off",
//       'category': [ 'desert', 'hamburger', 'get-together']
//     },
//     {
//       "id": 43,
//       "name": "Egg McMuffin",
//       "veg": false,
//       "price": 4,
//       "description": "McDonald's Sausage McMuffin® recipe features a warm, freshly toasted English muffin, topped with a savory hot sausage patty and a slice of melty American cheese. There are 400 calories in a Sausage McMuffin® at McDonald's. ",
//       "quantity": 1,
//       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Egg-McMuffin-1:product-header-mobile?wid=768&hei=443&dpr=off",
//       'category': [ 'desert', 'hamburger', 'get-together', 'breakfast']
//     },
//     {
//       "id": 44,
//       "name": "Bacon,Egg & Cheese Biscuit",
//       "price": 4,
//       "description": "The McDonald's Bacon, Egg & Cheese Biscuit breakfast sandwich features a warm, buttermilk biscuit brushed with real butter, thick cut Applewood smoked bacon, a fluffy folded egg, and a slice of melty American cheese. There are 460 calories in a Bacon, Egg & Cheese Biscuit at McDonald's.",
//       "quantity": 1,
//       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Bacon-Egg-Cheese-Biscuit-Regular-Size-Biscuit-1:product-header-desktop?wid=829&hei=455&dpr=off",
//       'category': ['hamburger', 'get-together', 'breakfast']
//     },
//     {
//       "id": 45,
      // "name": "Deluxe Crispy Chicken Sandwich",
      // "price": 4,
      // "description": "Get a little extra with toppings. Go deluxe with shredded lettuce, Roma tomatoes and mayo to take crispy, juicy and tender to the next level. The Deluxe Crispy Chicken sandwich has 530 calories.",
      // "quantity": 1,
      // "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-deluxe-crispy-chicken-sandwich:product-header-mobile?wid=768&hei=443&dpr=off",
      // 'category': [ 'hamburger', 'get-together', 'breakfast']
//     },
//     {
//       "id": 46,
//       "name": "Spicy Deluxe Crispy Chicken Sandwich",
//       "price": 4,
//       "description": "The Spicy Deluxe Crispy Chicken is big on everything, including heat. Our southern-style fried chicken fillet on a potato roll, topped with shredded lettuce, Roma tomatoes and Spicy Pepper Sauce kicks crispy, juicy and tender up to the highest level. The Spicy Deluxe Crispy Chicken sandwich has 540 calories.",
//       "quantity": 1,
//       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-deluxe-crispy-chicken-sandwich:product-header-mobile?wid=768&hei=441&dpr=off",
//       'category': [  'hamburger',  'breakfast']
//     },
    
//     {
//       id:50,
//     name:"jollof Combo",
//     description:"Tasty jollof rice  and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
//     price: 6,
//     quantity:1,
//     category: [  'dinner', 'rice',]
//     },
    // {
    //   id:51,
    // "name":"White rice Combo",
    // "description":"Tasty white rice  and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
    // "image":"https://images.pexels.com/photos/6187700/pexels-photo-6187700.jpeg?auto=compress&cs=tinysrgb&w=600",
    // "price": 6,
    // "quantity":1,
    // "category": [  'dinner', 'rice',]
    // },
//     {
//       id:52,
//     name:"Beans and plantain",
//     description:"Tasty beans and fried fried  and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTwRagUInzkeX8fgmcLgGds7zB3L-VITMPw&usqp=CAU",
//     price: 5,
//     quantity:1,
//     category: [  'dinner',  'protein', 'local']
//     },
//     {
//       id:53,
//     name:"jollof Combo",
//     description:"Tasty jollof rice  and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
//     price: 6,
//     quantity:1,
//     category: [  'dinner', 'rice',]
//     },
//     {
//       id:54,
//     name:"jollof Combo",
//     description:"Tasty jollof rice  and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
//     price: 6,
//     quantity:1,
//     category: [  'dinner', 'rice',]
//     },
//     {
//       id:55,
//     name:"jollof Combo",
//     description:"Tasty jollof rice  and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
//     price: 6,
//     quantity:1,
//     category: [  'dinner', 'rice',]
//     },
//     {
//       id:56,
//     "name":"Amala and Ewedu",
//     "description":"Tasty Amala and Ewedu and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     "image":"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
//     "price": 6,
//     "quantity": 1,
//     "category": [  "dinner", "local",]
//     },
//     {
//       id:57,
//     name:"Sumptous Fried Rice and tasty chicken",
//     description:"Fried rice, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsH8WHCSBvBWhXvj95zDayI8lVdlNZgPjFIQ&usqp=CAU",
//     price: 6,
//     quantity:1,
//     category: [  'dinner', 'rice',]
//     },
//     {
//       id:58,
//     name:"White Rice with Sause and plantain",
//     description:"Tasty white rice, sause and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
//     price: 6,
//     quantity:1,
//     category: [  'dinner', 'rice',]
//     },
//     {
//       id:59,
//     name:"Stewed Bean Porridge",
//     description:"Tasty Porridge and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQ43N-DKHoPc2hc3eULVKjodSFzGcalacaQ&usqp=CAU",
//     price: 6,
//     quantity:1,
//     category: [  'dinner', 'protein', 'local']
//     },
//     {
//       id:60,
//     name:"Amala, Ewedu And Gbegiri",
//     description:"Tasty Amala and Ewedu and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQXPVoC_9BQGzRkMegBWg6fAku133r1mBDQ&usqp=CAU",
//     price: 6,
//     quantity:1,
//     category: [  'dinner', 'local',]
//     },
//     {
//       id:61,
//     name:"White rice and stew with egg",
//     description:"Tasty Amala and Ewedu and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRGUVYsyWG4__sePD5eXDbMmPKYhXnQGp4g&usqp=CAU",
//     price: 6,
//     quantity:1,
//     category: ['dinner', 'rice']
//     },
//     {
//       id:62,
//     name:"Rice and STew",
//     description:"Tasty Rice and Stew and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvunEfb5p6vBinX1Q_Sgt0gVZUgEPsiIGRxA&usqp=CAU",
//     price: 6,
//     quantity:1,
//     category: ['dinner', 'rice']
//     },
//     {
//       id:63,
//     name:"Eba And Ogbona",
//     description:"Tasty Eba and Ogbona and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmDUWNJfmQJRSpNck7gmHsiT3G41NpCd5_g&usqp=CAU",
//     price: 6,
//     quantity:1,
//     category: ['local', 'Dinner']
//     },
//     {
//       id:64,
//     name:"Fufu and Egusi",
//     description:"Tasty Amala and Ewedu and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqrxPhuXxkN-PJjetNunN4BS9WWDhgla3Lw&usqp=CAU",
//     price: 6,
//     quantity:1,
//     category: ['local', 'Dinner']
//     },
    
//     {
//       id:66,
//     name:"Fufu and Egusi",
//     description:"Tasty Amala and Ewedu and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqrxPhuXxkN-PJjetNunN4BS9WWDhgla3Lw&usqp=CAU",
//     price: 6,
//     quantity:1,
//     category: ['local', 'Dinner']
//     },
//     {
//       id:67,
//     name:"Ofada and Sause with Egg",
//     description:"Tasty Ofada with sause and egg and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1U3UsbB4LKLRyN47yurOuV5-_xBNq9h1aQ&usqp=CAU",
//     price: 6,
//     quantity:1,
//     category: ['dinner', 'rice',]
//     },
  
//   ]
// sapg https://purepng.com/public/uploads/thumbnail//purepng.com-chopsticks-noodlesfood-objects-hand-chopsticks-noodles-941524634389mei3k.png
export const desertt = [
  {
          id: 1,
          name: "Choco Sundae",
          price: 2,
          description: "Choco Sundae Cup (100 ml)",
          image: "https://www.havmor.com/sites/default/files/styles/502x375/public/gallery/Choco%20Sundae__0.webp?itok=Md5Ameuw",
          quantity: 1,
          
      },
        {
          id: 2,
          name: "Cornetto Double Chocolate",
          price: 2,
        description: "Cornetto Double Chocolate Cone (105 ml)",
        image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/cornetto-double-chocolate.acc21849ac732f2f85998ad73e532d40.1.jpg?width=522",
          quantity: 1,
          category: ['desert', 'creame']
        },
        {
          id: 3,
          name: "Magnum Truffle",
          price: 4,
          description: "Magnum Truffle (80 ml)",
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/450560a.jpg",
          quantity: 1,
          category: ['desert', ]
        },
        {
          id: 4,
          name: "Divine Chocolate(Tub)",
          price: 6,
          description: "Divine Chocolate (700 ml)",
          image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/divine-chocolate-tub.1df6b11e6e5d510cd11ae0d6e475686d.1.jpg?width=522",
          quantity: 1,
          
        },
        {
            id: 5,
          name: "Choco Volcano Cake",
          price: 6,
          description: "Choco Delight With A Gooey Chocolate Volcano Centre",
          image: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.f829dc6e30a07b83f232b4880395162f.1.jpg",
          quantity: 1,
          
        },
        {
                "id": 34,
                "name": "Triple Chicken Feast",
                "veg": false,
                "price": 8,
                "description": "Schezwan Chicken Meatball Herbed Chicken,Chicken Sausage,Geen Capsicum, Onion,Red Paprika",
                "quantity": 1,
                "img": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/triple-chicken-feast.e4a546e7a8581a60952b99e3fe22987e.1.jpg?width=550",

          },
      
]

 export const getTogether = [
  
  {
    id:4,
  name:"Peri Peri 10 Strips with Dynamite",
  description:"10 Spicy Peri Peri chicken strips & our Dynamite Spicy Mayo Sauce Bottle",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002153.jpg?ver=21.41",
  price:7,
  quantity:1,
  category: ['protein']
  },
  {
  id:5,
  name:"Peri Peri 10 Strips with Nashville",
  description:"10 Spicy Peri Peri chicken strips & our Nashville Hot Sauce Bottle",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002154.jpg?ver=21.41",
  price:6,
  quantity:1,
  category: ['protein']
  
  
  },
  {
    id:6,
  name:"Peri Peri 10 Leg pc & 4 dips",
  description:"10 Spicy Peri Peri Leg Pieces & 4 dips",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002155.jpg?ver=21.41",
  price:10,
  quantity:1,
  category: ['protein', 'desert',  'dinner']
  
  },
  {
    id:7,
  name:"Peri Peri 5 Leg Pc Meal",
  description:"5 Spicy Peri Peri Leg Pieces, 2 Dips, 1 Med Fries & a Pepsi PET",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
  price:7,
  quantity:1,
  category: ['protein']
  
  },
  {
    id:8,
  name:"jollof rice and chicken",
  description:"Tasty jollof with chicken and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
  price:7,
  quantity:1,
  category: ['rice']
  },
  {
  id: 9,
  name:"jollof rice and chicken",
  description:"Tasty jollof with chicken and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
  image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002156.jpg?ver=21.41",
  price:7,
  quantity:1,
  category: ['rice']
  },
  {
    id:10,
  name:"fried rice and chicken",
  description:"Tasty fried with chicken and other packages, 2 Dips, 1 Med Fries & a Pepsi PET",
  image: 'https://media.istockphoto.com/id/1265268905/photo/barbecue-chicken-jollof-rice.jpg?b=1&s=612x612&w=0&k=20&c=nY0Y_XiMWE6ZRnihmoCUGq2NH_mHnpE5D1keiBUUVz0=',
  price:10,
  quantity:1,
  category: ['rice']
  },
 
  ]
  
 
const product = {
  id: 1,
  name: 'rice',
  quantity: 1,
  image: 'image.url',
  protein: {name: 'chicken', price: 200},
  drinks: {name: 'cocacola', price: 200}
}





