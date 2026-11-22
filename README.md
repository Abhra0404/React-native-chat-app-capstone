# Chatty

Chatty is a real-time chat application for Android, iOS, and web. It is built with Expo and React Native for the client, and Express, MongoDB, and Socket.IO for the backend.

## Features

- Account registration and login with JWT authentication
- One-to-one private conversations
- Group conversations and group creation
- Real-time messaging and typing presence
- Online/offline status and message delivery updates
- User discovery and profile editing
- Profile and message image uploads
- Soft-blue light theme and dark theme
- Bottom-tab navigation for Chats, Discover, Groups, and Profile

## Tech Stack

- **Frontend:** Expo SDK 58, React Native, React Navigation
- **Backend:** Node.js, Express
- **Database:** MongoDB and Mongoose
- **Real-time:** Socket.IO
- **Media:** Cloudinary
- **Authentication:** JWT and bcrypt

## Prerequisites

- Node.js and npm
- MongoDB running locally or a MongoDB Atlas connection string
- A Cloudinary account for image uploads
- Expo Go or an Android/iOS simulator

## Setup

Install frontend dependencies from the project root:

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
```

Create `backend/.env` and add the required settings:

```env
MONGO_URI=mongodb://127.0.0.1:27017/chatty
JWT_SECRET=your_secret_key
PORT=9876
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

For the mobile app, set the API URL to an address that your device or emulator can reach. Create a `.env` file in the project root:

```env
EXPO_PUBLIC_API_URL=http://192.168.1.100:9876
```

If the app and backend run on the same device, use `http://localhost:9876`. When testing from a physical phone, use the computer's LAN IP instead of `localhost`.

## Running the App

Start MongoDB, then run the backend from the `backend` directory:

```bash
cd backend
npm start
```

In a separate terminal, start the Expo development server from the project root:

```bash
npm start
```

You can also run the app with:

```bash
npm run android
npm run ios
npm run web
```

The backend will normally run at `http://localhost:9876`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start Expo and open Android |
| `npm run ios` | Start Expo and open iOS |
| `npm run web` | Start the app in a browser |
| `npm run lint` | Run Expo lint |
| `cd backend && npm start` | Start the backend server |
| `cd backend && npm run dev` | Start the backend with Nodemon |

## Project Structure

```text
frontend/navigation/  React Navigation and bottom tabs
screens/              Application screens
components/           Reusable UI components
context/              Authentication and theme providers
services/             REST API and Socket.IO clients
backend/controllers/  Route handlers
backend/routes/       Express API routes
backend/models/       Mongoose models
backend/middleware/   Authentication middleware
backend/config/       Database and Cloudinary configuration
```
