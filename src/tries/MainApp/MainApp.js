import React from 'react'
import './MainApp.css'
import Try2FuncComponent from "../Try2FuncComponent";
import Try3ClassBaseComponent from "../Try3ClassBaseComponent";
import Try4App from "../try4Lists/Try4App";

class MainApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apps: [
                {
                    title: "Functional Components (Try 2)",
                    component: <Try2FuncComponent />
                },
                {
                    title: "Class Based Components (Try 3)",
                    component: <Try3ClassBaseComponent />
                },
                {
                    title: "Lists (Try 4)",
                    component: <Try4App />
                }
            ],
            selectedApp: null,
        }

        this.state.defaultApp = this.state.apps[this.state.apps.length - 1]
    }

    backToMain = () => {
        this.setState({selectedApp: null, defaultApp: null})
    }

    chooseApp = (e, app) => {
        this.setState({selectedApp: app})
    }

    render() {
        if(this.state.selectedApp != null || this.state.defaultApp != null) {
            return <div>
                <span onClick={this.backToMain} className="back previous round">&#8249;</span>
                {this.state.selectedApp != null ? this.state.selectedApp.component : this.state.defaultApp.component}
            </div>
        }

        return <div className="numberlist" style={{margin: "auto"}}>
            <ol>
                {
                    this.state.apps.map((item, index) => {
                        return <li key={index} onClick={(event) => this.chooseApp(event, item)}>
                            <span>{item.title}</span>
                        </li>
                    })
                }
            </ol>
        </div>
    }
}

export default MainApp;