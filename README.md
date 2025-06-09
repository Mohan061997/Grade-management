Student Grades Management System:
This is a web application designed to manage student grades efficiently. It provides a user-friendly interface for teachers or administrators to log in, add new student grades, view a list of existing grades, edit them, and delete them.

Features""
User Authentication: Secure login functionality (admin/password) to access the system.

Add New Grades: A dedicated form to input student name, course, and score.

View Grades List: A clear, tabular display of all student grades with details.

Edit Grades: Modify existing grade entries.

Delete Grades: Ability to remove individual grade entries from the system.

Responsive Design: Styled with CSS for a clean and adaptive user experience.

Technologies Used:
Frontend:
React: A JavaScript library for building user interfaces.

TypeScript: A superset of JavaScript that adds static types.

Axios: A promise-based HTTP client for making API requests.

CSS: For styling and responsive layout.

Backend:
C# / .NET: For building the RESTful API that handles grade data.

Entity Framework Core: An ORM for database interaction.

SQL Server LocalDB: A lightweight version of SQL Server for local development.

ASP.NET Core CORS: Middleware to enable Cross-Origin Resource Sharing.


Running the Application
1. Start the Backend Server
Open your terminal, navigate to your backend project directory, and run:

dotnet run

This will start your .NET API, typically on http://localhost:5000 .

2. Start the Frontend Application
Open a new terminal window, navigate to the frontend directory, and start your React app:

npm start


This will start the React development server, usually opening the application in your default web browser at http://localhost:3000.

Usage
Login: The application will prompt you to log in. Use the default credentials:

Username: admin

Password: password

Add Grade: After logging in, click the "Add New Grade" button. Fill in the student's name, course, and score, then click "Add Grade".

View Grades: All added grades will be displayed in the table.

Delete Grade: Click the "Delete" button next to any grade entry to remove it.