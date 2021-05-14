import React from 'react'
import NiceCarousel from "./NiceCarousel";
import {games} from "../datas/data";

//npm i --save react-bootstrap
//component haye bootstrap inja be component haye react tabdil shode va estefade az anha
//asan tar shode ast

/*
be public/index.html ezafe mikonim
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
    crossorigin="anonymous"
/>
*/

class GamesSliderApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: games.map((item) => {
                return {
                    title: item.title,
                    image: item.image,
                    description: item.description
                }
            })
        }
    }

    render() {
        const items = this.state.items
        return (
            <div style={{width: '60%', margin: 'auto'}}>
                <NiceCarousel items={items}/>
            </div>
        );
    }
}

export default GamesSliderApp