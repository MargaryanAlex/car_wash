import React from 'react';
import  "./input.css";

const Input= (props) => {
    const { label, value = "", ...restProps } = props;
    return (
      <div className='input-container'>
        <input
          className='input'
          value={value}
          {...restProps}
        />
      </div>
    );
};

export default Input;
