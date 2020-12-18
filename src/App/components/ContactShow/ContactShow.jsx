import React, { Component } from "react";
import { connect } from "react-redux";
import action from "./ContactShow.action";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./ContactShow.css";

class ContactShow extends Component {
  state = {};

  deleteContact = (event) => {
    const id = event.target.dataset.id;
    this.props.action_DEL(this.props.state, { id: id });
  };

  componentDidUpdate() {
    this.contactList();
  }

  contactList = () => {
    let show = null;
    if (this.props.state.filter.length) {
      show = this.props.state.filter;
    } else {
      show = this.props.state.contacts;
    }
    return show.map((el, indx) => {
      return (
        <CSSTransition
          key={indx}
          timeout={250}
          classNames="contact-show-list-item"
        >
          <li key={el.id} className="contact-show-list-item">
            <p className="contact-show-list-text">
              <span>{el.name}</span>
              <span>{el.number}</span>
            </p>
            <button data-id={el.id} onClick={this.deleteContact}>
              delete
            </button>
          </li>
        </CSSTransition>
      );
    });
  };

  render() {
    return (
      <div className="contact-show">
        {this.props.children}
        <TransitionGroup component="ul" className=".contact-show-list">
          {this.contactList()}
        </TransitionGroup>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    action_DEL: (state, id)=> {dispatch(action.del(state, id))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactShow);
