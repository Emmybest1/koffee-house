import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './loader.style.scss';

const Loader = ({isLoading}) => {
  const [shouldDisplayLoader, setShouldDisplayLoader] = useState(false);
  const [fetchStarted, setFetchStarted] = useState(false);
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  /***
   *@useEffect : this enables the display of the loader after few seconds because some api are extremely fast
   */
  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      if (isLoading) {
        setShouldDisplayLoader(true);
        setFetchStarted(true);
      } else if (!isLoading && shouldDisplayLoader) {
        setShouldDisplayLoader(false);
      }
    }, 2000);
    return () => {
      clearTimeout(timeout);
      setShouldDisplayLoader(false);
    };
  }, [isLoading]);

  /***
   * @useEffect : this checks if loading is done
   */
  useEffect(() => {
    if (!isLoading && !shouldDisplayLoader && fetchStarted) {
      setIsDoneLoading(true);
      fetchStarted(false);
    }

    return;
  }, [isLoading, shouldDisplayLoader, fetchStarted]);

  /****
   * @useEffect : after some secods, reset is done loading to false
   */
  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      if (isDoneLoading) {
        setIsDoneLoading(false);
      }
    }, 2000);
    clearTimeout(timeout);

    return () => {};
  }, [isDoneLoading]);

  return (
    <div className="loader-container">
      {isDoneLoading && <p>Finished loading</p>}
      {shouldDisplayLoader && (
        <div className="loader-container-content__wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/images/loader.gif`} alt="" />
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Loader;
