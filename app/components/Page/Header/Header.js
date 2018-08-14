import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.drawerButtonContainer}
          onPress={this.props.toggleDrawer}
        >
          <Image 
            style={styles.drawerButton} 
            source={require('../../../assets/menu-icon.png')}
          />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>SCOURT</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 75,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    shadowColor: 'rgba(0,0,0,0.195)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    elevation: 3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerButton: {
    width: 30,
    height: 30
  },
  drawerButtonContainer: {
    position: 'absolute',
    left: '5%',
    top: '50%',
    width: 30,
    height: 30,
    transform: [
      {translateY: -4}
    ]
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Header;