# streamer-backend-app

Deploy: https://streamers-app-6cbecbf31509.herokuapp.com

Common setup:
1. Clone the repo
```bash
   git clone https://github.com/Mariia22/streamer-backend-app.git
   cd streamer-backend-app
```
2. Install the dependencies
```bash
   npm install
```
3. Add environment variables
  - DB="path to MongoDB cluster" (example: mongodb+srv://NAME:PASSWORD@cluster0.i8ydhqv.mongodb.net/streamers?retryWrites=true&w=majority)
  - PORT="default port"
  - FRONTEND_APP="path to frontend app"
4. To start the express server, run the following
```bash
   npm run start:dev
```
