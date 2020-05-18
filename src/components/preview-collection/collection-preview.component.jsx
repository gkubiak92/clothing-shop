import React from "react";
import { withRouter } from "react-router-dom";

import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, history, match }) => (
  <div
    className="collection-preview"
    onClick={() => history.push(`${match.url}/${title.toLowerCase}`)}
  >
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
