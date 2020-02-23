import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./Components/navbar/NavBar";
import Search from "./Components/search/Search";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>This is just above the Navbar</h1>
          <NavBar />
          <Search />
          <h1>This is just below the Navbar</h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
