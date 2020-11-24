import React, {Component} from "react";
import {Switch, Route}from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar"
import ProdutList from "./components/ProductList"
import Details from "./components/Details"
import Cart from "./components/Cart"
import Default from "./components/Default"


function App() { 
  return ( 
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path = "/details" component = {Details}/>
        <Route path = "/cart" component = {Cart}/>
        <Route  exact path = "/" component = {ProdutList}/>
        <Route component = {Default}/>
        
      </Switch>
    </React.Fragment>
  )
}

export default App;
