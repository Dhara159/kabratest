import React from 'react';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    return <CollectionsOverviewContainer />
  }
}

export default ShopPage;