import React from 'react'
import './MainApp.css'
import Try2FuncComponent from "../Try2FuncComponent";
import Try3ClassBaseComponent from "../Try3ClassBaseComponent";
import TodosApp from "../try4-Lists/TodosApp";
import GamesApp from "../try5-Styles/GamesApp";
import GamesBootstrapApp from "../try6-Bootstrap/GamesBootstrapApp";
import GamesSliderApp from "../try7-ReactBootstrap/GamesSliderApp";
import CriticalContainerApp from "../try8-ErrorBoundary/CriticalContainerApp";

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
                    title: "Lists (Try 4 - Todos App)",
                    component: <TodosApp />
                },
                {
                    title: "Styles (Try 5 - Games App)",
                    component: <GamesApp />
                },
                {
                    title: "Bootstrap (Try 6 - Games Bootstrap App)",
                    component: <GamesBootstrapApp />
                },
                {
                    title: "React Bootstrap - Dynamic Components (Try 7 - Games Slider App)",
                    component: <GamesSliderApp />
                },
                {
                    title: "Error Boundaries (Try 8 - Critical Container)",
                    component: <CriticalContainerApp />
                },
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