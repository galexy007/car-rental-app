const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");

// MongoDB Connection URL
const uri = "mongodb://Rajdeep:Rajdeep2004@127.0.0.1:27017/admin";
const client = new MongoClient(uri);

async function insertUser() {
  try {
    await client.connect();
    const db = client.db("car_rentsl");
    const usersCollection = db.collection("users");

    // User Data
    const user = {
      name: "Rajdeep",
      email: "rajdeepmukherjee481@gmail.com",
      phone: "+91 9932152820",
      role: "admin",
      createdAt: new Date(),
    };

    // Hash Password
    const saltRounds = 10;
    user.password = await bcrypt.hash("#Rajdeep2004", saltRounds);

    // Insert User into MongoDB
    const result = await usersCollection.insertOne(user);
    console.log("User inserted with ID:", result.insertedId);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

// Run the function
insertUser();
