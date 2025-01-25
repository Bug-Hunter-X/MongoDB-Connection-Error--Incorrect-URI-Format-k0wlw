# MongoDB Connection Error: Incorrect URI Format

This repository demonstrates a common error when connecting to a MongoDB database using Node.js: providing an incorrect URI format.

## Bug Description
The `bug.js` file contains code that attempts to connect to a MongoDB database.  However, the connection string (`uri`) is incorrectly formatted, preventing a successful connection. This results in errors such as `MongoNetworkError: connect ECONNREFUSED`.

## Solution
The `bugSolution.js` file shows the corrected code. The URI format is updated to correctly specify the database name and other necessary parameters for successful connection.