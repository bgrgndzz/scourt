import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TextInput
} from 'react-native';

import Page from '../../hoc/Page/Page';
import ListItem from '../../components/Players/ListItem/ListItem';

class Players extends Component {
  state = {
    search: ''
  }
  keyExtractor = (item, index) => String(item.id);
  renderItem = ({item}) => (
    <ListItem 
      item={item}
      user={this.props.user}
      changePage={this.props.changePage}
      search={this.state.search}
    />
  );
  render() {
    return (
      <View style={styles.players}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Oyuncu Ara"
          value={this.state.search}
          onChangeText={(search) => this.setState({search})}
        />
        <FlatList 
          style={styles.list}
          data={
            this.state.search ? 
            this.props.players.filter(
              player => player['İsim'].toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            ) : 
            this.props.players
          }
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  players: {
    backgroundColor: '#e0e0e0'
  },
  list: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    height: Dimensions.get('window').height - 160
  },
  input: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    margin: 20,
    backgroundColor: '#fafafa',
    borderRadius: 25
  }
});

export default Page(Players);
