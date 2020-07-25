import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class CountryCard extends Component {
  render() {
    //const { cca2: code2 = "", region = null, name = {} } =
    // this.props.country || {};
    const { title, details } = this.props.country || {};
    console.log(this.props.country);
    return (
      <Fragment>
        <div className="col-sm-6 col-md-4 country-card">
          <div className="country-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
            <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
              <table>
                <th>Title</th>
                <td>{title}</td>
                <td>{details}</td>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    cca2: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CountryCard;
