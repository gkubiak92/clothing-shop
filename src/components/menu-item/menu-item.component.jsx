import React from "react";

import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  size,
  linkUrl,
  match,
  history,
}) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div
        className="content"
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
