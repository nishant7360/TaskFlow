# TaskFlow

TaskFlow is a full-stack task management application with a React + Vite frontend and an Express + MongoDB backend.

## Project Structure

- `backend/` - Express API and MongoDB models
- `frontend/` - React application built with Vite and Tailwind-style UI components

## Features

- Create, read, update, and delete tasks
- Search, filter, and sort tasks
- Task status tracking: Todo, In Progress, Completed
- Task priority: Low, Medium, High
- Optional due dates
- Responsive UI with task cards and dialog-based forms

## Backend

### Technologies

- Node.js
- Express
- MongoDB / Mongoose
- CORS
- Morgan
- dotenv

### API Endpoints

- `POST /api/v1/tasks` - create a task
- `GET /api/v1/tasks` - fetch tasks with optional query parameters
- `GET /api/v1/tasks/:id` - fetch a task by ID
- `PUT /api/v1/tasks/:id` - update a task
- `DELETE /api/v1/tasks/:id` - delete a task

### Setup

1. Change to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
   PORT=5000
   DB_URL=mongodb+srv://<user>:<password>@<cluster>/<dbname>?retryWrites=true&w=majority
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

## Frontend

### Technologies

- React
- Vite
- React Router DOM
- Axios
- Radix UI components
- Tailwind-inspired styling

### Setup

1. Change to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Running the App Locally

1. Start the backend first from `backend/`. Ensure `PORT` and `DB_URL` are set in `.env`.
2. Start the frontend from `frontend/`.
3. Open the Vite development URL, usually `http://localhost:5173`.

## Notes

- The backend is configured to accept requests from `http://localhost:5173`.
- The task model includes `title`, `description`, `status`, `priority`, and `dueDate`.

## Recommended Workflow

- Create tasks using the new task dialog
- Filter tasks by status and priority
- Sort tasks by newest, oldest, due date, or priority
- Edit or delete tasks from the task cards

## License

This project does not include a specific license.
