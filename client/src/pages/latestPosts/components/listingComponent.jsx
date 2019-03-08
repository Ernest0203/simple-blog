import React, { Component } from 'react';
import styles from './styles.module.scss';

import ListItem from '../../../ui/elements/item/ListItem.jsx';

class ListingComponent extends Component {
  componentDidMount() {
    const { fetchData, firstLoad } = this.props;
    if (firstLoad) fetchData();
  }

  render () {
    const { data } = this.props;
       
    const list = data.length > 0
      ? data.map((item, index) => {
          return <ListItem key={index} data={item}/>
        })
      : <li className={styles.empty}><div>Loading...</div></li>

    return (
      <ul className={styles.list}>
        {list}
      </ul>
    )
  }
}

export default ListingComponent;