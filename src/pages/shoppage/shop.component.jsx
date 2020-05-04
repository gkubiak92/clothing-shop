import React, { Component } from "react";

import collections from "../../data/shop-data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
