
const App = () => {
        return React.createElement(
    "div",
            {id: 'check-it'}, // add `id:'check-it'` to parent element
            React.createElement('h1', {}, "Adopt Me!") // child element
    );
};

// Render to DOM
ReactDOM.render(React.createElement(App),document.getElementById('root'))
