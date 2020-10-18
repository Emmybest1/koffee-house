import React from 'react'
import { Link } from 'react-router-dom'

import './notfound.style.scss'
const NotFound = () => {
    return (
        <div className="container">
            <h1>Page Not Found!!!</h1>
            <Link to="/" className="container-back__home">Back Home</Link>
        </div>
    )
}

export default NotFound
