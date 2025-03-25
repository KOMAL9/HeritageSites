*This is a MERN stack web application that showcases World Heritage Sites from India and around the world*

The site features:
a)A Landing Page displaying various heritage sites with tags and a search box.
b)Clicking on a heritage site leads to a detailed page with site-specific information.
c)A "Heritage & Updates" button provides recent updates and historical details about the site.
d)Users can explore general information about heritage sites at the bottom of the landing page.

Technologies Used:

Frontend: React.js ,javascript,HTML5,CSS3
Backend: Node.js with Express.js
Database: MongoDB (via Mongoose)

API Calls: Fetch API for data retrieval

Installation & Setup

Prerequisites:
Ensure the following are installed on your system:
Node.js :https://nodejs.org/en/download 
MongoDB compass :https://www.mongodb.com/products/tools/compass

Steps to Run the Project

a)Clone the Repository

git clone <repository-url>
cd mern-heritage-project

b)Install Dependencies

Backend Setup:
cd backend
npm install

Frontend Setup
cd ../frontend
npm install

c)Start the Project
Run MongoDB : Ensure MongoDB is running locally or provide a cloud connection URL.

Start Backend Server:
cd backend
npm start

Start Frontend Server:
cd frontend
npm start

Future Enhancements:
a)Authentication & Authorization.
b)Admin panel for site management.
c)User comments & ratings for heritage sites.

Notes :
a)Ensure the backend is running before launching the frontend.
b)The project is currently minimal and does not include authentication/authorization.
