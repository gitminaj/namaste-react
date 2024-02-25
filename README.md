# Started learning react from akshya saini sir with namaste react
## 1. Learning from first episode (INCEPTION)
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
  
## 2. Learning from second episode (Ignite Your App)

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

## 3. Learning form third episode(Laying the foundation)

+ **script in package.json**<br>
     ---> "script" : { "start": "parcel index.html",
                       "build" : "parcel build index.html"
  }<br>
     ---> now i can run the project by just **npm run start**

+ **JSX is not the part of react**

+ **JSX is not html in js**

+ **JSX is html like syntax**

+ **babel transpiles/convert the jsx to browser understandable code**

+ **React.createElement --> ReactElement - js object --> HTML Element(render)**

+ **jsx --> React.createElement --> js object --> HTML Element(render)**

+ **class based component(old) vs Functional component(new)**

+ **Functional component is normal javascript function**

+ **component name should start with capital letter**

+ **React functional component is a function which return some piece of JSX**

+ **Component Composition is a component inside component**

+ **We can write javascript insidie JSX using "{}"**

+ **We can execute component in three ways**<br>
  ---> {Title()} <br>
  ---> <Title> </Title> <br>
  ---> <Title/> <br>

## 4. Learning from fourth episode (Talk is cheap show me the code)

+ **Before building your app/project we should first plan our structure and flow of our app**<br>

+ **Configdriven UI**<br>

  ---> Controlling your UI using data(config).<br>
  ---> Changing interface according to data which comes from backend.<br>
 web application consist of UI and data layer.<br>
  ---> it is very important that our ui layer syncs with data layer.<br>

+ **Optional chaining**<br>

  ---> Normal way to get data from obj is: obj.name.<br>
  ---> what if our data/obj will come in production or will come dynamically or will come after some time.<br>
  ---> so if we use "obj.name" it will give error, bcz obj.name is not there yet, it will come later.<br>
  ---> so we will use optional chaining i.e adding "?".<br>
  ---> "obj?.name".<br>

+ **we can use array.map() fuction to iterate an array and display data**<br>

  
+ **key**<br>

  ---> It is important to give keys to all the element in the array, most important while using map() function.<br>
  ---> key uniquely represent all the elements in the array.<br>
  ---> If we will not give keys, react will re-render all the components again and again every time when new element will be added.<br>
  ---> If we will give keys react will only render new element.<br>

## 5. Learning from fifth episode (Let's get Hooked)

+ **Keep your component in seprate file and name file same as component**

+ **Component name should start with capital letter**

+ **Never keep hard coded/constant value in your component make a seperate file/folder**

+ **Default vs named export/import**

    ---> **Default** export is only allowed once in a file.<br>
    ---> We can do multiple **Named** export in a file.<br>
    ---> Default export/import syntax<br>
       ---> export default "name".<br>
       ---> import "name" from "file_dest".<br>
    ---> import export/import syntax<br>
       ---> export "name".<br>
       ---> import { "name" } from "file_dest".<br>

+ **React is fast because it can do faster dom manipulation.**
  
+ **Hookes**

+ **Hooks are normal js function written by developer**

+ **Most important hooks**<br>

    ---> useState()<br>
    ---> useEffect()

+ **Before using hooks import it as name import from react**

+ **hooks sync ui layer with data layer**

+ **useState() syntax**

    ---> Const[value, setValue] = useState("initialvalue")<br>
    ---> setValue(updatedValue)

+ **Whenever statevariable update's react re-render the component**

+ **Reconciliation Algorithm(React fiber) started from React**

    ---> When something changes in UI it is called reconciliation.

+ **Virtual Dom**

    ---> Representation of Actual dom in the form of object.

+ **React element is in the form of object that object is called virtual dom**

+ **Diff algorithm**<br>
      ---> Finds out the difference between current virtual dom and updated virtual dom.<br>
      ---> Then it will update the actuall dom on every render cycle.

## 6. Learning from sixth episode (Exploring the world)

+ **Monolithic and microservices architecture**<br>
   + **Monolithic architecture**<br>
      ---> Monolith architecture has single code base, every functionality is in single project.<br>
      ---> Developers build client-side UI, a database, and a server-side application on a single code base.<br>
      ---> If we want to change any one functionality we have to deploy whole project again.<br>

   + **Microservices/Single responsibility principle/Distributed architecture**<br>
      ---> Code base/Project is **divided into small services**.<br>
      ---> Each microservice **works to accomplish a single feature** or business logic.<br>
      ---> Microservices can have **independent TechStack** for each project/services.<br>
      ---> Instead of exchanging data within the same code base, microservices **communicate with an API**.<br>

      ![image](https://github.com/gitminaj/namaste-react/assets/75945276/d0c51bf6-8b94-4698-8859-015d579ec4c0)


+ **Appraoch for API Call**<br>
    + 1st is **web Loads** --> **API Call** --> **Render** <br>
    + 2nd is **web Loads** --> **Render** --> **API Call** --> **Re-render** <br>
--> We will use 2nd which will lead to better user experience.

+ **Introduction to useEffect() hook**<br>
      ---> useEffect() hook is normal js function which takes 2 argument. <br>
      ---> 1st argument - Call back function. <br>
      ---> 2st argument - Dependency array. (more on this in upcoming sessions) <br>
      ---> useEffect() is called after the component is rendered.<br>
  syntax
  ```
  useEffect(() =>{
   console.log("useEffect Called")
  })
  ```
+ **fetch() function**<br>
      ---> fetch is given by browser(js engine).<br>
      ---> fetch returns promise.<br>
      ---> fetch function gives readable strings, which needs to be converted to json.<br>
     
+ **Shimmer UI**<br>
      ---> shimmer ui ressembles the page's actual UI without the content.<br>
      ---> To increase user experience shimmer ui is to Load the fake page before the actuall page loads.<br>

+ **Conditional Rendering**<br>
     ---> If we render our page with some condition it is called conditional rendering.<br>
  ```
  if(restauList.length === 0){
   return <Shimmer />
  }
  ```

+ **More on useState() hooks**<br>
    ```
    const [value, setValue] = useState();
    ```
     ---> how a constant can be changed? <br>
     ---> Every time state variable changes component re-render and new variable is created.<br>
## 7. Learning from seventh episode (Finding the path)

   + **More on useEffect() hook.**<br>
    ---> useEffect( (call back function), [dependency array] )<br>
    ---> **case 1:** If no dependency array ==> useEffect() is called on every render. <br>
    ---> **case 2:** If dependency array is empty [] ==> useEffect() is called on initial render. (just once in render cycle) <br>
```
    useEffect(()=>{
        console.log("just called once")
     },[])
```
   ---> **case 3:** If dependency array has state variable ==> useEffect() is called on everythime the state variable changes.<br>
```
    useEffect(()=>{
        console.log("just called once")
     },[stateVariable])
``` 
 + **Best practise/rules for useState hook**<br>
 
    ---> Never create state variable outside the component.<br>
    ---> State variable work is to create local variable for functional component.<br>
    ---> Try to make state variable at the top of component.<br>
    ---> Never use/create state variable inside condition.<br>
    
+ **Introductio to react router**<br>
    ---> Installing react router library
  ```
   npm i react-router-dom
  ```
   ---> For routing import createBrowserRouter<br>
  ```
   import { createBrowserRouter } from "react-router-dom";

   const appRouter = createBrowserRouter(
   [
    {
      path: "/",
      element: <Applayout/>
    }
   ]
  )
  ```
  ---> We need router provider to route app.<br>
  ```
  import { RouterProvider } from "react-router-dom";

  root.render(<RouterProvider router={appRouter} />)  
  ```
   ---> If the URL is wrong we can show custom error by adding **errorElement in createBrowserRouter**<br>

   ---> react-router-dom gives us a special hook { useRouterError }<br>
   ---> Above hook is used to show specific error/more precise error.<br>

 + **ChildrenRoute**

   ---> <Outlet/> react-router-dom component to render component according to path as children.<br>
   ---> To route the page in react never use <a> anchor tag, because it refresh the whole page.<br>
   ---> use Link component which is given by react-router-dom.<br>
   ---> <Link to=""> gives smooth experience it does not refresh whole page, using the link component react single page application is created<br>

+ **Types of routing**

    ---> There are 2 types of routeing.<br>
    ---> 1. Client side routing: csr does not makes network call every time only first time.<br>
    ---> 2. Server side routing: ssr makes network call and refresh the page.<br>

+ **useParam**

   ---> useParam() hook is given by react-router-dom  to catch the value of url.<br>
   ---> How to give dynamic value in URL?<br>
```
  path: "/restaurant/:resId"
```
 ---> " : " is used to enter dynamic value.<br>
 ---> We can get this dynamic value using useParam hook.

 sifted to new repo because of some problem: https://github.com/gitminaj/-namaste-react-codes

Most React tutorials typically commence with the installation of a bundler and swiftly transition to React code. However, this particular tutorial takes a distinctive approach by elucidating the entire process from the ground up. It delves into the intricacies of constructing React, leaving me astounded and pleasantly surprised at every turn. Each minute unfolds a new revelation, fostering a continuous learning experience.
