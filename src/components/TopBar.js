import React from 'react';
import AppBar from '@material-ui/core/AppBar';

class TopBar extends React.Component {
    render() {

        return (
            <div>
                <nav>
                    <div className="nav-wrapper theme-colour">
                        <span className="title">RICK & MORTY</span>
                        <span className="right span-input-field"><input className="input-field" type="text" placeholder="search" onChange={(e) => this.props.handleChange(e)} /></span>
                    </div>
                </nav>
            </div>
        )

    }
}

export default TopBar;