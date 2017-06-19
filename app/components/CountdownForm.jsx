var React = require('react');

var CountdownForm = React.createClass({
    onHandleSetTime(e){
        e.preventDefault();
        var strSecond = this.refs.seconds.value;
        if (strSecond.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountDown(parseInt(strSecond,10));
        }
    },
    render(){
        return (
            <div>
                <form onSubmit={this.onHandleSetTime} ref="form"
                      className="countdownForm">
                    <input type="text"
                           ref="seconds"
                           placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
    }
});

module.exports = CountdownForm;