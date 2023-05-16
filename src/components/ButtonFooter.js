import React from 'react';

const ButtonFooter = ({
  label,
  className,
  onClick,
  dataIndex,
  dataId
}) => {
  return (
    <button
      className={'link card-footer-item ' + className}
      aria-label={label}
      tabIndex={0}
      onClick={onClick}
      data-index={dataIndex}
      data-id={dataId}
    >
      <span>{label}</span>
    </button>
  );
};

export default ButtonFooter;
