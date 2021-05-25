const express = require("express");
const router = new express.Router();
const Product = require("../models/product");
const Review = require("../models/review");
const Category = require("../models/category");

// Home Page
router.get("/", (req, res) => {
  res.status(201).send("Welcome to Home Page");
})

// Show All Products 
router.get("/product", async (req, res) => {
  try {
    const product = await Review.find({});
    res.status(201).send(product)
  } catch (err) {
    res.status(400).send('Error to find product : ' + err.message);
  }
})


// Product Find Bi Id
router.get("/product/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findById(_id);
    if (!product) {
      return res.status(400).send("Bad Request");
    } else {
      return res.status(201).send(product);
    }
  } catch (err) {
    res.status(400).send('Error to find product : ' + err.message);
  }
})



//Adding New Product
router.post("/product", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    //console.log("product added successfully = ", product);
    res.status(201).send('product added successfully');
  } catch (err) {
    res.status(400).send('Error in adding new product : ' + err.message);
  }
})

//Find Product Bi Id Add Review for those Product And Add Review Id in Product 
router.post("/product/:productId", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findOne(_id);

    const review = new Review(req.body);
    // review.productId = req.body.productId;
    // review.username = req.body.username;
    // review.rating = req.body.rating;
    // review.comment = req.body.comment;
    await review.save();
    console.log("In review product id Added")

    product.reviewsId.push(review._id)
    await product.save();
    console.log("In Product review Id is Added")

    res.status(201).send('Ok ');
  } catch (err) {
    res.status(400).send('Error in adding new product : ' + err.message);
  }
})

//Add new Category 
router.post("/category", async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send('Ok ');
  } catch (err) {
    res.status(400).send('Error in adding new product : ' + err.message);
  }
})


//Find Product Bi Id Add Review for those Product And Add Review Id in Product 
router.post("/category/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const category = await Category.findOne({_id});

    const product = new Product(req.body);
    product.category =  req.params.id;
    await product.save();

    category.productsId.push(product._id)
    await category.save();

    res.status(201).send('Ok ');
  } catch (err) {
    res.status(400).send('Error in adding new product : ' + err.message);
  }
})


router.patch("/product/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    // console.log(product);
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send('Error to find product : ' + err.message);
  }
})

//Delete Product
router.delete("/product/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await Product.findByIdAndDelete(_id);
    if (!product) {
      return res.status(400).send("Bad Request");
    } else {
      return res.status(201).send(product);
    }
  } catch (err) {
    res.status(400).send('Error to find product : ' + err.message);
  }
})

module.exports = router; 