import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../button/Button.component';
import './api-error-alert.style.scss';

const ApiErrorAlert = ({errorHeading, apiErrorMessage}) => {
  return (
    apiErrorMessage && (
      <div role="alertdialog" aria-modal="true" aria-label="An Api Error Dialog" className="api-error-alert">
        <img src={`${process.env.PUBLIC_URL}/assets/images/api-error-img.svg`} alt="" />
        <h3>{errorHeading}</h3>
        <p>{apiErrorMessage}</p>

        <Button onClick={() => window.location.reload()}>Reload App</Button>
      </div>
    )
  );
};

ApiErrorAlert.propTypes = {
  errorHeading: PropTypes.string,
  apiErrorMessage: PropTypes.string,
};

ApiErrorAlert.defaultProps = {
  errorHeading: 'API Error!',
};
export default ApiErrorAlert;
