import React from 'react'
import SpecialErrorBoundary from "./SpecialErrorBoundary";
import BadComponent from "./BadComponent";

class CriticalContainerApp extends React.Component {
    render() {
        return <div style={{width: '75%', textAlign: 'center', margin: 'auto'}}>
            <SpecialErrorBoundary><BadComponent arr={[14, 26]} /></SpecialErrorBoundary>
            <SpecialErrorBoundary><BadComponent arr={null}/></SpecialErrorBoundary>
            <SpecialErrorBoundary><BadComponent arr={[14, 26]} /></SpecialErrorBoundary>
        </div>
    }
}

export default CriticalContainerApp