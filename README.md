# Citizens of the World

Citizens of the World is a full-stack application built using Strapi, a highly customizable, open-source Headless CMS, as the backend, and React coupled with TypeScript, a powerful combination for building user interfaces, for the frontend.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>=18.0.0 <=20.x.x)
- npm (>=6.0.0)

### Installation

1. Clone the repository

```bash
git clone git@github.com:Yann-GitHub/citizens-of-the-world.git
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### Running the application

#### Backend

From the `backend` directory:

1. To start the application with autoReload enabled (the app will automatically reload if you change any of the source files):

```bash
npm run develop
```

2. To start the application with autoReload disabled (useful for a production environment):

```bash
npm run start
```

3. To build the admin panel (this will create a production-ready build of your application):

```bash
npm run build
```

#### Frontend

From the `frontend` directory:

1. To start the application in development mode (the app will automatically reload if you change any of the source files):

```bash
npm run dev
```

2. To build the application for production (this will create a production-ready build of your application):

```bash
npm run build
```
