import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 6
  country = "in"
  render() {
    return (<div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route exact path="/"  element={<News key="general" pageSize={this.pageSize} country={this.country} category={"general"}/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country={this.country} category={"business"}/>} />
          <Route exact path="/entertainment" key="entertainment" element={<News pageSize={this.pageSize} country={this.country} category={"entertainment"}/>} />
          <Route exact path="/general" element={<News key="general"  pageSize={this.pageSize} country={this.country} category={"general"}/>} />
          <Route exact path="/health" element={<News key="health"  pageSize={this.pageSize} country={this.country} category={"health"}/>} />
          <Route exact path="/science" element={<News key="science"  pageSize={this.pageSize} country={this.country} category={"science"}/>} />
          <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country={this.country} category={"sports"}/>} />
          <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country={this.country} category={"technology"}/>} />
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}