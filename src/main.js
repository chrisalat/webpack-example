//require("./css/style.css");

var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
  add: function() {
    console.log('add 1!');
  },

  render: function() {
    return <div>
      <h1>Counter</h1>
      <button onClick={this.add}>+</button>
    </div>
  }
});

ReactDOM.render(<Counter />, document.querySelector('#content'));