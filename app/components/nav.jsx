var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = ()=>{
    return(
      <div className ="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li classNameName="menu-text">
              React Timer
            </li>
            <li >
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
          <li>
              <IndexLink to="/" activeClassName="active-link">Countdown</IndexLink>
          </li>
          </ul>
        </div>
        <div className="top-bar-right">
        <ul className="menu" >
            <li className="menu-text"><a href="http://georgeloaiza.com/" target="_blank">Created by George Loaiza</a></li>
        </ul>
        </div>
      </div>
    );

}

module.exports = Nav;
