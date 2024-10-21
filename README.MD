Country Explorer
Country Explorer is a simple React application that displays a list of countries and provides detailed information about each one. It utilizes an external API to fetch country data, including information on bordering countries. This project uses React Router for navigation and Tailwind CSS for styling.

Table of Contents
Features
Installation
Usage
Dependencies
Project Structure
Contributing
License
Features
Displays a list of countries fetched from an API.
Allows users to click on a country name to view detailed information.
Shows bordering countries for each selected country.
Utilizes Tailwind CSS for responsive design and modern styling.
Installation
Prerequisites
Make sure you have the following installed on your machine:

Node.js (v14 or higher)
npm or yarn
Setup
Clone the repository:

bash
Copiar código
git clone https://github.com/your-username/country-explorer.git
cd country-explorer
Install dependencies:

bash
Copiar código
npm install
or if you're using yarn:

bash
Copiar código
yarn install
Start the development server:

bash
Copiar código
npm run dev
or with yarn:

bash
Copiar código
yarn dev
Navigate to http://localhost:3000 in your browser to view the app.

Usage
On the homepage, you will see a grid of countries.
Click on any country to view its detailed information, including the flag, population, and bordering countries.
API Endpoints
The app fetches data from the following API endpoints:

List of countries: GET http://localhost:3000/country/
Country details: GET http://localhost:3000/country/:code
Make sure you have a backend service running at http://localhost:3000 that serves these endpoints.

Dependencies
React: A JavaScript library for building user interfaces.
React Router: For handling navigation and routing between pages.
Axios: For making HTTP requests to the API.
Tailwind CSS: A utility-first CSS framework for responsive design and styling.
Project Structure
php
Copiar código
├── public              # Public assets
│   └── index.html
├── src
│   ├── components      # Reusable components
│   ├── pages           # Main pages (Country List, Country Details)
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point of the React application
│   └── index.css       # Tailwind CSS configuration and global styles
├── README.md
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project metadata and dependencies
Contributing
Contributions are welcome! If you find any issues or have feature requests, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.