import React from 'react'

class SpecialErrorBoundary extends React.Component {
    state = {
        isOk: true
    }

    static getDerivedStateFromError(error) {
        return {isOk: false}
    }

    componentDidCatch(error , errorInfo) {
        const errorMessage = error.toString()
        const errorComponentStack = errorInfo.componentStack
        console.log("ErrorMessage", errorMessage)
        console.log("ErrorComponentStack", errorComponentStack)
        // send error Info to Server for store
    }

    render() {
        if(this.state.isOk) return this.props.children
        return <div><h2 style={{color: 'red'}}>Whooops!</h2></div>
    }
}

export default SpecialErrorBoundary