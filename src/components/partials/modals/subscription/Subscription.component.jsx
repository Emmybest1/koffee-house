import React, {useState, useRef} from 'react';

import Input from '../../input/Input.component';
import './subscription.style.scss';

const Subscription = () => {
  const [shouldShowModal, setShouldShowModal] = useState(true);
  const [email, setEmail] = useState('');
  const subscribeModalRef = useRef(null);
  const modalContainerRef = useRef(null);

  const onClickHandler = () => {
    setShouldShowModal(false);
  };

  const onChangeHandler = (e) => {
    e.stopPropagation();
    setEmail(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Submit Click', email);
  };
  return (
    <>
      {shouldShowModal && (
        <div className="container modal-container" ref={modalContainerRef} aria-modal="true">
          <form className="subscribe-modal-container" ref={subscribeModalRef} onSubmit={onSubmitHandler}>
            <span className="close-modal" onClick={onClickHandler}>
              <i className="fa fa-times"></i>
            </span>

            <div className="input-wrapper">
              <h2>Get 20% Off</h2>
              <p>On your first purchase</p>
              <Input
                type="email"
                name="email"
                labelText="Enter your Email"
                placeholder="ENTER EMAIL"
                value={email}
                onChange={onChangeHandler}
              />
              <Input type="submit" value="Submit" aria-label="Submit" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Subscription;
