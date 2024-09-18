/* eslint-disable react/prop-types */
// import React from 'react'

const Input = ({ onChange }) => {
  return (
    <div>
      <input type="text" placeholder="Nhập tên" onChange={onChange} />
    </div>
  );
};

export default Input;

/**
 *
 * App
 * - Component A
 * - Component B
 *
 * const a = () => {}
 * const b = a;
 * const c = b;
 *
 *
 */
