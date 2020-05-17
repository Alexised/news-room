import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  color: #fff;
  display: inline-block;
  position: relative;
  height: 35px;
  width: 225px;
  box-sizing: border-box;
  margin: 7px 2px 7px 7px;
  padding: 7px 9px 0px 9px;
  border: 1px solid #3090E8;

  transition: all 200ms ease;
  cursor: text;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  box-sizing: border-box;
  font-size: 15px;
  color: inherit;
  background: transparent;
  outline-width: 0px;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: "",
    };
  }

  setSearchParams = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSearch = (event) => {
    if (event.charCode === 13 && this.state.searchParams) {
      this.props.history.push({
        pathname: "/search",
        searchParams: this.state.searchParams,
      });
    }
  };
  render() {
    return (
      <Container>
        <Label>
          <Input
            type='text'
            name='searchParams'
            id='searchParams'
            placeholder='Buscar'
            onKeyUp={this.setSearchParams}
            onKeyPress={(e) => this.handleSearch(e)}
          />
          
        </Label>
      </Container>
    );
  }
}
export default withRouter(Search);
