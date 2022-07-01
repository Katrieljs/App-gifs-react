import React from "react";
import {
  Link,
  Route
} from "wouter";
import './App.css';
import Home from "./paginas/home.js";
import Detail from "./paginas/detail.js"
import SearchResults from "./paginas/searchResults.js"
import {
  UserContextProvider
} from "./context/userContext.js"
import Header from "./componentes/header.js"
import Login from "./paginas/login.js"
import Register from "./paginas/register.js"
import ErrorPage from "./paginas/errorPage.js"
import {
  GifsContextProvider
} from "./context/gifsContext.js"
import ButtonUp from "./componentes/buttonUp.js"

function App() {
  return ( 
  <UserContextProvider >
    <div className = "App" >
    <Header />

    <section className = "App-content">

    <GifsContextProvider>

    <Route component = {Home} path="/" />
    <Route component = {SearchResults} path="/search/:keyword/:rating?/:lang?" />
    <Route component = {Detail} path="/gif/:id" />
    <Route component = {Login} path="/login" />
    <Route component = {Register} path="/register" />
    <Route path = "/404" component={ErrorPage}/> 

    </GifsContextProvider> 
    </section> 
    <ButtonUp />
    </div>
    </UserContextProvider>
  );
}

export default App;