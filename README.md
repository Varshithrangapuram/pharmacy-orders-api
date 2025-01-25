A simple REST API for managing pharmacy orders, built with Node.js and MongoDB.

Features
1.Add new orders to the database.
2.Retrieve orders.
3.Delete orders by ID.

Tools and Technologies
1.Node.js: Backend server.
2.MongoDB: Database for storing orders.
3.Postman: API testing.

pharmacy-orders-api/
├── config/db.js        # database connection
├── controllers/     # Business logic for each API
│   └── orderController.js
├── models/          # MongoDB schema and models
│   └── orderModels.js
├── routes/          # API routes
│   └── orderRoutes.js
├── index.js         # Main application entry point

Set up the environment variables: Create a .env file in the root directory with the following:
MONGO_URI=<your_mongodb_connection_string>
PORT=5000

Method	Endpoint	          Description
GET	    /api/orders	        Retrieve all orders
POST	  /api/orders	        Add a new order
DELETE	/api/orders/:id	    Delete order by ID
