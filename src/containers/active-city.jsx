import React from "react";
import { connect } from "react-redux";

class ActiveCity extends React.Component {
  render() {
    if (!this.props.activeCity) {
      return(
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      )
    }
    if (this.props.activeCity) {
      const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;

      return(
        <div className="active-city">
          <div className="city-details">
            <h3>{this.props.activeCity.name}</h3>
            <p>{this.props.activeCity.address}</p>
          </div>
          <img src={url} alt={this.props.activeCity.name} />
        </div>
      );
    }
  }

}

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
