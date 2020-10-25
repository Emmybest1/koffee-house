import React, { useState, useRef } from "react";

import Input from "../../../input/Input.component";
import "./subscription.style.scss";

const SubscriptionModal = () => {
    const [email, setEmail] = useState("");
    const subscribeModalRef = useRef(null);
    const modalContainerRef = useRef(null);

    //Close modal
    const onClickHandler = () => {
        modalContainerRef.current.style.display = "none";
    };

    //Update state
    const onChangeHandler = (e) => {
        e.stopPropagation();
        setEmail(e.target.value);
    };

    //Submit State
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Submit Click", email);
    };
    return (
        <div className="container modal-container" ref={modalContainerRef}>
            <form
                className="subscribe-modal-container"
                ref={subscribeModalRef}
                onSubmit={onSubmitHandler}
            >
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
                    <Input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default SubscriptionModal;
