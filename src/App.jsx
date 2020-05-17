import React, { Component } from "react";
import styled from "styled-components";
import SideMenu from "./components/SideMenu";
import News from "./components/News";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    const Container = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: 100vh;
      @media (min-width: 64rem) {
        flex-direction: row;
      }
    `;

    return (
      <Container>
        <SideMenu />
        <Switch>
          <Route
            path='/:category?/:categoryID?'
            render={(props) => <News {...props} />}
          />
        </Switch>
      </Container>
    );
  }
}

export default App;
