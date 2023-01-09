import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectCity } from "../actions";

class City extends React.Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    return(
      <li className="city" onClick={this.handleClick}>{this.props.city.name}</li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
