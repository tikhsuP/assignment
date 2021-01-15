<p align="center">
  <img src="https://github.com/tikhsuP/github-search/blob/main/src/images/logo.png" width="150px">
</p>

# Github Profile Search
This app enables the user to search for the github users and display user details by passing a search query. This app makes use of the [Github Search API](https://docs.github.com/en/free-pro-team@latest/rest). The Search API helps you search for the specific item you want to find. For example, you can find a user or a specific file in a repository. Think of it the way you think of performing a search on Google. It's designed to help you find the one result you're looking for (or maybe the few results you're looking for).

When the search string is entered in the serch bar, it fetches search results using API.
Then for each fetched result, the app makes API call to fetch more info (which wasn't provided in the API given in the assignment)
Then it makes another API call to fetch the users' repositories' info (name, link).

### The app displays the following:
1. Total number of results for the search string
2. User's Name
3. Bio
4. Github Username (Based on the search query)
5. Location
6. Email
7. Count of Followers
8. Count of Following
9. Repositories Link (By making API request for the 3rd time to fetch and display the repositories as a horizontal scrollbar. Clicking on this will take you to that specific github repository)
10. View Profile button (Redirects to the user profile)

## Demo: [Link](https://github0search.web.app/)

## Project Details
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Directory structure

```
github-search/
├── public/
│   ├── ...
│   ...
│   
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── auth/
│   │   |   └── keys.js
│   │   |
│   │   ├── css/
│   │   |   ├── displayData.css
│   │   |   └── users.css
│   │   | 
│   │   └── js/
│   │       ├── DisplayData.js
│   │       ├── Pagination.js
│   │       ├── Profile.js
│   │       └── Users.js
│   │
│   ├── images/
|   │   └── logo.png
│   │ 
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── .eslintcache
├── README.md
├── package.lock.json
└── package.json
```

### Tech stack Used

This project was created using the following:

<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png"></code>

## Requirements
- `node` v14.15.1
- `npm` v6.14.8
- `material-ui/core` v4.11.2
- `axios` v0.21.1
- `react` v17.0.1
- `react-dom` v17.0.1
- `react-scripts` v4.0.1
- `web-vitals` v0.2.4


## Getting started

- Make sure you have `node` and `npm` installed
- Clone this repository: `git clone https://github.com/tikhsuP/github-search.git`
- `cd github-search`
- `npm install` (to install the required dependencies)
- `npm start`
- visit [http://localhost:3000](http://localhost:3000)


### Important Commands
In the project directory, you can run:

- `npm start` : Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

- `npm test` : Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- `npm run build` : Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
