
const Pet =()=> {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'FatBitch'),
        React.createElement('h2', {}, 'Skitty'),
        React.createElement('h2', {}, 'Wild Thing')
    ]);
};

const App = () => {
        return React.createElement(
            "div",
            {id: 'check-it'}, // add `id:'check-it'` to parent element
            [
                React.createElement('h1', {}, "Adopt Me!"), // child element
                React.createElement(Pet),
                React.createElement(Pet),
            ]
        );
};

// Render to DOM
ReactDOM.render(React.createElement(App),document.getElementById('root'))
