import React from "react";

import "./menu-item.style.scss";
import * as S from "./menu-item.styles";
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
      <S.BackgroundImage imageUrl={imageUrl}></S.BackgroundImage>
      <S.Content onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Content>
    </div>
  );
};

export default withRouter(MenuItem);
