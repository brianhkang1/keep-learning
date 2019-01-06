## Intro

Usually, the only way to have JS files talk to each other is through the index.html file. This can be a problem if you don't place the files in the correct dependency order.

<script src="square.js"></script>  
<script src="index.js"></script>

after webpack will be <script src="build/bundle.js"></script>

Another issue is performance issue. This is why we use webpack, to combine all JS files into ONE file. The web serves this one file to browser


## Starting off  

`npm init` creates package.json file  
`npm run [command]` runs script commands
`npm install --save-dev webpack` installs webpack. --save-dev saves it to the development portion of app


## Babel  
Babel transpiles (translate + compiles) to language that all browsers can understand (i.e. ES5)  

babel-core allows core functionality of babel  
babel-preset-env are the actual rules of how to parse that code (i.e. from ES6 to ES5)  
babel-loader allows babel and webpack to talk to each other  

## webpack dev server
Not like a backend server; rather, it's just listening for changes to our code then refresh the application
