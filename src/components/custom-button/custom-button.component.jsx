import React from "react";

import "./custom-button.styles.scss";

export default function CustomButton({ children, classes, ...otherProps }) {
  return (
    <button className={`${classes} custom-button`} {...otherProps}>
      {children}
    </button>
  );
}
