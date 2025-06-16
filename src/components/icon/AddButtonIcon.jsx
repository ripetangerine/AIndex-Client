import React from 'react';
import PropTypes from 'prop-types';

const AddButtonIcon = ({ filled }) => {
  const fillColor = filled ? '#7C3AED' : '#BDBDBD';

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z" fill={fillColor} />
      <path d="M17.4999 9.72217V25.2777M25.2777 17.4999H9.72217" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

AddButtonIcon.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default AddButtonIcon;