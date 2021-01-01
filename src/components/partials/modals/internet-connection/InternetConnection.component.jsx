import React from 'react';
import Button from '../../button/Button.component';
import './InternetConnection.style.scss';

const InternetConnection = () => {
  const [shouldCloseAlert, setShouldCloseAlert] = React.useState(false);

  return (
    !shouldCloseAlert && (
      <div role="alertdialog" aria-modal="true" className="internet-dialog">
        <img src={`${process.env.PUBLIC_URL}/assets/images/wifi-lost-img.svg`} alt="" />
        <h3>Internet Failure!</h3>
        <p>Sorry we can't continue, you seems to have gone offline.Try reconnecting.</p>
        <Button onClick={() => setShouldCloseAlert(true)}>Close</Button>
      </div>
    )
  );
};

export default InternetConnection;
