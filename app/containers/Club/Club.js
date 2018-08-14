import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions
} from 'react-native';

import Page from '../../hoc/Page/Page';
import ListItem from '../../components/Players/ListItem/ListItem';

class Club extends Component {
  renderItem = (item) => (
    <ListItem 
      item={item}
      key={item.id}
      user={this.props.user}
      changePage={this.props.changePage}
    />
  );
  render() {
    return (
      <ScrollView style={styles.scrollview}>
        <View style={styles.club}>
          <Text style={styles.name}>{this.props.club.name}</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.playersHeading}>Oyuncular</Text>
          {this.props.club.players ? this.props.club.players.map(this.renderItem) : null}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#e0e0e0',
    height: Dimensions.get('window').height - 75,
    padding: 20
  },
  club: {
    backgroundColor: 'white',
    flex: 1
  },
  name: {
    padding: 20,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '900',
    color: 'rgba(0, 0, 0, 0.7)'
  },
  additionalInfo: {
    padding: 20,
    marginBottom: 20
  },
  additionalItem: {
    fontSize: 18
  },
  additionalHeading: {
    fontWeight: '600'
  },
  playersHeading: {
    padding: 20,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '200'
  },
});

export default Page(Club);