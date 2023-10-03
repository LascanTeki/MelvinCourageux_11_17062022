import React from 'react'
import ReactDOM from "react-dom";
import App from './App';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Footer from './Composants/Footer'

ReactDOM.render(
<BrowserRouter basename="/MelvinCourageux_11_17062022"><App/><Footer/></BrowserRouter>,
document.getElementById("root"))