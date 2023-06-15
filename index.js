import {mongoURI} from "./credentials.js"

import {MongoClient} from "mongodb"

const connection = new MongoClient(mongoURI) // Connect to cluster with URI

await connection.connect() // Open the Connection

const db = connection.db('Cluster0') // Select a specific database

await db.collection('students').insertOne({ name: 'John Therlonge', age: 26 }) // add student

const results = await db.collection('students').findOne({ name: 'John Therlonge' }) // get student

console.log(results)

connection.close() // Close the Connection