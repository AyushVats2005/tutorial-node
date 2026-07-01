const express = require('express')//import the express library
const app = express()//create an express application and every route will be attached to this app
const { products } = require('../data')//go to data.js and import products

app.get('/', (req,res) => {//when the browser request '/' run this function
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')//send this file to browser
})//end of 1st route

app.get('/api/products', (req,res) => { //when user get to localhost:5000/api/products then run this function
    const newProducts = products.map((product) => {
        //we already have products and .map() loops over every object 
        const { id, name, image } = product
        /* this can be destructuring into 
        const id = product.id
        const name = product.name
        const image = product.image */
        return { id, name, image }// a new object is created with only three attributes and after map finishes newProducts become an array of such new objects
    })
    res.json(newProducts)//Browser recieves the array of objects in json format data
})//end of the 2nd route

app.get('/api/products/:productID', (req,res) => {// user visits: /api/products/2 and express matches :productID
    const { productID } = req.params//req.params compare the url and take the productID:"2"
    const singleProduct = products.find(//now seach through the products array
        (product) => product.id ===  Number(productID)//will check the productID and see which object matches and number is used to convert string into number
    )
    if(!singleProduct){//if productID = undefined
        return res.status(404).send('Product Does Not Exist')
    }
    return res.json(singleProduct)//send the product
})//end of 3rd route

app.get('/api/products/:productID/reviews/:reviewID', (req,res) => {
    console.log(req.params)
    res.send('hello world')
})//end of 4th route

app.get('/api/v1/query', (req,res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if(search) {//filtering the objects in array
        sortedProducts = sortedProducts.filter((products) => {
            return products.name.startsWith(search)
        })
    }
    if(limit){//putting limited objects in array
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length< 1) {//checking case for no product left in array
        //res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true, data: []})
    }
    res.status(200).json(sortedProducts)
})//end of 5th route

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})