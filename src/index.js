import React from 'react'
import ReactDOM from "react-dom";
import App from './App';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Footer from './Composants/Footer'

ReactDOM.render(
<BrowserRouter><App/><Footer/></BrowserRouter>,
document.getElementById("root"))