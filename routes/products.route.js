import express from "express";

const router = express.Router();
import { createProducts, getAllProducts } from "../services/products.service.js";




router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);

    const result = await createProducts(data);
    response.send(result);


});

//1.Find all the information about each products
//use localhost:4000/products - run this on Server.

router.get("/", async function (request, response) {


    const products = await getAllProducts(request);

    response.send(products);
});

// Other answers are done at mongocommands.js


export default router;


