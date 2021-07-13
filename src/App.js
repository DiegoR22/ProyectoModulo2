import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Error from './componente/error/error';
import Home from "./componente/home&login/home.login";
import PlayListBlank from './componente/playlist/playlistblank';
import { ProtectedRoute } from "./componente/auth/protec.route";
import PlayList from './componente/playlist/playlist';
import Lista from './componente/pruebas/listaspruebas';



function App() {
  return (
    <Router>
      <Switch>
    <div>
      <Route exact path="/" component = {Home}/>
      <Route path="/error" component = {Error}/>
      <ProtectedRoute path="/playlistblank" component = {PlayListBlank}/> 
      <ProtectedRoute path="/playlist" component = {PlayList}/>
      <Route path="/lista" component = {Lista}/> 
    </div>
    </Switch>
    </Router>
  )
}

export default App
