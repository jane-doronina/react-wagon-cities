import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setCities } from "../actions/index.js"

import City from "./city";

class CityList extends React.Component {
  componentDidMount() {
    this.props.setCities();
  }

  render() {
    return(
      <ul className="cities">
        {this.props.cities.map((city, index) => <City key={city.slug} city={city} />)}
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setCities: setCities},
    dispatch
  );
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
