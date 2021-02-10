import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style1.css';
import App from './App';
import { BrowserRouter as Router,
    Switch,
    Route,useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RecoilRoot } from 'recoil';

ReactDOM.render(<RecoilRoot><Router><App /></Router></RecoilRoot>, document.getElementById('root'));


if (module.hot) {
    module.hot.accept()
}
