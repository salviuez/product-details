import express from "express";
import { MongoClient } from "mongodb";
import productsRouter from "./routes/products.route.js";

const app = express();
const PORT = 4000;

const MONGO_URL = "mongodb://127.0.0.1";
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("mongo is connected");


app.get("/", function (request, response) {
    response.send("Hi , Welcome")
})

app.use(express.json());
app.use("/products", productsRouter);



app.listen(PORT, () => (`The server started in ${PORT}`))

export { client };
