import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./error-boundary.style.scss";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        console.group("Ooops Error Rendering Component");
        console.log(error);
        console.groupEnd();
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <div className="error-boundary-container">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/error-404.png`} alt="" />
                        <h1>Oooops...</h1>
                        <p>Something went wrong!</p>
                        <Link to="/" className="link">
                            <i className="fa fa-chevron-left"></i> Go Home
                        </Link>
                    </div>
                </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
