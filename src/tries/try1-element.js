import React from 'react';
//deghat konid code haye sakhtar html nistand balke be zabane jsx hastan ke beine html va js gharar migirad.


let helloElement = <h1>Hello</h1>

let salamElement = React.createElement('h1', { className: "ex" }, "Salam Barobach!")

let gamesElement = React.createElement('div', {}, [
    React.createElement('h2', {}, "God of War"),
    React.createElement('h2', {}, "The last of us"),
])

export { helloElement, salamElement, gamesElement }