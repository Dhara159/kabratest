import { connect } from 'react-redux';

import ShopPage from './shop.component';
import { fetchCollectionsStartAsync } from './../../redux/shop/shop.actions';

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

const ShopPageContainer = connect(null, mapDispatchToProps)(ShopPage);

export default ShopPageContainer;
