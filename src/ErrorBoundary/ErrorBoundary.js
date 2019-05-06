import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: '',
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }
    render() {
        return(
            <h1>Something went wrong</h1>
        )
    }
}