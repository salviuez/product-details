import { client } from "../index.js";


export async function createProducts(data) {
    return await client.db("rdb").collection("allproducts").insertMany(data);
}
export async function getAllProducts() {
    return await client.db("rdb")
        .collection("allproducts")
        .find().toArray({});
}