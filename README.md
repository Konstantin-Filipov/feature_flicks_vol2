# Feature Flicks

**Feature Flicks** is a simple website diplaying screenings in a cinema.
This is a personal project with a focus on learning React and vite fundamentals.

## Files
1. Enty point - index.html
2. Fetching data - ./src/FetchData.jsx
3. Vite configuration - ./vite.config.js

## Frontend files
1. ./main.jsx - calls App.jsx
1. ./App.jsx - The main "Parent" component which renders everything
2. components/caregotyDropDown.jsx - the dropdown menu which handles the selected movie category to be presented
3. components/movies.jsx - gets the fetched screenings and movies and creates map for each date as a key with it's appropriate screenings
4. components/movieCard.jsx - displays each movie along with it's description details.

## Installation

1. Clone the repository.
2. Install dependencies using [npm](https://www.npmjs.com/):

   ```bash
   npm install

## Usage

To run the development server:
npm run dev

To build for production:"
npm run build

To lint the code::
npm run lint

To preview the production build::
npm run preview


## Dependencies

    Bootstrap v5.3.1
    MDB React UI Kit v6.2.0
    React v18.2.0
    React Bootstrap v2.8.0
    React DOM v18.2.0

## Development Dependencies

    @types/react v18.2.15
    @types/react-dom v18.2.7
    @vitejs/plugin-react v4.0.3
    ESLint v8.45.0
    eslint-plugin-react v7.32.2
    eslint-plugin-react-hooks v4.6.0
    eslint-plugin-react-refresh v0.4.3
    Vite v4.4.5

## License

This project is private and does not have a specified license.
