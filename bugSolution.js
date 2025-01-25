```javascript
const { MongoClient } = require('mongodb');

async function updateDocument() {
  const uri = "mongodb://localhost:27017/myDatabase"; // Corrected URI
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('myDatabase');
    const collection = db.collection('myCollection');

    const filter = { _id: 1 };
    const updateDoc = {
      $set: { name: "Updated Name" },
    };

    const result = await collection.updateOne(filter, updateDoc);

    console.log(`Modified count: ${result.modifiedCount}`);
  } finally {
    await client.close();
  }
}

updateDocument().catch(console.dir);
```