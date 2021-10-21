import React from "react";

class TopBar extends React.Component {
  state = {
    isRight: Boolean,
    width: undefined,
    height: undefined,
  };

  updateDimensions = () => {
    // this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.screen.width <= 600) {
      this.setState({ isRight: false });
    } else {
      this.setState({ isRight: true });
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div>
        <nav>
          <div className="row theme-colour">
            <div className="nav-wrapper theme-colour">
              <div className="col m6 s12">
                <span className="title">RICK & MORTY</span>
              </div>
              <div className="col m6 s12">
                <span
                  className={
                    this.state.isRight
                      ? "right span-input-field"
                      : "span-input-field"
                  }
                >
                  <input
                    className="input-field"
                    type="text"
                    placeholder="search"
                    onChange={(e) => this.props.handleChange(e)}
                  />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopBar;
