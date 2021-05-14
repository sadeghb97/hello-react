import React from 'react'

function Try2FuncComponent() {
    console.log("Hello !!!")

    const [state, setState] = React.useState({
        count: 0
    })

    //ba har bar set state yek bare dg functione aslie component ejra mishe
    //natijatan in component mese ye timer amal mikone
    setTimeout(() => {

        //dar setState inja khabari az merge nist state ghabli kamel az bein miravad
        //albate dar func component ha mitavan state haye mokhtalef ba nam jaye mokhtalef dasht
        setState({
            count: state.count + 1
        })
    }, 2000)

    //age inja ham set state ro seda bezanim moshkel pish miad
    const hugeIncrement = () => {
        state.count = state.count + 60
    }

    return (
        <div style={{margin: '30px', color: 'Blue'}}>
            <h1>{state.count}</h1>
            <button onClick={hugeIncrement}>Huge Increase</button>
        </div>
    );
}

export default Try2FuncComponent;