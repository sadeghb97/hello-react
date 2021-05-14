import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import NiceCard from "./NiceCard";
import {games} from "../datas/data";

//npm i --save bootstrap
//bootstrap baraye puya sazi az jquery estefade mikonad. ma dar react nemitavanim az jquery estefdae konim
//react az virtual dom estfede mikonad. react va jquery har do rabet hastand va nemitavan az har do ba ham
//estefade kard. natijatan vaghti az component haye bootstrap estefade mikonim khabari az ejraye
//code haye jquerie an nist

class GamesBootstrapApp extends React.Component {
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
            <div className="container">
                <div className="row">
                    {items.map((item) => {
                        return <div className="col-md-3">
                            <NiceCard image={item.image} title={item.title} description={item.description}/>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default GamesBootstrapApp