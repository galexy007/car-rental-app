const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");

// MongoDB connection URI
const uri = "mongodb://Rajdeep:Rajdeep2004@127.0.0.1:27017/car_rentsl?authSource=admin"; // Adjust database name if needed

const client = new MongoClient(uri);

async function registerUser() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("car_rentsl"); // Use your actual database name
        const usersCollection = db.collection("users");

        // Define user details
        const user = {
            name: "Rajdeep",
            email: "rajdeepmukherjee481@gmail.com",
            phone: "+91 9932152820",
            role: "admin",
            createdAt: new Date(),
        };

        // Hash the password before inserting
        const saltRounds = 10;
        user.password = await bcrypt.hash("#Rajdeep2004", saltRounds);

        // Insert the user into the database
        const result = await usersCollection.insertOne(user);
        console.log("User inserted with ID:", result.insertedId);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

registerUser();
