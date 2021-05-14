import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MainApp from "./tries/MainApp/MainApp";
import Try2FuncComponent from "./tries/Try2FuncComponent";
import Try3ClassBaseComponent from "./tries/Try3ClassBaseComponent";
import TodosApp from "./tries/try4-Lists/TodosApp";
import reportWebVitals from './reportWebVitals';

//dasture render mokhtase in ast ke yek element ya componente reacti ra be jaye yek element
//ke tarif shode beneshanad. har chand bar ke bekhahim mitavanim an ra hata darune halghe ham seda bezanim
//ta component beruz shavad.
//dar website haye single page application omdatan yek bar estefade shode va componente pedar darune an load mishavad
ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
    <MainApp />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
