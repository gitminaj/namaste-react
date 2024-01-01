const heading = React.createElement("div",{},
React.createElement("h1",{},"hello world 1"),
React.createElement("h2",{},"hello world 3")
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)