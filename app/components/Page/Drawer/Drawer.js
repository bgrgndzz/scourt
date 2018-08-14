import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions
} from 'react-native';

class Drawer extends Component {
  state = {
    pages: [
      {
        title: 'Ana Sayfa',
        route: 'Matches'
      },
      {
        title: 'Oyuncular',
        route: 'Players'
      },
      {
        title: 'Turnuvalar',
        route: 'Tournaments'
      },
      {
        title: 'Kulüpler',
        route: 'Clubs'
      },
      {
        title: 'Çıkış Yap',
        route: 'Logout'
      }
    ]
  };
  render() {
    return (
      <View style={[styles.drawerContainer, this.props.drawerOpen ? {elevation: 3} : null]}>
        <Animated.View style={[styles.drawerMenu, this.props.styleDrawer]}>
          {this.state.pages.map((item, index) => (
            <TouchableOpacity
              style={styles.drawerItem}
              key={index}
              onPress={() => this.props.changePage(item.route)}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height - 75,
    top: 75,
    bottom: 0,
    left: 0,
    right: 0
  },
  drawerMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: 'white',
    elevation: 3
  },
  drawerItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)'
  }
});

export default Drawer;