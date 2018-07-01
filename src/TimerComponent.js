import React, {Component} from 'react';

class RPSComponent extends Component {
    constructor(props) {
        super(props);

        let time = new Date();
        time.setMinutes(0);
        time.setSeconds(0);
        this.state = {
            time: time,
            paused: false
        };

        this.ONE_SEC_IN_MS = 1000;
        this.TIME_FORMAT = {second: '2-digit', minute: '2-digit'};

        this.pauseClick = this.pauseClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), this.ONE_SEC_IN_MS);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    pauseClick() {
        this.setState((prevState) => ({
            paused: !prevState.paused
        }));
    }

    resetClick() {
        let time = new Date();
        time.setMinutes(0);
        time.setSeconds(0);
        this.setState({
            time: time,
            paused: true
        });
    }

    tick() {
        if (!this.state.paused) {
            this.setState({
                time: new Date(this.state.time.getTime() + this.ONE_SEC_IN_MS)
            });
        }
    }

    render() {
        return (
            <div>
                <div className="RPSComponent-container">
                    <h2>{this.state.time.toLocaleTimeString([], this.TIME_FORMAT)}</h2>
                </div>

                <button onClick={this.pauseClick}>
                    {this.state.paused ? 'START' : 'PAUSE'}
                </button>

                <button onClick={this.resetClick}>
                    RESET
                </button>
            </div>
        );
    }
}

export default RPSComponent;