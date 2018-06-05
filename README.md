# React Twitter for World Cup NLP

In progress ...

React Application with Redux & Redux-saga to see NLP results from twitter streaming.
See : https://github.com/GreGGus/spark-streaming-worldCup

### Project structure

├── build                    # All build-related code
├── public                   # Static public assets 
├── server                   # Express server with webpack middleware
│   └── main.js              # Server entry point
├── src                      # Source code React
│   ├── index.html           # Main HtmL
│   ├── main.js              # Main render
│   ├── normalize.js         # For normalize
│   ├── components           # App main components
│   ├── layouts              # Page layout of application
│   │   └── PageLayout      # Main Layout of our applicaiton
│   ├── routes               # All differents routes + reducers + components + containers.
│   │   ├── index.js         # Creating route with all SubRoutes
│   │   ├── Home             # Home routing
│   │   │   ├── index.js     # Create home routing
│   │   │   ├── assets       # Assets if necessary
│   │   │   ├── components   # Home component
│   │   └── Twitter          # Twitter routing
│   │       ├── index.js     # Create twitter route 
│   │       ├── container    # Redux container to connect Components and global store
│   │       ├── modules      # Creations of reducers / actions 
│   ├── store                # Redux global store
│   │   ├── createStore.js   # Create global store
│   │   └── reducers.js      # Reducer  global
│   │   └── location.js      # Example reducer location & routing
│   └── styles               # Application-wide styles (generally settings)
└── tests                    # Unit tests




### Installation with Maven UBER JAR

`git clone`
`cd react-worldCup`
`npm install`


### Test

`npm test` with Karma


### Running 

`npm start`

Starting simple nodejs server with Express to serve application.








