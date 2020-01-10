import React from 'react';
import AppBar from '@material-ui/core/AppBar';

class TopBar extends React.Component {
    render() {

        return (
            <div>
                <nav>
                    <div className="nav-wrapper theme-colour">
                        <span className="title">RICK & MORTY</span>
                        
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><input type="text" placeholder="search" onChange={(e) => this.props.handleChange(e)} /></li>
                        </ul>
                    </div>
                    {/*  */}
                </nav>
            </div>
        )

    }
}

export default TopBar;