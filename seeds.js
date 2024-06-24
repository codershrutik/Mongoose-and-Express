const mongoose = require('mongoose')
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand',{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Mongo Connected to MongoDB")
    })
    .catch(err=>{
        console.log("Error connecting to MongoDB",err)
    });

// const p = new Product({name: 'Grapes', price:50, category:'fruit'});
// p.save()
//     .then(p=>{
//     console.log(p);
//     })
//     .catch(e=>{
//         console.log(e);
//     })

const seedproducts = [
    {
        name: 'Brinjal',
        price: 30,
        category: 'vegetable'
    },
    {
        name: 'Melon',
        price: 50,
        category: 'fruit'
    },
    {
        name: 'Watermelon',
        price: 20,
        category: 'fruit'
    },
    {
        name: 'Milk',
        price: 40,
        category: 'dairy'
    },
    {
        name: 'Butter',
        price: 56,
        category: 'dairy'
    },
]

Product.insertMany(seedproducts)
    .then(res=>{
        console.log(res);
    })
    .catch(e=>{
        console.log(e);
    })