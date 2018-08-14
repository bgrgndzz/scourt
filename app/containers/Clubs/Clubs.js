import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TextInput
} from 'react-native';

import Page from '../../hoc/Page/Page';
import ListItem from '../../components/Clubs/ListItem/ListItem';

class Clubs extends Component {
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
      <View style={styles.clubs}>
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
            this.props.clubs.filter(
              club => club['İsim'].toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            ) : 
            this.props.clubs
          }
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  clubs: {
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

export default Page(Clubs);
