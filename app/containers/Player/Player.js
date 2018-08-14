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

class Player extends Component {
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
        <View style={styles.player}>
          <Text style={styles.name}>{this.props.player.name}</Text>
          <Text style={styles.role}>Tenisçi</Text>
          <View style={styles.additionalInfo}>
            <Text style={[styles.additionalItem, styles.school]}>
              <Text style={styles.additionalHeading}>Kulüp:</Text> {this.props.player.club}
            </Text>
            <Text style={[styles.additionalItem, styles.school]}>
              <Text style={styles.additionalHeading}>Okul:</Text> {this.props.player.school}
            </Text>
            <Text style={[styles.additionalItem, styles.birth]}>
              <Text style={styles.additionalHeading}>Doğum Tarihi:</Text> {this.props.formatDate(this.props.player.birth)}
            </Text>
            <Text style={[styles.additionalItem, styles.gender]}>
              <Text style={styles.additionalHeading}>Cinsiyet:</Text> {this.props.player.gender}
            </Text>
            <Text style={[styles.additionalItem, styles.score]}>
              <Text style={styles.additionalHeading}>Puan:</Text> {this.props.player.score}
            </Text>
            <Text style={[styles.additionalItem, styles.position]}>
              <Text style={styles.additionalHeading}>Klasman Sıralaması:</Text> {this.props.player.position}
            </Text>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.matchesHeading}>Maçlar</Text>
          {this.props.player.matches ? this.props.player.matches.map(this.renderItem) : null}
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
  player: {
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
  role: {
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

export default Page(Player);