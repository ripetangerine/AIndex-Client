import React from 'react';

import PropTypes from 'prop-types';

const StarsButtonIcon = ({ filled }) => {
  const fillColor = filled ? '#7C3AED' : '#FFFFFF';

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 36 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2346 1.45584C15.0873 -0.0746598 17.3047 -0.0746596 18.1574 1.45585L22.6317 9.67571L31.8292 11.1452C33.5896 11.4294 34.2894 13.6105 33.0017 14.9158L26.2865 21.7494L27.8758 30.8654C28.1804 32.6319 26.3234 33.9682 24.7588 33.0732L17.196 28.6527L9.63318 33.0732C8.06861 33.9682 6.21164 32.6319 6.51625 30.8654L8.10559 21.7494L1.39042 14.9158C0.102716 13.6105 0.802548 11.4294 2.56291 11.1452L11.7604 9.67571L16.2346 1.45584H14.2346Z"
        fill={fillColor}
      />
    </svg>
  );
};

StarsButtonIcon.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default StarsButtonIcon;
