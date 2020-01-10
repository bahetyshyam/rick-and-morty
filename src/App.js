import React from 'react';
import TopBar from './components/TopBar';
import Characters from './components/Characters';
import './styles.css';

class App extends React.Component {

    state = {
        search: ''
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }

    changeInputFieldClass = () => {
        var inputField = document.querySelector('.span-input-field');
        window.onResize = function () {
            if (window.screen.width <= 600) inputField.classList.remove('right')
            else inputField.classList.add('.right');
        };
    }

    render() {

        return (
            <div className="row background">
                <TopBar search={this.state.search} handleChange={this.handleChange} />
                {this.changeInputFieldClass()}
                <Characters search={this.state} />
            </div>

        )

    }
}

export default App;