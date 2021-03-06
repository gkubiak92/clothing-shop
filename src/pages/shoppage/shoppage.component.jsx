import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../../pages/collection/collection.container";
import { fetchColllectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchColllectionsStart, match }) => {
  useEffect(() => {
    fetchColllectionsStart();
  }, [fetchColllectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchColllectionsStart: () => dispatch(fetchColllectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
