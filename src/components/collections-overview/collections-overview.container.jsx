import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsFetching, selectCollectionsForPreview } from './../../redux/shop/shop.selectors';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionsFetching
});

const CollectionsOverviewContainer = connect(mapStateToProps)(CollectionsOverview);

export default CollectionsOverviewContainer;