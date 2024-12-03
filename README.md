
# Inventory Management System

The Inventory Management System is a full-stack web application that helps businesses efficiently manage inventory and supplier data. It allows users to perform CRUD operations, monitor stock levels, and manage supplier information. The system includes low-stock alerts, bulk data import/export functionality, and a color-coded inventory dashboard


## 📚 Features 

### Backend
-  **Inventory Management API:** 
         Add, update, retrieve, and delete inventory items. CRUD operations for supplier data.

- **Bulk Import/Export:** Import inventory data from a CSV file. Export inventory data as a downloadable CSV file.


-  **Low Stock Alerts:** Identify and display items with stock levels below a defined threshold. 


- **Authentication:** Secure API endpoints using JWT-based authentication.

### Frontend

- **Inventory Dashboard:** Displays inventory items in a sortable, paginated table. Color-coded stock level indicators for easy visibility.
 
- **Inventory Management:** Add, edit, and delete inventory items through a user-friendly form. Search and filter inventory items by category or supplier. 

- **Supplier Management:** Add and edit supplier information. View a list of all suppliers.






## 🛠️ Technology Stack

**Backend:** 

- Node.js with Express.js 
- MongoDB with Mongoose
- CSV Parsing Libraries: csv-parser, json2csv
- Authentication: JWT 

**Frontend:** 

- React.js 
- Context API for state management
- CSS/SCSS for styling 

     
## 🎯 Future Enhancements
Add authentication and user roles (e.g., admin, staff).

Implement notifications for low-stock items.

Enhance UI with charts for inventory trends.
