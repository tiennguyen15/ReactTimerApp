var React = require('react');
var Clock = require('Clock');
const Countdown = React.createClass({
    render(){
        return (
            <div>
                <Clock totalSeconds={129}></Clock>
            </div>
        )
    }
})

module.exports = Countdown;