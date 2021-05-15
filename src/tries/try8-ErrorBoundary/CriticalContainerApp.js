import React from 'react'
import SpecialErrorBoundary from "./SpecialErrorBoundary";
import BadComponent from "./BadComponent";

class CriticalContainerApp extends React.Component {
    render() {
        return <div style={{width: '75%', textAlign: 'center', margin: 'auto'}}>
            <h2 style={{fontWeight: 'bold'}}>Use React Developer Tools Extension For Debugging</h2>
            <h2>Components and Profiler In Inspect</h2>
            <hr />
            <div>
                <h2>Debug kardan ruye firefox</h2>
                debug kardan ra az tarighe firefox>inspect>debugger>sources ham mitavanid estefade konid.<br />
                aval yek file proje ra entekhab konid. bad yek khate an ra mark konid.<br />
                sepas safhe ra reload konid. proje ruye an khat pause mishavad.<br />
                sepas mitavan etelaat ra hamanja moshahede kard va stepover kard va ...
            </div>
            <hr />
            <SpecialErrorBoundary><BadComponent arr={[14, 26]} /></SpecialErrorBoundary>
            <SpecialErrorBoundary><BadComponent arr={null}/></SpecialErrorBoundary>
            <SpecialErrorBoundary><BadComponent arr={[14, 26]} /></SpecialErrorBoundary>
        </div>
    }
}

export default CriticalContainerApp