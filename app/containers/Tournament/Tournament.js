import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions
} from 'react-native';

import Page from '../../hoc/Page/Page';
import ListItem from '../../components/Matches/ListItem/ListItem';

class Tournament extends Component {
  renderItem = (item) => (
    <ListItem 
      item={item}
      key={item.id}
      user={this.props.user}
      changePage={this.props.changePage}
      formatDate={this.props.formatDate}
    />
  );
  render() {
    return (
      <ScrollView style={styles.scrollview}>
        <View style={styles.tournament}>
          <Text style={styles.name}>{this.props.tournament.name}</Text>
          <Text style={styles.club}>{this.props.tournament.club}</Text>
          <View style={styles.additionalInfo}>
            <Text style={[styles.additionalItem, styles.start]}>
              <Text style={styles.additionalHeading}>Başlangıç Tarihi:</Text> {this.props.formatDate(this.props.tournament.start)}
            </Text>
            <Text style={[styles.additionalItem, styles.end]}>
              <Text style={styles.additionalHeading}>Bitiş Tarihi:</Text> {this.props.formatDate(this.props.tournament.end)}
            </Text>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.matchesHeading}>Maçlar</Text>
          {this.props.tournament.matches ? this.props.tournament.matches.map(this.renderItem) : null}
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
  tournament: {
    backgroundColor: 'white',
    flex: 1
  },
  name: {
    padding: 20,
    paddingBottom: 0,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '900',
    color: 'rgba(0, 0, 0, 0.7)'
  },
  club: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    fontSize: 20
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
  matchesHeading: {
    padding: 20,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '200'
  },
});

export default Page(Tournament);