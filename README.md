# Mobile Hunt App

Mobile Hunt is a web application for browsing and purchasing mobile devices.

# Live Link: [Mobile Hunt](https://mobile-hunt.web.app/)

#  [Server Side Code](https://github.com/Rajib-10/Mobile-Hunt-Server)


## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/mobile-hunt-app.git
    cd mobile-hunt-app
    ```

2. **Client Setup:**

    ```bash
    cd client
    npm install
    ```

    - Create a Firebase project and obtain your Firebase configuration.
    - Copy the configuration details to `src/firebase.js`.

    ```bash
    npm start
    ```

3. **Backend Setup:**

    ```bash
    cd server
    npm install
    ```

    - Create a MongoDB database.
    - Copy the connection URI to `.env`:

      ```env
      PORT=5000
      DB_USER=your-mongodb-username
      DB_PASS=your-mongodb-password
      ```

    ```bash
    npm start
    ```

4. **Run the App:**

    - Start the backend server:

      ```bash
      cd server
      npm start or nodemon index.js
      ```

    - Start the client application:

      ```bash
      cd client
      npm run dev
      ```

