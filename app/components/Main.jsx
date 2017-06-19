var React = require('react');
var Clock = require('Clock');


var Nav= require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <p>Main.jsx Rendered</p>
            {props.children}

        </div>
    );
}

module.exports = Main;
