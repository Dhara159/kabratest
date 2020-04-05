import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutPage from './checkout.component';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const CheckoutPageContainer = connect(mapStateToProps)(CheckoutPage);

export default CheckoutPageContainer;
