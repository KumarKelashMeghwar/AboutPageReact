import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const Nav = () => {
    return (
        <Router> 
        <div className= "nav">
            <Link to='/' className="link">Home</Link>
            <Link to='/' className="link">About Us</Link>
        </div>
        </Router>
    )
    }
export default Nav

