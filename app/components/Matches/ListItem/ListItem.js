import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.players}>
          <View style={[styles.player, styles.player1]}>
            <TouchableOpacity onPress={() => this.props.changePage('Player', this.props.item.player1.id)}>
              <Text style={[styles.playerText, this.props.item.winner !== 'none' && this.props.item.player1["İsim"] === this.props.item.winner["İsim"] ? styles.winner : null]}>
                {this.props.item.player1["İsim"]}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.player, styles.player2]}>
            <TouchableOpacity onPress={() => this.props.changePage('Player', this.props.item.player2.id)}>
              <Text style={[styles.playerText, this.props.item.winner !== 'none' && this.props.item.player2["İsim"] === this.props.item.winner["İsim"] ? styles.winner : null]}>
                {this.props.item.player2["İsim"]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.result}>
          {this.props.item.result}
        </Text>
        <TouchableOpacity 
          style={styles.additional}
          onPress={() => this.props.changePage('Tournament', this.props.item.tournament.id)}
        >
          <Text style={styles.tournament}>
            {this.props.item.tournament["İsim"]}
          </Text>
        </TouchableOpacity>
        <View style={styles.additional}>
          <Text style={styles.date}>
            {this.props.formatDate(this.props.item.date)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    marginBottom: 20,
    elevation: 1
  },
  result: {
    padding: 30,
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  },
  title: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.75)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    padding: 20
  },
  additional: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    padding: 20
  },
  tournament: {
    textAlign: 'center'
  },
  date: {
    textAlign: 'center'
  },
  additionalHeading: {
    fontWeight: '900'
  },
  players: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row'
  },
  player: {
    flex: 1,
    padding: 20
  },
  playerText: {
    textAlign: 'center'
  },
  winner: {
    backgroundColor: '#bafbbd',
    fontWeight: '600'
  },
  player1: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(0, 0, 0, 0.1)'
  }
});

export default ListItem;