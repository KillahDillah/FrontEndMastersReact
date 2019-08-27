
const Pet =(props)=> {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed)
    ]);
};

const App = () => {
        return React.createElement(
            "div",
            {id: 'check-it'}, // add `id:'check-it'` to parent element
            [
                React.createElement('h1', {}, "Adopt Me!"), // child element
                React.createElement(Pet, {name: "ButtSlut", animal: "cat", breed: "tabby"}),
                React.createElement(Pet, {name: "The Cat", animal: "kitty", breed: "cat"}),
            ]
        );
};

// Render to DOM
ReactDOM.render(React.createElement(App),document.getElementById('root'))
