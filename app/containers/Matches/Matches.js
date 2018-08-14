import React, { Component } from 'react';
import { 
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';

import Page from '../../hoc/Page/Page';
import ListItem from '../../components/Matches/ListItem/ListItem';

class Matches extends Component {
  keyExtractor = (item, index) => String(item.id);
  renderItem = ({item}) => (
    <ListItem 
      item={item}
      user={this.props.user}
      changePage={this.props.changePage}
      formatDate={this.props.formatDate}
    />
  );
  render() {
    return (
      <FlatList 
        style={styles.list}
        data={this.props.matches}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    height: Dimensions.get('window').height - 75
  }
});

export default Page(Matches);