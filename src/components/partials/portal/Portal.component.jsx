import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {mockComponent} from 'react-dom/test-utils';
const modalRoot = document.getElementById('modal-root');

export const Portal = ({children, shouldRemovePortal}) => {
  /***
   * @modalContainer the modal div container
   */
  const modalContainer = document.createElement('div');
  modalContainer.setAttribute('class', 'modal-container');

  /***
   *  @useEffect ones the componentFirstMount, append the portlet into the @modalRoot DOMElementNode
   */
  React.useEffect(() => {
    modalRoot.appendChild(modalContainer);

    //before unmounting, remove it from the DOM to avoid childNode conflict
    return () => {
      modalRoot.removeChild(modalContainer);
    };
  }, [children]);

  /***
   * @shouldRemovePortal allow user to be able to detach the portlet by clicking close button
   */
  useEffect(() => {
    if (shouldRemovePortal) {
      modalRoot.removeChild(modalContainer);
    }
  }, [shouldRemovePortal]);

  return ReactDOM.createPortal(children, modalContainer);
};

Portal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};
