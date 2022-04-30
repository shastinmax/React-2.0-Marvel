import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import './style/style.scss';


ReactDOM.render(
    <React.StrictMode>
<HashRouter>
    <App/>
</HashRouter>



    </React.StrictMode>,
    document.getElementById('root')
);

