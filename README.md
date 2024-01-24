# Started learning react from akshya saini sir with namaste react
### 1. Learning from first episode (INCEPTION)
+ **CDN** <br>
          ----> CDN(Content Delivery Network) allows for the quick transfer of assests needed for loading internet content, including HTML pages, js files, images and videos. <br>

+ **React.createElement gives the object.**<br>
 ---> React.createElement gives the object which then further converted to browser understandable HTML code.

+ **Crossorigin attribute**<br>
 ---> sets the mode of the request to an HTTP CORS(cross origin request).<br>
 ---> valid for audio, img and <script> etc tags.

+ **Library vs framework**<br>
  ---> Library can be applied to the small portion of the page.<br>
  ---> Framework comes with the load, can't be applied to specific part of the page.<br>
  <br>
  
### 2. Learning from second episode (Ignite Your App)

+ **NPM** <br>
      ---> NPM doesn't stand for Node Package Manager, it's actually a package manager.<br>
  
+ **Package.json**<br>
    ---> package.json is a configuration file for npm.<br>
    ---> package.json file keeps track of all the packages/dependencies which are installed.<br>
  
+ **dev dependencies vs normal dependencies**<br>
   ---> package is installed as **dev dependencies** when we want to use package for development and testing purpose.<br>
   ---> package is installed as **normal dependencies** for production purpose.<br>

+ **Parcel, webpack, vite are the bundler which powers our app**<br>

+ **caret(^) and tilde(-)**<br>
    ---> Caret(^) will update the minor version of the packages.<br>
    ---> Tilde(-) will install the major version.<br>

+ **Package-lock.json**<br>
    ---> keeps track of excat versions of packages/dependencies also keeps the track of all the transitive dependencies.<br>
  
+ **Transitive dependencies**<br>
    ---> Dependencies having their own dependencies this dependencies have their own dependencies.<br>
    
+ **node_module**<br>
    ---> Contains the codes of all the dependencies which are mentioned in package.json file.<br>
  
+ **npx: To execute a package**<br>
+ **npm: To install a package**<br>

+ **npx parcel file.html (start our app)**<br>

+ **<script type="module">**<br>
   ---> script will consider js as module not as normal script.<br>
   ---> which will allow use to seperate/breake code into multiple files.<br>
+ **Role of parcel(working of parcel)**<br>
    ---> **HMR(Hot Module Replacement)**: automatically refresh the page after saving the file.<br>
    ---> **File watching algorithm** (written in c++).<br>
    ---> **Caching**<br>
    ---> **Image optimisation**<br>
    ---> **Minification/compression** remove extra spaces etc.<br>
    ---> **Bundling all the files**<br>
    ---> **Consistent hashing**<br>
    ---> **Code splitting**<br>
    ---> **Differential bundling** support older browser.<br>
    ---> **Diagnostic** <br>
    ---> **Bettor error handling** <br>
    ---> **tree shaking** removes unused code. <br>
    
+ **dist folder**
    ---> when app is live what we see on page comes from dist folder.

+ **browserlist**<br>
    ---> To make our app compatible to older browser version.<br>
    ---> example: "browserlist":[
                "last 2 chrome version",
                "last 2 safari version"
               ]

### 3. Learning form third episode(Laying the foundation)

+ **script in package.json**<br>
     ---> "script" : { "start": "parcel index.html",
                       "build" : "parcel build index.html"
  }
     ---> now i can run the project by just **npm run start**

+ **JSX is not the part of react**

+ **JSX is not html in js**

+ **JSX is html like syntax**

+ **babel transpiles/convert the jsx to browser understandable code**

+ **React.createElement --> ReactElement - js object --> HTML Element(render)**

+ ** jsx --> React.createElement --> js object --> HTML Element(render) **

+ **class based component(old) vs Functional component(new)**

+ **Functional component is normal javascript function**

+ **component name should start with capital letter**

+ **React functional component is a function which return some piece of JSX**

+ **Component Composition is a component inside component**

+ **We can write javascript insidie JSX using "{}"**

+ **We can execute component in three ways**<br>
  ---> {Title()}
  ---> <Title> </Title>
  ---> <Title/>



  
Most React tutorials typically commence with the installation of a bundler and swiftly transition to React code. However, this particular tutorial takes a distinctive approach by elucidating the entire process from the ground up. It delves into the intricacies of constructing React, leaving me astounded and pleasantly surprised at every turn. Each minute unfolds a new revelation, fostering a continuous learning experience.
