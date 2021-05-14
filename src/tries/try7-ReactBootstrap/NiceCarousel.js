import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from "react-bootstrap";

class NiceCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items
        }
    }

    render() {
        return <Carousel>
            {
                this.state.items.map((item) => {
                    return <Carousel.Item>
                        <img
                            style={{height: '600px'}}
                            className="d-block w-100"
                            src={item.image}
                        />

                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                })
            }
        </Carousel>
    }
}

export default NiceCarousel