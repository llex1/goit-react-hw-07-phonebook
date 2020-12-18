import React, { Component } from "react";
import { connect } from "react-redux";
import action from './Filter.action';

import "./Filter.css";

class Filter extends Component {
  state = {
    value: "",
  };

  handleChange = async (event) => {
    await this.setState((state) => {
      return {
        value: event.target.value,
      };
    })
    this.props.action_FILTER(this.props.state, { name: this.state.value })
  };

  render() {
    return (
      <div className="filter">
        <label htmlFor="filter">Filter</label>
        <input
          id="filter"
          type="text"
          name="filter"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    state:state
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    action_FILTER: (state,name)=>{dispatch(action.filter(state,name))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter);
