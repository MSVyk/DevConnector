import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  (alerts.length > 3 ? alerts.slice(0.2) : alerts).map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      { alert.msg }
    </div>
  ));

Alert.PropsTypes = {
  alerts: PropsTypes.array.isRequired
}

const mapStateToProps = state => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert);