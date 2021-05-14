import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class NiceCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: props.image,
            title: props.title,
            description: props.description != undefined ? props.description : ""
        }
    }

    render() {
        return <div className="card" style={{height: '95%', marginBottom: '12px', marginTop: '12px'}}>
            <img src={this.state.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{this.state.title}</h5>
                <p className="card-text">{this.state.description}</p>
            </div>
            <div className={'card-footer'}>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    }
}

export default NiceCard