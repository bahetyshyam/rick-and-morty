import React from 'react';
import TopBar from './components/TopBar';
import Characters from './components/Characters';
import './styles.css';

class App extends React.Component {

    state = {
        search: ''
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }

    render() {

        return (
            <div className="row background">
                <TopBar search={this.state.search} handleChange={this.handleChange}/>
                <Characters search={this.state}/>
            </div>

        )

    }
}

export default App;