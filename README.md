# World Heritage Sites

## Overview
The **World Heritage Sites** application is a full-stack MERN web app that allows users to explore, search, and learn about heritage sites globally. It emphasizes the **scientific, environmental, and cultural significance** of these sites beyond their historical value.

## Features
- **Explore Global Heritage Sites** – View detailed descriptions, images, and scientific significance.
- **Search & Filter** – Filter sites based on categories like #CavePaintings, #Archaeology, #AncientCity, etc.
- **Responsive UI** – Developed with React and Material-UI for seamless user experience.
- **REST API Backend** – Express.js backend with MongoDB for data storage.

## Technologies Used
### **Frontend**
- React.js
- React Router
- Fetch API

### **Backend**
- Node.js( https://nodejs.org/en/download ) & Express.js
- MongoDB (with Mongoose)

## Installation & Setup
### **Prerequisites**
- Node.js & npm installed
- MongoDB instance (local or Atlas)

### **Clone the Repository**
```sh
git clone https://github.com/KOMAL9/HeritageSites.git
cd HeritageSites
```

### **Backend Setup**
```sh
cd backend
npm install
npm start
```

### **Frontend Setup**
```sh
cd ../frontend
npm install
npm start
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|--------------|
| GET | `/api/sites` | Fetch all heritage sites |
| GET | `/api/sites/:id` | Fetch a single heritage site |
| POST | `/api/sites` | Add a new heritage site (Admin only) |
| PUT | `/api/sites/:id` | Update site details (Admin only) |
| DELETE | `/api/sites/:id` | Remove a site (Admin only) |

## Future Enhancements
- **User Contributions** – Allow users to submit heritage site details.
- **Multilingual Support** – Support multiple languages for global accessibility.
- **Gamification** – Introduce interactive quizzes and rewards for learning.
- **AI-Powered Recommendations** – Suggest related heritage sites based on user interest.

## Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.

## License
This project is licensed under the MIT License.
