import React from 'react';
import PropType from 'prop-types';

import './input.style.scss';

const Input = ({type, id, textarea, labelText, ...otherProps}) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      {!type ? (
        <textarea autoFocus={true}>{textarea}</textarea>
      ) : (
        <input type={type} id={id} {...otherProps} autoFocus={true} aria-label={labelText} />
      )}
    </>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propType = {
  type: PropType.string,
  id: PropType.oneOfType([PropType.string.isRequired, PropType.number.isRequired]),
  labelText: PropType.string,
  otherProps: PropType.shape({
    onChange: PropType.func.isRequired,
    onSubmit: PropType.func,
  }),
};

export default Input;
