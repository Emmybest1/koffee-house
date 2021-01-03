import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import './loader.style.scss';

const Loader = ({isLoading}) => {
  /****
   *
   * @shouldStartLoading {shouldStartLoading}: this state is in charge of telling when the loader starts
   */
  const [shouldStartLoading, setShouldStartLoading] = useState(false);
  /****
   *
   * @useState {isDoneLoading}: this state is in charge of telling when the loader ends
   */
  const [isDoneLoading, setIsDoneLoading] = useState(() => {
    if (!isLoading) {
      return true;
    }
    return false;
  });

  /****
   *
   * @useEffect : this useEffect trys to give the api or resource server the benefit of doubt(spontaneosity)
   * for 1 seconds and if the resources is not ready, then the loader shows up
   */
  useEffect(() => {
    const timeOut = setTimeout(() => {
      isLoading ? setShouldStartLoading(true) : setShouldStartLoading(false);
      !isLoading && setIsDoneLoading(true);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [isLoading]);

  /****
   *
   * @useEffect : this useEffect disables the isDoneLoading notifier after a period of time
   */
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (isDoneLoading) {
        setIsDoneLoading(false);
      }
      return;
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isDoneLoading]);

  return (
    <div className="loader-container">
      {isDoneLoading && <p>Finished loading</p>}
      {shouldStartLoading ? (
        <div className="loader-container-content__wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/images/loader.gif`} alt="" />
          <p>Loading...</p>
        </div>
      ) : null}
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Loader;
