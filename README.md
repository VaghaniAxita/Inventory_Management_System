
# Inventory Management System API

This is a complete Inventory Management System built using Node.js, Express.js, and MongoDB. The system supports CRUD operations for both inventory items and suppliers, along with bulk CSV import/export functionality and low-stock alerts.


 - Deploy on Render: https://inventory-management-system-fb12.onrender.com
____________________________________________________




## Tech Stack

- Node.js	Runtime environment for JavaScript
- Express.js	Web framework for building APIs
- MongoDB	NoSQL database for data storage
- Nodemon	Automatically restarts server on changes
- CSV-Parser	Parses CSV files for import
- Multer	File upload middleware
- Dotenv	Handles environment variables


## Features

1. CRUD Operations:
 - Full CRUD (Create, Read, Update, Delete) for Inventory and Suppliers.
 - Each inventory item is linked to a supplier using Mongoose relationships.
   
2. Bulk Import/Export:
 - Import Inventory via CSV Upload a CSV file and bulk import all inventory data.
 - Export Inventory as CSV — Export all inventory data as a CSV file for download.

3. Low Stock Alerts:
  - Automatically marks items as low stock when the quantity is below a certain threshold.
  -  This is useful for inventory tracking and restocking decisions.

4. Modular Structure:
 - Organized folder structure with models, routes, controllers, and middleware.
 - Clean code that’s easy to maintain, scale, and explain in interviews.

5. Error Handling:
 - Centralized error handling using a custom error middleware.

6. Data Relationships:
 - Each inventory item is linked to a supplier using Mongoose’s ObjectId reference.

___________________________________________________


## Setup

1. Clone the Repository

```bash
 https://github.com/VaghaniAxita/Inventory_Management_System
```

2. Navigate to the Project Directory:

```bash
  cd backend  
```

3. Run the server:
```bash
  nodemon
```




# Routes

### User Authentication Routes
  
  **Register  User**

- Route:POST /api/users/register
- Description: Register a new user
- Request Body:
```bash
  {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
 {
  "_id": "64c3a9b9b583120017ce2f4d",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg"
}
```

**User Login**

- Route: /api/users/login
- Description:Login an existing user
- Request Body:
```bash
 {
  "email": "john@example.com",
  "password": "123456"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  "_id": "64c3a9b9b583120017ce2f4d",
  "name": "John Doe",
  "email": "john@example.com",
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg"
}
```

**Get All Users**

- Route: GET /api/users/profile
- Description: Fetches all registered users.
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  "_id": "64c3a9b9b583120017ce2f4d",
  "name": "John Doe",
  "email": "john@example.com"
}
```
### Inventory Routes

**Create a New Inventory Item**

- Route:POST /api/inventory
- Request Body:
```bash
 {
  "name": "MacBook Pro 16",
  "quantity": 5,
  "price": 2499.99,
  "supplier": "64b12abc12345"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
{
  "_id": "64b23c45678def1234",
  "name": "MacBook Pro 16",
  "quantity": 5,
  "price": 2499.99,
  "supplier": "64b12abc12345",
  "lowStockAlert": false
}
```

**Get All Inventory Items**

- Route:GET /api/inventory
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
[
  {
    "_id": "64b23b12345abc1234",
    "name": "iPhone 14",
    "quantity": 10,
    "price": 999.99,
    "supplier": "64b12abc12345",
    "lowStockAlert": false
  },
  {
    "_id": "64b23b12345abc5678",
    "name": "Samsung Galaxy S23",
    "quantity": 3,
    "price": 899.99,
    "supplier": "64b12abc67890",
    "lowStockAlert": true
  }
]
```

**Get Single Inventory Item by ID**

- Route:GET /api/inventory/:id
- Request Body:
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "_id": "64b23b12345abc1234",
  "name": "iPhone 14",
  "quantity": 10,
  "price": 999.99,
  "supplier": "64b12abc12345",
  "lowStockAlert": false
}
```
**Update an Existing Inventory Item**

- Route:PUT /api/inventory/:id
- Request Body:
```bash
 {
  "name": "MacBook Pro 16 M2",
  "quantity": 8,
  "price": 2599.99
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "_id": "64b23c45678def1234",
  "name": "MacBook Pro 16 M2",
  "quantity": 8,
  "price": 2599.99,
  "supplier": "64b12abc12345",
  "lowStockAlert": false
}
```

**Delete an Inventory Item**

- Route:DELETE /api/inventory/:id
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 { 
 "message": "Inventory item deleted successfully" }
```
### Supplier Routes

**Create a New Supplier**
- Route: POST /api/suppliers
- Request Body:
```bash
{
  "name": "Global Supplier Co.",
  "contact": "support@globalsupplier.com"
}
```
- Sample Response:
    - Status: 201 Created
    -  Body:
```bash
{
  "_id": "64b45c45678abc1234",
  "name": "Global Supplier Co.",
  "contact": "support@globalsupplier.com"
}
```

**Get All Suppliers**
- Route:GET /api/suppliers
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 [
  {
    "_id": "64b12abc12345",
    "name": "Tech Distributors Inc.",
    "contact": "tech@distributors.com"
  },
  {
    "_id": "64b12abc67890",
    "name": "Electronics Hub",
    "contact": "info@electronichub.com"
  }
]
}
```

**Get Single Supplier by ID**
- Route: GET /api/suppliers/:id
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
  "_id": "64b12abc12345",
  "name": "Tech Distributors Inc.",
  "contact": "tech@distributors.com"
}
```

**Update a Supplier's Information**
- Route: PUT /api/suppliers/:id
- Request Body:
```bash
{
  "name": "Updated Electronics Hub",
  "contact": "updated@electronichub.com"
}
```
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
  "_id": "64b12abc67890",
  "name": "Updated Electronics Hub",
  "contact": "updated@electronichub.com"
}
```

**Delete a Supplier**
- Route: DELETE /api/suppliers/:id
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
{ 
 "message": "Supplier deleted successfully" 
}
```
  
## CSV API

1. Export Inventory Data to CSV
- Method: ```GET```
- Endpoint: ```/api/inventory/csv/export```
- Request Body: None
- Response: CSV file download named ```inventory.csv```

2. Import Inventory Data from CSV
- Method: ```POST```
- Endpoint: ```/api/inventory/csv/import```
- Request Body: uploaded CSV file.
