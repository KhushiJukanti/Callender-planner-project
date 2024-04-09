# Calendar Planner Application

## Overview

This is a web-based calendar planner application built with React for the frontend and Node.js with Express for the backend. It allows users to input, view, and manage tasks with various details such as name, duration, frequency, category, preferred days, and preferred times.

## Features

- Input tasks with details: name, duration, frequency, category, preferred days, preferred times.
- Real-time validation and error handling for input fields.
- Display tasks in a monthly view calendar.
- Differentiate between weekdays and weekends in the calendar.
- Prevent overlapping tasks and highlight conflicts.
- Enforce a limit on total task durations to ensure they do not exceed 672 hours in a month.
- Provide a summary of allocated vs. remaining hours.

## Project Setup

### Frontend Setup

1. Clone the repository: git clone `https://github.com/your-username/calendar-planner.git`
2. Navigate to the project directory: cd `calendar-planner`
3. Start the development server: npm start
4. Install dependencies using npm or yarn: `npm install` / `yarn install`
5. Start the development server: `npm start` / `yarn start`
6. Open your browser and visit http://localhost:7000 to see the application.
7. Navigate to the frontend directory: cd calendar-planner/frontend
8. Install dependencies: npm install

### Backend Setup

1. Navigate to the backend directory: `cd calendar-planner/backend`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Database Setup

- This project uses MongoDB as the database. Ensure MongoDB is installed and running locally on the default port (27017).

## Usage

1. Open the application in your web browser.
2. Add tasks by filling in the required details in the "Add Task" form and clicking the "Add Task" button.
3. View tasks in the monthly view calendar. Tasks are displayed based on their preferred days and times.
4. Manage tasks by editing or deleting them as needed.
5. Pay attention to validation messages and error alerts for any issues with task input or scheduling conflicts.

## Technologies Used
- Frontend: React.js, HTML, CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Additional libraries: Axios (for making HTTP requests), Mongoose (for MongoDB object modeling), Cors (for enabling CORS in Express).

## Credits
This project was created by Khushi Jukanti. Special thanks to SAM for guidance and support.

## License
This project is licensed under the Khushi License - see the LICENSE file for details.

