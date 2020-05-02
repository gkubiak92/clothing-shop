import React, { Component } from "react";

import { sections } from "../../data/sections";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

export default class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: sections,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
